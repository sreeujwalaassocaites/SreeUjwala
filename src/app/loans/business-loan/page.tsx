"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const businessLoanConfig: ProductConfig = {
  loanType: "Business Loan",
  heroDescription: "Power your business growth with our collateral-free business loans. Ideal for MSMEs and established businesses needing quick capital for expansion, inventory, or working capital. EAZYKREDIT offers a seamless digital process, competitive interest rates, and flexible repayment options.",
  interestRateText: "15.00% p.a.",
  maxRepaymentTenure: "36 Months",
  heroFeatures: [
    "Interest rates starting at 15% p.a.",
    "Loan amount ₹10 Lakhs - ₹10 Crore",
    "Flexible tenure up to 36 months (extendable to 5 years)",
    "Processing fees up to 2% of loan amount"
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
    "Interest Rates : 15% p.a. onwards",
    "Loan Amounts : ₹10 Lakhs - ₹10 Crore",
    "Tenure : up to 36 months (some lenders offer repayment period till 5 years)",
    "Processing Fees : up to 2% of loan amount (may vary across lenders)"
  ],
  illustrationImage: "/assets/loans/business-loan-feature.png",
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
    { title: "Apply Online", desc: "Submit basic personal and income parameters on our secure loan advisor portal." },
    { title: "Document Verification", desc: "Upload clear digital copies of your KYC, business registration, and bank statements." },
    { title: "Eligibility Check", desc: "Our banking matching algorithms compare rates from 25+ lenders." },
    { title: "Loan Approval", desc: "Receive the formal sanction letter containing approved terms from your chosen bank." },
    { title: "Disbursement", desc: "The loan amount is direct-credited to your business account." }
  ],
  calcMinAmount: 1000000,
  calcMaxAmount: 100000000,
  calcDefaultAmount: 5000000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 15,
  benefitsGrid: [
    { title: "No Collateral Required", desc: "Unsecured business financing up to ₹75 Lakhs." },
    { title: "Quick Sanction Time", desc: "Fast digital audit allows approvals within 48 hours." },
    { title: "Flexible Repayment", desc: "Easy EMI programs structured over tenures of 12 to 60 months." },
    { title: "Tax Deductions", desc: "Reclaimed interest paid on commercial business loans as tax-exempt deductions." },
    { title: "Minimal Credit Score Bias", desc: "Access secondary NBFC lenders if prime banking CIBIL thresholds are not met." }
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
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Rates starting from 10.49% p.a.", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Unsecured Business Loan",
  overviewHeading: "Fulfill Your Corporate Ambitions",
  overviewParagraphs: [
    {
      text: "In the journey of every business, securing funds is vital for growth and success. However, obtaining loans, especially unsecured business loans, can often feel like an insurmountable challenge. But fear not, because EAZYKREDIT Business Loan is here to support you. With our online business loan services, you can easily apply for a business loan, eliminating the hassle of visiting a bank in person."
    },
    {
      heading: "Why Choose EAZYKREDIT for the Business Loan?",
      text: "With our instant business loan facility, you can receive quick approvals and disbursements, ensuring that you have access to the capital you need without delays. Whether you require a loan for a new business, expansion, office renovation, or equipment purchases, we have you covered. EAZYKREDIT is recognized as one of the best advisors for business loans in India, coordinating the best unsecured business loans to support your growth. We believe in your vision and want to be your trusted partner on your entrepreneurial journey. So, whether you are starting a new business and need a startup loan or looking to take your existing one to new heights, apply for a business loan with EAZYKREDIT today. Experience a seamless borrowing experience with attractive benefits."
    }
  ],
  serviceBenefits: [
    {
      title: "Unsecured Business Loan",
      desc: "EAZYKREDIT offers unsecured business loans, eliminating the need for collateral and providing you with the funds you need without additional burden."
    },
    {
      title: "Online Application",
      desc: "With our user-friendly online platform, you can conveniently apply for a business loan from anywhere, saving you time and effort."
    },
    {
      title: "Quick Approval and Disbursement",
      desc: "We understand the urgency of your business needs. Our streamlined process ensures quick approval and disbursal of funds, allowing you to address your financial requirements promptly."
    },
    {
      title: "Competitive Interest Rates",
      desc: "EAZYKREDIT provides business loans with competitive interest rates, ensuring affordable repayments and helping you optimize your business cash flow."
    },
    {
      title: "Flexible Loan Amounts",
      desc: "Whether you require a small loan for your startup or a larger amount for business expansion, our business loan options offer flexibility in loan amounts to suit your specific needs."
    },
    {
      title: "Business Loan Eligibility",
      desc: "We have designed our business loan eligibility criteria to be inclusive, enabling both small businesses and startups to access the funds they require."
    }
  ],
  interestRatesTable: [
    { name: "HDFC Bank", rate: "10.75 - 22.5%" },
    { name: "IDFC FIRST Bank", rate: "12.99 - 20%" },
    { name: "Tata Capital", isNbfc: true, rate: "13 - 24%" },
    { name: "ICICI Bank", rate: "13.25 - 20%" },
    { name: "Axis Bank", rate: "14 - 20%" },
    { name: "Bajaj Finance", isNbfc: true, rate: "14 - 23%" },
    { name: "Canara Bank", rate: "14 - 19%" },
    { name: "State Bank of India", rate: "15 - 22%" },
    { name: "Bank of Baroda", rate: "15.5 - 24%" },
    { name: "Punjab National Bank", rate: "16 - 20%" },
    { name: "LIC HFL", isNbfc: true, rate: "20 - 29%" }
  ]
};

export default function BusinessLoan() {
  return <LoanPageTemplate config={businessLoanConfig} />;
}
