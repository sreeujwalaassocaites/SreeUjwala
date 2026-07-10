"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  FileText, 
  Users, 
  Search, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  ChevronDown, 
  Percent, 
  Building2, 
  DollarSign 
} from "lucide-react";

// --- Custom Count-Up Counter Component ---
function Counter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const end = target;
        if (start === end) return;
        
        const totalMiliseconds = duration * 1000;
        const stepTime = 20;
        const totalSteps = totalMiliseconds / stepTime;
        const increment = Math.ceil(end / totalSteps);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, stepTime);
      }}
    >
      {count}
    </motion.span>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);


  const features = [
    {
      title: "Multiple Bank Comparison",
      desc: "We analyze credit offers from 25+ top public, private, and NBFC lenders in India side-by-side.",
      icon: <Search className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Lowest Interest Guidance",
      desc: "Expert support to locate and select the lowest annual rates for your unique financial profile.",
      icon: <Percent className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Quick Processing",
      desc: "Super-fast digital verification and quick approval turnaround with our partner bank integrations.",
      icon: <Clock className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Minimal Documentation",
      desc: "Paperless upload processes and direct assistance to verify only essential proof documents.",
      icon: <FileText className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Professional Advisors",
      desc: "Our senior banking consultants guide you step-by-step from inquiry to successful disbursement.",
      icon: <Users className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Transparent Process",
      desc: "Zero hidden charges, zero broker markups. Complete visibility at each step of your loan pipeline.",
      icon: <ShieldCheck className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "End-to-End Support",
      desc: "From initial eligibility assessment to post-disbursal support, EAZYKREDIT manages it all.",
      icon: <Award className="w-7 h-7 text-primary-blue" />
    },
    {
      title: "Dedicated Relationship Manager",
      desc: "Direct priority line to an assigned manager who keeps you informed via calls and WhatsApp updates.",
      icon: <TrendingUp className="w-7 h-7 text-primary-blue" />
    }
  ];

  const products = [
    {
      title: "Home Loan",
      slug: "home-loan",
      rate: "Starting from 8.40% p.a.",
      desc: "Fulfill your dream of homeownership with flexible tenures and swift processing.",
      features: ["Up to 30 Years Tenure", "Nil Prepayment Charges", "90% LTV Financing"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <polygon points="50,15 90,50 80,50 80,85 20,85 20,50 10,50" fill="#0B4F9F" />
          <rect x="42" y="55" width="16" height="30" fill="#42A5F5" />
          <rect x="58" y="28" width="10" height="20" fill="#1E88E5" />
        </svg>
      )
    },
    {
      title: "Business Loan",
      slug: "business-loan",
      rate: "Starting from 11.25% p.a.",
      desc: "Fuel corporate growth, stock inventory, or fund expansions with unsecured and secured loans.",
      features: ["Unsecured up to ₹75 Lakhs", "48 Hour Approvals", "Minimal Credit Record"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="15" y="30" width="70" height="55" rx="4" fill="#0B4F9F" />
          <rect x="35" y="15" width="30" height="15" rx="3" fill="#1E88E5" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="55" r="10" fill="#42A5F5" />
          <path d="M45 55 L55 55 M50 50 L50 60" stroke="#FFFFFF" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: "Personal Loan",
      slug: "personal-loan",
      rate: "Starting from 10.49% p.a.",
      desc: "Immediate collateral-free capital for weddings, emergencies, travel, or medical bills.",
      features: ["No Security Required", "Multi-bank Options", "Disbursal in 24 Hours"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <circle cx="50" cy="30" r="18" fill="#0B4F9F" />
          <path d="M20 85 C20 62 80 62 80 85 Z" fill="#1E88E5" />
          <circle cx="50" cy="85" r="15" fill="#42A5F5" />
        </svg>
      )
    },
    {
      title: "Loan Against Property",
      slug: "loan-against-property",
      rate: "Starting from 9.00% p.a.",
      desc: "Leverage the residential or commercial equity value of your property for low-cost funding.",
      features: ["Up to 70% Property Value", "Lower EMIs, Longer Tenure", "Easy Loan Balance Transfer"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <polygon points="35,20 75,50 65,50 65,85 20,85 20,50 10,50" fill="#0B4F9F" />
          <rect x="50" y="30" width="35" height="25" rx="3" fill="#1E88E5" />
        </svg>
      )
    },
    {
      title: "Car Loan",
      slug: "car-loan",
      rate: "Starting from 8.75% p.a.",
      desc: "Finance your brand new vehicle with custom options, low down-payment schemes, and approvals.",
      features: ["Up to 100% On-road Funding", "Flexible Tenure (Up to 7 Yrs)", "Low Processing Fee"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="15" y="45" width="70" height="25" rx="6" fill="#0B4F9F" />
          <path d="M25 45 L35 25 L65 25 L75 45 Z" fill="#1E88E5" />
          <circle cx="30" cy="70" r="10" fill="#42A5F5" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="70" cy="70" r="10" fill="#42A5F5" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Used Car Loan",
      slug: "used-car-loan",
      rate: "Starting from 11.50% p.a.",
      desc: "Purchase a certified pre-owned car with seamless transfer of ownership and flexible finance.",
      features: ["Funding up to 85% Value", "Easy RC Transfer Assistance", "Quick Evaluation Engine"],
      icon: (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="15" y="45" width="70" height="25" rx="6" fill="#1E88E5" />
          <path d="M25 45 L35 25 L65 25 L75 45 Z" fill="#0B4F9F" />
          <circle cx="30" cy="70" r="10" fill="#42A5F5" />
          <circle cx="70" cy="70" r="10" fill="#42A5F5" />
        </svg>
      )
    }
  ];

  const timelineSteps = [
    { num: 1, title: "Apply Online", desc: "Submit basic parameters on our secure portal." },
    { num: 2, title: "Eligibility Check", desc: "Our intelligent algorithms calculate your limits." },
    { num: 3, title: "Compare Banks", desc: "Choose the optimal rate and loan structure." },
    { num: 4, title: "Documentation", desc: "Upload files digitally with advisor help." },
    { num: 5, title: "Approval", desc: "Get formal sanction from the selected lender." },
    { num: 6, title: "Disbursement", desc: "Capital is direct-credited to your account." }
  ];

  const partnerBanks = [
    { name: "HDFC BANK", color: "#004C8F" },
    { name: "STATE BANK OF INDIA", color: "#00B1EC" },
    { name: "AXIS BANK", color: "#97144D" },
    { name: "ICICI BANK", color: "#F58220" },
    { name: "CANARA BANK", color: "#0088CC" },
    { name: "BANK OF BARODA", color: "#F05A28" },
    { name: "IDFC FIRST", color: "#9C1F2E" },
    { name: "KOTAK MAHINDRA", color: "#E61C24" },
    { name: "LIC HFL", color: "#00438F" },
    { name: "TATA CAPITAL", color: "#007788" },
    { name: "BAJAJ FINANCE", color: "#003366" },
    { name: "PNB HOUSING", color: "#ED1C24" }
  ];



  const faqs = [
    {
      q: "What is a Loan DSA and how does EAZYKREDIT help?",
      a: "A Direct Selling Agent (DSA) acts as an authorized referral partner for banks. EAZYKREDIT is a professional national DSA and loan advisor. We analyze your credit requirements and match you with the best rates from 25+ major partner banks, managing the entire application, document upload, and bank negotiation processes for you."
    },
    {
      q: "Do I have to pay any service charge to EAZYKREDIT?",
      a: "No. EAZYKREDIT provides completely free loan advisory services to borrowers. We receive our payouts directly from the banks and NBFCs upon successful disbursal of your loan. There are absolutely no hidden fees or charges for our consultations."
    },
    {
      q: "What is the minimum credit score required for retail loans?",
      a: "For home and personal loans, banks generally prefer a CIBIL score of 700 or above to offer the lowest interest rates. However, if your score is lower, our financial advisors can help structure your application with co-applicants or locate specialized NBFCs that offer loans with customized criteria."
    },
    {
      q: "How long does the loan approval process take?",
      a: "Unsecured loans like Personal and Business Loans can get sanctioned in 24 to 48 hours. Secured loans such as Home Loans and Loans Against Property require legal and technical evaluation of the properties, which usually takes 5 to 10 working days, depending on documentation."
    },
    {
      q: "Can I transfer my existing high-interest loan to EAZYKREDIT's partner banks?",
      a: "Yes. We specialize in Home Loan and LAP Balance Transfers. Our advisors will calculate the overall financial benefit of shifting your loan and coordinate the transition to a lower-interest lender, saving you substantial money over your loan tenure."
    }
  ];

  const whatsappLink = "https://wa.me/919885011157?text=Hello%20EAZYKREDIT%2C%20I%20would%20like%20to%20apply%20for%20a%20loan.";

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-section-bg via-white to-blue-50/20 pt-16 pb-24 md:py-32">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-light-blue/10 blur-[80px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-blue/5 blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-blue leading-tight">
              Get the Right Loan with India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F9F] to-[#1E88E5]">Trusted Banking Experts</span>
            </h1>
            <p className="text-text-gray text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Helping individuals and businesses secure Home Loans, Business Loans, Personal Loans, Car Loans, Used Car Loans and Loan Against Property through India's leading Banks & NBFCs.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link 
                href="/apply" 
                className="bg-gradient-to-r from-dark-blue to-primary-blue text-white px-8 py-3.5 font-bold text-sm rounded-btn shadow-md hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link 
                href="/contact" 
                className="bg-white border border-border-color text-dark-blue px-8 py-3.5 font-bold text-sm rounded-btn shadow-sm hover:border-primary-blue hover:-translate-y-0.5 transition-all duration-300"
              >
                Talk to Expert
              </Link>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 font-bold text-sm rounded-btn shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z"/></svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Vector Illustration */}
            <svg viewBox="0 0 500 400" className="w-full max-w-[450px] drop-shadow-2xl z-10 select-none">
              <defs>
                <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B4F9F" />
                  <stop offset="100%" stopColor="#1E88E5" />
                </linearGradient>
                <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E88E5" />
                  <stop offset="100%" stopColor="#42A5F5" />
                </linearGradient>
              </defs>
              <g opacity="0.3">
                <circle cx="250" cy="200" r="180" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="10 5" />
                <circle cx="250" cy="200" r="130" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
              </g>

              {/* Corporate structure */}
              <rect x="60" y="240" width="120" height="90" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <polygon points="50,240 120,185 190,240" fill="url(#heroGrad1)" />
              <rect x="85" y="275" width="20" height="55" rx="3" fill="#0B4F9F" />
              <rect x="135" y="275" width="20" height="55" rx="3" fill="#0B4F9F" />
              <line x1="70" y1="240" x2="170" y2="240" stroke="#0B4F9F" strokeWidth="4" />

              {/* Homeowner representation */}
              <g transform="translate(290, 160)">
                <rect x="10" y="50" width="130" height="120" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <polygon points="0,50 75,10 150,50" fill="url(#heroGrad2)" />
                <rect x="35" y="80" width="25" height="25" rx="2" fill="#E2E8F0" />
                <rect x="90" y="80" width="25" height="25" rx="2" fill="#E2E8F0" />
                <rect x="60" y="125" width="30" height="45" rx="2" fill="#0B4F9F" />
                
                {/* Advisor & borrower outlines */}
                <circle cx="-30" cy="130" r="12" fill="#1E88E5" />
                <path d="M-45 170 C-45 150 -15 150 -15 170 Z" fill="#1E88E5" />
                <circle cx="-10" cy="135" r="10" fill="#42A5F5" />
                <path d="M-22 170 C-22 153 2 153 2 170 Z" fill="#42A5F5" />
              </g>

              {/* Success graph indicator */}
              <path d="M 50 350 L 140 270 L 220 300 L 310 220 L 400 250 L 460 160" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="460" cy="160" r="7" fill="#22C55E" />
            </svg>

            {/* Floating Micro-cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 left-0 bg-white/90 backdrop-blur border border-border-color p-3 rounded-card shadow-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-text-dark">Loan Approved</span>
                <span className="text-[10px] text-text-gray">Instant Disbursal</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-12 right-0 bg-white/90 backdrop-blur border border-border-color p-3 rounded-card shadow-md flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center font-bold text-sm text-primary-blue">
                %
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-text-dark">8.40% p.a.</span>
                <span className="text-[10px] text-text-gray">Lowest Rate Offer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS SECTION */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl md:text-5xl font-extrabold">
              <Counter target={15} />+
            </h3>
            <p className="text-[#B8C6D9] text-xs md:text-sm font-semibold uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl md:text-5xl font-extrabold">
              <Counter target={25} />+
            </h3>
            <p className="text-[#B8C6D9] text-xs md:text-sm font-semibold uppercase tracking-wider">Partner Lenders</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl md:text-5xl font-extrabold">
              <Counter target={10000} />+
            </h3>
            <p className="text-[#B8C6D9] text-xs md:text-sm font-semibold uppercase tracking-wider">Customers Assisted</p>
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase">Fast</h3>
            <p className="text-[#B8C6D9] text-xs md:text-sm font-semibold uppercase tracking-wider">Loan Approval</p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE EAZYKREDIT */}
      <section className="py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              Why Choose EAZYKREDIT
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              We work as your corporate advisor to negotiate lower interest rates, structure repayment cycles, and take care of bank paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8, boxShadow: "var(--shadow-premium-hover)" }}
                className="bg-white border border-border-color rounded-card p-6 shadow-premium transition-all duration-300 group hover:border-light-blue"
              >
                <div className="w-12 h-12 bg-primary-blue/8 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary-blue group-hover:text-white">
                  {React.cloneElement(feature.icon, {
                    className: "w-6 h-6 text-primary-blue transition-colors duration-300 group-hover:text-white"
                  })}
                </div>
                <h3 className="font-bold text-lg text-dark-blue mb-2.5">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOAN PRODUCTS */}
      <section className="py-24 bg-white" id="loans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              Our Loan Products
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              Custom finance structures designed for retail house buyers, MSMEs, and car purchasers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white border border-border-color rounded-card overflow-hidden shadow-premium hover:border-light-blue hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="h-44 bg-gradient-to-b from-[#0B4F9F]/3 to-[#1E88E5]/0 border-b border-border-color flex items-center justify-center p-8">
                  {p.icon}
                </div>
                
                <div className="p-8 flex flex-col flex-grow gap-4">
                  <div className="self-start bg-[#22C55E]/8 px-3 py-1 rounded text-xs font-bold text-[#22C55E] uppercase tracking-wider">
                    {p.rate}
                  </div>
                  <h3 className="font-extrabold text-xl text-dark-blue">{p.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">{p.desc}</p>
                  
                  <ul className="flex flex-col gap-2 my-2">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-text-gray font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
                    <Link 
                      href={`/apply?loan=${encodeURIComponent(p.title)}`}
                      className="bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center py-2.5 text-xs font-bold rounded-btn shadow hover:shadow-md transition-shadow"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href={`/loans/${p.slug}`}
                      className="bg-white border border-border-color text-center py-2.5 text-xs font-bold text-dark-blue rounded-btn hover:border-primary-blue transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-section-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              How It Works
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              A transparent, simple roadmap showing your journey from online inquiry to bank disbursal.
            </p>
          </div>

          <div className="relative pt-8 pb-4">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-border-color -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 bg-white lg:bg-transparent p-6 lg:p-0 rounded-card border border-border-color lg:border-none shadow-sm lg:shadow-none"
                >
                  <div className="w-12 h-12 bg-white border-[3px] border-primary-blue rounded-full flex items-center justify-center text-lg font-bold text-primary-blue shadow-premium">
                    {step.num}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-bold text-base text-dark-blue">{step.title}</h4>
                    <p className="text-text-gray text-xs leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CUSTOMERS TRUST US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <svg viewBox="0 0 500 400" className="w-full max-w-[420px] drop-shadow-xl select-none">
              <rect x="60" y="60" width="380" height="280" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 60 125 L 440 125" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="90" cy="92" r="7" fill="#FF5F56" />
              <circle cx="110" cy="92" r="7" fill="#FFBD2E" />
              <circle cx="130" cy="92" r="7" fill="#27C93F" />
              
              <rect x="90" y="150" width="320" height="20" rx="4" fill="#0B4F9F" opacity="0.8" />
              <rect x="90" y="195" width="220" height="15" rx="3" fill="#E2E8F0" />
              <rect x="90" y="225" width="260" height="15" rx="3" fill="#E2E8F0" />
              <rect x="90" y="255" width="190" height="15" rx="3" fill="#E2E8F0" />
              
              <circle cx="250" cy="230" r="40" fill="#1E88E5" opacity="0.1" />
              <path d="M 235 230 L 245 240 L 265 220" stroke="#1E88E5" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Why Customers Trust Us</h2>
            <p className="text-text-gray font-medium leading-relaxed">
              We operate under absolute transparency. We do not charge borrowers any brokerage fees. Our payouts come directly from financial institutions, guaranteeing direct bank pricing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {[
                { title: "Professional Banking Experts", desc: "Advisors with decades of retail lending experience." },
                { title: "Transparent Advice", desc: "Direct rate facts with zero underlying brokerage agendas." },
                { title: "Fast Processing", desc: "Approved API systems that bypass long lender waiting pipelines." },
                { title: "Personalized Solutions", desc: "EMI programs customized for specific corporate cashflows." },
                { title: "Lowest Interest Guidance", desc: "We actively negotiate with banks to bring your rate down." },
                { title: "Strong Banking Network", desc: "Partnerships with all top-tier public, private banks & NBFCs." }
              ].map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 bg-primary-blue/8 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-bold text-base text-dark-blue leading-snug">{point.title}</h4>
                    <p className="text-text-gray text-xs leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. PARTNER BANKS */}
      <section className="py-16 bg-white border-t border-b border-border-color overflow-hidden" id="partner-banks">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-dark-blue uppercase tracking-wider">Our Partner Banks</h2>
        </div>

        <div className="relative w-full flex items-center">
          <div className="animate-scroll-marquee py-2">
            {/* First Set */}
            {partnerBanks.map((bank, idx) => (
              <div 
                key={`bank-1-${idx}`} 
                className="w-52 h-20 bg-white border border-border-color rounded-lg flex items-center justify-center px-4 mx-4 shadow-sm hover:border-primary-blue hover:shadow-premium transition-all duration-300 shrink-0"
              >
                <span className="font-black text-center text-sm leading-tight uppercase select-none" style={{ color: bank.color }}>
                  {bank.name}
                </span>
              </div>
            ))}
            {/* Duplicated Set for infinite scroll marquee */}
            {partnerBanks.map((bank, idx) => (
              <div 
                key={`bank-2-${idx}`} 
                className="w-52 h-20 bg-white border border-border-color rounded-lg flex items-center justify-center px-4 mx-4 shadow-sm hover:border-primary-blue hover:shadow-premium transition-all duration-300 shrink-0"
              >
                <span className="font-black text-center text-sm leading-tight uppercase select-none" style={{ color: bank.color }}>
                  {bank.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-primary-blue">
              Frequently Asked Questions
            </h2>
            <p className="text-text-gray font-medium text-sm md:text-base">
              Got questions about credit checks, interest calculations, or processing times? We have answers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border-color rounded-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center cursor-pointer select-none"
                >
                  <h3 className="font-bold text-base md:text-lg text-dark-blue pr-6">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      activeFaq === idx ? "bg-primary-blue text-white" : "bg-primary-blue/8 text-primary-blue"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-text-gray leading-relaxed border-t border-border-color/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="py-24 bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-[80px] -z-10" />

        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Apply?</h2>
          <p className="text-[#B8C6D9] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Our loan experts are here to help. Get free counseling and secure your capital today.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <Link 
              href="/apply" 
              className="bg-white text-dark-blue px-8 py-3.5 font-bold text-sm rounded-btn shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now
            </Link>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 font-bold text-sm rounded-btn shadow flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z"/></svg> Open WhatsApp
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
