import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ShieldCheck } from "lucide-react";
import { IS_PRODUCTION } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] pb-6 pt-12 text-[#B8C6D9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo className="h-10 w-auto" light />
            <p className="text-xs leading-relaxed text-[#94A3B8]">
              Plot No 572, 1st Floor,<br />
              Vivekananda Nagar,<br />
              Kukatpally, Hyderabad
            </p>
            <div className="flex gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-[10px] leading-relaxed text-[#94A3B8]">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1E88E5]" />
              <span>
                Loan facilitation only. Final eligibility, pricing and approval are determined by the lender.
              </span>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Navigation</h2>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Loans", href: "/loans/home-loan" },
                { label: "Apply", href: "/apply" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Loans</h2>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Home Loan", href: "/loans/home-loan" },
                { label: "Business Loan", href: "/loans/business-loan" },
                { label: "Personal Loan", href: "/loans/personal-loan" },
                { label: "Loan Against Property", href: "/loans/loan-against-property" },
                { label: "Education Loan", href: "/loans/education-loan" },
                { label: "Used Car Loan", href: "/loans/used-car-loan" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Get In Touch</h2>
              <ul className="flex flex-col gap-3 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E88E5]" />
                  <span>Plot No 572, 1st Floor, Vivekananda Nagar, Kukatpally, Hyderabad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#1E88E5]" />
                  <a href="tel:+919885011157" className="transition-colors hover:text-white">
                    +91 98850 11157
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#1E88E5]" />
                  <a href="mailto:info@eazykredit.in" className="transition-colors hover:text-white">
                    info@eazykredit.in
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#1E88E5]" />
                  <span>Monday–Saturday<br />9:30 AM–6:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Social Media</h2>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/19337UrrLU/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1E88E5]">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/eazykreditt?igsh=MXA2ZWFlM3podHlmcg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1E88E5]">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://youtube.com/@eazykredit?si=1IB1G-RwGgwprWVz" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1E88E5]">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-[#64748B] md:flex-row">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} EAZYKREDIT. All Rights Reserved.</p>
            {!IS_PRODUCTION && (
              <p className="mt-1 font-semibold text-amber-300">Private demonstration environment — not the production website.</p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="transition-colors hover:text-white">Loan &amp; Security Disclaimer</Link>
            <span className="hidden text-white/20 md:inline">|</span>
            <span>
              Developed by{" "}
              <a href="https://www.instagram.com/staffarc?igsh=NGI1ajBjank5aWF3" target="_blank" rel="noopener noreferrer" className="font-bold text-primary-blue transition-colors hover:text-white">
                StaffArc
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
