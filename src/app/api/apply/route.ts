import { NextResponse } from "next/server";
import {
  getClientIp,
  makeLeadId,
  originAllowed,
  publicWhatsappUrl,
  sendApplicantEmail,
  sendAutomationWebhook,
  sendOwnerEmail,
  validateLeadPayload,
  verifyTurnstile,
} from "@/lib/server/lead-service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

const MAX_BODY_BYTES = 32_768;

export async function POST(request: Request) {
  if (!originAllowed(request)) {
    return NextResponse.json(
      { success: false, message: "Request origin is not allowed." },
      { status: 403 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, message: "Invalid request size." },
      { status: 413 },
    );
  }

  let data;
  try {
    data = validateLeadPayload(await request.json());
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Invalid form data.",
      },
      { status: 400 },
    );
  }

  // Honeypot submissions receive a generic success response but are not processed.
  if (data.website) {
    return NextResponse.json({ success: true, referenceId: "EK-RECEIVED" });
  }

  const ip = getClientIp(request);
  if (!(await verifyTurnstile(data.turnstileToken, ip))) {
    return NextResponse.json(
      {
        success: false,
        message: "Security verification failed. Please refresh and try again.",
      },
      { status: 400 },
    );
  }

  const leadId = makeLeadId();
  const [emailSent, automationSent] = await Promise.all([
    sendOwnerEmail(leadId, data),
    sendAutomationWebhook(leadId, data),
  ]);

  const applicantEmailSent = emailSent ? await sendApplicantEmail(leadId, data) : false;

  if (!emailSent && !automationSent) {
    console.error("Lead delivery failed", { leadId });
    return NextResponse.json(
      {
        success: false,
        message: "We could not record your inquiry right now. Please call or use WhatsApp.",
        whatsappUrl: publicWhatsappUrl(),
      },
      { status: 503 },
    );
  }

  const delivery = {
    stored: false,
    email: emailSent,
    whatsapp: false,
    automation: automationSent,
  };

  console.info("Lead accepted", {
    leadId,
    source: data.source,
    delivery,
    applicantEmail: applicantEmailSent,
  });

  return NextResponse.json(
    {
      success: true,
      referenceId: leadId,
      message: "Your inquiry has been received.",
      delivery,
      whatsappUrl: publicWhatsappUrl(
        `Hello EAZYKREDIT, I submitted an inquiry. Reference: ${leadId}.`,
      ),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
