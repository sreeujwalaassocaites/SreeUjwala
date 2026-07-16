"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const lapConfig: ProductConfig = {
  loanType: "Loan Against Property",
  heroDescription: "Your property holds more value than you think. EAZYKREDIT helps you unlock it — with high-value funding up to ₹25+ Crores, competitive interest rates, and a transparent process backed by India's leading lenders.",
  interestRateText: "Dynamic (Market Linked)",
  maxRepaymentTenure: "15 Years",
  heroFeatures: [
    "Competitive Interest Rates Aligned with Market Trends",
    "Up to 85% of property value funded",
    "Repayment tenure up to 15 years",
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
    "Loan Coverage : Up to 85% of the property's current market value",
    "Repayment Tenure : Up to 15 years; select lenders extend up to 20 years",
    "Processing Fees : 0.5% to 2% of the sanctioned loan amount"
  ],
  illustrationImage: "/assets/loans/LA.png",
  eligibilityList: [
    {
      label: "Property Type",
      value: "Residential, Commercial and Industrial properties",
      note: "Subject to technical evaluation"
    },
    {
      label: "Age Requirement",
      value: "21 – 65 Years",
      note: "Applicant must not exceed 65 years at loan maturity"
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
      value: "Indian Residents, Non-Resident Indians (NRI)",
      note: "Subject to lender guidelines"
    },
    {
      label: "Work Experience",
      value: "Salaried: 2 years minimum | Self-Employed: 3 years minimum",
      note: "Active continuous vintage"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan, Aadhar Card of all applicant & Co-applicants)",
    "Utility Bill (Electricity Bill / Gas Bill)",
    "Form 16/Bank statements (bank statements or passbook for last 6 months) or last 6 months salary slips/Income tax returns for last 3 years",
    "Current job appointment letter (if more than 2 years have been spent in the same job)/Current employment certificate/Experience certificate",
    "Property: Registered Sale Deed / Allotment Letter / Stamped Agreement of Sale with Builder / Share Certificate",
    "Property approvals: Occupancy Certificate (OC) & Completion Certificate (CC)",
    "NOC from Society / Builder"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, PAN, Aadhaar Card of all Applicants & Co-applicants)",
    "Utility Bill (Electricity Bill / Gas Bill)",
    "Gumasta Licence (Proprietor)",
    "Company PAN Card & Partnership Deed (Partnership Firm)",
    "Company PAN Card, MOA, AOA, Certificate of Incorporation, List of Directors & Shareholding Pattern (Pvt. Ltd.)",
    "Udyam Certificate",
    "1 Year GST Return",
    "Last 2 Years ITR of Company & Individual (CA Attested) – Acknowledgement, Computation of Income, Balance Sheet & Profit & Loss Account with Schedules",
    "Last 12 Months Current Account Bank Statement",
    "Last 6 Months Saving Account Bank Statement",
    "Property: Registered Sale Deed / Allotment Letter / Stamped Agreement of Sale with Builder / Share Certificate",
    "Property approvals: Occupancy Certificate (OC) & Completion Certificate (CC)",
    "NOC from Society / Builder"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Provide your income and property details on our secure digital portal." },
    { title: "Upload Documents", desc: "Share KYC, property papers, and bank statements digitally — no branch visit needed." },
    { title: "Lender Matching", desc: "We compare offers from 25+ banks and NBFCs to find the best rate for your profile." },
    { title: "Sanction Letter", desc: "Receive the official approval with confirmed loan amount, rate, and tenure." },
    { title: "Disbursement", desc: "Funds are credited to your account after property verification and legal clearance." }
  ],
  calcMinAmount: 500000,
  calcMaxAmount: 50000000,
  calcDefaultAmount: 2500000,
  calcMinTenure: 1,
  calcMaxTenure: 15,
  calcDefaultTenure: 10,
  calcDefaultRate: 8,
  benefitsGrid: [
    { title: "Zero Hidden Fees", desc: "Every charge is disclosed upfront — no surprises at any stage of the process." },
    { title: "Flexible Repayment", desc: "Choose a tenure between 1 and 15 years to keep your monthly EMI manageable." },
    { title: "Balance Transfer", desc: "Move your existing high-rate property loan to a lower-rate lender with ease." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my Loan Against Property experience so simple! They found me a private bank offering 8.00% interest rate."
    }
  ],
  faqs: [
    {
      q: "What is a Loan Against Property?",
      a: "A Loan Against Property (LAP) is a secured loan where you pledge your residential, commercial, or industrial property as collateral to access high-value funding at competitive interest rates."
    },
    {
      q: "What types of property can be used as collateral for LAP?",
      a: "Residential houses, apartments, self-occupied or rented commercial premises, vacant plots, and industrial buildings can be pledged, subject to clear title deeds and property valuation."
    },
    {
      q: "Can I apply for LAP on a jointly owned property?",
      a: "Yes. If the property is jointly owned, all co-owners must be co-applicants on the loan. This also allows you to combine income profiles and qualify for a higher loan amount."
    },
    {
      q: "Can NRIs apply for a Loan Against Property?",
      a: "Yes. Non-Resident Indians are eligible to apply for LAP against property assets they own in India, subject to RBI regulations and lender-specific guidelines."
    },
    {
      q: "What is the maximum loan amount I can get against my property?",
      a: "You can borrow up to ₹25+ Crores, typically representing 50% to 85% of the property's current market valuation, depending on property type and your income documents."
    },
    {
      q: "What are the repayment tenure options for LAP?",
      a: "Repayment tenures are flexible and can extend up to 15 years, with some lenders offering up to 20 years for eligible profiles."
    },
    {
      q: "Can I claim tax benefits on a Loan Against Property?",
      a: "Yes. Under Section 24(b) or Section 37(1), you may claim tax deductions if the loan proceeds are used for business expansion, purchasing a second home, or other qualifying investments."
    },
    {
      q: "Do I need an account with the disbursing bank?",
      a: "No. You can set up ECS or NACH mandates on your existing savings or current account with any bank — no prior relationship with the lender is required."
    },
    {
      q: "How long does disbursement take after approval?",
      a: "Once property verification, technical valuation, and legal title checks are completed, disbursement typically takes 7 to 10 working days."
    },
    {
      q: "How is LAP disbursed for an under-construction property?",
      a: "For under-construction properties, the loan is released in phases linked to construction milestones certified by the project engineer."
    },
    {
      q: "What is the difference between a Home Loan and a Loan Against Property?",
      a: "A Home Loan is specifically for purchasing a new residential property. LAP is taken by pledging an existing property you already own, and the funds can be used for any personal or business purpose."
    },
    {
      q: "Why should I choose LAP through EAZYKREDIT?",
      a: "EAZYKREDIT compares offers from 25+ top lenders side-by-side. Our relationship managers assist with property valuation, legal checks, and documentation — securing the lowest rates with complete transparency."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Dynamic (Market Linked)", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Dynamic (Market Linked)", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Loan Against Property",
  overviewHeading: "Put Your Property to Work for You",
  overviewParagraphs: [
    {
      text: "Unlock the hidden value of your property to meet your financial goals with EazyKredit Loan Against Property solutions. Whether you need funds for business expansion, medical emergencies, debt consolidation, or personal requirements, we help you secure high-value loans at competitive interest rates."
    },
    {
      text: "With simplified documentation, faster approvals, and flexible repayment options, you can access the funds you need while continuing to own and use your property."
    },
    {
      text: "Offered collaterals can be Residential, Commercial, Industrial, Hostels, Schools, Hospitals, Lodge, Open Plot, Banquet Halls and Restaurants."
    },
    {
      heading: "Why Choose EazyKredit?",
      text: "• High loan amounts against residential or commercial properties"
    },
    {
      text: "• Attractive interest rates from leading banks and NBFCs"
    },
    {
      text: "• Flexible repayment tenures"
    },
    {
      text: "• Quick processing with minimal documentation"
    },
    {
      text: "• Dedicated loan experts for end-to-end assistance"
    },
    {
      text: "Leverage your property's value to achieve your financial ambitions with confidence."
    }
  ],
  serviceBenefits: [
    { title: "Competitive Interest Rates", desc: "" },
    { title: "High Loan Amounts Available", desc: "" },
    { title: "Flexible Repayment Tenure", desc: "" },
    { title: "Fast Processing & Approval", desc: "" },
    { title: "No End-Use Restrictions", desc: "" }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "8.00% - 18.00%" },
    { name: "Bank of Baroda", rate: "9.00% - 9.75%" },
    { name: "Punjab National Bank", rate: "8.75% - 13.00%" },
    { name: "State Bank of India", rate: "9.20% - 10.00%" },
    { name: "ICICI Bank", rate: "8.35% - 10.50%" },
    { name: "Tata Capital", isNbfc: true, rate: "9.00% - 13.00%" },
    { name: "HDFC Bank", rate: "8.50% - 10.50%" },
    { name: "IDFC FIRST Bank", rate: "9.50% - 11.00%" },
    { name: "Axis Bank", rate: "9.25% - 9.75%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "9.75% - 13.50%" },
    { name: "LIC HFL", isNbfc: true, rate: "9.25% - 11.50%" }
  ]
};

export default function LoanAgainstProperty() {
  return <LoanPageTemplate config={lapConfig} />;
}
