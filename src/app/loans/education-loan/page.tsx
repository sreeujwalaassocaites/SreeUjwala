"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const educationLoanConfig: ProductConfig = {
  loanType: "Education Loan",
  heroDescription: "Turn your academic goals into reality with our flexible education loan solutions. Finance tuition fees, living expenses, travel costs, and other educational needs for studies in India or overseas.",
  interestRateText: "Dynamic (Market Linked)",
  maxRepaymentTenure: "15 Years",
  heroFeatures: [
    "Competitive Interest Rates Aligned with Market Trends",
    "Loan amount up to ₹1.5 Crore (based on eligibility)",
    "Flexible repayment tenure up to 15 years",
    "Moratorium period during course + 6–12 months"
  ],
  whyChooseUsFeatures: [
    {
      title: "Fast Approvals",
      desc: "Secure admission-based sanction letters within hours of complete documentation submission."
    },
    {
      title: "Lowest Interest Rates",
      desc: "Compare education loan packages starting at competitive interest rates customized for you."
    },
    {
      title: "Digital Processing",
      desc: "Submit your university admission details and co-applicant KYC completely online."
    },
    {
      title: "Expert Assistance",
      desc: "Dedicated advisors guide you from choosing the right lender to final loan disbursement."
    },
    {
      title: "Tax Benefits",
      desc: "Save on your repayments by availing tax deductions under Section 80E of the IT Act."
    },
    {
      title: "Global Institutional Tie-ups",
      desc: "Access customized loan products for top-tier recognized universities in India and abroad."
    }
  ],
  keyFeaturesList: [
    "Interest Rates : Dynamic (Market Linked)",
    "Loan Amount : Up to ₹1.5 Crore (based on course & university)",
    "Tenure : Up to 10–15 years",
    "Moratorium Period : Course duration + 6–12 months grace period",
    "Processing Fees : 0.5% – 1% of loan amount (varies by lender)",
    "Collateral Requirement : Required for higher loan amounts (based on eligibility)"
  ],
  illustrationImage: "/assets/loans/education.png",
  eligibilityList: [
    {
      label: "Student Age",
      value: "18 to 35 years",
      note: "Applicant should meet age criteria set by lender"
    },
    {
      label: "Admission Status",
      value: "Confirmed Admission",
      note: "Must have secured admission in a recognized institution (India/Abroad)"
    },
    {
      label: "Co-Applicant",
      value: "Mandatory",
      note: "Parent/guardian/spouse with stable income required"
    },
    {
      label: "Academic Performance",
      value: "Good Academic Record",
      note: "Strong academic history improves approval chances"
    },
    {
      label: "Co-Applicant Income",
      value: "Salaried: ₹25,000+ / month | Self-Employed: ₹3 Lakh+ / annum",
      note: "Income requirement varies by lender & loan amount"
    },
    {
      label: "Credit Score",
      value: "650+ (Co-Applicant)",
      note: "Higher score improves approval chances & interest rates"
    }
  ],
  documentsSalariedTitle: "Student Applicant Documents",
  documentsSalaried: [
    "Admission Letter from the University/College",
    "Academic Records (10th, 12th, Graduation Mark Sheets)",
    "Entrance Exam Scorecard (if applicable)",
    "Fee Structure / Cost Estimate provided by Institution",
    "Valid ID Proof (Aadhaar Card, PAN Card, Passport)",
    "Passport-size Photographs"
  ],
  documentsSelfEmployedTitle: "Co-Applicant & Collateral Documents",
  documentsSelfEmployed: [
    "Co-Applicant KYC (PAN Card, Aadhaar Card)",
    "Address Proof (Utility Bill / Passport / Rental Agreement)",
    "Income Proof (Salary Slips / ITR for last 2–3 years)",
    "6–12 months Bank Statement of co-applicant",
    "Employment Proof / Business Proof of co-applicant",
    "For Collateral (If Applicable): Property Title Deed, Property Valuation Report, Approved Building Plan / NOC"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Provide basic student academic and co-applicant financial details online." },
    { title: "Upload Documents", desc: "Submit university admission details, co-applicant KYC, and income statements digitally." },
    { title: "Lender Matching", desc: "We compare multiple bank and NBFC education loan products to find the best fit." },
    { title: "Sanction Letter", desc: "Receive the official approval letter with confirmed loan terms and moratorium details." },
    { title: "Disbursement", desc: "Tuition fees are sent directly to the university, and other expenses are credited to the student." }
  ],
  calcMinAmount: 100000,
  calcMaxAmount: 15000000,
  calcDefaultAmount: 2000000,
  calcMinTenure: 1,
  calcMaxTenure: 15,
  calcDefaultTenure: 10,
  calcDefaultRate: 8.5,
  benefitsGrid: [
    { title: "Covers Complete Expenses", desc: "Covers tuition fees, accommodation, books, travel, and laptop costs." },
    { title: "Moratorium Period", desc: "No principal repayment required during the course duration plus a 6-12 month grace period." },
    { title: "Flexible Repayment", desc: "Convenient repayment plans extending up to 15 years to match your post-study income." },
    { title: "Study in India & Abroad", desc: "Sanction loans for top-tier domestic colleges as well as international universities." },
    { title: "Collateral-Free Options", desc: "Access high-value loans without pledging property for eligible courses." },
    { title: "Tax Benefits", desc: "Deduct 100% of interest paid on your loan under Section 80E of the Income Tax Act." }
  ],
  testimonials: [
    {
      name: "Rohan Varma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EazyKredit helped me secure a collateral-free education loan of ₹40 Lakhs for my MS in Canada. The team made the process very smooth."
    }
  ],
  faqs: [
    {
      q: "Who is eligible for an Education Loan?",
      a: "Indian citizens aged 18 to 35 who have secured confirmed admission to a recognized college or university in India or abroad for professional, technical, or job-oriented courses are eligible to apply."
    },
    {
      q: "Is a co-applicant mandatory for an Education Loan?",
      a: "Yes, a co-applicant (parent, guardian, or spouse) with a stable income and a good credit score (650+) is mandatory for student education loans to act as a guarantor."
    },
    {
      q: "What is the maximum amount I can avail in an Education Loan?",
      a: "You can avail of loan amounts up to ₹1.5 Crore or more depending on the course eligibility, the ranking of the university, and the co-applicant's financial profile."
    },
    {
      q: "What is the repayment tenure for an Education Loan?",
      a: "Repayment tenures are flexible and typically extend up to 10 to 15 years, allowing students ample time to secure employment post-study."
    },
    {
      q: "When do I start repaying my Education Loan?",
      a: "Repayment begins after the moratorium period. The moratorium period covers the entire course duration plus a grace period of 6 to 12 months after course completion."
    },
    {
      q: "Can I prepay my Education Loan?",
      a: "Yes, you can prepay or foreclose your education loan at any time. Per RBI guidelines, there are no prepayment or foreclosure penalties for floating-rate student loans."
    },
    {
      q: "Is collateral required for an Education Loan?",
      a: "Collateral is generally not required for lower loan amounts (typically up to ₹7.5 Lakhs to ₹10 Lakhs). For higher loan amounts, lenders may require security like property or fixed deposits."
    },
    {
      q: "What documents are required to apply for an Education Loan?",
      a: "The student needs to submit their admission letter, fee structure, academic transcripts, and KYC. The co-applicant must submit KYC, bank statements, and income proof."
    },
    {
      q: "Can I get an Education Loan for studying abroad?",
      a: "Yes. EazyKredit specializes in overseas education loans covering up to 100% of study costs, including tuition, accommodation, living expenses, books, and travel."
    }
  ],
  relatedProducts: [
    { title: "Personal Loan", desc: "Dynamic (Market Linked)", link: "/loans/personal-loan" },
    { title: "Loan Against Property", desc: "Dynamic (Market Linked)", link: "/loans/loan-against-property" }
  ],
  blogs: [],
  overviewTitle: "Education Loan",
  overviewHeading: "Invest in Your Future with EazyKredit",
  overviewParagraphs: [
    {
      text: "Invest in your future with EazyKredit Education Loan solutions. Whether you're pursuing higher education in India or abroad, we help you access the right financial support with competitive interest rates, flexible repayment options, and a seamless application process."
    },
    {
      text: "From tuition fees and accommodation to books, travel, and other educational expenses, our experts assist you in finding the most suitable loan from leading banks and financial institutions, allowing you to focus on achieving your academic goals."
    },
    {
      heading: "Why Choose EazyKredit?",
      text: "• Education loans for studies in India and overseas"
    },
    {
      text: "• Competitive interest rates from leading lenders"
    },
    {
      text: "• High loan amounts with flexible repayment options"
    },
    {
      text: "• Moratorium period available as per lender policies"
    },
    {
      text: "• Quick processing with minimal documentation"
    },
    {
      text: "• End-to-end guidance from application to disbursement"
    },
    {
      text: "Empower your educational journey with the right financial support and take the next step toward building a successful future."
    }
  ],
  serviceBenefits: [
    { title: "Covers Complete Education Expenses", desc: "" },
    { title: "Moratorium Period Included", desc: "" },
    { title: "Flexible Repayment Tenure", desc: "" },
    { title: "Competitive Interest Rates", desc: "" },
    { title: "Study in India & Abroad", desc: "" },
    { title: "Collateral-Free Options Available", desc: "" },
    { title: "Tax Benefits (Section 80E)", desc: "" },
    { title: "Minimal Documentation & Fast Approval", desc: "" }
  ],
  interestRatesTable: [
    { name: "State Bank of India", rate: "8.50% - 11.15%" },
    { name: "Bank of Baroda", rate: "8.55% - 10.90%" },
    { name: "Punjab National Bank", rate: "8.60% - 11.20%" },
    { name: "ICICI Bank", rate: "9.25% - 12.50%" },
    { name: "HDFC Bank", rate: "9.50% - 13.00%" },
    { name: "Axis Bank", rate: "9.70% - 13.75%" },
    { name: "Tata Capital", isNbfc: true, rate: "10.50% - 14.00%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "11.00% - 14.50%" }
  ]
};

export default function EducationLoan() {
  return <LoanPageTemplate config={educationLoanConfig} />;
}
