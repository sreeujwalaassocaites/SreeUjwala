# EAZYKREDIT Vercel Preview Test

This branch converts the Franky Lab proof of concept into a Vercel-native Next.js application.

## Architecture

GitHub -> Vercel Preview/Production -> Next.js frontend -> /api/apply Route Handler -> Resend email -> optional automation webhook

No Docker, Python API, Cloudflare Tunnel, or SQLite are required for the Vercel deployment.

## Preview environment variables

Set these in Vercel Project -> Settings -> Environment Variables and scope them to Preview first:

- NEXT_PUBLIC_DEPLOYMENT_STAGE=preview
- PUBLIC_PHONE=+919885011157
- PUBLIC_WHATSAPP=+919885011157
- RESEND_API_KEY=<secret>
- EMAIL_FROM=EAZYKREDIT <verified-sender@eazykredit.in>
- LEAD_EMAIL_TO=<test inbox>
- SEND_APPLICANT_ACK=true

Optional for Preview:
- TURNSTILE_SITE_KEY
- TURNSTILE_SECRET_KEY
- AUTOMATION_WEBHOOK_URL
- AUTOMATION_WEBHOOK_TOKEN

NEXT_PUBLIC_SITE_URL can be omitted in Preview so the deployment URL is detected from VERCEL_URL.

## Production

Before merging to the Production Branch, create the same variables for Production with the business-owned email destinations and real Turnstile keys. Never commit passwords, API keys, or tokens to Git.
