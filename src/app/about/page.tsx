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
      {/* Corporate Story */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <img
          src="/about.jpeg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6"
          >
            <span className="font-extrabold text-xs text-primary-blue uppercase tracking-wider">EAZYKREDIT Advisory</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Your Trusted Loan Partner Across India</h2>
            <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
              EazyKredit is a trusted loan distribution partner dedicated to making financing simple, fast, and transparent. With 15+ years of Banking and NBFC expertise, we help individuals and businesses find the right loan solutions from leading Banks and NBFCs. From consultation to disbursement, our team provides personalized guidance, competitive loan options, and end-to-end support to ensure a smooth borrowing experience.
            </p>
            <p className="text-text-gray font-medium leading-relaxed text-sm md:text-base">
              At EazyKredit, we don't just process loans—we help you make the right financial decisions with confidence.
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
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-blue fill-current"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
            </div>
            <h3 className="font-extrabold text-xl text-dark-blue">Our Vision</h3>
            <p className="text-text-gray text-sm leading-relaxed">
              To empower individuals and businesses with the right financial solutions, enabling them to achieve their dreams through seamless, ethical, and customer-first lending services
            </p>
          </motion.div>

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
              At EazyKredit, our mission is to simplify the borrowing journey by connecting customers with the most suitable loan products from leading Banks and NBFCs. We are committed to providing transparent advice, quick processing, competitive loan options, and exceptional customer service while building long-term relationships based on trust, integrity, and excellence.
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
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z" /></svg> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
