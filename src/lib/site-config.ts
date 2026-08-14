const fallbackUrl = "https://eazykredit.franky.co.in";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, "");
export const DEPLOYMENT_STAGE = process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE || "test";
export const IS_PRODUCTION = DEPLOYMENT_STAGE === "production";
