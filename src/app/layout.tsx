import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "EAZYKREDIT - Get the Right Loan with India's Trusted Banking Experts",
  description: "EAZYKREDIT is India's leading loan consultancy and DSA partner. Compare and secure Home Loans, Business Loans, Personal Loans, and Loan Against Property at the lowest interest rates.",
  keywords: ["loans", "home loan", "business loan", "personal loan", "loan against property", "car loan", "loan advisor", "loan DSA", "EAZYKREDIT"],
  authors: [{ name: "EAZYKREDIT" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EAZYKREDIT - Your Trusted Loan Partner Across India",
    description: "Helping individuals and businesses secure retail and corporate loans through India's leading Banks & NBFCs with zero hassle.",
    type: "website",
    url: "https://www.eazykredit.com/",
    images: [
      {
        url: "https://www.eazykredit.com/assets/logo.svg",
        width: 240,
        height: 60,
        alt: "EAZYKREDIT Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        {/* Navigation Header */}
        <Header />
        <ScrollToTop />

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
