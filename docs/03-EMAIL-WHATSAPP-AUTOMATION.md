# 3 — Email, WhatsApp and Optional Automation

The form works with local lead storage even before notification credentials are added. Configure the channels one at a time and submit a test inquiry after each change.

## A. Owner email notification

Enter these directly in the Portainer stack environment:

```text
SMTP_HOST=<mail provider SMTP host>
SMTP_PORT=587
SMTP_USERNAME=<approved mailbox username>
SMTP_PASSWORD=<app password or SMTP password>
SMTP_FROM=EAZYKREDIT <info@eazykredit.in>
SMTP_SSL=false
SMTP_STARTTLS=true
LEAD_EMAIL_TO=info@eazykredit.in
SEND_APPLICANT_ACK=true
```

Use the SMTP values supplied by the email provider. Do not place the password in `.env.example`, Git, screenshots or chat.

After updating the stack, submit one test form and check:

```bash
docker logs --since 10m eazykredit-api
```

The owner email contains a reference ID and the submitted inquiry fields. The applicant receives an acknowledgment only after the owner email succeeds.

## B. WhatsApp notification through Twilio

Use newly rotated credentials. Enter:

```text
TWILIO_ACCOUNT_SID=<new account SID>
TWILIO_AUTH_TOKEN=<new auth token>
TWILIO_WHATSAPP_FROM=<approved or sandbox WhatsApp sender>
LEAD_WHATSAPP_TO=<owner WhatsApp number in E.164 format>
TWILIO_CONTENT_SID=<approved notification template SID when required>
```

Examples of accepted number formats:

```text
+919885011157
whatsapp:+919885011157
```

For sandbox testing, the destination WhatsApp account must join the sandbox and follow the current Twilio sandbox instructions. For normal business-initiated notifications, use an approved WhatsApp sender and approved content template when required.

## C. Optional n8n / CRM / Google Sheets flow

The API can send the same validated lead to a private webhook:

```text
AUTOMATION_WEBHOOK_URL=https://<private-n8n-host>/webhook/<random-id>
AUTOMATION_WEBHOOK_TOKEN=<long-random-secret>
```

Recommended n8n flow:

```text
Webhook
  -> verify Authorization header
  -> remove fields not needed by the destination
  -> append a row to a restricted Google Sheet or CRM
  -> send Telegram/mobile alert
  -> return HTTP 200
```

Do not expose an unprotected n8n webhook and do not give an AI agent authority to approve loans, alter submitted income, delete leads or make lender decisions.

## D. Loan Assistant

The included Loan Assistant is intentionally rule-based. It helps the visitor choose a loan category and prefills the inquiry page. It does not predict eligibility, interest rate or approval.
