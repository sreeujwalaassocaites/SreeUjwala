"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const usedCarLoanConfig: ProductConfig = {
  loanType: "Used Car Loan",
  heroDescription: "Already own a car but paying too much on your existing loan? EAZYKREDIT helps you refinance at a lower rate, reduce your monthly EMI, and free up cash — all through a fully digital, hassle-free process.",
  interestRateText: "Dynamic (Market Linked)",
  maxRepaymentTenure: "5 Years",
  heroFeatures: [
    "Competitive Interest Rates Aligned with Market Trends",
    "Finance up to 90% of vehicle value",
    "Repayment tenure up to 5 years",
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
    "Interest Rates : Dynamic (Market Linked)",
    "Loan Coverage : 80%–90% of the vehicle's on-road price; up to 100% with select lenders",
    "Repayment Tenure : Up to 5 years; select lenders extend up to 7 years",
    "Processing Fees : 0.5% onwards of the sanctioned loan amount"
  ],
  illustrationImage: "/assets/loans/used-car-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 to 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹25,000 / month | Self-Employed: ₹3 Lakh / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "2 Years",
      note: "At least 1 year with your current employer"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Latest 3 month's Salary Slip",
    "6 month bank statement (Reflecting the salary credited)",
    "Company ID Card / Offer Letter / Visiting Card",
    "Car Quotation provided by the dealer / Existing loan statement"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Business KYC (Udyam Certificate, Gumasta Certificate, GST Certificate)",
    "2 Years ITR",
    "1 Year bank statement",
    "Car Quotation provided by the dealer / Existing loan statement"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Provide your income and existing loan details on our secure digital portal." },
    { title: "Upload Documents", desc: "Share KYC, existing loan statement, and bank statements digitally — no branch visit needed." },
    { title: "Lender Matching", desc: "We compare refinancing offers from 25+ banks and NBFCs to find your best rate." },
    { title: "Sanction Letter", desc: "Receive the official approval with confirmed loan amount, rate, and new tenure." },
    { title: "Disbursement", desc: "Funds are credited directly to settle your existing loan balance." }
  ],
  calcMinAmount: 100000,
  calcMaxAmount: 5000000,
  calcDefaultAmount: 600000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 12,
  benefitsGrid: [
    { title: "Zero Hidden Fees", desc: "All charges are disclosed upfront — complete transparency at every step." },
    { title: "Flexible Repayment", desc: "Choose a tenure between 1 and 5 years to suit your monthly budget." },
    { title: "Lower EMI Immediately", desc: "Refinancing to a lower rate reduces your monthly outflow from day one." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my car refinancing experience so simple! They found me a private bank offering 12.00% interest rate."
    }
  ],
  faqs: [
    {
      q: "What is the purpose of refinancing a car loan?",
      a: "Refinancing replaces your existing high-interest car loan with a new loan from another lender offering lower rates, reducing your monthly EMIs and total borrowing cost."
    },
    {
      q: "What is the waiting period before I can refinance my car loan?",
      a: "Lenders typically require at least 6 to 12 months of regular repayments on your original loan before considering a refinancing request."
    },
    {
      q: "Is there a limit to how many times I can refinance my car loan?",
      a: "There is no legal limit, but frequent refinancing may incur prepayment fees from the old lender and processing charges from the new one. Refinance only when the rate difference is significant."
    },
    {
      q: "Can I approach my existing lender to refinance?",
      a: "Yes, but transferring the balance to a new lender typically yields more competitive rates than renegotiating with your current bank."
    },
    {
      q: "Does my credit score affect the refinanced loan terms?",
      a: "Absolutely. A score of 750 or above demonstrates strong creditworthiness, helping you qualify for the lowest rates and best repayment terms."
    },
    {
      q: "If I've already refinanced my home loan, can I still refinance my car loan?",
      a: "Yes. Refinancing your home loan does not restrict car loan refinancing, provided your monthly debt obligations (FOIR) remain within healthy limits."
    },
    {
      q: "Will the refinanced loan have a fixed or variable interest rate?",
      a: "Refinanced car loans typically carry a fixed interest rate, keeping your monthly EMI predictable throughout the tenure."
    },
    {
      q: "Does the age of the car affect refinancing eligibility?",
      a: "Yes. Lenders generally prefer cars less than 8 to 10 years old at the end of the refinanced tenure. A physical inspection is conducted to verify the vehicle's current market value."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Dynamic (Market Linked)", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Dynamic (Market Linked)", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Used Car Loan",
  overviewHeading: "Refinance Smarter, Pay Less Every Month",
  overviewParagraphs: [
    {
      text: "Drive home your dream car with EazyKredit Used Car Loan solutions. We make financing pre-owned vehicles simple, affordable, and convenient with competitive interest rates, quick approvals, and flexible repayment plans."
    },
    {
      text: "Whether you're purchasing from an individual or a certified dealer, our experts help you secure the right financing with minimal paperwork and a seamless loan process."
    },
    {
      heading: "Why Choose EazyKredit?",
      text: "• Finance for a wide range of pre-owned vehicles"
    },
    {
      text: "• Attractive interest rates from trusted lenders"
    },
    {
      text: "• Fast approvals and quick loan disbursal"
    },
    {
      text: "• Flexible repayment tenures"
    },
    {
      text: "• Minimal documentation with expert assistance"
    },
    {
      text: "Find the perfect used car and let us help you make it yours with confidence."
    }
  ],
  serviceBenefits: [
    { title: "Transparent Terms & Conditions", desc: "" },
    { title: "Minimal Documentation", desc: "" },
    { title: "Expert Advisor Support", desc: "" },
    { title: "Flexible Repayment Options", desc: "" }
  ],
  interestRatesTable: [
    { name: "Punjab National Bank", rate: "9.8% onwards" },
    { name: "State Bank of India", rate: "11.3 - 14.8%" },
    { name: "Axis Bank", rate: "12.95 - 14.55%" },
    { name: "Tata Capital", isNbfc: true, rate: "12.99% onwards" },
    { name: "HDFC Bank", rate: "13.74 - 13.75%" }
  ]
};

export default function UsedCarLoan() {
  return <LoanPageTemplate config={usedCarLoanConfig} />;
}
