# EAZYKREDIT — Franky Lab Test Build

A hardened demonstration build of the uploaded EAZYKREDIT Next.js website for deployment at:

- Test: `https://eazykredit.franky.co.in`
- Existing production reference: `https://www.eazykredit.in`

The visual structure, assets, loan pages and navigation from the supplied project are preserved. The main changes are the inquiry workflow, server-side validation, notification integrations, privacy/security disclosures, a guided loan assistant, and Docker/Portainer deployment files.

## What this build fixes

- Replaces the non-working static-export API route with a separate Python lead API.
- Makes the Apply, Quick Apply and Contact forms submit to the same secured backend.
- Stores a short-retention local backup in SQLite.
- Sends optional owner email, applicant acknowledgment email, Twilio WhatsApp notification and n8n/CRM webhook.
- Adds server-side validation, origin checks, rate limiting, honeypot protection and optional Cloudflare Turnstile verification.
- Removes the non-functional public document upload control.
- Adds Privacy, Terms and Loan/Security Disclaimer pages.
- Adds a rule-based Loan Assistant that prefills the inquiry form without predicting approval.
- Adds no-index controls for the Franky Lab demonstration domain.
- Removes credentials and generated build folders from the distributable source.

## Architecture

```text
Browser
  -> Cloudflare Tunnel
  -> 127.0.0.1:8090
  -> eazykredit-web (Nginx + static Next.js export)
       -> /api/*
       -> eazykredit-api (Python)
            -> SQLite lead backup
            -> SMTP email (optional)
            -> Twilio WhatsApp (optional)
            -> n8n/CRM webhook (optional)
```

The API container is not published directly. Only the Nginx frontend is bound to host loopback.

## Deployment

Read these files in order:

1. `docs/01-PORTAINER-DEPLOYMENT.md`
2. `docs/02-CLOUDFLARE-TUNNEL.md`
3. `docs/03-EMAIL-WHATSAPP-AUTOMATION.md`
4. `docs/04-SECURITY-NOTICE.md`
5. `docs/05-BUSINESS-CONTENT-CHECKLIST.md`

## Local verification

```bash
bash scripts/test.sh
```

Docker deployment uses `compose.portainer.yml`.

## Export stored leads

Run from the Docker host:

```bash
bash scripts/export-leads.sh
```

The command writes a timestamped CSV into the current directory. Treat the CSV as sensitive personal data and delete it when no longer required.

## Important production limitation

This package is suitable for a controlled demonstration and technical acceptance testing. Before using `eazykredit.in` for real customer acquisition, the business owner must verify all lender relationships, rates, testimonials, address details, privacy language, grievance contact, consent wording and data-retention requirements with appropriate legal/compliance support.
