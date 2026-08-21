import { randomBytes } from "node:crypto";
import { z } from "zod";

const phonePattern = /^[6-9]\d{9}$/;
const personNamePattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;

const sourceSchema = z.enum(["full-application", "quick-apply", "contact"]);

const rawLeadSchema = z.object({
  source: sourceSchema,
  fullName: z.string().trim().min(2).max(100).regex(personNamePattern),
  mobileNumber: z.string().trim().max(20),
  email: z.string().trim().toLowerCase().email().max(254),
  city: z.string().trim().max(100).optional().default(""),
  employmentType: z.string().trim().max(80).optional().default(""),
  loanType: z.string().trim().max(80).optional().default("General Inquiry"),
  monthlyIncome: z.union([z.number(), z.string()]).optional(),
  loanAmount: z.union([z.number(), z.string()]).optional(),
  message: z.string().max(1500).optional().default(""),
  consent: z.literal(true),
  turnstileToken: z.string().max(4096).optional().default(""),
  website: z.string().max(200).optional().default(""),
});

export type LeadSource = z.infer<typeof sourceSchema>;

export interface ValidatedLead {
  source: LeadSource;
  fullName: string;
  mobileNumber: string;
  email: string;
  city: string;
  employmentType: string;
  loanType: string;
  monthlyIncome: number | null;
  loanAmount: number | null;
  message: string;
  consent: true;
  turnstileToken: string;
  website: string;
}

export interface DeliveryResult {
  stored: false;
  email: boolean;
  applicantEmail: boolean;
  whatsapp: false;
  automation: boolean;
}

function normaliseMobile(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) digits = digits.slice(2);
  if (!phonePattern.test(digits)) {
    throw new Error("Enter a valid 10-digit Indian mobile number");
  }
  return digits;
}

function parseAmount(
  value: number | string | undefined,
  minimum: number,
  maximum: number,
  required: boolean,
): number | null {
  if (value === undefined || value === "") {
    if (required) throw new Error("A required amount is missing");
    return null;
  }

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) throw new Error("Invalid amount");

  const amount = Math.trunc(parsed);
  if (amount < minimum || amount > maximum) {
    throw new Error(`Amount must be between ${minimum} and ${maximum}`);
  }

  return amount;
}

export function validateLeadPayload(input: unknown): ValidatedLead {
  const parsed = rawLeadSchema.safeParse(input);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    throw new Error(issue?.message || "Invalid form data");
  }

  const data = parsed.data;
  const mobileNumber = normaliseMobile(data.mobileNumber);
  const cityRequired = data.source !== "contact";

  if (cityRequired && data.city.length < 2) {
    throw new Error("Enter your city");
  }

  if (data.city && !personNamePattern.test(data.city)) {
    throw new Error("Enter a valid city");
  }

  if (data.source === "full-application") {
    if (!data.loanType || data.loanType === "General Inquiry") {
      throw new Error("Select a loan type");
    }

    if (!data.employmentType) {
      throw new Error("Select employment type");
    }
  }

  return {
    ...data,
    mobileNumber,
    loanType: data.loanType || "General Inquiry",
    monthlyIncome: parseAmount(
      data.monthlyIncome,
      1000,
      100_000_000,
      data.source === "full-application",
    ),
    loanAmount: parseAmount(
      data.loanAmount,
      10_000,
      1_000_000_000,
      data.source === "full-application",
    ),
  };
}

export function makeLeadId(now = new Date()): string {
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  return `EK-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export function publicWhatsappUrl(message?: string): string {
  const number = (
    process.env.PUBLIC_WHATSAPP ||
    process.env.PUBLIC_PHONE ||
    "+919885011157"
  ).replace(/\D/g, "");

  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");

  return (
    forwarded?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
    .trim()
    .slice(0, 64);
}

export function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return process.env.ALLOW_NO_ORIGIN === "true";

  let originHost: string;
  try {
    originHost = new URL(origin).hostname.toLowerCase();
  } catch {
    return false;
  }

  const forwardedHost = (
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    ""
  )
    .split(":")[0]
    .toLowerCase();

  if (originHost && forwardedHost && originHost === forwardedHost) {
    return true;
  }

  const allowed = (
    process.env.ALLOWED_HOSTS ||
    "www.eazykredit.in,eazykredit.in"
  )
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return allowed.includes(originHost);
}

export async function verifyTurnstile(
  token: string,
  ip: string,
): Promise<boolean> {
  const siteKey = (process.env.TURNSTILE_SITE_KEY || "").trim();
  const secret = (process.env.TURNSTILE_SECRET_KEY || "").trim();

  if (!siteKey || !secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });

  if (ip && ip !== "unknown") {
    body.set("remoteip", ip);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      },
    );

    const result = (await response.json()) as {
      success?: boolean;
      hostname?: string;
    };

    return response.ok && result.success === true;
  } catch {
    return false;
  }
}

function formatRupees(value: number | null): string {
  if (value === null) return "Not provided";
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}

function leadText(leadId: string, data: ValidatedLead): string {
  const lines = [
    "New EAZYKREDIT inquiry",
    `Reference: ${leadId}`,
    `Source: ${data.source}`,
    "",
    `Name: ${data.fullName}`,
    `Mobile: +91 ${data.mobileNumber}`,
    `Email: ${data.email}`,
    `City: ${data.city || "Not provided"}`,
    `Employment: ${data.employmentType || "Not provided"}`,
    `Loan type: ${data.loanType}`,
    `Monthly income: ${formatRupees(data.monthlyIncome)}`,
    `Requested amount: ${formatRupees(data.loanAmount)}`,
  ];

  if (data.message) {
    lines.push("", "Message:", data.message);
  }

  lines.push(
    "",
    "Consent to contact: Yes",
    `Received: ${new Date().toISOString()}`,
  );

  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (char) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return replacements[char] || char;
  });
}

function leadHtml(leadId: string, data: ValidatedLead): string {
  const rows: Array<[string, string]> = [
    ["Reference", leadId],
    ["Source", data.source],
    ["Name", data.fullName],
    ["Mobile", `+91 ${data.mobileNumber}`],
    ["Email", data.email],
    ["City", data.city || "Not provided"],
    ["Employment", data.employmentType || "Not provided"],
    ["Loan type", data.loanType],
    ["Monthly income", formatRupees(data.monthlyIncome)],
    ["Requested amount", formatRupees(data.loanAmount)],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr>` +
        `<th style="text-align:left;padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</th>` +
        `<td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(value)}</td>` +
        `</tr>`,
    )
    .join("");

  const message = data.message
    ? `<h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`
    : "";

  return (
    `<div style="font-family:Arial,sans-serif;color:#0f172a;max-width:680px">` +
    `<h2 style="color:#0b4f9f">New EAZYKREDIT inquiry</h2>` +
    `<table style="width:100%;border-collapse:collapse">${table}</table>` +
    message +
    `<p style="font-size:12px;color:#64748b">` +
    `The applicant consented to contact by phone, WhatsApp and email. ` +
    `Do not request OTPs, PINs or passwords.` +
    `</p>` +
    `</div>`
  );
}

async function resendEmail(options: {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = (process.env.RESEND_API_KEY || "").trim();
  const from = (process.env.EMAIL_FROM || "").trim();

  if (!apiKey) {
    console.error("Resend delivery skipped: RESEND_API_KEY is missing");
    return false;
  }

  if (!from) {
    console.error("Resend delivery skipped: EMAIL_FROM is missing");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "eazykredit-vercel/1.0",
      },
      body: JSON.stringify({
        from,
        to: [options.to],
        subject: options.subject,
        text: options.text,
        ...(options.html ? { html: options.html } : {}),
        ...(options.replyTo ? { reply_to: options.replyTo } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    const responseBody = await response.text();

    if (!response.ok) {
      console.error(
        "Resend delivery failed",
        response.status,
        responseBody.slice(0, 1000),
      );
      return false;
    }

    console.info(
      "Resend delivery accepted",
      response.status,
      responseBody.slice(0, 500),
    );

    return true;
  } catch (error) {
    console.error(
      "Resend delivery failed",
      error instanceof Error ? error.message : "unknown error",
    );
    return false;
  }
}

export async function sendOwnerEmail(
  leadId: string,
  data: ValidatedLead,
): Promise<boolean> {
  const recipient = (process.env.LEAD_EMAIL_TO || "").trim();

  if (!recipient) {
    console.error("Owner email skipped: LEAD_EMAIL_TO is missing");
    return false;
  }

  return resendEmail({
    to: recipient,
    subject: `[${leadId}] New ${data.loanType} inquiry`,
    text: leadText(leadId, data),
    html: leadHtml(leadId, data),
    replyTo: data.email,
  });
}

export async function sendApplicantEmail(
  leadId: string,
  data: ValidatedLead,
): Promise<boolean> {
  if (
    (process.env.SEND_APPLICANT_ACK || "true").toLowerCase() !==
    "true"
  ) {
    return false;
  }

  const text =
    `Hello ${data.fullName},\n\n` +
    `We received your inquiry. Your reference is ${leadId}. ` +
    `An EAZYKREDIT representative will contact you during business hours.\n\n` +
    `Please do not share OTPs, PINs, passwords, or card details with anyone. ` +
    `Loan approval, rates and terms are determined by the lender.\n\n` +
    `EAZYKREDIT`;

  return resendEmail({
    to: data.email,
    subject: `EAZYKREDIT inquiry received — ${leadId}`,
    text,
  });
}

export async function sendAutomationWebhook(
  leadId: string,
  data: ValidatedLead,
): Promise<boolean> {
  const url = (process.env.AUTOMATION_WEBHOOK_URL || "").trim();
  if (!url) return false;

  const token = (process.env.AUTOMATION_WEBHOOK_TOKEN || "").trim();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token
          ? { Authorization: `Bearer ${token}` }
          : {}),
      },
      body: JSON.stringify({
        leadId,
        receivedAt: new Date().toISOString(),
        source: data.source,
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        email: data.email,
        city: data.city,
        employmentType: data.employmentType,
        loanType: data.loanType,
        monthlyIncome: data.monthlyIncome,
        loanAmount: data.loanAmount,
        message: data.message,
        consent: true,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const responseBody = await response.text();

      console.error(
        "Automation webhook failed",
        response.status,
        responseBody.slice(0, 500),
      );

      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Automation webhook failed",
      error instanceof Error ? error.message : "unknown error",
    );
    return false;
  }
}
