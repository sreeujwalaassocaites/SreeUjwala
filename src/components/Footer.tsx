import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-[#B8C6D9] pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Logo + Location */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" light={true} />
          </div>
          <span className="text-sm mt-3 md:mt-0">Kukatpally, Hyderabad</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8">
          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#loans" className="hover:text-white transition-colors">Loans</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Loans */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Our Loans</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/loans/home-loan" className="hover:text-white transition-colors">Home Products</Link></li>
              <li><Link href="/loans/business-loan" className="hover:text-white transition-colors">Business Loans</Link></li>
              <li><Link href="/loans/loan-against-property" className="hover:text-white transition-colors">Loan Agst Property</Link></li>
              <li><Link href="/loans/car-loan" className="hover:text-white transition-colors">Car Loans</Link></li>
              <li><Link href="/loans/used-car-loan" className="hover:text-white transition-colors">Used Car Loans</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold text-sm mb-4">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" />
                <span>Plot No 572, 1st Floor, Vivekananda Nagar...</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-primary-blue shrink-0" />
                <a href="tel:+919885011157" className="hover:text-white transition-colors">+91 9885011157</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-primary-blue shrink-0" />
                <a href="mailto:info@eazykredit.in" className="hover:text-white transition-colors">info@eazykredit.in</a>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-primary-blue shrink-0" />
                <span>Monday-Saturday 9:30 AM-6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Social Media</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-blue transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} EAZYKREDIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
