#!/usr/bin/env python3
"""Minimal, dependency-free lead API for the EazyKredit website.

The service validates submissions, optionally verifies Cloudflare Turnstile,
stores leads in SQLite, and sends notifications through SMTP, Twilio WhatsApp,
and/or an automation webhook. It intentionally does not accept document uploads.
"""

from __future__ import annotations

import base64
import hashlib
import html
import json
import logging
import os
import re
import secrets
import smtplib
import sqlite3
import ssl
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import defaultdict, deque
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from email.message import EmailMessage
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

LOG = logging.getLogger("eazykredit-api")
logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO").upper(),
    format="%(asctime)s %(levelname)s %(message)s",
)

MAX_BODY_BYTES = int(os.getenv("MAX_BODY_BYTES", "32768"))
RATE_LIMIT_COUNT = int(os.getenv("RATE_LIMIT_COUNT", "5"))
RATE_LIMIT_WINDOW_SECONDS = int(os.getenv("RATE_LIMIT_WINDOW_SECONDS", "600"))
DATA_DIR = Path(os.getenv("DATA_DIR", "/data"))
DB_PATH = DATA_DIR / "leads.db"
STORE_LEADS = os.getenv("STORE_LEADS", "true").lower() == "true"
LEAD_RETENTION_DAYS = int(os.getenv("LEAD_RETENTION_DAYS", "30"))
PUBLIC_PHONE = os.getenv("PUBLIC_PHONE", "+919885011157")
PUBLIC_WHATSAPP = os.getenv("PUBLIC_WHATSAPP", PUBLIC_PHONE)
TURNSTILE_SITE_KEY = os.getenv("TURNSTILE_SITE_KEY", "").strip()
TURNSTILE_SECRET_KEY = os.getenv("TURNSTILE_SECRET_KEY", "").strip()
TURNSTILE_ENABLED = bool(TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY)
ALLOWED_HOSTS = {
    host.strip().lower()
    for host in os.getenv(
        "ALLOWED_HOSTS",
        "eazykredit.franky.co.in,www.eazykredit.in,eazykredit.in,localhost,127.0.0.1",
    ).split(",")
    if host.strip()
}

RATE_BUCKETS: dict[str, deque[float]] = defaultdict(deque)
RATE_LOCK = threading.Lock()

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
PHONE_RE = re.compile(r"^[6-9]\d{9}$")
NAME_RE = re.compile(r"^[^\d<>]{2,100}$", re.UNICODE)


@dataclass(frozen=True)
class DeliveryResult:
    stored: bool = False
    email: bool = False
    whatsapp: bool = False
    webhook: bool = False
    applicant_email: bool = False

    @property
    def accepted(self) -> bool:
        return self.stored or self.email or self.whatsapp or self.webhook

    def public_dict(self) -> dict[str, bool]:
        return {
            "stored": self.stored,
            "email": self.email,
            "whatsapp": self.whatsapp,
            "automation": self.webhook,
        }


def env_bool(name: str, default: bool = False) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def clean_text(value: Any, *, max_len: int, required: bool = False) -> str:
    if value is None:
        value = ""
    if not isinstance(value, str):
        raise ValueError("Invalid text value")
    value = " ".join(value.strip().split())
    if required and not value:
        raise ValueError("A required field is missing")
    if len(value) > max_len:
        raise ValueError("A field is too long")
    return value


def clean_multiline(value: Any, *, max_len: int) -> str:
    if value is None:
        return ""
    if not isinstance(value, str):
        raise ValueError("Invalid message")
    value = value.strip()
    if len(value) > max_len:
        raise ValueError("Message is too long")
    return value


def normalise_mobile(value: Any) -> str:
    raw = clean_text(value, max_len=20, required=True)
    digits = re.sub(r"\D", "", raw)
    if digits.startswith("91") and len(digits) == 12:
        digits = digits[2:]
    if not PHONE_RE.fullmatch(digits):
        raise ValueError("Enter a valid 10-digit Indian mobile number")
    return digits


def clean_number(value: Any, *, minimum: int, maximum: int, required: bool) -> int | None:
    if value in (None, ""):
        if required:
            raise ValueError("A required amount is missing")
        return None
    if isinstance(value, bool):
        raise ValueError("Invalid amount")
    try:
        number = int(float(value))
    except (TypeError, ValueError) as exc:
        raise ValueError("Invalid amount") from exc
    if number < minimum or number > maximum:
        raise ValueError(f"Amount must be between {minimum} and {maximum}")
    return number


def validate_payload(payload: Any) -> dict[str, Any]:
    if not isinstance(payload, dict):
        raise ValueError("Invalid request")

    # Honeypot: return a fake success later without processing.
    website = clean_text(payload.get("website", ""), max_len=200)

    source = clean_text(payload.get("source", "full-application"), max_len=30, required=True)
    if source not in {"full-application", "quick-apply", "contact"}:
        raise ValueError("Invalid submission source")

    full_name = clean_text(
        payload.get("fullName") or payload.get("name"), max_len=100, required=True
    )
    if not NAME_RE.fullmatch(full_name):
        raise ValueError("Enter a valid name")

    mobile = normalise_mobile(payload.get("mobileNumber") or payload.get("phone"))
    email_address = clean_text(payload.get("email"), max_len=254, required=True).lower()
    if not EMAIL_RE.fullmatch(email_address):
        raise ValueError("Enter a valid email address")

    city_required = source != "contact"
    city = clean_text(payload.get("city", ""), max_len=100, required=city_required)
    if city and not NAME_RE.fullmatch(city):
        raise ValueError("Enter a valid city")

    loan_type = clean_text(payload.get("loanType", "General Inquiry"), max_len=80)
    employment_type = clean_text(payload.get("employmentType", ""), max_len=80)
    message = clean_multiline(payload.get("message", ""), max_len=1500)

    monthly_income = clean_number(
        payload.get("monthlyIncome"),
        minimum=1000,
        maximum=100_000_000,
        required=source == "full-application",
    )
    loan_amount = clean_number(
        payload.get("loanAmount"),
        minimum=10_000,
        maximum=1_000_000_000,
        required=source == "full-application",
    )

    if source == "full-application":
        if not loan_type:
            raise ValueError("Select a loan type")
        if not employment_type:
            raise ValueError("Select employment type")

    consent = payload.get("consent") is True
    if not consent:
        raise ValueError("Consent is required before submission")

    turnstile_token = clean_text(payload.get("turnstileToken", ""), max_len=4096)

    return {
        "source": source,
        "fullName": full_name,
        "mobileNumber": mobile,
        "email": email_address,
        "city": city,
        "employmentType": employment_type,
        "loanType": loan_type or "General Inquiry",
        "monthlyIncome": monthly_income,
        "loanAmount": loan_amount,
        "message": message,
        "consent": consent,
        "turnstileToken": turnstile_token,
        "website": website,
    }


def client_ip(headers: Any, fallback: str) -> str:
    for key in ("CF-Connecting-IP", "X-Forwarded-For", "X-Real-IP"):
        value = headers.get(key)
        if value:
            return value.split(",", 1)[0].strip()[:64]
    return fallback[:64]


def rate_limited(ip: str) -> bool:
    now = time.monotonic()
    cutoff = now - RATE_LIMIT_WINDOW_SECONDS
    with RATE_LOCK:
        bucket = RATE_BUCKETS[ip]
        while bucket and bucket[0] < cutoff:
            bucket.popleft()
        if len(bucket) >= RATE_LIMIT_COUNT:
            return True
        bucket.append(now)
        return False


def origin_allowed(headers: Any) -> bool:
    origin = headers.get("Origin")
    if not origin:
        return env_bool("ALLOW_NO_ORIGIN", False)
    try:
        hostname = (urlparse(origin).hostname or "").lower()
    except ValueError:
        return False
    return hostname in ALLOWED_HOSTS


def verify_turnstile(token: str, ip: str) -> bool:
    if not TURNSTILE_ENABLED:
        return True
    if not token:
        return False
    payload = urllib.parse.urlencode(
        {"secret": TURNSTILE_SECRET_KEY, "response": token, "remoteip": ip}
    ).encode()
    request = urllib.request.Request(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        data=payload,
        method="POST",
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    try:
        with urllib.request.urlopen(request, timeout=8) as response:
            result = json.loads(response.read().decode("utf-8"))
        if not result.get("success"):
            LOG.warning("Turnstile rejected a submission: %s", result.get("error-codes", []))
            return False
        verified_host = str(result.get("hostname", "")).lower()
        return not verified_host or verified_host in ALLOWED_HOSTS
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        LOG.error("Turnstile verification failed: %s", exc)
        return False


def init_database() -> None:
    if not STORE_LEADS:
        return
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS leads (
                id TEXT PRIMARY KEY,
                created_at TEXT NOT NULL,
                source TEXT NOT NULL,
                full_name TEXT NOT NULL,
                mobile_number TEXT NOT NULL,
                email TEXT NOT NULL,
                city TEXT,
                employment_type TEXT,
                loan_type TEXT,
                monthly_income INTEGER,
                loan_amount INTEGER,
                message TEXT,
                consent INTEGER NOT NULL,
                delivery_json TEXT NOT NULL DEFAULT '{}'
            )
            """
        )
        conn.commit()
    try:
        os.chmod(DB_PATH, 0o600)
    except OSError:
        pass


def store_lead(lead_id: str, data: dict[str, Any]) -> bool:
    if not STORE_LEADS:
        return False
    init_database()
    cutoff = (datetime.now(timezone.utc) - timedelta(days=LEAD_RETENTION_DAYS)).isoformat()
    try:
        with sqlite3.connect(DB_PATH) as conn:
            conn.execute("DELETE FROM leads WHERE created_at < ?", (cutoff,))
            conn.execute(
                """
                INSERT INTO leads (
                    id, created_at, source, full_name, mobile_number, email, city,
                    employment_type, loan_type, monthly_income, loan_amount,
                    message, consent, delivery_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    lead_id,
                    now_iso(),
                    data["source"],
                    data["fullName"],
                    data["mobileNumber"],
                    data["email"],
                    data["city"],
                    data["employmentType"],
                    data["loanType"],
                    data["monthlyIncome"],
                    data["loanAmount"],
                    data["message"],
                    1,
                    "{}",
                ),
            )
            conn.commit()
        return True
    except sqlite3.Error as exc:
        LOG.error("Unable to store lead %s: %s", lead_id, exc)
        return False


def update_delivery(lead_id: str, delivery: DeliveryResult) -> None:
    if not STORE_LEADS:
        return
    try:
        with sqlite3.connect(DB_PATH) as conn:
            conn.execute(
                "UPDATE leads SET delivery_json = ? WHERE id = ?",
                (json.dumps(delivery.public_dict()), lead_id),
            )
            conn.commit()
    except sqlite3.Error as exc:
        LOG.error("Unable to update delivery result for %s: %s", lead_id, exc)


def digits_only(value: str) -> str:
    return re.sub(r"\D", "", value)


def public_whatsapp_url(message: str | None = None) -> str:
    base = f"https://wa.me/{digits_only(PUBLIC_WHATSAPP)}"
    if not message:
        return base
    return f"{base}?{urllib.parse.urlencode({'text': message})}"


def format_rupees(value: int | None) -> str:
    if value is None:
        return "Not provided"
    # Indian grouping without locale dependencies.
    digits = str(value)
    if len(digits) <= 3:
        grouped = digits
    else:
        last3 = digits[-3:]
        rest = digits[:-3]
        groups = []
        while rest:
            groups.append(rest[-2:])
            rest = rest[:-2]
        grouped = ",".join(reversed(groups)) + "," + last3
    return f"₹{grouped}"


def lead_text(lead_id: str, data: dict[str, Any]) -> str:
    lines = [
        "New EAZYKREDIT inquiry",
        f"Reference: {lead_id}",
        f"Source: {data['source']}",
        "",
        f"Name: {data['fullName']}",
        f"Mobile: +91 {data['mobileNumber']}",
        f"Email: {data['email']}",
        f"City: {data['city'] or 'Not provided'}",
        f"Employment: {data['employmentType'] or 'Not provided'}",
        f"Loan type: {data['loanType']}",
        f"Monthly income: {format_rupees(data['monthlyIncome'])}",
        f"Requested amount: {format_rupees(data['loanAmount'])}",
    ]
    if data["message"]:
        lines.extend(["", "Message:", data["message"]])
    lines.extend(["", "Consent to contact: Yes", f"Received: {now_iso()}"])
    return "\n".join(lines)


def lead_html(lead_id: str, data: dict[str, Any]) -> str:
    rows = [
        ("Reference", lead_id),
        ("Source", data["source"]),
        ("Name", data["fullName"]),
        ("Mobile", f"+91 {data['mobileNumber']}"),
        ("Email", data["email"]),
        ("City", data["city"] or "Not provided"),
        ("Employment", data["employmentType"] or "Not provided"),
        ("Loan type", data["loanType"]),
        ("Monthly income", format_rupees(data["monthlyIncome"])),
        ("Requested amount", format_rupees(data["loanAmount"])),
    ]
    table = "".join(
        f"<tr><th style='text-align:left;padding:8px;border-bottom:1px solid #e2e8f0'>{html.escape(label)}</th>"
        f"<td style='padding:8px;border-bottom:1px solid #e2e8f0'>{html.escape(str(value))}</td></tr>"
        for label, value in rows
    )
    message = ""
    if data["message"]:
        message = (
            "<h3>Message</h3><p style='white-space:pre-wrap'>"
            + html.escape(data["message"])
            + "</p>"
        )
    return f"""
    <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:680px">
      <h2 style="color:#0b4f9f">New EAZYKREDIT inquiry</h2>
      <table style="width:100%;border-collapse:collapse">{table}</table>
      {message}
      <p style="font-size:12px;color:#64748b">The applicant consented to contact by phone, WhatsApp and email. Do not request OTPs, PINs or passwords.</p>
    </div>
    """.strip()


def smtp_send(message: EmailMessage) -> bool:
    host = os.getenv("SMTP_HOST", "").strip()
    username = os.getenv("SMTP_USERNAME", "").strip()
    password = os.getenv("SMTP_PASSWORD", "")
    if not host or not username or not password:
        return False
    port = int(os.getenv("SMTP_PORT", "587"))
    timeout = int(os.getenv("SMTP_TIMEOUT_SECONDS", "12"))
    try:
        if env_bool("SMTP_SSL", port == 465):
            with smtplib.SMTP_SSL(host, port, timeout=timeout, context=ssl.create_default_context()) as server:
                server.login(username, password)
                server.send_message(message)
        else:
            with smtplib.SMTP(host, port, timeout=timeout) as server:
                server.ehlo()
                if env_bool("SMTP_STARTTLS", True):
                    server.starttls(context=ssl.create_default_context())
                    server.ehlo()
                server.login(username, password)
                server.send_message(message)
        return True
    except (OSError, smtplib.SMTPException) as exc:
        LOG.error("SMTP delivery failed: %s", exc)
        return False


def send_owner_email(lead_id: str, data: dict[str, Any]) -> bool:
    recipient = os.getenv("LEAD_EMAIL_TO", "").strip()
    sender = os.getenv("SMTP_FROM", os.getenv("SMTP_USERNAME", "")).strip()
    if not recipient or not sender:
        return False
    msg = EmailMessage()
    msg["Subject"] = f"[{lead_id}] New {data['loanType']} inquiry"
    msg["From"] = sender
    msg["To"] = recipient
    reply_to = data["email"]
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content(lead_text(lead_id, data))
    msg.add_alternative(lead_html(lead_id, data), subtype="html")
    return smtp_send(msg)


def send_applicant_email(lead_id: str, data: dict[str, Any]) -> bool:
    if not env_bool("SEND_APPLICANT_ACK", True):
        return False
    sender = os.getenv("SMTP_FROM", os.getenv("SMTP_USERNAME", "")).strip()
    if not sender:
        return False
    msg = EmailMessage()
    msg["Subject"] = f"EAZYKREDIT inquiry received — {lead_id}"
    msg["From"] = sender
    msg["To"] = data["email"]
    msg.set_content(
        f"Hello {data['fullName']},\n\n"
        f"We received your inquiry. Your reference is {lead_id}. "
        "An EAZYKREDIT representative will contact you during business hours.\n\n"
        "Please do not share OTPs, PINs, passwords, or card details with anyone. "
        "Loan approval, rates and terms are determined by the lender.\n\n"
        "EAZYKREDIT"
    )
    return smtp_send(msg)


def twilio_whatsapp_send(lead_id: str, data: dict[str, Any]) -> bool:
    sid = os.getenv("TWILIO_ACCOUNT_SID", "").strip()
    token = os.getenv("TWILIO_AUTH_TOKEN", "").strip()
    sender = os.getenv("TWILIO_WHATSAPP_FROM", "").strip()
    recipient = os.getenv("LEAD_WHATSAPP_TO", "").strip()
    if not all((sid, token, sender, recipient)):
        return False

    def wa(value: str) -> str:
        value = value.strip()
        if not value.startswith("+") and not value.startswith("whatsapp:"):
            value = "+" + re.sub(r"\D", "", value)
        return value if value.startswith("whatsapp:") else f"whatsapp:{value}"

    form: dict[str, str] = {"From": wa(sender), "To": wa(recipient)}
    content_sid = os.getenv("TWILIO_CONTENT_SID", "").strip()
    if content_sid:
        variables = {
            "1": lead_id,
            "2": data["fullName"],
            "3": f"+91 {data['mobileNumber']}",
            "4": data["loanType"],
            "5": format_rupees(data["loanAmount"]),
            "6": data["city"] or "Not provided",
        }
        form["ContentSid"] = content_sid
        form["ContentVariables"] = json.dumps(variables, ensure_ascii=False)
    else:
        form["Body"] = lead_text(lead_id, data)

    encoded = urllib.parse.urlencode(form).encode()
    auth = base64.b64encode(f"{sid}:{token}".encode()).decode()
    request = urllib.request.Request(
        f"https://api.twilio.com/2010-04-01/Accounts/{urllib.parse.quote(sid)}/Messages.json",
        data=encoded,
        method="POST",
        headers={
            "Authorization": f"Basic {auth}",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=12) as response:
            result = json.loads(response.read().decode("utf-8"))
        message_sid = str(result.get("sid", ""))
        if message_sid:
            LOG.info("WhatsApp notification queued for lead %s (message %s)", lead_id, message_sid[-8:])
            return True
        LOG.error("Twilio did not return a message SID")
        return False
    except urllib.error.HTTPError as exc:
        try:
            body = json.loads(exc.read().decode("utf-8"))
            detail = f"code={body.get('code')} message={body.get('message')}"
        except Exception:
            detail = str(exc)
        LOG.error("Twilio WhatsApp delivery failed: %s", detail)
        return False
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        LOG.error("Twilio WhatsApp delivery failed: %s", exc)
        return False


def send_webhook(lead_id: str, data: dict[str, Any]) -> bool:
    url = os.getenv("AUTOMATION_WEBHOOK_URL", "").strip()
    if not url:
        return False
    token = os.getenv("AUTOMATION_WEBHOOK_TOKEN", "").strip()
    payload = json.dumps({"leadId": lead_id, "receivedAt": now_iso(), **data}, ensure_ascii=False).encode()
    headers = {"Content-Type": "application/json", "User-Agent": "EazyKredit-LeadAPI/1.0"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    request = urllib.request.Request(url, data=payload, method="POST", headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=10) as response:
            return 200 <= response.status < 300
    except (urllib.error.URLError, TimeoutError) as exc:
        LOG.error("Automation webhook failed: %s", exc)
        return False


def process_lead(lead_id: str, data: dict[str, Any]) -> DeliveryResult:
    stored = store_lead(lead_id, data)
    email_sent = send_owner_email(lead_id, data)
    whatsapp_sent = twilio_whatsapp_send(lead_id, data)
    webhook_sent = send_webhook(lead_id, data)
    applicant_sent = send_applicant_email(lead_id, data) if email_sent else False
    delivery = DeliveryResult(
        stored=stored,
        email=email_sent,
        whatsapp=whatsapp_sent,
        webhook=webhook_sent,
        applicant_email=applicant_sent,
    )
    update_delivery(lead_id, delivery)
    return delivery


def make_lead_id() -> str:
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d")
    return f"EK-{stamp}-{secrets.token_hex(3).upper()}"


class Handler(BaseHTTPRequestHandler):
    server_version = "EazyKreditLeadAPI/1.0"

    def log_message(self, fmt: str, *args: Any) -> None:
        LOG.info("%s %s", self.address_string(), fmt % args)

    def send_json(self, status: int, payload: dict[str, Any], extra_headers: dict[str, str] | None = None) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        if extra_headers:
            for key, value in extra_headers.items():
                self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        path = urlparse(self.path).path.rstrip("/") or "/"
        if path == "/healthz":
            self.send_json(HTTPStatus.OK, {"status": "ok"})
            return
        if path == "/config":
            self.send_json(
                HTTPStatus.OK,
                {
                    "turnstileEnabled": TURNSTILE_ENABLED,
                    "turnstileSiteKey": TURNSTILE_SITE_KEY if TURNSTILE_ENABLED else "",
                    "publicPhone": PUBLIC_PHONE,
                    "whatsappUrl": public_whatsapp_url(),
                },
            )
            return
        self.send_json(HTTPStatus.NOT_FOUND, {"success": False, "message": "Not found"})

    def do_POST(self) -> None:
        path = urlparse(self.path).path.rstrip("/")
        if path != "/apply":
            self.send_json(HTTPStatus.NOT_FOUND, {"success": False, "message": "Not found"})
            return

        ip = client_ip(self.headers, self.client_address[0])
        if rate_limited(ip):
            self.send_json(
                HTTPStatus.TOO_MANY_REQUESTS,
                {"success": False, "message": "Too many attempts. Please wait and try again."},
                {"Retry-After": str(RATE_LIMIT_WINDOW_SECONDS)},
            )
            return

        if not origin_allowed(self.headers):
            self.send_json(HTTPStatus.FORBIDDEN, {"success": False, "message": "Request origin is not allowed."})
            return

        try:
            content_length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            content_length = 0
        if content_length <= 0 or content_length > MAX_BODY_BYTES:
            self.send_json(HTTPStatus.REQUEST_ENTITY_TOO_LARGE, {"success": False, "message": "Invalid request size."})
            return

        try:
            payload = json.loads(self.rfile.read(content_length).decode("utf-8"))
            data = validate_payload(payload)
        except (UnicodeDecodeError, json.JSONDecodeError, ValueError) as exc:
            self.send_json(HTTPStatus.BAD_REQUEST, {"success": False, "message": str(exc) or "Invalid form data."})
            return

        # Silently accept honeypot submissions without storing or notifying.
        if data["website"]:
            self.send_json(HTTPStatus.OK, {"success": True, "referenceId": "EK-RECEIVED"})
            return

        if not verify_turnstile(data["turnstileToken"], ip):
            self.send_json(HTTPStatus.BAD_REQUEST, {"success": False, "message": "Security verification failed. Please refresh and try again."})
            return

        lead_id = make_lead_id()
        data.pop("turnstileToken", None)
        data.pop("website", None)
        delivery = process_lead(lead_id, data)
        if not delivery.accepted:
            self.send_json(
                HTTPStatus.SERVICE_UNAVAILABLE,
                {
                    "success": False,
                    "message": "We could not record your inquiry right now. Please call or use WhatsApp.",
                    "whatsappUrl": public_whatsapp_url(),
                },
            )
            return

        LOG.info("Lead %s accepted; delivery=%s", lead_id, delivery.public_dict())
        self.send_json(
            HTTPStatus.OK,
            {
                "success": True,
                "referenceId": lead_id,
                "message": "Your inquiry has been received.",
                "delivery": delivery.public_dict(),
                "whatsappUrl": public_whatsapp_url(
                    f"Hello EAZYKREDIT, I submitted an inquiry. Reference: {lead_id}."
                ),
            },
        )


def main() -> None:
    init_database()
    host = os.getenv("API_HOST", "0.0.0.0")
    port = int(os.getenv("API_PORT", "8080"))
    server = ThreadingHTTPServer((host, port), Handler)
    LOG.info(
        "EazyKredit lead API listening on %s:%s (storage=%s, turnstile=%s)",
        host,
        port,
        STORE_LEADS,
        TURNSTILE_ENABLED,
    )
    server.serve_forever()


if __name__ == "__main__":
    main()
