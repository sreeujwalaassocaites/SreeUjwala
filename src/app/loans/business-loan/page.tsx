"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const businessLoanConfig: ProductConfig = {
  loanType: "Business Loan",
  heroDescription: "Whether you are scaling operations, managing working capital, or investing in new equipment, EAZYKREDIT connects your business with the right lender — fast. Get collateral-free funding with competitive rates and a fully digital application process.",
  interestRateText: "Dynamic (Market Linked)",
  maxRepaymentTenure: "36 Months",
  heroFeatures: [
    "Competitive Interest Rates Aligned with Market Trends",
    "Loan amounts starts from ₹10 Lakhs",
    "Repayment tenure up to 36 months (extendable to 5 years)",
    "Minimal processing Fees"
  ],
  whyChooseUsFeatures: [
    {
      title: "Quick Approval",
      desc: "Get initial sanction checks from our partner banking portals within hours of file submission."
    },
    {
      title: "Lowest Interest Rates",
      desc: "Rate packages beginning at competitive pricing slabs customized on your credit reports."
    },
    {
      title: "Digital Process",
      desc: "Secure online documents upload with minimal physical interaction needed."
    },
    {
      title: "Expert Guidance",
      desc: "Dedicated financial advisors guide you through product comparisons and validation cycles."
    },
    {
      title: "Secure Application",
      desc: "Your data privacy is strictly protected with global bank-grade secure server encryptions."
    },
    {
      title: "Multiple Bank Options",
      desc: "Compare credit packages from over 25+ top public, private, and housing finance firms side-by-side."
    }
  ],
  keyFeaturesList: [
    "Interest Rates : Dynamic (benchmarked against credit profile)",
    "Loan Amounts : ₹10 Lakhs to ₹10 Crore based on business turnover and eligibility",
    "Repayment Tenure : Up to 36 months; select lenders extend up to 5 years",
    "Processing Fees : Up to 2% of the sanctioned loan amount"
  ],
  illustrationImage: "/assets/loans/business loan.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "18 – 65 Years",
      note: "Applicant must not exceed 70 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹25,000 / month | Self-Employed: ₹2 Lakh / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Eligible Applicants",
      value: "Indian Residents, Non-Resident Indians (NRI), Persons of Indian Origin (PIOs)",
      note: "Subject to lender terms"
    },
    {
      label: "Work Experience",
      value: "Salaried: 2 years minimum | Self-Employed: 3 years minimum",
      note: "Vintage in active business"
    }
  ],
  documentsList: [
    "Individual KYC (Photo, Pan, Aadhar Card of all applicants and co-applicants)",
    "Residence light bill of proprietor/all directors/all partners (If rented then rent agreement)",
    "Permanent Address Proof",
    "Business KYC (Company Pan Card, Udyam Certificate, Gumasta Certificate, GST Certificate, List of Directors & Shareholding Pattern, Partnership Deed, Certification of Incorporation)",
    "MOA (Memorandum of Association) and AOA (Articles of Association)",
    "Office light bill (If rented then rent agreement)",
    "Latest 2 year Company ITR with audit report (CA Attested) (Acknowledgement, Computation of Income, Balance Sheet & Profit & Loss Account, 3CD, 3CB with schedules)",
    "Latest 2 year ITR of all directors (CA Attested)",
    "1 year GST return.",
    "1 year current account statement.",
    "All ongoing loans on company and individual name sanction letters.",
    "Repayment track record of all ongoing loans.",
    "Form 32 and Form 20B (if required)"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Provide your business and income details on our secure digital portal in minutes." },
    { title: "Upload Documents", desc: "Share KYC, business registration, and bank statements digitally without visiting a branch." },
    { title: "Lender Matching", desc: "We compare offers from 25+ banks and NBFCs to identify the best rate for your profile." },
    { title: "Sanction Letter", desc: "Receive the official approval with confirmed loan amount, interest rate, and tenure." },
    { title: "Disbursement", desc: "Funds are credited directly to your registered business account." }
  ],
  calcMinAmount: 1000000,
  calcMaxAmount: 100000000,
  calcDefaultAmount: 5000000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 15,
  benefitsGrid: [
    { title: "No Collateral Needed", desc: "Unsecured funding up to ₹75 Lakhs — no property or asset pledge required." },
    { title: "Rapid Sanction", desc: "Digital audit trails enable approvals within 48 hours for eligible profiles." },
    { title: "Flexible Repayment", desc: "Structured EMI plans across tenures of 12 to 60 months to match your cash flow." },
    { title: "Tax-Deductible Interest", desc: "Interest paid on business loans qualifies as a deductible business expense." },
    { title: "NBFC Access", desc: "We connect you with specialized NBFCs if prime bank CIBIL thresholds are not met." }
  ],
  testimonials: [
    {
      name: "Rajesh Mehta",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my business loan experience so simple! They found me a private bank offering 15.00% interest rate."
    }
  ],
  faqs: [
    {
      q: "What credit score is advisable for obtaining immediate business loans?",
      a: "A CIBIL score of 750 or above is recommended. Higher credit scores demonstrate high reliability, helping you secure quicker approvals and the most competitive interest rates."
    },
    {
      q: "What is the minimum annual turnover required to qualify for a startup loan?",
      a: "While requirements vary by bank, traditional lenders typically prefer an annual turnover of ₹10 Lakhs to ₹20 Lakhs. EAZYKREDIT matches you with specialized NBFCs if you are an early-stage startup with lower turnover."
    },
    {
      q: "How does GST impact business loans for startups?",
      a: "A registered GST profile with regular filings provides a verifiable record of your business sales and vintage. Lenders rely on GST returns to assess your monthly turnover and compute your loan eligibility."
    },
    {
      q: "How do I select the optimal repayment period for business loans?",
      a: "The optimal period matches your business cash flow cycles. Shorter tenures (up to 24 months) minimize interest outflows, while longer tenures (up to 36 or 60 months) lower monthly EMI burdens."
    },
    {
      q: "What are the fees for pre-closure and partial prepayment in business loans?",
      a: "Unsecured business loans may have prepayment fees ranging from 2% to 5% of the outstanding principal amount, depending on the lender. EAZYKREDIT helps negotiate flexible foreclosure clauses upfront."
    },
    {
      q: "Could you provide information about government-initiated loan programs?",
      a: "EAZYKREDIT assists you in accessing government schemes like CGTMSE (collateral-free loans for MSMEs), Mudra Loans (up to ₹10 Lakhs for small micro-units), and Stand-Up India programs."
    },
    {
      q: "I'm interested in commencing a dairy farming venture. How can I secure a small business loan of Rs. 10 lakhs?",
      a: "You can secure a loan of Rs. 10 Lakhs under the Mudra Loan scheme (Kishor category) or dairy-specific farming credit programs. EAZYKREDIT will guide you in filing your project report and credentials."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Dynamic (Market Linked)", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Dynamic (Market Linked)", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Unsecured Business Loan",
  overviewHeading: "Capital That Moves as Fast as Your Business",
  overviewParagraphs: [
    {
      text: "Fuel your business growth with customized Business Loan solutions from EazyKredit. Whether you're expanding operations, purchasing equipment, managing working capital, or launching a new venture, we connect you with leading banks and financial institutions offering competitive financing options."
    },
    {
      text: "Our streamlined process ensures quick approvals so you can focus on growing your business."
    },
    {
      heading: "Why Choose EazyKredit?",
      text: "• Loans for MSMEs and established businesses"
    },
    {
      text: "• Competitive interest rates"
    },
    {
      text: "• Flexible repayment options"
    },
    {
      text: "• Quick processing and minimal documentation"
    },
    {
      text: "• Expert guidance throughout the loan journey"
    },
    {
      text: "Empower your business with the right financial support to achieve long-term success."
    }
  ],
  serviceBenefits: [
    {
      title: "Collateral-Free Funding",
      desc: ""
    },
    {
      title: "100% Online Application",
      desc: ""
    },
    {
      title: "Approval Within 48 Hours",
      desc: ""
    },
    {
      title: "Competitive Interest Rates",
      desc: ""
    },
    {
      title: "Flexible Loan Amounts",
      desc: ""
    },
    {
      title: "MSME & Startup Friendly",
      desc: ""
    }
  ],
  interestRatesTable: [
    { name: "HDFC Bank", rate: "10.75 - 22.5%" },
    { name: "IDFC FIRST Bank", rate: "12.99 - 20%" },
    { name: "Tata Capital", isNbfc: true, rate: "13 - 24%" },
    { name: "ICICI Bank", rate: "13.25 - 20%" },
    { name: "Axis Bank", rate: "14 - 20%" },
    { name: "Bajaj Finance", isNbfc: true, rate: "14 - 23%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "15 - 22%" },
    { name: "State Bank of India", rate: "15 - 22%" },
    { name: "Bank of Baroda", rate: "15.5 - 24%" },
    { name: "Punjab National Bank", rate: "16 - 20%" },
    { name: "LIC HFL", isNbfc: true, rate: "20 - 29%" }
  ]
};

export default function BusinessLoan() {
  return <LoanPageTemplate config={businessLoanConfig} />;
}
