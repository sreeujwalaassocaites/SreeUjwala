"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Award,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Star,
  ChevronDown,
  Percent,
  Building2,
  DollarSign,
  TrendingDown,
  Monitor,
  Layers,
  ChevronLeft,
  Phone,
  Mail,
  HelpCircle,
  BookOpen,
  Building
} from "lucide-react";
import QuickApplyForm from "@/components/QuickApplyForm";

// --- Count-Up Counter Component ---
function Counter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <motion.span
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!mounted) return;

        let start = 0;
        const end = target;
        if (start === end) return;

        const totalMiliseconds = duration * 1000;
        const stepTime = 20;
        const totalSteps = totalMiliseconds / stepTime;
        const increment = Math.ceil(end / totalSteps);

        timerRef.current = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            if (timerRef.current) clearInterval(timerRef.current);
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

// --- Bank Logos Mapping ---
const bankLogos: { [key: string]: React.ReactNode } = {
  "HDFC BANK": (
    <img
      src="/assets/banks/hdfc.png"
      alt="HDFC Bank"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "STATE BANK OF INDIA": (
    <img
      src="/assets/banks/sbi.png"
      alt="SBI"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "AXIS BANK": (
    <img
      src="/assets/banks/axis.png"
      alt="Axis Bank"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "ICICI BANK": (
    <img
      src="/assets/banks/icici.png"
      alt="ICICI Bank"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "ADITYA BIRLA CAPITAL": (
    <img
      src="/assets/banks/aditya-birla.png"
      alt="Aditya Birla Capital"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "BANK OF BARODA": (
    <img
      src="/assets/banks/bob.png"
      alt="Bank of Baroda"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "IDFC FIRST": (
    <img
      src="/assets/banks/idfc.png"
      alt="IDFC FIRST Bank"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "LIC HFL": (
    <img
      src="/assets/banks/lic.png"
      alt="LIC HFL"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "TATA CAPITAL": (
    <img
      src="/assets/banks/tata.png"
      alt="Tata Capital"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "BAJAJ FINANCE": (
    <img
      src="/assets/banks/bajaj.png"
      alt="Bajaj Finance"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  ),
  "PNB HOUSING": (
    <img
      src="/assets/banks/pnb.png"
      alt="PNB Housing"
      className="max-h-8 max-w-[120px] w-auto h-auto object-contain shrink-0"
    />
  )
};

export interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  review: string;
}

export interface BlogItem {
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface OverviewParagraph {
  heading?: string;
  text: string;
}

export interface InterestRateRow {
  name: string;
  isNbfc?: boolean;
  rate: string;
}

export interface ProductConfig {
  loanType: string;
  interestRateText: string;
  maxRepaymentTenure: string;
  heroFeatures: string[];
  whyChooseUsFeatures: { title: string; desc: string }[];
  keyFeaturesList: string[];
  illustrationImage: string;
  eligibilitySalaried?: string[];
  eligibilitySelfEmployed?: string[];
  eligibilityParameters?: { label: string; salaried: string; selfEmployed: string }[];
  documentsSalaried?: string[];
  documentsSelfEmployed?: string[];
  documentsList?: string[];
  timelineSteps: { title: string; desc: string }[];
  calcMinAmount: number;
  calcMaxAmount: number;
  calcDefaultAmount: number;
  calcMinTenure: number;
  calcMaxTenure: number;
  calcDefaultTenure: number;
  calcDefaultRate: number;
  benefitsGrid: { title: string; desc: string }[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  relatedProducts: { title: string; desc: string; link: string }[];
  blogs: BlogItem[];
  overviewTitle?: string;
  overviewHeading?: string;
  overviewParagraphs?: (string | OverviewParagraph)[];
  serviceBenefits?: ServiceBenefit[];
  interestRatesTable?: InterestRateRow[];
  heroDescription?: string;
  eligibilityList?: EligibilityRow[];
  documentsSalariedTitle?: string;
  documentsSelfEmployedTitle?: string;
}

export interface EligibilityRow {
  label: string;
  value: string;
  note?: string;
}

interface LoanPageTemplateProps {
  config: ProductConfig;
}

export default function LoanPageTemplate({ config }: LoanPageTemplateProps) {
  const [activeDocTab, setActiveDocTab] = useState<"salaried" | "self-employed">("salaried");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("overview");

  // Scroll to top and reset tab whenever the loan page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveSection("overview");
    setOpenFaq(null);
  }, [config.loanType]);

  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState<number | "">(config.calcDefaultAmount);
  const [interestRate, setInterestRate] = useState<number | "">(config.calcDefaultRate);
  const [tenureValue, setTenureValue] = useState<number | "">(config.calcDefaultTenure);
  const [tenureUnit, setTenureUnit] = useState<"years" | "months">("years");

  const [amountInput, setAmountInput] = useState<string>(
    config.calcDefaultAmount ? config.calcDefaultAmount.toLocaleString("en-IN") : ""
  );
  const [rateInput, setRateInput] = useState<string>(
    config.calcDefaultRate ? String(config.calcDefaultRate) : ""
  );
  const [tenureInput, setTenureInput] = useState<string>(
    config.calcDefaultTenure ? String(config.calcDefaultTenure) : ""
  );

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  // Keep text inputs synchronized when states change (e.g. from slider)
  useEffect(() => {
    if (loanAmount !== "") {
      const isFocused = typeof document !== "undefined" && document.activeElement?.id === "loan-amount-input";
      setAmountInput(isFocused ? String(loanAmount) : loanAmount.toLocaleString("en-IN"));
    } else {
      setAmountInput("");
    }
  }, [loanAmount]);

  useEffect(() => {
    if (interestRate !== "") {
      setRateInput(String(interestRate));
    } else {
      setRateInput("");
    }
  }, [interestRate]);

  useEffect(() => {
    if (tenureValue !== "") {
      setTenureInput(String(tenureValue));
    } else {
      setTenureInput("");
    }
  }, [tenureValue]);

  // Handle manual input changes with clamping limits
  const handleAmountChange = (valStr: string) => {
    const cleanVal = valStr.replace(/[^0-9]/g, "");
    setAmountInput(cleanVal);

    if (cleanVal === "") {
      setLoanAmount("");
    } else {
      const num = Number(cleanVal);
      setLoanAmount(num);
    }
  };

  const handleAmountBlur = () => {
    if (loanAmount !== "") {
      const clamped = Math.max(0, Math.min(Number(loanAmount), config.calcMaxAmount));
      setLoanAmount(clamped);
      setAmountInput(clamped.toLocaleString("en-IN"));
    } else {
      setLoanAmount(0);
      setAmountInput("0");
    }
  };

  const handleAmountFocus = () => {
    if (loanAmount !== "") {
      setAmountInput(String(loanAmount));
    }
  };

  const handleRateChange = (valStr: string) => {
    const cleanVal = valStr.replace(/[^0-9.]/g, "");
    const parts = cleanVal.split(".");
    const formattedVal = parts[0] + (parts.length > 1 ? "." + parts.slice(1).join("") : "");
    setRateInput(formattedVal);

    if (formattedVal === "" || formattedVal === ".") {
      setInterestRate("");
    } else {
      setInterestRate(Number(formattedVal));
    }
  };

  const handleRateBlur = () => {
    if (interestRate !== "") {
      const clamped = Math.max(0, Math.min(Number(interestRate), 20));
      setInterestRate(clamped);
      setRateInput(String(clamped));
    } else {
      setInterestRate(0);
      setRateInput("0");
    }
  };

  const handleRateFocus = () => {
    if (interestRate !== "") {
      setRateInput(String(interestRate));
    }
  };

  const handleTenureChange = (valStr: string) => {
    const cleanVal = valStr.replace(/[^0-9]/g, "");
    setTenureInput(cleanVal);

    if (cleanVal === "") {
      setTenureValue("");
    } else {
      setTenureValue(Number(cleanVal));
    }
  };

  const handleTenureBlur = () => {
    if (tenureValue !== "") {
      const maxLimit = tenureUnit === "years" ? config.calcMaxTenure : config.calcMaxTenure * 12;
      const clamped = Math.max(0, Math.min(Number(tenureValue), maxLimit));
      setTenureValue(clamped);
      setTenureInput(String(clamped));
    } else {
      setTenureValue(0);
      setTenureInput("0");
    }
  };

  const handleTenureFocus = () => {
    if (tenureValue !== "") {
      setTenureInput(String(tenureValue));
    }
  };

  // EMI Calculation Logic
  useEffect(() => {
    const P = isNaN(Number(loanAmount)) || Number(loanAmount) < 0 ? 0 : Number(loanAmount);
    const rate = isNaN(Number(interestRate)) || Number(interestRate) < 0 ? 0 : Number(interestRate);
    const val = isNaN(Number(tenureValue)) || Number(tenureValue) <= 0 ? 0 : Number(tenureValue);
    const n = tenureUnit === "years" ? val * 12 : val;

    const r = rate / 12 / 100;

    if (P === 0 || n === 0) {
      setEmi(0);
      setTotalPayable(0);
      setTotalInterest(0);
      return;
    }

    if (r === 0) {
      const calculatedEmi = P / n;
      setEmi(Math.round(calculatedEmi));
      setTotalPayable(P);
      setTotalInterest(0);
    } else {
      const calculatedEmi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      if (isNaN(calculatedEmi) || !isFinite(calculatedEmi)) {
        setEmi(0);
        setTotalPayable(0);
        setTotalInterest(0);
      } else {
        const totalAmt = calculatedEmi * n;
        const totalInt = totalAmt - P;

        setEmi(Math.round(calculatedEmi));
        setTotalPayable(Math.round(totalAmt));
        setTotalInterest(Math.round(totalInt));
      }
    }
  }, [loanAmount, interestRate, tenureValue, tenureUnit]);

  // Sticky sub-nav tabs definitions
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Key Features" },
    { id: "calculator", label: "Calculator" },
    { id: "eligibility", label: "Eligibility Criteria" },
    { id: "documentation", label: "Documentation" },
    { id: "process", label: "How to Apply" },
    { id: "faqs", label: "FAQs" }
  ];

  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // When a tab is clicked, switch view and scroll slightly to center the view
  const handleTabClick = (id: string) => {
    setActiveSection(id);

    // Smooth scroll the viewport so that the sticky tab bar sits at the top
    if (tabContainerRef.current) {
      const rect = tabContainerRef.current.getBoundingClientRect();
      const offset = 80; // Offset for main header height
      const targetY = rect.top + window.scrollY - offset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });
    }
  };

  // Scroll active tab BUTTON into horizontal view only when tab bar is already visible
  useEffect(() => {
    const activeBtn = tabRefs.current[activeSection];
    const container = tabContainerRef.current;
    if (!activeBtn || !container) return;
    const rect = container.getBoundingClientRect();
    // Only scroll the button into view if the tab bar is currently on screen
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeSection]);

  // Quick Apply reference
  const topFormRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    topFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const activePartnerBanks = Object.keys(bankLogos);

  // Match row name to preloaded logo helper
  const getRowLogo = (name: string) => {
    const key = name.toUpperCase().trim();
    if (bankLogos[key]) return bankLogos[key];

    // Check specific name variations first
    if (key.includes("PUNJAB") || key.includes("PNB")) {
      return bankLogos["PNB HOUSING"];
    }
    if (key.includes("LIC")) {
      return bankLogos["LIC HFL"];
    }

    // Check partial matches (e.g. "HDFC Bank" -> "HDFC BANK")
    for (const bankName of Object.keys(bankLogos)) {
      if (key.includes(bankName) || bankName.includes(key)) {
        return bankLogos[bankName];
      }
    }
    return <Building className="w-5 h-5 text-text-gray" />;
  };

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24 text-text-dark">
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-dark-blue to-[#0e3b6e] text-white py-20 px-6">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/30 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Hero Left Content — always renders first in DOM = first on mobile */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#loans" className="hover:text-white transition-colors">Loans</Link>
              <span>/</span>
              <span className="text-white font-bold">{config.loanType}</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              {config.loanType}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 leading-relaxed text-sm md:text-base max-w-xl"
            >
              {config.heroDescription || "Transform your dream of capital ownership into reality. Experiencing seamless digital processing, highly competitive interest rates, and flexible repayment cycles tailored for your convenience."}
            </motion.p>

            {/* Quick Hero Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {config.heroFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                  <CheckCircle2 className="w-5 h-5 text-success-green shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-white/90">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Form — on mobile this appears BELOW the heading thanks to DOM order */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0" ref={topFormRef}>
            <QuickApplyForm loanType={config.loanType} />
          </div>
        </div>
      </section>

      {/* Sticky Horizontal Sub-Navigation Tab Bar Container */}
      <div
        ref={tabContainerRef}
        className="sticky top-[72px] z-30 bg-white border-y border-border-color shadow-sm w-full"
      >
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-1 md:space-x-4 py-3 min-w-max items-center justify-start md:justify-center">
            {tabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-4 py-2 text-xs md:text-sm font-extrabold rounded-full transition-all duration-300 cursor-pointer outline-none select-none ${isActive ? "text-white" : "text-dark-blue hover:text-[#1E88E5]"
                    }`}
                >
                  {/* Sliding blue pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#1E88E5] rounded-full z-0 shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conditional Tabbed Content Rendering - ONLY the selected section is visible */}
      <div className="w-full relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* Tab 1: Overview */}
          {activeSection === "overview" && (
            <motion.div
              key="overview-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="w-full flex flex-col"
            >
              {/* Custom Written Overview Content */}
              {config.overviewParagraphs && (
                <section className="bg-white py-16 px-6">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column: Paragraphs with optional headings */}
                    <div className="flex-1 flex flex-col gap-6 text-left">
                      <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">
                        {config.overviewTitle || "Overview"}
                      </span>
                      <h2 className="text-3xl font-black text-dark-blue leading-tight mb-2">
                        {config.overviewHeading || `Fulfill Your Homeownership Journey`}
                      </h2>
                      <div className="flex flex-col gap-6">
                        {config.overviewParagraphs.map((para, i) => {
                          const isString = typeof para === "string";
                          const heading = isString ? null : para.heading;
                          const text = isString ? para : para.text;
                          return (
                            <div key={i} className="flex flex-col gap-2">
                              {heading && (
                                <h3 className="text-2xl md:text-3xl font-black text-dark-blue leading-tight mt-6 mb-2">
                                  {heading}
                                </h3>
                              )}
                              <p className="text-text-gray text-xs md:text-sm leading-relaxed font-medium">
                                {text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Service Benefits */}
                    {config.serviceBenefits && (
                      <div className="w-full lg:w-[420px] bg-section-bg border border-border-color p-6 md:p-8 rounded-card flex flex-col gap-6 text-left shrink-0 shadow-sm">
                        <h3 className="font-extrabold text-lg text-dark-blue border-b border-border-color pb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-primary-blue" />
                          Key Service Benefits
                        </h3>
                        <div className="flex flex-col gap-4">
                          {config.serviceBenefits.map((benefit, i) => (
                            <div key={i} className="flex gap-3 items-center">
                              <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                              <span className="font-extrabold text-xs md:text-sm text-dark-blue">{benefit.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Partner Banks Marquee & Stats */}
              <section className="bg-white border-y border-border-color py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-10">
                  <div className="text-center flex flex-col gap-2">
                    <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Trusted Lenders</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Trusted by India's Leading Banks</h2>
                  </div>

                  {/* Infinite Marquee Container */}
                  <div className="w-full overflow-hidden relative py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 before:w-16 after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
                    <div className="animate-scroll-marquee">
                      {activePartnerBanks.map((name, idx) => (
                        <div key={`bank-1-${idx}`} className="w-48 h-20 bg-white border border-border-color rounded-lg flex items-center justify-center px-6 mx-4 shadow-sm hover:border-primary-blue hover:shadow-premium transition-all duration-300 shrink-0">
                          {bankLogos[name]}
                        </div>
                      ))}
                      {activePartnerBanks.map((name, idx) => (
                        <div key={`bank-2-${idx}`} className="w-48 h-20 bg-white border border-border-color rounded-lg flex items-center justify-center px-6 mx-4 shadow-sm hover:border-primary-blue hover:shadow-premium transition-all duration-300 shrink-0">
                          {bankLogos[name]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                <div className="text-center flex flex-col gap-2">
                  <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Differentiators</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Why Choose Us for Your Loan</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Quick Approval",
                      desc: "Get initial sanction checks from our partner banking portals within hours of file submission.",
                      icon: <Clock className="w-6 h-6 text-primary-blue" />
                    },
                    {
                      title: "Lowest Interest Rates",
                      desc: "Rate packages beginning at competitive pricing slabs customized on your credit reports.",
                      icon: <TrendingDown className="w-6 h-6 text-primary-blue" />
                    },
                    {
                      title: "Digital Process",
                      desc: "Secure online documents upload with minimal physical interaction needed.",
                      icon: <Monitor className="w-6 h-6 text-primary-blue" />
                    },
                    {
                      title: "Expert Guidance",
                      desc: "Dedicated financial advisors guide you through product comparisons and validation cycles.",
                      icon: <Award className="w-6 h-6 text-primary-blue" />
                    },
                    {
                      title: "Secure Application",
                      desc: "Your data privacy is strictly protected with global bank-grade secure server encryptions.",
                      icon: <ShieldCheck className="w-6 h-6 text-primary-blue" />
                    },
                    {
                      title: "Multiple Bank Options",
                      desc: "Compare credit packages from over 25+ top public, private, and housing finance firms side-by-side.",
                      icon: <Layers className="w-6 h-6 text-primary-blue" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-border-color p-6 rounded-card shadow-sm hover:shadow-premium hover:border-primary-blue/30 transition-all flex flex-col gap-4">
                      <div className="w-12 h-12 bg-primary-blue/5 rounded-lg flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-extrabold text-lg text-dark-blue">{item.title}</h3>
                      <p className="text-xs md:text-sm text-text-gray leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* Tab 2: Key Features */}
          {activeSection === "features" && (
            <motion.div
              key="features-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Illustration Column */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square rounded-card overflow-hidden bg-section-bg/40 border border-border-color p-4 shadow-premium flex items-center justify-center">
                      <img
                        src={config.illustrationImage}
                        alt={`${config.loanType} Illustration`}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Feature List Column */}
                  <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                    <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Overview & Perks</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Premium Features & Benefits</h2>
                    <p className="text-text-gray text-xs md:text-sm leading-relaxed">
                      We streamline the entire processing pipeline, comparing optimal market offerings to match your personal requirements perfectly.
                    </p>
                    <div className="flex flex-col gap-3.5 mt-2">
                      {config.keyFeaturesList.map((feat, i) => {
                        const parts = feat.split(" : ");
                        const hasColon = parts.length > 1;
                        return (
                          <div key={i} className="flex gap-3 text-xs md:text-sm text-text-gray leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-success-green shrink-0 mt-0.5" />
                            <span>
                              {hasColon ? (
                                <>
                                  <strong className="text-dark-blue font-bold">{parts[0]} : </strong>
                                  {parts.slice(1).join(" : ")}
                                </>
                              ) : (
                                feat
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      onClick={scrollToForm}
                      className="mt-4 bg-gradient-to-r from-dark-blue to-primary-blue text-white font-bold text-xs px-6 py-3 rounded-btn shadow hover:shadow-md transition-all w-fit cursor-pointer flex items-center gap-2"
                    >
                      Apply Online Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Tab 3: Interest & Charges */}
          {activeSection === "charges" && (
            <motion.div
              key="charges-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="w-full flex flex-col"
            >
              {/* Detailed Bank Comparison Table */}
              {config.interestRatesTable && (
                <section className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                  <div className="text-center flex flex-col gap-2">
                    <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Interest Rates & Charges</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Lender Rate Comparison</h2>
                  </div>

                  <div className="overflow-hidden border border-border-color rounded-lg bg-white shadow-premium">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm text-left border-collapse">
                        <thead>
                          <tr className="bg-section-bg text-dark-blue font-bold border-b border-border-color text-[11px] md:text-xs tracking-wider uppercase">
                            <th className="p-4 pl-6">Banks & NBFCs</th>
                            <th className="p-4">Interest Rate</th>
                            <th className="p-4 pr-6 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {config.interestRatesTable.map((row, i) => (
                            <tr key={i} className="border-b border-border-color last:border-0 hover:bg-section-bg/30 transition-colors">
                              <td className="p-4 pl-6 font-bold text-text-dark">
                                <div className="flex items-center gap-6">
                                  <div className="w-28 h-10 flex items-center justify-start shrink-0">
                                    {getRowLogo(row.name)}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-extrabold text-xs md:text-sm text-dark-blue">
                                      {row.name}
                                    </span>
                                    {row.isNbfc && (
                                      <span className="bg-[#CE0101]/10 text-[#CE0101] font-bold text-[9px] px-1.5 py-0.5 rounded w-max mt-0.5 uppercase tracking-wide">
                                        NBFC
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <span className="font-extrabold text-sm text-primary-blue bg-primary-blue/5 border border-primary-blue/15 px-2.5 py-1 rounded">
                                  {row.rate} p.a.
                                </span>
                              </td>
                              <td className="p-4 pr-6">
                                <div className="flex flex-col gap-2 items-stretch justify-center max-w-[200px] mx-auto">
                                  <button
                                    onClick={() => handleTabClick("calculator")}
                                    className="w-full border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-3 py-1.5 rounded-btn text-xs font-bold transition-all shrink-0 cursor-pointer text-center whitespace-nowrap"
                                  >
                                    Check Your EMI Eligibility
                                  </button>
                                  <button
                                    onClick={scrollToForm}
                                    className="w-full bg-[#CE0101] text-white hover:bg-[#b00101] px-3 py-1.5 rounded-btn text-xs font-bold transition-all shrink-0 cursor-pointer text-center whitespace-nowrap flex items-center justify-center gap-1"
                                  >
                                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}
            </motion.div>
          )}

          {/* Tab 4: Calculator */}
          {activeSection === "calculator" && (
            <motion.div
              key="calculator-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-10">
                  <div className="text-center flex flex-col gap-2">
                    <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Planning Tool</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Loan EMI Calculator</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
                    {/* Controls Left */}
                    <div className="lg:col-span-7 bg-section-bg/40 border border-border-color p-6 md:p-8 rounded-card flex flex-col gap-8">
                      {/* Slider 1: Loan Amount */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs md:text-sm font-bold text-dark-blue">Loan Amount</span>
                          <div className="flex items-center bg-white border border-border-color rounded px-3 py-1 text-primary-blue font-extrabold text-sm md:text-base">
                            <span className="mr-1 text-text-gray font-semibold">₹</span>
                            <input
                              id="loan-amount-input"
                              type="text"
                              value={amountInput}
                              onChange={(e) => handleAmountChange(e.target.value)}
                              onFocus={handleAmountFocus}
                              onBlur={handleAmountBlur}
                              className="w-28 text-right font-extrabold outline-none border-none p-0 bg-transparent text-primary-blue focus:ring-0 focus:outline-none"
                            />
                          </div>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={config.calcMaxAmount}
                          step={50000}
                          value={loanAmount === "" ? 0 : loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                        />
                      </div>

                      {/* Slider 2: Interest Rate */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs md:text-sm font-bold text-dark-blue">Interest Rate (p.a.)</span>
                          <div className="flex items-center bg-white border border-border-color rounded px-3 py-1 text-primary-blue font-extrabold text-sm md:text-base">
                            <input
                              type="text"
                              value={rateInput}
                              onChange={(e) => handleRateChange(e.target.value)}
                              onFocus={handleRateFocus}
                              onBlur={handleRateBlur}
                              className="w-14 text-right font-extrabold outline-none border-none p-0 bg-transparent text-primary-blue focus:ring-0 focus:outline-none"
                            />
                            <span className="ml-1 text-primary-blue">%</span>
                          </div>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={20}
                          step={0.05}
                          value={interestRate === "" ? 0 : interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                        />
                      </div>

                      {/* Slider 3: Loan Tenure */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs md:text-sm font-bold text-dark-blue">Loan Tenure</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center bg-white border border-border-color rounded px-2.5 py-1 text-primary-blue font-extrabold text-xs md:text-sm">
                              <input
                                type="text"
                                value={tenureInput}
                                onChange={(e) => handleTenureChange(e.target.value)}
                                onFocus={handleTenureFocus}
                                onBlur={handleTenureBlur}
                                className="w-12 text-right font-extrabold outline-none border-none p-0 bg-transparent text-primary-blue focus:ring-0 focus:outline-none"
                              />
                            </div>
                            <select
                              value={tenureUnit}
                              onChange={(e) => {
                                const unit = e.target.value as "years" | "months";
                                setTenureUnit(unit);
                                if (tenureValue !== "") {
                                  if (unit === "years") {
                                    setTenureValue(Math.max(1, Math.round(Number(tenureValue) / 12)));
                                  } else {
                                    setTenureValue(Number(tenureValue) * 12);
                                  }
                                }
                              }}
                              className="bg-white border border-border-color px-2 py-1 rounded text-xs font-bold text-dark-blue focus:outline-none focus:border-primary-blue cursor-pointer"
                            >
                              <option value="years">Years</option>
                              <option value="months">Months</option>
                            </select>
                          </div>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={tenureUnit === "years" ? config.calcMaxTenure : config.calcMaxTenure * 12}
                          step={1}
                          value={tenureValue === "" ? 0 : tenureValue}
                          onChange={(e) => setTenureValue(Number(e.target.value))}
                          className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                        />
                      </div>
                    </div>

                    {/* Results Card Right */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-dark-blue to-[#0e3b6e] text-white p-8 rounded-card border border-white/5 shadow-premium flex flex-col justify-between h-full gap-8">
                      <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h4 className="font-extrabold text-lg border-b border-white/10 pb-3">Monthly Outflow Summary</h4>

                        {/* EMI Box */}
                        <div className="flex flex-col gap-1 items-center lg:items-start">
                          <span className="text-xs text-white/60 uppercase tracking-wider font-bold">Estimated Monthly EMI</span>
                          <span className="text-3xl md:text-4xl font-black text-white">
                            ₹ {emi.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-2">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] text-white/50 uppercase font-bold">Principal Amount</span>
                            <span className="text-sm font-black text-white">₹ {loanAmount.toLocaleString("en-IN")}</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] text-white/50 uppercase font-bold">Total Interest</span>
                            <span className="text-sm font-black text-white">₹ {totalInterest.toLocaleString("en-IN")}</span>
                          </div>
                        </div>

                        <div className="border-t border-white/10 pt-4 flex flex-col gap-0.5">
                          <span className="text-[10px] text-white/50 uppercase font-bold">Total Amount Payable</span>
                          <span className="text-base md:text-lg font-black text-white">₹ {totalPayable.toLocaleString("en-IN")}</span>
                        </div>
                      </div>

                      <button
                        onClick={scrollToForm}
                        className="w-full bg-white text-dark-blue font-bold text-xs py-3.5 rounded-btn hover:bg-section-bg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-premium"
                      >
                        Proceed With This Loan <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Tab 5: Eligibility Criteria */}
          {activeSection === "eligibility" && (
            <motion.div
              key="eligibility-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                <div className="text-center flex flex-col gap-2">
                  <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Prerequisites</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Are You Eligible to Apply?</h2>
                </div>

                {config.eligibilityList ? (
                  <div className="overflow-hidden border border-border-color rounded-lg bg-white shadow-premium max-w-4xl mx-auto w-full">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm text-left border-collapse">
                        <thead>
                          <tr className="bg-section-bg text-dark-blue font-bold border-b border-border-color">
                            <th className="p-4">Criteria</th>
                            <th className="p-4">Details</th>
                            <th className="p-4">Note / Condition</th>
                          </tr>
                        </thead>
                        <tbody>
                          {config.eligibilityList.map((row, i) => (
                            <tr key={i} className="border-b border-border-color last:border-0 hover:bg-section-bg/30">
                              <td className="p-4 font-bold text-text-dark">{row.label}</td>
                              <td className="p-4 text-text-gray">{row.value}</td>
                              <td className="p-4 text-text-gray italic text-[11px] md:text-xs">{row.note || "-"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  /* Profiles Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Salaried Card */}
                    <div className="bg-white border border-border-color p-6 md:p-8 rounded-card shadow-premium flex flex-col gap-5">
                      <h3 className="font-extrabold text-lg text-dark-blue border-b border-border-color pb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-blue" />
                        Salaried Profiles
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {(config.eligibilitySalaried || []).map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-xs md:text-sm text-text-gray leading-relaxed">
                            <span className="text-primary-blue font-bold">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Self-Employed Card */}
                    <div className="bg-white border border-border-color p-6 md:p-8 rounded-card shadow-premium flex flex-col gap-5">
                      <h3 className="font-extrabold text-lg text-dark-blue border-b border-border-color pb-3 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-blue" />
                        Self-Employed Profiles
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {(config.eligibilitySelfEmployed || []).map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-xs md:text-sm text-text-gray leading-relaxed">
                            <span className="text-primary-blue font-bold">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            </motion.div>
          )}

          {/* Tab 6: Documentation */}
          {activeSection === "documentation" && (
            <motion.div
              key="documentation-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                <div className="text-center flex flex-col gap-2">
                  <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Paperwork Checklist</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Checklist of Required Documents</h2>
                </div>

                {config.documentsList ? (
                  <div className="bg-white border border-border-color p-6 md:p-8 rounded-card shadow-premium max-w-4xl mx-auto w-full text-left flex flex-col gap-6">
                    <h3 className="font-extrabold text-lg text-dark-blue border-b border-border-color pb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary-blue" />
                      Required Documents
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {config.documentsList.map((doc, idx) => (
                        <li key={idx} className="flex gap-3 text-xs md:text-sm text-text-gray leading-relaxed items-start">
                          <CheckCircle2 className="w-4 h-4 text-success-green shrink-0 mt-1" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-4">
                    {/* Salaried Individuals Column */}
                    <div className="bg-white border border-border-color p-6 md:p-8 rounded-card shadow-premium flex flex-col gap-6 text-left">
                      <h3 className="font-extrabold text-lg text-[#CE0101] border-b border-border-color pb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#CE0101]" />
                        {config.documentsSalariedTitle || "Salaried Individuals"}
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {(config.documentsSalaried || []).map((doc, idx) => (
                          <li key={idx} className="flex gap-3 text-xs md:text-sm text-text-gray leading-relaxed items-start">
                            <CheckCircle2 className="w-4 h-4 text-success-green shrink-0 mt-1" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Self Employed Individuals Column */}
                    <div className="bg-white border border-border-color p-6 md:p-8 rounded-card shadow-premium flex flex-col gap-6 text-left">
                      <h3 className="font-extrabold text-lg text-primary-blue border-b border-border-color pb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary-blue" />
                        {config.documentsSelfEmployedTitle || "Self Employed Individuals"}
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {(config.documentsSelfEmployed || []).map((doc, idx) => (
                          <li key={idx} className="flex gap-3 text-xs md:text-sm text-text-gray leading-relaxed items-start">
                            <CheckCircle2 className="w-4 h-4 text-success-green shrink-0 mt-1" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            </motion.div>
          )}

          {/* Tab 7: How to Apply */}
          {activeSection === "process" && (
            <motion.div
              key="process-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                <div className="text-center flex flex-col gap-2">
                  <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">Workflow</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Simple 5-Step Application Journey</h2>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mt-4">
                  {config.timelineSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-4 group relative">
                      {/* Connector Line */}
                      {idx < config.timelineSteps.length - 1 && (
                        <div className="hidden md:block absolute top-7 left-[60%] right-[-40%] h-[3px] bg-gradient-to-r from-primary-blue/20 to-primary-blue/60 z-0" />
                      )}
                      {/* Step Circle */}
                      <div className="w-14 h-14 bg-white border-2 border-primary-blue rounded-full flex items-center justify-center font-black text-primary-blue shadow-premium group-hover:bg-gradient-to-r group-hover:from-dark-blue group-hover:to-primary-blue group-hover:text-white transition-all duration-300 z-10">
                        0{idx + 1}
                      </div>
                      <div className="flex flex-col gap-1 z-10 px-2">
                        <h4 className="font-extrabold text-sm text-dark-blue">{step.title}</h4>
                        <p className="text-[11px] md:text-xs text-text-gray leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* Tab 8: FAQs */}
          {activeSection === "faqs" && (
            <motion.div
              key="faqs-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <section className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-10">
                <div className="text-center flex flex-col gap-2">
                  <span className="text-primary-blue text-xs font-extrabold tracking-widest uppercase">FAQ Support</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  {config.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-border-color rounded-card bg-white overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left p-5 flex justify-between items-center cursor-pointer select-none bg-white hover:bg-section-bg/30"
                      >
                        <span className="font-extrabold text-xs md:text-sm text-dark-blue flex items-center gap-2 text-left">
                          <HelpCircle className="w-4 h-4 text-primary-blue shrink-0" />
                          {faq.q}
                        </span>
                        <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                          <ChevronDown className="w-4 h-4 text-primary-blue" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-section-bg/10 border-t border-border-color text-xs md:text-sm text-text-gray p-5 leading-relaxed text-left"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
