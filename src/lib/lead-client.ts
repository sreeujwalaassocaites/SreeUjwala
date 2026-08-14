export type LeadSource = "full-application" | "quick-apply" | "contact";

export interface LeadPayload {
  source: LeadSource;
  fullName: string;
  mobileNumber: string;
  email: string;
  city?: string;
  employmentType?: string;
  loanType?: string;
  monthlyIncome?: number;
  loanAmount?: number;
  message?: string;
  consent: boolean;
  turnstileToken?: string;
  website?: string;
}

export interface LeadResponse {
  success: boolean;
  referenceId?: string;
  message?: string;
  whatsappUrl?: string;
  delivery?: {
    stored?: boolean;
    email?: boolean;
    whatsapp?: boolean;
    automation?: boolean;
  };
}

export interface PublicLeadConfig {
  turnstileEnabled: boolean;
  turnstileSiteKey: string;
  publicPhone: string;
  whatsappUrl: string;
}

export async function getLeadConfig(): Promise<PublicLeadConfig> {
  const response = await fetch("/api/config", {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load form security configuration.");
  }

  return response.json() as Promise<PublicLeadConfig>;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch("/api/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let result: LeadResponse;
  try {
    result = (await response.json()) as LeadResponse;
  } catch {
    throw new Error("The service returned an unexpected response. Please try again.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit your inquiry. Please try again.");
  }

  return result;
}
