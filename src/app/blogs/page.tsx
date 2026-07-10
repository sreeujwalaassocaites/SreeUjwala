"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function Blogs() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = ["All", "Financial Tips", "Loan Guides", "Credit Score", "EMI Education", "Tax Benefits"];

  const articles = [
    {
      id: 1,
      category: "Credit Score",
      title: "How to Increase Your CIBIL Score Above 750 Fast",
      summary: "Understand the CIBIL scoring model. Discover actionable tips on card utilization, payment schedules, and settlement updates.",
      date: "Jul 05, 2026",
      readTime: "5 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <circle cx="50" cy="50" r="45" fill="#0B4F9F" opacity="0.1" />
          <path d="M20 70 A30 30 0 0 1 80 70" fill="none" stroke="#0B4F9F" strokeWidth="6" strokeLinecap="round" />
          <line x1="50" y1="70" x2="35" y2="40" stroke="#1E88E5" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="70" r="6" fill="#0B4F9F" />
        </svg>
      )
    },
    {
      id: 2,
      category: "Loan Guides",
      title: "Home Loan Document Checklist for Indian Borrowers",
      summary: "Avoid sanction delays by preparing your income transcripts, ownership proof deeds, KYC records, and builder documents beforehand.",
      date: "Jun 28, 2026",
      readTime: "6 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <rect x="25" y="20" width="50" height="60" rx="4" fill="#0B4F9F" opacity="0.1" stroke="#0B4F9F" strokeWidth="4" />
          <line x1="35" y1="35" x2="65" y2="35" stroke="#1E88E5" strokeWidth="4" strokeLinecap="round" />
          <line x1="35" y1="48" x2="65" y2="48" stroke="#1E88E5" strokeWidth="4" strokeLinecap="round" />
          <line x1="35" y1="61" x2="55" y2="61" stroke="#1E88E5" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      category: "Financial Tips",
      title: "Secured vs Unsecured Loans: Making the Smart Choice",
      summary: "An in-depth analysis of collaterals, interest rate gaps, processing fees, and asset protection rules for retail credit.",
      date: "Jun 22, 2026",
      readTime: "4 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <circle cx="50" cy="50" r="45" fill="#0B4F9F" opacity="0.1" />
          <path d="M30 65 L40 65 M60 65 L70 65 M50 30 L50 70" stroke="#0B4F9F" strokeWidth="5" strokeLinecap="round" />
          <polygon points="50,70 30,78 70,78" fill="#1E88E5" />
        </svg>
      )
    },
    {
      id: 4,
      category: "EMI Education",
      title: "Understanding Floating vs Fixed Interest Rates",
      summary: "Floating rates fluctuate with repo margins, while fixed rates stay stable. Learn which structure saves you money in inflation cycles.",
      date: "Jun 15, 2026",
      readTime: "7 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <circle cx="50" cy="50" r="45" fill="#0B4F9F" opacity="0.1" />
          <path d="M25 65 C 35 40, 50 80, 75 35" fill="none" stroke="#1E88E5" strokeWidth="6" strokeLinecap="round" />
          <circle cx="75" cy="35" r="5" fill="#0B4F9F" />
        </svg>
      )
    },
    {
      id: 5,
      category: "Tax Benefits",
      title: "Maximizing Tax Rebates on Home Loan Repayments",
      summary: "Save up to ₹3.5 Lakhs annually on income tax calculations using Sections 80C and 24(b) deductions for self and co-applicants.",
      date: "Jun 08, 2026",
      readTime: "5 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <rect x="20" y="25" width="60" height="50" rx="6" fill="#F8FAFC" stroke="#0B4F9F" strokeWidth="4" />
          <circle cx="50" cy="50" r="12" fill="#22C55E" opacity="0.1" />
          <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#22C55E">₹</text>
        </svg>
      )
    },
    {
      id: 6,
      category: "Loan Guides",
      title: "MSME Business Loans: Key Sanction Requirements",
      summary: "Learn what lenders check in balance sheets, ITR audits, business registration dates, and GST returns before approving credit.",
      date: "Jun 01, 2026",
      readTime: "8 min read",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary-blue">
          <rect x="15" y="30" width="70" height="55" rx="4" fill="#0B4F9F" opacity="0.1" stroke="#0B4F9F" strokeWidth="4" />
          <path d="M35 15 L65 15 L65 30 L35 30 Z" fill="#1E88E5" />
          <line x1="30" y1="45" x2="70" y2="45" stroke="#0B4F9F" strokeWidth="4" />
        </svg>
      )
    }
  ];

  const filteredArticles = selectedFilter === "All"
    ? articles
    : articles.filter(a => a.category === selectedFilter);

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Financial Blogs</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blogs</span>
          </div>
        </div>
      </section>

      {/* Main Articles list */}
      <section className="max-w-7xl mx-auto w-full px-6 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 cursor-pointer ${
                selectedFilter === filter 
                  ? "bg-primary-blue border-primary-blue text-white shadow-premium" 
                  : "bg-white border-border-color text-text-gray hover:border-primary-blue"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={art.id}
                className="bg-white border border-border-color rounded-card overflow-hidden shadow-premium hover:border-primary-blue hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="h-44 bg-gradient-to-b from-[#0B4F9F]/3 to-[#1E88E5]/0 border-b border-border-color flex items-center justify-center">
                  {art.icon}
                </div>
                
                <div className="p-6 flex flex-col flex-grow gap-3">
                  <div className="flex justify-between items-center text-[10px] text-text-gray font-bold">
                    <span className="text-primary-blue uppercase">{art.category}</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-lg text-dark-blue line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  
                  <p className="text-text-gray text-xs md:text-sm leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-color/50">
                    <div className="flex items-center gap-1 text-xs text-text-gray">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                    <span className="text-xs font-bold text-primary-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center mt-12">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-bold font-sans">Have Specific Credit Questions?</h2>
          <p className="text-[#B8C6D9] text-sm md:text-base leading-relaxed">
            Our DSA advisors are ready to help you analyze your credit score and structure your loans.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-2">
            <Link 
              href="/apply" 
              className="bg-white text-dark-blue px-8 py-3 font-bold text-sm rounded-btn shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <a 
              href="https://wa.me/919885011157?text=Hello%20EAZYKREDIT%2C%20I%20would%20like%20to%20apply%20for%20a%20loan." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 font-bold text-sm rounded-btn shadow flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z"/></svg> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
