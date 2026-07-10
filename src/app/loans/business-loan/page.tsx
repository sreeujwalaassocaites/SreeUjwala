"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, ChevronRight, Building2 } from "lucide-react";
import QuickApplyForm from "@/components/QuickApplyForm";

export default function BusinessLoan() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Business Loan</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#loans" className="hover:text-white transition-colors">Loans</Link>
            <span>/</span>
            <span className="text-white">Business Loan</span>
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
                <Building2 className="w-8 h-8 text-primary-blue shrink-0" />
                Corporate & MSME Capital
              </h2>
              <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
                EAZYKREDIT provides swift corporate finance and unsecured working capital loans designed to support micro, small, and medium enterprises (MSMEs). Avoid complex bank visits; we negotiate customized rates starting from 11.25% p.a. to help you manage seasonal demand or execute upgrades.
              </p>

              <h3 className="font-extrabold text-xl text-dark-blue mt-4">Benefits & Features</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { title: "No Collateral Required", desc: "Unsecured business financing up to ₹75 Lakhs." },
                  { title: "Quick Sanction Time", desc: "Fast digital audit allows approvals within 48 hours." },
                  { title: "Flexible Repayment", desc: "Easy EMI programs structured over tenures of 12 to 60 months." },
                  { title: "Tax Deductions", desc: "Reclaimed interest paid on commercial business loans as tax-exempt deductions." },
                  { title: "Minimal Credit Score Bias", desc: "Access secondary NBFC lenders if prime banking CIBIL thresholds are not met." }
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
                      <th className="p-3">MSME / Proprietary Firms</th>
                      <th className="p-3">Private Limited / Partnership</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Age Limit</td>
                      <td className="p-3 text-text-gray">25 to 65 Years</td>
                      <td className="p-3 text-text-gray">25 to 65 Years</td>
                    </tr>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Annual Turnover</td>
                      <td className="p-3 text-text-gray">Min. ₹15 Lakhs / Year</td>
                      <td className="p-3 text-text-gray">Min. ₹25 Lakhs / Year</td>
                    </tr>
                    <tr className="border-b border-border-color">
                      <td className="p-3 font-bold text-text-dark">Minimum ITR</td>
                      <td className="p-3 text-text-gray">₹3.0 Lakhs / Year</td>
                      <td className="p-3 text-text-gray">₹5.0 Lakhs / Year</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-text-dark">Business Vintage</td>
                      <td className="p-3 text-text-gray">Min. 3 Years operating history</td>
                      <td className="p-3 text-text-gray">Min. 3 Years operating history</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-extrabold text-xl text-dark-blue mt-4">Documents Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border-color p-5 rounded-lg flex flex-col gap-3 bg-section-bg/30">
                  <h4 className="font-bold text-dark-blue text-sm border-b border-border-color pb-2">For Proprietary / MSME</h4>
                  <ul className="flex flex-col gap-2 text-xs text-text-gray leading-relaxed">
                    <li className="flex gap-2">✓ PAN Card of Owner & Business</li>
                    <li className="flex gap-2">✓ Aadhaar Card of Owner</li>
                    <li className="flex gap-2">✓ Last 12 Months Current Bank Statements</li>
                    <li className="flex gap-2">✓ GST Registration & Returns</li>
                  </ul>
                </div>
                
                <div className="border border-border-color p-5 rounded-lg flex flex-col gap-3 bg-section-bg/30">
                  <h4 className="font-bold text-dark-blue text-sm border-b border-border-color pb-2">For Pvt Ltd / Partners</h4>
                  <ul className="flex flex-col gap-2 text-xs text-text-gray leading-relaxed">
                    <li className="flex gap-2">✓ Incorporation & GST Certificates</li>
                    <li className="flex gap-2">✓ Partnership Deed / MOA & AOA</li>
                    <li className="flex gap-2">✓ 3 Years Audited Financials & ITR</li>
                    <li className="flex gap-2">✓ Last 12 Months Audited Bank Accounts</li>
                  </ul>
                </div>
              </div>

              {/* Local FAQs */}
              <h3 className="font-extrabold text-xl text-dark-blue mt-6">Business Loan FAQs</h3>
              <div className="flex flex-col gap-3">
                {[
                  {
                    q: "What are the primary differences between secured and unsecured business loans?",
                    a: "Unsecured business loans do not require any collateral or property pledge, offering faster sanctions but slightly higher rates. Secured business loans require asset mortgages (like land or machinery) which provides lower rates and much larger capital limits."
                  },
                  {
                    q: "How does EAZYKREDIT calculate business eligibility?",
                    a: "Eligibility is calculated based on annual sales turnover, business profitability history (ITR Computation), existing EMI obligations, and your corporate/promoter CIBIL rating."
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
            <QuickApplyForm loanType="Business Loan" />

            {/* Related Loans */}
            <div className="bg-[#071D3A] text-white p-6 rounded-card border border-white/5 shadow-premium flex flex-col gap-4">
              <h3 className="font-bold text-base border-b border-white/10 pb-3">Related Loans</h3>
              <div className="flex flex-col gap-3">
                <Link href="/loans/loan-against-property" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Loan Against Property</span>
                    <span className="text-[10px] text-[#B8C6D9]">Rates from 9.00%</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary-blue" />
                </Link>

                <Link href="/loans/personal-loan" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Personal Loan</span>
                    <span className="text-[10px] text-[#B8C6D9]">Rates from 10.49%</span>
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
