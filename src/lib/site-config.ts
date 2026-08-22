const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const fallbackUrl = vercelUrl || "http://localhost:3000";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, "");
export const DEPLOYMENT_STAGE =
  process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE || process.env.VERCEL_ENV || "development";
export const IS_PRODUCTION = DEPLOYMENT_STAGE === "production";
