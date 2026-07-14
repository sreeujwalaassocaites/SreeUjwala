"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, Users, Heart } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      title: "Transparency",
      desc: "We declare exact interest rate structures, processing fees, and terms upfront. No hidden commissions or surprises.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1E88E5]" />,
    },
    {
      title: "Integrity",
      desc: "Our advisors help you structure credit according to your financial capability, protecting you from excessive debt burden.",
      icon: <Award className="w-6 h-6 text-[#1E88E5]" />,
    },
    {
      title: "Customer First",
      desc: "We prioritize your timeline. EAZYKREDIT negotiates directly with bank credit managers to secure approvals on your terms.",
      icon: <Users className="w-6 h-6 text-[#1E88E5]" />,
    },
    {
      title: "Excellence",
      desc: "Continuous technological optimization of our credit matching systems to ensure the highest approval rates.",
      icon: <Heart className="w-6 h-6 text-[#1E88E5]" />,
    },
  ];

  const milestones = [
    { year: "2011", title: "Founded", desc: "Started in Mumbai with 3 banking referral channels." },
    { year: "2015", title: "Going Regional", desc: "Expanded DSA activities across Bangalore, Pune and Gujarat." },
    { year: "2019", title: "Digital Portals", desc: "Launched online eligibility check and document uploads." },
    { year: "2022", title: "₹1000Cr Disbursed", desc: "Reached the landmark figure in cumulative retail disbursements." },
    { year: "2026", title: "Pan-India Reach", desc: "Connecting lenders and assisting 10,000+ borrowers." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#c7d2fe]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#93c5fd] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#a5b4fc] rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B4F9F]">Our Story</h1>
          <div className="flex justify-center items-center gap-2 text-sm font-semibold text-[#0B4F9F]/60 mt-3">
            <Link href="/" className="hover:text-[#1E88E5] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0B4F9F]">About Us</span>
          </div>
        </div>
      </section>

      {/* CORPORATE STORY */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#e0f2fe]" />
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#93c5fd] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <span className="font-extrabold text-xs text-[#1E88E5] uppercase tracking-wider">EAZYKREDIT Advisory</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B4F9F]">Your Trusted Loan Partner Across India</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded with the core goal of demystifying financial services, EAZYKREDIT acts as India&apos;s leading loan advisory and DSA platform. We resolve the core credit bottlenecks faced by individuals and corporate businesses alike.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                By connecting borrowers directly to premium public/private banks & NBFC partners, we leverage credit data and banking relations to structure favorable tenures, minimize transaction fees, and ensure speedy cash dispersal.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[300px] aspect-square bg-gradient-to-br from-[#0B4F9F] to-[#1E88E5] rounded-2xl flex items-center justify-center">
                <span className="text-white text-6xl font-black">EK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#c7d2fe]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#a5b4fc] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-xl text-[#0B4F9F]">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To enable financial progress across India by matching every customer with their ideal, low-cost credit solutions. We eliminate application errors, reduce high-interest burdens, and provide transparent advice to protect borrower interests.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-xl text-[#0B4F9F]">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become India&apos;s primary and most trusted digital gateway for retail mortgages and corporate MSME loans, fostering credit expansion through financial education, automated eligibility engines, and end-to-end relationship management.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#e0f2fe]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#93c5fd] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#a5b4fc] rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F] text-center mb-12">
            OUR CORE VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg text-[#0B4F9F]">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY MILESTONES */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#dbeafe]" />
        <div className="absolute top-10 left-1/2 w-80 h-80 bg-[#93c5fd] rounded-full opacity-20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4F9F] text-center mb-12">
            OUR JOURNEY MILESTONES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((step, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/50 border-2 border-[#1E88E5] rounded-full flex items-center justify-center text-sm font-black text-[#0B4F9F]">
                  {step.year}
                </div>
                <h4 className="font-bold text-sm text-[#0B4F9F]">{step.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#c7d2fe]" />
        <div className="absolute top-10 right-10 w-60 h-60 bg-[#93c5fd] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B4F9F]">Need Help Selecting Lenders?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connect with a senior EAZYKREDIT relationship manager for immediate counseling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="bg-[#1E88E5] text-white px-7 py-3 font-bold text-sm rounded-full shadow-md hover:bg-[#0B4F9F] transition-all"
              >
                Apply Now
              </Link>
              <a
                href="https://wa.me/919885011157?text=Hello%20EAZYKREDIT%2C%20I%20would%20like%20to%20apply%20for%20a%20loan."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-7 py-3 font-bold text-sm rounded-full shadow-md hover:bg-[#20ba5a] transition-all flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
