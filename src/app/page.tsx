"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const loanProducts = [
    {
      title: "Home Loans",
      desc: "Make your dream home a reality with competitive rates starting at 8.40% p.a.",
      icon: "/assets/loans/home-loan-feature.png",
      slug: "home-loan",
    },
    {
      title: "Business Loans",
      desc: "Fuel your business growth with quick approvals and flexible repayment options.",
      icon: "/assets/loans/business-loan-feature.png",
      slug: "business-loan",
    },
    {
      title: "Personal Loans",
      desc: "Instant personal loans for salaried individuals with minimal documentation.",
      icon: "/assets/loans/personal-loan-feature.png",
      slug: "personal-loan",
    },
    {
      title: "Loan Against Property (LAP)",
      desc: "Unlock the value of your property to meet your financial needs.",
      icon: "/assets/loans/lap-feature.png",
      slug: "loan-against-property",
    },
    {
      title: "Car Loans",
      desc: "Drive home your dream car with low interest rates and easy EMIs.",
      icon: "/assets/loans/car-loan-feature.png",
      slug: "car-loan",
    },
    {
      title: "Used Car Loans",
      desc: "Finance certified pre-owned vehicles at affordable rates.",
      icon: "/assets/loans/used-car-loan-feature.png",
      slug: "used-car-loan",
    },
  ];

  const whyChooseUs = [
    "15+ Years of Banking & NBFC Expertise",
    "Access to Multiple Leading Banks & NBFCs",
    "Personalized Financial Solutions",
    "Faster Processing & Professional Guidance",
    "Transparent, Ethical & Customer-First Approach",
    "End-to-End Support Until Disbursement",
  ];

  const partnerBanks = [
    { name: "SBI", src: "/assets/banks/sbi.png" },
    { name: "HDFC Bank", src: "/assets/banks/hdfc.png" },
    { name: "ICICI Bank", src: "/assets/banks/icici.png" },
    { name: "Axis Bank", src: "/assets/banks/axis.png" },
    { name: "Bank of Baroda", src: "/assets/banks/bob.png" },
    { name: "Bajaj Finance", src: "/assets/banks/bajaj.png" },
    { name: "PNB Housing", src: "/assets/banks/pnb.png" },
    { name: "Tata Capital", src: "/assets/banks/tata.png" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden h-[550px] md:h-[600px]">
        {/* Background image */}
        <img
          src="/assets/hero-couple.png"
          alt="Happy couple with laptop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          {/* Glass Card */}
          <div className="hero-glass rounded-3xl p-8 md:p-10 max-w-md">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F] leading-tight">
              Welcome to <span className="text-[#1E88E5]">EAZYKREDIT</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-[#0B4F9F] mt-2">
              Your Trusted Loan Partner Across India
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              We help individuals, professionals, and businesses access the right financing solutions, to anitlimd iron Hyderation.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/apply"
                className="bg-[#1E88E5] text-white px-7 py-3 font-bold text-sm rounded-full shadow-md hover:bg-[#0B4F9F] transition-all text-center w-fit"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="bg-white border-2 border-[#0B4F9F] text-[#0B4F9F] px-7 py-3 font-bold text-sm rounded-full hover:bg-gray-50 transition-all text-center w-fit"
              >
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LOAN PRODUCTS GRID */}
      <section className="relative py-20 overflow-hidden" id="loans">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#c7d2fe]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#93c5fd] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#a5b4fc] rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F]">
              OUR LOAN PRODUCTS
            </h2>
            <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
              Explore our wide range of loan solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/loans/${product.slug}`}
                className="group bg-white/60 backdrop-blur-md border border-white/70 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(31,38,135,0.1)] hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(31,38,135,0.18)] transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#dbeafe] to-[#e0f2fe] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={product.icon}
                    alt={product.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-extrabold text-lg text-[#0B4F9F]">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                <span className="text-[#1E88E5] text-xs font-bold mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#e0f2fe]" />
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#93c5fd] rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#a5b4fc] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F] text-center mb-12">
            WHY CHOOSE US.
          </h2>

          <div className="glass-card rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B4F9F] leading-tight">
                Banking Expertise. Trusted Advice. Better Financial Decisions.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We do more than help you get a loan—we help you choose the right loan.
              </p>
            </div>

            {/* Right - Bullet Points */}
            <div className="flex flex-col gap-3">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E88E5] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#0B4F9F]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="relative py-16 overflow-hidden" id="partner-banks">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#dbeafe]" />
        <div className="absolute top-10 left-1/2 w-80 h-80 bg-[#93c5fd] rounded-full opacity-20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F] text-center mb-8">
            PARTNER WITH US.
          </h2>

          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B4F9F] mb-8">
              Partnered with Leading Banks & NBFCs Across India...
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-6">
              {partnerBanks.map((bank, idx) => (
                <div
                  key={idx}
                  className="w-24 h-16 flex items-center justify-center"
                >
                  <img
                    src={bank.src}
                    alt={bank.name}
                    className="max-h-12 max-w-full object-contain"
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
