import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071D3A] text-[#B8C6D9] pt-16 pb-8 border-t-4 border-primary-blue mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/8">
        {/* About column */}
        <div className="flex flex-col gap-5">
          <Logo className="h-24 w-auto" light={true} />
          <p className="text-sm leading-relaxed">
            EAZYKREDIT is a premium financial consultancy and Loan DSA service across India. We work with leading banks and NBFCs to secure you the best-value credit packages.
          </p>
          <div className="flex gap-3 mt-2">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links column */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-primary-blue">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> About EAZYKREDIT
              </Link>
            </li>
            <li>
              <Link href="/calculators" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Loan Calculators
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Financial Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Loan Products column */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-primary-blue">
            Loan Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/loans/home-loan" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Home Loan
              </Link>
            </li>
            <li>
              <Link href="/loans/business-loan" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Business Loan
              </Link>
            </li>
            <li>
              <Link href="/loans/personal-loan" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Personal Loan
              </Link>
            </li>
            <li>
              <Link href="/loans/loan-against-property" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Loan Against Property
              </Link>
            </li>
            <li>
              <Link href="/loans/car-loan" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Car Loan
              </Link>
            </li>
            <li>
              <Link href="/loans/used-car-loan" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                <span>→</span> Used Car Loan
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-primary-blue">
            Contact Details
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary-blue shrink-0 mt-1" />
              <span>Central Business District, Bandra Kurla Complex, Mumbai, Maharashtra 400051</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-primary-blue shrink-0" />
              <a href="tel:+919885011157" className="hover:text-white transition-colors">
                +91 98850 11157
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-primary-blue shrink-0" />
              <a href="mailto:info@eazykredit.com" className="hover:text-white transition-colors">
                info@eazykredit.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} EAZYKREDIT. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 mt-6 border-t border-white/8 text-[10px] text-text-gray/80 leading-relaxed text-justify">
        <strong>Disclaimer:</strong> EAZYKREDIT is a loan consultancy/referral partner (DSA). We do not issue credit directly. Loan approvals, rates, tenures, and final disbursements are subject to credit scores, internal checks, and the sole discretion of our partner banks and financial lenders.
      </div>
    </footer>
  );
}
