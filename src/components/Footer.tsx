import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-[#B8C6D9] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Col 1 – Logo + Address */}
          <div className="flex flex-col gap-4">
            <Logo className="h-10 w-auto" light={true} />
            <p className="text-xs leading-relaxed text-[#94A3B8]">
              Plot No 572, 1st Floor,<br />
              Vivekananda Nagar,<br />
              Kukatpally, Hyderabad
            </p>
          </div>

          {/* Col 2 – Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Loans", href: "/loans/home-loan" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Our Loans */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Our Loans</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Home Loan", href: "/loans/home-loan" },
                { label: "Business Loan", href: "/loans/business-loan" },
                { label: "Personal Loan", href: "/loans/personal-loan" },
                { label: "Loan Against Property", href: "/loans/loan-against-property" },
                { label: "Car Loan", href: "/loans/car-loan" },
                { label: "Used Car Loan", href: "/loans/used-car-loan" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Get In Touch + Social */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Get In Touch</h4>
              <ul className="flex flex-col gap-3 text-xs">
                <li className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 text-[#1E88E5] shrink-0 mt-0.5" />
                  <span>Plot No 572, 1st Floor, Vivekananda Nagar...</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-[#1E88E5] shrink-0" />
                  <a href="tel:+919885011157" className="hover:text-white transition-colors">
                    +91 9885011157
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 text-[#1E88E5] shrink-0" />
                  <a href="mailto:info@eazykredit.in" className="hover:text-white transition-colors">
                    info@eazykredit.in
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-[#1E88E5] shrink-0" />
                  <span>Monday–Saturday<br />9:30 AM–6:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Social Media</h4>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88E5] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88E5] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88E5] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <p>&copy; {new Date().getFullYear()} EAZYKREDIT. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
