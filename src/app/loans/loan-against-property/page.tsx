"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, ChevronRight, Building } from "lucide-react";
import QuickApplyForm from "@/components/QuickApplyForm";

export default function LoanAgainstProperty() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Loan Against Property</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#loans" className="hover:text-white transition-colors">Loans</Link>
            <span>/</span>
            <span className="text-white">Loan Against Property</span>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Content Column Left */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-border-color rounded-card p-6 md:p-8 shadow-premium flex flex-col gap-6"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue border-b border-border-color pb-3 flex items-center gap-3">
                <Building className="w-8 h-8 text-primary-blue shrink-0" />
                Unlock Property Value
              </h2>
              <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
                Leverage the residential, commercial, or industrial equity value of your property for low-cost secured funding. EAZYKREDIT helps you access maximum credit thresholds with long tenures and flexible repayments. Rates starting from 9.00% p.a.
              </p>

              <h3 className="font-extrabold text-xl text-dark-blue mt-4">Benefits & Features</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { title: "High Finance Ratio", desc: "Access funding up to 70% of your property's current market value." },
                  { title: "Lower Interest Costs", desc: "Highly competitive interest rates starting at just 9.00% p.a." },
                  { title: "Longer Repayment Tenures", desc: "Pay back comfortably with tenures extending up to 15 years." },
                  { title: "Commercial & Residential Allowed", desc: "Mortgage residential houses, industrial plots, or commercial retail spaces." },
                  { title: "Balance Transfer Facility", desc: "Easily shift high-rate active property loans to lower-cost lenders." }
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-gray leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <span><strong>{feat.title}:</strong> {feat.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-extrabold text-xl text-dark-blue mt-4">Eligibility Criteria</h3>
              <div className="overflow-x-auto border border-border-color rounded-lg">
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-section-bg text-dark-blue font-bold border-b border-border-color">
                      <th className="p-3">Parameters</th>
                      <th className="p-3">Salaried Individuals</th>
                      <th className="p-3">Self-Employed / MSME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Age Limit</td>
                      <td className="p-3 text-text-gray">21 to 60 Years</td>
                      <td className="p-3 text-text-gray">25 to 65 Years</td>
                    </tr>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Minimum Net Income</td>
                      <td className="p-3 text-text-gray">₹35,000 / Month</td>
                      <td className="p-3 text-text-gray">₹4.0 Lakhs ITR / Year</td>
                    </tr>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Credit Score</td>
                      <td className="p-3 text-text-gray">700+ Preferred</td>
                      <td className="p-3 text-text-gray">700+ Preferred</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-text-dark">Property Status</td>
                      <td className="p-3 text-text-gray">Clear Title Deeds, No Dispute</td>
                      <td className="p-3 text-text-gray">Clear Title Deeds, No Dispute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-extrabold text-xl text-dark-blue mt-4">Documents Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border-color p-5 rounded-lg flex flex-col gap-3 bg-section-bg/30">
                  <h4 className="font-bold text-dark-blue text-sm border-b border-border-color pb-2">For Salaried</h4>
                  <ul className="flex flex-col gap-2 text-xs text-text-gray leading-relaxed">
                    <li className="flex gap-2">✓ PAN, Aadhaar & Salary Slips</li>
                    <li className="flex gap-2">✓ 6 Months Salary Bank Statements</li>
                    <li className="flex gap-2">✓ Form 16 & Past 2 Years ITR</li>
                    <li className="flex gap-2">✓ Original Property Registry Deeds</li>
                  </ul>
                </div>
                
                <div className="border border-border-color p-5 rounded-lg flex flex-col gap-3 bg-section-bg/30">
                  <h4 className="font-bold text-dark-blue text-sm border-b border-border-color pb-2">For Self-Employed</h4>
                  <ul className="flex flex-col gap-2 text-xs text-text-gray leading-relaxed">
                    <li className="flex gap-2">✓ PAN, Aadhaar & GST Registrations</li>
                    <li className="flex gap-2">✓ 3 Years Audited Financial Files</li>
                    <li className="flex gap-2">✓ Last 12 Months Current Bank Statements</li>
                    <li className="flex gap-2">✓ Clear Property Layout Maps & NOC</li>
                  </ul>
                </div>
              </div>

              {/* Local FAQs */}
              <h3 className="font-extrabold text-xl text-dark-blue mt-6">Loan Against Property FAQs</h3>
              <div className="flex flex-col gap-3">
                {[
                  {
                    q: "What properties are accepted as collateral for LAP?",
                    a: "Lenders accept fully constructed residential houses, commercial buildings, vacant plots with clear borders, and industrial land holdings. The property must carry clear, undisputed registry title deeds and approved construction certificates."
                  },
                  {
                    q: "How does the LTV ratio vary between residential and commercial properties?",
                    a: "Residential self-occupied properties command the highest LTV (up to 65% to 70%). Commercial offices and rented retail structures generally secure LTV margins of 50% to 60%, while vacant industrial plots carry caps around 40% to 50%."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="border border-border-color rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 flex justify-between items-center cursor-pointer select-none bg-section-bg/30 hover:bg-section-bg/70"
                    >
                      <span className="font-bold text-sm text-dark-blue">{faq.q}</span>
                      <motion.div animate={{ rotate: faqOpen === idx ? 180 : 0 }}>
                        <ChevronDown className="w-4 h-4 text-primary-blue" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {faqOpen === idx && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-white text-xs md:text-sm text-text-gray p-4 border-t border-border-color"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar Right */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <QuickApplyForm loanType="Loan Against Property" />

            {/* Related Loans */}
            <div className="bg-[#071D3A] text-white p-6 rounded-card border border-white/5 shadow-premium flex flex-col gap-4">
              <h3 className="font-bold text-base border-b border-white/10 pb-3">Related Loans</h3>
              <div className="flex flex-col gap-3">
                <Link href="/loans/home-loan" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Home Loan</span>
                    <span className="text-[10px] text-[#B8C6D9]">Rates from 8.40%</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary-blue" />
                </Link>

                <Link href="/loans/business-loan" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Business Loan</span>
                    <span className="text-[10px] text-[#B8C6D9]">Rates from 11.25%</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
