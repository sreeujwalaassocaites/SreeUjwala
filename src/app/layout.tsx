import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "EazyKredit",
  description: "Smart Financial Solutions for Home Loans, Personal Loans, Business Loans, Education Loans, Loan Against Property, and Used Car Loans.",
  keywords: [
    "loans",
    "home loan",
    "business loan",
    "personal loan",
    "loan against property",
    "education loan",
    "used car loan",
    "loan advisor",
    "loan DSA",
    "EazyKredit"
  ],
  authors: [{ name: "EazyKredit" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "EazyKredit",
    description: "Smart Financial Solutions for Home Loans, Personal Loans, Business Loans, Education Loans, Loan Against Property, and Used Car Loans.",
    type: "website",
    url: "https://www.eazykredit.com/",
    images: [
      {
        url: "https://www.eazykredit.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EazyKredit Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyKredit",
    description: "Smart Financial Solutions for Home Loans, Personal Loans, Business Loans, Education Loans, Loan Against Property, and Used Car Loans.",
    images: ["https://www.eazykredit.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        <ScrollToTop />
        {/* Navigation Header */}
        <Header />

        {/* Main Content Page Wrapper */}
        <main className="flex-grow pt-[105px]">
          {children}
        </main>

        {/* Call & WhatsApp CTAs */}
        <FloatingActions />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
