import { NextResponse } from "next/server";
import { publicWhatsappUrl } from "@/lib/server/lead-service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const siteKey = (process.env.TURNSTILE_SITE_KEY || "").trim();
  const secretKey = (process.env.TURNSTILE_SECRET_KEY || "").trim();
  const publicPhone = (process.env.PUBLIC_PHONE || "").trim();

  return NextResponse.json(
    {
      turnstileEnabled: Boolean(siteKey && secretKey),
      turnstileSiteKey: siteKey && secretKey ? siteKey : "",
      publicPhone,
      whatsappUrl: publicWhatsappUrl(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
