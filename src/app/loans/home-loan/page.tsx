"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const homeLoanConfig: ProductConfig = {
  loanType: "Home Loan",
  heroDescription: "Your home is your most important investment. EAZYKREDIT connects you with India's top lenders to secure the most competitive home loan rates, transparent terms, and a fully digital process — so you can focus on finding the perfect home, not the paperwork.",
  interestRateText: "Dynamic (Market Linked)",
  maxRepaymentTenure: "30 Years",
  heroFeatures: [
    "Dynamic interest rates based on market standards",
    "Up to 90% of property value funded",
    "Repayment tenure up to 30 years",
    "Processing fees as low as 0.25%"
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
    "Loan Coverage : Up to 85%–100% of the property's registered value",
    "Repayment Tenure : Up to 25 years; select lenders extend up to 30 years",
    "Processing Fees : 0.25% to 1% of the sanctioned loan amount",
    "Zero Prepayment Penalty : No foreclosure charges on floating-rate home loans per RBI norms",
    "Balance Transfer Facility : Move your existing high-rate home loan to a lower-rate lender seamlessly"
  ],
  illustrationImage: "/assets/loans/HH.png",
  eligibilitySalaried: [
    "Employment: Minimum 2 years of continuous work experience with 1 year at current employer.",
    "Income: Net monthly salary of ₹25,000 or above.",
    "Credit Profile: High CIBIL or credit score rating of 700+ is preferred.",
    "Citizenship: Resident Indian or Non-Resident Indian (NRI) with valid passport."
  ],
  eligibilitySelfEmployed: [
    "Business vintage: Minimum 3 years of active continuous operation in the same field.",
    "Income: Annual gross receipts verified with minimum ITR of ₹3.0 Lakhs per year.",
    "Credit Profile: Clean commercial credit rating and CIBIL score of 700+.",
    "Citizenship: Resident Indian nationality."
  ],
  eligibilityParameters: [
    { label: "Age Limit", salaried: "21 to 60 Years", selfEmployed: "21 to 65 Years" },
    { label: "Minimum Net Income", salaried: "₹25,000 / Month", selfEmployed: "₹3.0 Lakhs ITR / Year" },
    { label: "Credit Score", salaried: "700+ Preferred", selfEmployed: "700+ Preferred" },
    { label: "Work Experience", salaried: "Min. 2 Years", selfEmployed: "Min. 3 Years business" }
  ],
  documentsSalaried: [
    "KYC (Photo, Pan Card, Aadhar Card of Applicant & Co-applicant)",
    "Latest 3 months’ Salary Slip",
    "12 month bank statement (Reflecting the salary credited)",
    "Utility Bill (Electricity Bill / Gas Bill)",
    "2 year Form 16",
    "Company ID Card / Offer Letter / Visiting Card",
    "NOC from Society/Builder",
    "A detailed estimate of the cost of construction of the house (Cost Sheet)",
    "Registered Sale Deed, Allotment Letter or Stamped Agreement of Sale with the Builder (original document)",
    "Receipts of the advance payments made towards the purchase of flat (original document)",
    "Occupancy Certificate & Completion Certificate"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, Pan, Aadhar Card of all applicant & Co-applicant)",
    "Utility Bill (Electricity Bill)",
    "Gumasta Licence (Proprietor), Company Pan Card/Partnership Deed (Partnership), Company Pan Card/MOA/AOA/Certificate of Incorporation, Shareholding & List of Director (Pvt. Ltd.)",
    "Udyam Certificate",
    "1 year GST return.",
    "Last 2 years ITR of company and individual (Acknowledgement, Computation of Income, Balance Sheet & Profit & Loss Account with schedules, (If applicable 3CD & 3CB))",
    "Last 12 months current account banking",
    "Last 6 months saving account banking",
    "NOC from Society/Builder",
    "A detailed estimate of the cost of construction of the property (Cost Sheet)",
    "Registered Sale Deed, Allotment Letter or Stamped Agreement of Sale with the Builder (original document)",
    "Occupancy Certificate & Completion Certificate"
  ],
  timelineSteps: [
    { title: "Submit Application", desc: "Fill in your basic income and property details on our secure digital portal in minutes." },
    { title: "Upload Documents", desc: "Share KYC, salary slips, and bank statements digitally — no branch visit required." },
    { title: "Lender Matching", desc: "We compare offers from 25+ banks and NBFCs to find your best-fit rate and terms." },
    { title: "Sanction Letter", desc: "Receive the official approval letter with confirmed loan amount, rate, and tenure." },
    { title: "Disbursement", desc: "Funds are transferred directly to the builder or seller upon property verification." }
  ],
  calcMinAmount: 500000,
  calcMaxAmount: 100000000,
  calcDefaultAmount: 5000000,
  calcMinTenure: 1,
  calcMaxTenure: 30,
  calcDefaultTenure: 20,
  calcDefaultRate: 8.5,
  benefitsGrid: [
    { title: "Zero Hidden Fees", desc: "Every charge is disclosed upfront — no surprises at any stage of the process." },
    { title: "Flexible Repayment", desc: "Choose a tenure between 1 and 30 years to keep your EMI within budget." },
    { title: "Balance Transfer", desc: "Shift your existing home loan to a lower-rate lender without any hassle." },
    { title: "Top-Up Loan", desc: "Access additional funds on top of your existing home loan when needed." },
    { title: "Paperless Process", desc: "Upload all documents digitally with full support from our advisory team." },
    { title: "48-Hour Approvals", desc: "Pre-verified profiles receive initial sanction decisions within 48 hours." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my home purchasing experience so simple! They found me a private bank offering 8.40% interest rate, and handled the paperwork digitally."
    },
    {
      name: "Ananya Iyer",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "Outstanding support! I saved over ₹4 Lakhs on my home loan interest by using their balance transfer service."
    }
  ],
  faqs: [
    {
      q: "What is a home loan?",
      a: "A home loan is a secured credit facility offered by banks and housing finance companies to buy, build, or renovate a residential property. The property itself serves as collateral security until the loan is fully repaid."
    },
    {
      q: "How much home loan amount can I get?",
      a: "Your eligible loan amount depends on parameters like your monthly net income, age, credit score, outstanding liabilities, and the property's market value. Generally, lenders can fund up to 75% to 90% of the property value."
    },
    {
      q: "I am an NRI, can I get a home loan?",
      a: "Yes. Non-Resident Indians (NRIs), Persons of Indian Origin (PIOs), and Overseas Citizens of India (OCIs) are eligible to secure home loans in India to purchase residential properties, subject to RBI guidelines."
    },
    {
      q: "How can I improve my home loan eligibility?",
      a: "You can enhance eligibility by adding an earning co-applicant, maintaining a CIBIL score above 750, paying off existing short-term loans, declaring other stable income streams, or selecting a longer repayment tenure."
    },
    {
      q: "Who can be co-applicants for a home loan?",
      a: "Immediate family members like your spouse, parents, or siblings can co-apply. Co-ownership of the property usually requires the co-owners to be co-applicants, which also helps pool income to qualify for higher loan values."
    },
    {
      q: "What are the reasons for my home loan application to get rejected?",
      a: "Common rejection causes include a low CIBIL score (below 700), insufficient income compared to the loan size, unstable employment history, missing document proof, or negative legal/technical validation reports of the property."
    },
    {
      q: "Can I take a top-up loan on my existing home loan?",
      a: "Yes. If you have an active home loan with a clean repayment track record, most lenders allow you to borrow an additional top-up loan at interest rates comparable to regular home loans."
    },
    {
      q: "In how much time will the home loan get disbursed?",
      a: "After receiving the final loan sanction letter, the verification of property title deeds, legal reports, and valuation checks takes around 5 to 7 working days. Once verified, the disbursement is processed immediately."
    },
    {
      q: "How is a loan disbursed for an under-construction property?",
      a: "For under-construction properties, the loan is disbursed in parts (installments) matching construction milestones certified by the builder, rather than a single lump sum."
    },
    {
      q: "What is Pre-EMI interest?",
      a: "Pre-EMI is the monthly interest charged only on the partially disbursed loan amount during the construction phase of the property. Regular EMI payments covering both principal and interest start after complete disbursement."
    },
    {
      q: "Is prepayment allowed in a home loan?",
      a: "Yes. Per RBI regulations, banks cannot charge foreclosure or prepayment fees on floating-rate home loans. For fixed-rate loans, a nominal penalty of 1% to 2% may apply depending on individual bank terms."
    },
    {
      q: "What are the general charges involved in a home loan?",
      a: "General charges include processing fees (typically 0.25% to 1% of the loan amount), legal and valuation charges, stamp duties, MODT charges, and documentation handling fees."
    },
    {
      q: "Why should I apply for a home loan through EAZYKREDIT?",
      a: "EAZYKREDIT offers a completely digital process comparing premier lenders side-by-side. Our financial advisors provide expert guidance to secure the lowest interest rates with absolute transparency, zero agent commission fees, and dedicated relationship managers to manage documentation."
    }
  ],
  relatedProducts: [
    { title: "Loan Against Property", desc: "Dynamic (Market Linked)", link: "/loans/loan-against-property" },
    { title: "Business Loan", desc: "Dynamic (Market Linked)", link: "/loans/business-loan" },
    { title: "Personal Loan", desc: "Dynamic (Market Linked)", link: "/loans/personal-loan" }
  ],
  blogs: [
    {
      title: "A Complete Guide to Home Loan Balance Transfer",
      desc: "Learn how to transfer your active home loan to another bank with a lower interest rate to save lakhs of rupees.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
      link: "#"
    },
    {
      title: "Understanding Home Loan Tax Benefits under Section 24 & 80C",
      desc: "A comprehensive analysis of income tax deductions on home loan principal and interest components in India.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
      link: "#"
    },
    {
      title: "First-Time Home Buyer Loan Checklist",
      desc: "Every document, verification check, and validation report you need before applying for a housing loan.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=400",
      link: "#"
    }
  ],
  overviewTitle: "Housing Finance",
  overviewHeading: "Own Your Home With Confidence",
  overviewParagraphs: [
    {
      text: "Turn your dream of owning a home into reality with EazyKredit hassle-free home loan solutions. We offer competitive interest rates, quick approvals, and flexible repayment options tailored to meet the needs of both salaried and self-employed individuals."
    },
    {
      text: "From choosing the right lender to final loan disbursement, our experts guide you through every step of the journey, ensuring a smooth, transparent, and stress-free experience."
    },
    {
      heading: "Why Choose EazyKredit?",
      text: "• Competitive interest rates from leading banks and NBFCs"
    },
    {
      text: "• Quick eligibility assessment and fast loan processing"
    },
    {
      text: "• Flexible repayment tenures up to 30 years"
    },
    {
      text: "• Minimal documentation and expert assistance"
    },
    {
      text: "• Personalized loan solutions based on your financial profile"
    },
    {
      text: "Whether you're buying your first home, constructing a house, or purchasing a resale property, we're committed to helping you secure the right home loan with confidence."
    }
  ],
  serviceBenefits: [
    {
      title: "Lowest Market Interest Rates",
      desc: ""
    },
    {
      title: "Up to 90% Property Funding",
      desc: ""
    },
    {
      title: "Fast Sanction in 48 Hours",
      desc: ""
    },
    {
      title: "Zero Hidden Charges",
      desc: ""
    },
    {
      title: "Dedicated Loan Advisor",
      desc: ""
    }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "7.15 - 20%" },
    { name: "Bank of Baroda", rate: "7.2 - 9%" },
    { name: "Punjab National Bank", rate: "7.25 - 12%" },
    { name: "State Bank of India", rate: "7.25 - 9%" },
    { name: "ICICI Bank", rate: "7.5 - 9%" },
    { name: "Tata Capital", isNbfc: true, rate: "7.5 - 10.75%" },
    { name: "HDFC Bank", rate: "7.75 - 13.2%" },
    { name: "IDFC FIRST Bank", rate: "7.75 - 10.5%" },
    { name: "Axis Bank", rate: "7.99 - 9%" },
    { name: "Aditya Birla Capital", isNbfc: true, rate: "8.60 - 11.50%" },
    { name: "LIC HFL", isNbfc: true, rate: "8.45 - 10.75%" }
  ]
};

export default function HomeLoan() {
  return <LoanPageTemplate config={homeLoanConfig} />;
}
