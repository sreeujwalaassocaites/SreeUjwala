"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Heart } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      title: "Transparency",
      desc: "We declare exact interest rate structures, processing fees, and terms upfront. No hidden commissions or surprises.",
      icon: <ShieldCheck className="w-6 h-6 text-primary-blue" />
    },
    {
      title: "Integrity",
      desc: "Our advisors help you structure credit according to your financial capability, protecting you from excessive debt burden.",
      icon: <Award className="w-6 h-6 text-primary-blue" />
    },
    {
      title: "Customer First",
      desc: "We prioritize your timeline. EAZYKREDIT negotiates directly with bank credit managers to secure approvals on your terms.",
      icon: <Users className="w-6 h-6 text-primary-blue" />
    },
    {
      title: "Excellence",
      desc: "Continuous technological optimization of our credit matching systems to ensure the highest approval rates.",
      icon: <Heart className="w-6 h-6 text-primary-blue" />
    }
  ];


  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Story</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Corporate Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center"
          >
            <svg viewBox="0 0 500 400" className="w-full max-w-[440px] drop-shadow-xl select-none">
              <defs>
                <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B4F9F" />
                  <stop offset="100%" stopColor="#1E88E5" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="460" height="360" rx="12" fill="url(#aboutGrad1)" />
              <circle cx="250" cy="180" r="80" fill="#FFFFFF" opacity="0.1" />
              <path d="M 120 380 L 120 280 L 380 280 L 380 380 Z" fill="#FFFFFF" opacity="0.05" />
              
              <g transform="translate(180, 100)">
                <rect x="0" y="40" width="140" height="180" rx="8" fill="#FFFFFF" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.1))" />
                <rect x="20" y="60" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="60" y="60" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="95" y="60" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="20" y="105" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="60" y="105" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="95" y="105" width="25" height="25" rx="3" fill="#E2E8F0" />
                <rect x="50" y="160" width="40" height="60" rx="3" fill="#0B4F9F" />
                <circle cx="70" cy="90" r="15" fill="#22C55E" opacity="0.1" />
                <path d="M 65 90 L 68 93 L 75 86" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>
            </svg>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="font-extrabold text-xs text-primary-blue uppercase tracking-wider">EAZYKREDIT Advisory</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Your Trusted Loan Partner Across India</h2>
            <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
              Founded with the core goal of demystifying financial services, EAZYKREDIT acts as India's leading loan advisory and DSA platform. We resolve the core credit bottlenecks faced by individuals and corporate businesses alike.
            </p>
            <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
              By connecting borrowers directly to 25+ premium public/private banks & NBFC partners, we leverage credit data and banking relations to structure favorable tenures, minimize transaction fees, and ensure speedy cash dispersal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border-color rounded-card p-8 shadow-premium flex flex-col gap-5"
          >
            <div className="w-12 h-12 bg-primary-blue/8 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-blue fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            </div>
            <h3 className="font-extrabold text-xl text-dark-blue">Our Mission</h3>
            <p className="text-text-gray text-sm leading-relaxed">
              To enable financial progress across India by matching every customer with their ideal, low-cost credit solutions. We eliminate application errors, reduce high-interest burdens, and provide transparent advice to protect borrower interests.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border-color rounded-card p-8 shadow-premium flex flex-col gap-5"
          >
            <div className="w-12 h-12 bg-primary-blue/8 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-blue fill-current"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
            </div>
            <h3 className="font-extrabold text-xl text-dark-blue">Our Vision</h3>
            <p className="text-text-gray text-sm leading-relaxed">
              To become India's primary and most trusted digital gateway for retail mortgages and corporate MSME loans, fostering credit expansion through financial education, automated eligibility engines, and end-to-end relationship management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              Our Core Values
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              The ethical guidelines governing our interactions and bank referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-border-color rounded-card p-6 shadow-premium text-center hover:border-primary-blue hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-blue/8 rounded-full flex items-center justify-center mx-auto mb-5">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg text-dark-blue mb-2.5">{val.title}</h3>
                <p className="text-text-gray text-xs md:text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline Milestones */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              Our Journey Milestones
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              Tracking EAZYKREDIT's expansion as a trusted financial advisory partner in India.
            </p>
          </div>

          <div className="relative pt-8 pb-4">
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-border-color -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { year: "2011", title: "Founded", desc: "Started in Mumbai with 3 banking referral channels." },
                { year: "2015", title: "Going Regional", desc: "Expanded DSA activities across Bangalore, Pune and Gujarat." },
                { year: "2019", title: "Digital Portals", desc: "Launched online eligibility check and document uploads." },
                { year: "2022", title: "₹1000Cr Disbursed", desc: "Reached the landmark figure in cumulative retail disbursements." },
                { year: "2026", title: "Pan-India Reach", desc: "Connecting 25+ lenders and assisting 10,000+ borrowers." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center gap-4 bg-white lg:bg-transparent p-6 lg:p-0 rounded-card border border-border-color lg:border-none shadow-sm lg:shadow-none"
                >
                  <div className="w-16 h-16 bg-white border-[3px] border-primary-blue rounded-full flex items-center justify-center text-sm font-black text-primary-blue shadow-premium">
                    {step.year}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-bold text-base text-dark-blue">{step.title}</h4>
                    <p className="text-text-gray text-xs leading-relaxed max-w-[160px] mx-auto">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-bold">Need Help Selecting Lenders?</h2>
          <p className="text-[#B8C6D9] text-sm md:text-base leading-relaxed">
            Connect with a senior EAZYKREDIT relationship manager for immediate counseling.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-2">
            <Link 
              href="/apply" 
              className="bg-white text-dark-blue px-8 py-3 font-bold text-sm rounded-btn shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now
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
