# 6 — Review Findings and Implemented Changes

## Problems found in the uploaded project

1. `next.config.ts` used `output: "export"`, while the project also contained `src/app/api/apply/route.ts`. A static export has no persistent Next.js server to execute that POST route.
2. The original API created a WhatsApp URL and logged form details; it did not deliver an owner WhatsApp notification or email.
3. Quick Apply and Contact simulated success with timers and opened WhatsApp rather than securely recording a lead.
4. The document-upload control selected a local file but never uploaded it.
5. Server-side validation, rate limiting, bot verification and clear consent handling were missing.
6. Privacy and Terms links pointed to `#`.
7. Metadata and sitemap referenced the wrong `.com` domain and a nonexistent calculator route.
8. Generated build output, partial dependencies and a secret-bearing `.env.local` were included in the archive.
9. Some pages used absolute or unverified wording about approval, rates, security and lender relationships.

## Implemented solution

- Static Next.js frontend remains in place to preserve the original design.
- A separate small Python API handles all three inquiry forms.
- Nginx serves the static site and proxies only `/api/*` to the private API container.
- Owner email, applicant acknowledgment, Twilio WhatsApp and n8n webhook channels are configurable.
- SQLite provides a short-retention fallback record.
- Stronger validation, Unicode-friendly names, Indian mobile normalization, origin checks, rate limiting, honeypot and optional Turnstile are included.
- The non-working file upload was replaced with safe document-handling guidance.
- Legal/disclosure pages and a non-predictive Loan Assistant were added.
- Docker/Portainer, Cloudflare Tunnel and rollback documentation were added.
