import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";
import LoanAssistant from "@/components/LoanAssistant";
import { IS_PRODUCTION, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EAZYKREDIT | Smart Loan Facilitation",
    template: "%s | EAZYKREDIT",
  },
  description:
    "Explore home, personal, business, education, property-backed and used-car loan options with EAZYKREDIT's loan facilitation team.",
  keywords: [
    "loans",
    "home loan",
    "business loan",
    "personal loan",
    "loan against property",
    "education loan",
    "used car loan",
    "loan facilitation",
    "EAZYKREDIT",
  ],
  authors: [{ name: "EAZYKREDIT" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    title: "EAZYKREDIT | Smart Loan Facilitation",
    description:
      "Explore loan options with transparent guidance and secure inquiry handling.",
    type: "website",
    url: SITE_URL,
    siteName: "EAZYKREDIT",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EAZYKREDIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAZYKREDIT | Smart Loan Facilitation",
    description:
      "Explore loan options with transparent guidance and secure inquiry handling.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-text-dark">
        <ScrollToTop />
        <Header />

        <main className="flex-grow pt-[105px]">{children}</main>

        <LoanAssistant />
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
