"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const carLoanConfig: ProductConfig = {
  loanType: "Car Loan",
  heroDescription: "Your dream car is closer than you think. EAZYKREDIT compares car loan offers from India's top banks and NBFCs to get you the lowest rate, highest funding, and fastest approval — for both new and pre-owned vehicles.",
  interestRateText: "8.65% p.a.",
  maxRepaymentTenure: "7 Years",
  heroFeatures: [
    "Interest rates from 8.65% p.a.",
    "Up to 90%–100% of vehicle value funded",
    "Repayment tenure up to 7 years",
    "Processing fees from 0.5% to 2%"
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
    "Interest Rates : From 8.65% p.a. — among the most competitive auto loan rates available",
    "Loan Coverage : 80%–90% of the vehicle's on-road price; up to 100% with select lenders",
    "Repayment Tenure : Up to 7 years for maximum EMI flexibility",
    "Processing Fees : 0.5% to 2% of the sanctioned loan amount"
  ],
  illustrationImage: "/assets/loans/car-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 to 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹30,000 / month | Self-Employed: ₹20 Lakhs / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "2+ Years",
      note: "With at least 1 year with your current employer"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Latest 3 months' Salary Slip",
    "6 month bank statement (Reflecting the salary credited)",
    "Company ID Card / Offer Letter / Visiting Card",
    "Car Quotation provided by the dealer"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Business KYC (Udyam Certificate, Gumasta Certificate, GST Certificate)",
    "2 Years ITR",
    "1 Year bank statement",
    "Car Quotation provided by the dealer"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Share your income and vehicle details on our secure digital portal in minutes." },
    { title: "Upload Documents", desc: "Submit KYC, salary slips, and the dealer quotation digitally — no branch visit required." },
    { title: "Lender Matching", desc: "We compare offers from 25+ banks and NBFCs to secure the best rate for your profile." },
    { title: "Sanction Letter", desc: "Receive the official approval with confirmed loan amount, rate, and repayment tenure." },
    { title: "Disbursement", desc: "Funds are transferred directly to the car dealership upon final verification." }
  ],
  calcMinAmount: 100000,
  calcMaxAmount: 10000000,
  calcDefaultAmount: 800000,
  calcMinTenure: 1,
  calcMaxTenure: 7,
  calcDefaultTenure: 5,
  calcDefaultRate: 8.65,
  benefitsGrid: [
    { title: "Zero Hidden Fees", desc: "All charges are disclosed upfront — no surprises at any stage." },
    { title: "Flexible Repayment", desc: "Choose a tenure between 1 and 7 years to keep your EMI comfortable." },
    { title: "Balance Transfer", desc: "Move your existing high-rate auto loan to a lower-rate lender without hassle." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my car loan experience so simple! They found me a private bank offering 8.65% interest rate."
    }
  ],
  faqs: [
    {
      q: "Who is eligible for a Car Loan?",
      a: "Salaried individuals, self-employed professionals, sole proprietors, and partnership firms with a stable source of monthly income are eligible to apply."
    },
    {
      q: "Is there a minimum salary requirement to apply for a Car Loan?",
      a: "Yes. Lenders generally require a minimum monthly net income of ₹30,000 for salaried applicants and an annual business income of ₹20 Lakhs for self-employed individuals."
    },
    {
      q: "What is the maximum amount I can avail in a Car Loan?",
      a: "You can secure up to 90% to 100% of the vehicle's on-road or ex-showroom price, depending on the lender's evaluation and your personal credit history."
    },
    {
      q: "What is the maximum tenure for a Car Loan?",
      a: "Car loans offer flexible repayment tenures extending up to 7 years."
    },
    {
      q: "What will be the EMI cycle for the Car Loan?",
      a: "The EMI cycle is calculated monthly and is typically auto-debited from your bank account on a fixed date via NACH/ECS mandate."
    },
    {
      q: "Can I opt for multiple Car Loans?",
      a: "Yes. You can hold multiple car loans simultaneously, provided your debt-to-income ratio (FOIR) permits the additional monthly EMI obligations."
    },
    {
      q: "What other collaterals are required for a Car Loan?",
      a: "No additional collateral is needed. The car itself serves as primary security and is hypothecated in favor of the lender until the loan is fully repaid."
    },
    {
      q: "What documents are required to avail a Car Loan?",
      a: "Basic paperwork includes your KYC (PAN, Aadhaar), income proofs (salary slips, bank statements, or ITRs), address proof, and the official quotation from the car dealership."
    },
    {
      q: "Can I get a loan for used cars?",
      a: "Yes. EAZYKREDIT offers specialized used car loan programs with competitive rates and funding up to 85% of the pre-owned vehicle's certified valuation."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Rates starting from 10.49% p.a.", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Car Loan",
  overviewHeading: "Drive Home Your Dream Car Today",
  overviewParagraphs: [
    {
      text: "Buying a car is a significant financial decision, and the loan you choose matters just as much as the vehicle itself. A well-structured car loan should offer a competitive interest rate, flexible tenure, and transparent terms — so your EMIs stay affordable and your ownership experience remains stress-free. At EAZYKREDIT, we compare car loan offers from India's leading banks and NBFCs to find the option that best fits your income, credit profile, and repayment capacity."
    },
    {
      heading: "Why Choose EAZYKREDIT?",
      text: "We don't just process applications — we find the right loan for you. Our advisors evaluate your financial profile and match you with the lender offering the best rate, highest funding, and most suitable tenure. Whether you're buying a brand-new car or a certified pre-owned vehicle, EAZYKREDIT handles everything from eligibility check to final disbursement, ensuring a smooth and transparent experience from start to finish."
    }
  ],
  serviceBenefits: [
    { title: "Fast & Paperless Processing", desc: "" },
    { title: "Flexible Tenure Up to 7 Years", desc: "" },
    { title: "Lowest Available Rates", desc: "" },
    { title: "Multiple Repayment Options", desc: "" },
    { title: "No Additional Collateral", desc: "" },
    { title: "Up to 100% Funding on New Cars", desc: "" },
    { title: "Up to 85% Funding on Used Cars", desc: "" },
    { title: "Minimal Documentation", desc: "" }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "9.50% - 14.50%" },
    { name: "Bank of Baroda", rate: "8.40% - 9.50%" },
    { name: "Punjab National Bank", rate: "7.60% - 8.75%" },
    { name: "State Bank of India", rate: "8.70% - 9.85%" },
    { name: "ICICI Bank", rate: "8.45% - 9.50%" },
    { name: "Tata Capital", isNbfc: true, rate: "9.00% - 12.00%" },
    { name: "HDFC Bank", rate: "8.16% - 9.00%" },
    { name: "IDFC FIRST Bank", rate: "8.50% - 10.25%" },
    { name: "Axis Bank", rate: "8.50% - 10.00%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "9.25% - 15.00%" },
    { name: "LIC HFL", isNbfc: true, rate: "8.75% onwards" }
  ]
};

export default function CarLoan() {
  return <LoanPageTemplate config={carLoanConfig} />;
}
