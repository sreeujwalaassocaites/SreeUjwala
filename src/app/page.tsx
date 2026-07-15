"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

const loanProducts = [
  {
    title: "Home Loans",
    desc: "Make Your Dream Home a Reality",
    slug: "home-loan",
    image: "/assets/loans/home-loan-feature.png",
  },
  {
    title: "Business Loans",
    desc: "Empowering Businesses to Grow & Expand",
    slug: "business-loan",
    image: "/assets/loans/business loan.jpeg",
  },
  {
    title: "Personal Loans",
    desc: "For Salaried Individuals to Secure Right Financing Solutions",
    slug: "personal-loan",
    image: "/assets/loans/personal_loan.jpeg",
  },
  {
    title: "Loan Against Property (LAP)",
    desc: "Unlock the Value of Your Property for Business or Personal Needs",
    slug: "loan-against-property",
    image: "/assets/loans/loan_against property.png",
  },
  {
    title: "Education Loans",
    desc: "Finance Higher Studies in India & Overseas",
    slug: "education-loan",
    image: "/assets/loans/edu_loan.png",
  },
  {
    title: "Used Car Loans",
    desc: "Finance Certified Pre-Owned Vehicles for Personal or Business Use",
    slug: "used-car-loan",
    image: "/assets/loans/used-car-loan-feature.png",
  },
];

const whyChoosePoints = [
  "15+ Years of Banking & NBFC Expertise",
  "Access to Multiple Leading Banks & NBFCs",
  "Personalized Financial Solutions",
  "Faster Processing & Professional Guidance",
  "Transparent, Ethical & Customer-First Approach",
  "End-to-End Support Until Disbursement",
];

const partnerBankLogos = [
  { name: "SBI", src: "/assets/banks/sbi.png" },
  { name: "HDFC Bank", src: "/assets/banks/hdfc.png" },
  { name: "ICICI Bank", src: "/assets/banks/icici.png" },
  { name: "Axis Bank", src: "/assets/banks/axis.png" },
  { name: "Bank of Baroda", src: "/assets/banks/bob.png" },
  { name: "Bajaj Finance", src: "/assets/banks/bajaj.png" },
  { name: "PNB Housing", src: "/assets/banks/pnb.png" },
  { name: "Tata Capital", src: "/assets/banks/tata.png" },
  { name: "Aditya Birla Capital", src: "/assets/banks/aditya-birla.png" },
  { name: "IDFC First", src: "/assets/banks/idfc.png" },
  { name: "LIC HFL", src: "/assets/banks/lic.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ── */}
      {/* calc(100vh - 105px) fills the remaining viewport below the fixed header */}
      <section className="relative w-full flex items-center overflow-hidden" style={{ height: "calc(100vh - 105px)", minHeight: 500 }}>
        {/* Background photo — full screen */}
        <Image
          src="/assets/hero-main.png"
          alt="Hero"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* subtle left-side overlay so glass card is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-[1]" />

        {/* Glass card */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-[480px] bg-white/75 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 border border-white/60">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight mb-3">
              Welcome to{" "}
              <span className="text-[#0B4F9F]">EAZY</span>
              <span className="text-[#1E88E5]">KREDIT</span>
            </h1>
            <p className="text-[#0B4F9F] font-semibold text-base mb-4">
              Your Trusted Loan Partner Across India
            </p>
            <p className="text-[#475569] text-sm leading-relaxed mb-7">
              We help individuals, professionals, and businesses access the right
              financing solutions across Hyderabad and all over India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/loans/home-loan"
                className="bg-[#1E88E5] hover:bg-[#0B4F9F] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-[#CBD5E1] text-[#0B4F9F] px-6 py-2.5 rounded-xl font-semibold text-sm hover:border-[#1E88E5] transition-colors shadow"
              >
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOAN PRODUCTS GRID ── */}
      <section className="py-16 bg-[#F0F6FF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0F172A] text-center mb-10 uppercase tracking-wide">
            OUR LOAN PRODUCTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {loanProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/loans/${product.slug}`}
                className="bg-white rounded-2xl border border-[#DBEAFE] shadow-sm hover:shadow-md hover:border-[#1E88E5] transition-all duration-300 p-6 flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-28 h-28 shrink-0 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="112px"
                    className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#0B4F9F] text-base leading-snug">{product.title}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{product.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-gradient-to-br from-[#e8f0fe] via-[#f0f6ff] to-[#dbeafe]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-[#0F172A] text-center mb-10 uppercase tracking-wide">
            WHY CHOOSE US.
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E2E8F0] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A] leading-snug mb-4">
                Banking Expertise.<br />
                Trusted Advice. Better<br />
                Financial Decisions.
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Empowering individuals and businesses with expert financial guidance, trusted banking partnerships, and exceptional customer service.
              </p>
            </div>
            {/* Right */}
            <ul className="flex flex-col gap-3">
              {whyChoosePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                  <CheckCircle2 className="w-5 h-5 text-[#1E88E5] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PARTNER WITH US ── */}
      <section id="partner-banks" className="py-16 bg-gradient-to-br from-[#0B4F9F] via-[#1565C0] to-[#1E88E5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-10 uppercase tracking-wide">
            OUR PARTNER BANKS.
          </h2>
          {/* Scrolling marquee strip */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-marquee">
              {[...partnerBankLogos, ...partnerBankLogos].map((bank, i) => (
                <div
                  key={i}
                  className="w-44 h-20 bg-white rounded-xl flex items-center justify-center px-5 mx-3 shadow-md shrink-0"
                >
                  <Image
                    src={bank.src}
                    alt={bank.name}
                    width={100}
                    height={44}
                    className="object-contain max-h-11 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
