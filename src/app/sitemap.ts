import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/apply",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/loans/home-loan",
    "/loans/business-loan",
    "/loans/personal-loan",
    "/loans/loan-against-property",
    "/loans/education-loan",
    "/loans/used-car-loan",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/loans") || route === "/apply" ? 0.9 : 0.7,
  }));
}
