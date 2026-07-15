"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const personalLoanConfig: ProductConfig = {
  loanType: "Personal Loan",
  heroDescription: "When life demands quick funds, EAZYKREDIT delivers. Get a collateral-free personal loan with zero asset pledge, minimal paperwork, and same-day approval — whether it's a medical emergency, home renovation, wedding, or travel.",
  interestRateText: "10.25% p.a.",
  maxRepaymentTenure: "5 Years",
  heroFeatures: [
    "Interest rates from 10.25% p.a.",
    "Loan amounts up to ₹75 Lakhs",
    "Repayment tenure up to 5 years",
    "Processing fees between 0.5% and 4%"
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
    "Interest Rates : From 10.25% p.a. — based on your income and credit profile",
    "Loan Amounts : Up to ₹75 Lakhs; higher amounts available for strong income profiles",
    "Repayment Tenure : Up to 5 years; select lenders extend up to 8 years",
    "Processing Fees : 0.5% to 4% of the sanctioned loan amount"
  ],
  illustrationImage: "/assets/loans/personal-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 – 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹30,000 / month",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "1+ Years",
      note: "With at least 1+ year of work experience"
    }
  ],
  documentsList: [
    "Passport Size Photo",
    "Pan Card",
    "Digital Aadhar Card",
    "Latest 3 months salary slip",
    "6 months Bank Statement (reflecting the salary credited)",
    "Current Residence Address Proof (Utility Bill / Maintenance Bill / Rent Agreement & Light Bill with the owner’s name)",
    "Form 16",
    "Company ID Card / Offer Letter / Visiting Card",
    "Registered Sale Deed, Allotment Letter or Stamped Agreement of Sale with the Builder (original document)",
    "Receipts of the advance payments made towards the purchase of flat (original document)",
    "Occupancy Certificate & Completion Certificate"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Enter your basic income and personal details on our secure digital portal." },
    { title: "Upload Documents", desc: "Share KYC, salary slips, and bank statements digitally — no branch visit needed." },
    { title: "Lender Matching", desc: "We compare offers from 25+ banks and NBFCs to find your best rate and terms." },
    { title: "Sanction Letter", desc: "Receive the official approval with confirmed loan amount, rate, and repayment schedule." },
    { title: "Disbursement", desc: "Funds are credited directly to your bank account, usually within 24–48 hours." }
  ],
  calcMinAmount: 50000,
  calcMaxAmount: 7500000,
  calcDefaultAmount: 500000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 10.25,
  benefitsGrid: [
    { title: "Zero Collateral", desc: "No property, gold, or asset pledge required — purely income-based approval." },
    { title: "Flexible Repayment", desc: "Choose a tenure between 1 and 5 years to keep your monthly EMI manageable." },
    { title: "Balance Transfer", desc: "Move your existing high-rate personal loan to a lower-rate lender with ease." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my personal loan experience so simple! They found me a private bank offering 10.25% interest rate."
    }
  ],
  faqs: [
    {
      q: "What credit score do I need to qualify for a personal loan?",
      a: "A CIBIL score of 750 or above is recommended. While some lenders consider lower scores, a score of 750+ ensures immediate approvals and the lowest interest rates."
    },
    {
      q: "What is the minimum salary required for obtaining a personal loan?",
      a: "The minimum salary threshold is ₹30,000 per month. However, this may vary depending on the lender and your city of residence."
    },
    {
      q: "If I have a pension account with a leading bank in India, can I apply for a personal loan as a pensioner?",
      a: "Yes. Many leading banks offer specialized personal loan schemes for pensioners who draw their regular monthly pensions through their accounts."
    },
    {
      q: "Are students eligible to apply for a personal loan?",
      a: "Unsecured personal loans require a stable source of monthly income. Students without salary slips generally cannot qualify unless they have an earning co-applicant (like a parent) to co-sign."
    },
    {
      q: "Can I secure a personal loan with a monthly salary of ₹12,000?",
      a: "Standard prime lenders require a minimum salary of ₹25,000 to ₹30,000. For an income of ₹12,000, you might need to check with specialized microfinance lenders or local NBFCs."
    },
    {
      q: "Must I offer collateral or security for a personal loan application?",
      a: "No. EAZYKREDIT Personal Loans are entirely unsecured, meaning you do not need to pledge any gold, property, or assets as collateral."
    },
    {
      q: "Can I utilize a personal loan for funding a wedding?",
      a: "Yes. A personal loan has zero end-use restrictions. You can use it to cover wedding venues, catering, shopping, travel, or any other personal expenses."
    },
    {
      q: "What is the maximum loan amount achievable through a personal loan?",
      a: "You can secure a personal loan up to ₹75 Lakhs, depending on your income profile, repayment capacity, and credit score."
    },
    {
      q: "Is it feasible to secure a personal loan without a salary slip?",
      a: "Yes, if you are self-employed or run a registered business, you can qualify by providing your audited ITRs and bank statements instead of salary slips."
    },
    {
      q: "How can I calculate the EMI for a personal loan?",
      a: "You can easily calculate your monthly EMI using our online planning tool by entering your loan amount, interest rate, and preferred tenure."
    },
    {
      q: "Are there any fees for prepaying my personal loan?",
      a: "For floating-rate personal loans, RBI mandates zero prepayment charges. For fixed-rate personal loans, lenders may charge a prepayment fee of 2% to 4% of the outstanding principal."
    },
    {
      q: "Is it possible to cancel a personal loan after the loan amount has been disbursed?",
      a: "Once the loan amount is credited, it cannot be canceled. However, you can prepay the entire outstanding amount subject to the lender's foreclosure terms."
    },
    {
      q: "Can I obtain a personal loan while already having a home loan?",
      a: "Yes, provided you have sufficient repayment capacity and your overall Fixed Obligation to Income Ratio (FOIR) is within the lender's permissible limits."
    },
    {
      q: "Can I take personal loans from two different banks concurrently?",
      a: "Yes, you can apply to and secure loans from two different lenders concurrently, provided your monthly net income comfortably covers both EMI repayments."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Business Loan", desc: "Rates starting from 15.00% p.a.", link: "/loans/business-loan" }
  ],
  blogs: [],
  overviewTitle: "Personal Loan",
  overviewHeading: "Fast Funds for Every Life Moment",
  overviewParagraphs: [
    {
      text: "Life doesn't always follow a plan — and neither should your access to funds. Whether you're dealing with an unexpected medical expense, planning a destination wedding, renovating your home, or consolidating existing debt, a personal loan from EAZYKREDIT gives you instant access to the capital you need without pledging any asset. Our fully digital process means you can apply, get approved, and receive funds — all without stepping into a bank."
    },
    {
      heading: "Why Choose EAZYKREDIT?",
      text: "We compare personal loan offers from India's top banks and NBFCs to ensure you receive the most competitive rate for your income and credit profile. Our advisors guide you through the entire process — from eligibility check to final disbursement — with complete transparency and zero hidden charges. With EAZYKREDIT, you get the right loan at the right rate, without the usual delays or confusion."
    }
  ],
  serviceBenefits: [
    {
      title: "100% Collateral-Free",
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
      title: "Same-Day Disbursement",
      desc: ""
    }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "10.00% - 30.00%" },
    { name: "Bank of Baroda", rate: "10.90% - 18.25%" },
    { name: "Punjab National Bank", rate: "10.40% - 17.95%" },
    { name: "State Bank of India", rate: "11.00% - 15.00%" },
    { name: "ICICI Bank", rate: "9.99% - 17.00%" },
    { name: "Tata Capital", isNbfc: true, rate: "10.99% - 16.00%" },
    { name: "HDFC Bank", rate: "9.99% - 22.00%" },
    { name: "IDFC FIRST Bank", rate: "9.99% - 24.00%" },
    { name: "Axis Bank", rate: "9.99% - 22.00%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "13.00% - 19.50%" },
    { name: "LIC HFL", isNbfc: true, rate: "10.50% - 15.00%" }
  ]
};

export default function PersonalLoan() {
  return <LoanPageTemplate config={personalLoanConfig} />;
}
