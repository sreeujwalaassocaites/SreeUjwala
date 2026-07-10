"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Info, Calculator, Award, DollarSign } from "lucide-react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"emi" | "eligibility" | "affordability">("emi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- EMI Calculator State & Logic ---
  const [emiAmount, setEmiAmount] = useState(1000000); // 10 L
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiTenure, setEmiTenure] = useState(15); // years

  const r = emiRate / 12 / 100;
  const n = emiTenure * 12;
  const emi = r === 0 ? emiAmount / n : (emiAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - emiAmount;

  // Chart data
  const emiChartData = [
    { name: "Principal", value: emiAmount, color: "#CBD5E1" },
    { name: "Interest", value: totalInterest, color: "#1E88E5" }
  ];

  // Amortization Schedule (Yearly)
  const getAmortization = () => {
    const years = [];
    let balance = emiAmount;
    const monthlyRate = emiRate / 12 / 100;
    
    for (let year = 1; year < emiTenure; year++) {
      let interestPaidYear = 0;
      let principalPaidYear = 0;

      for (let month = 1; month <= 12; month++) {
        const interestPaidMonth = balance * monthlyRate;
        const principalPaidMonth = emi - interestPaidMonth;
        
        interestPaidYear += interestPaidMonth;
        principalPaidYear += principalPaidMonth;
        balance -= principalPaidMonth;
      }
      
      years.push({
        year,
        principalPaid: Math.max(0, principalPaidYear),
        interestPaid: Math.max(0, interestPaidYear),
        totalPaid: emi * 12,
        balance: Math.max(0, balance)
      });
    }
    return years;
  };

  // --- Eligibility Calculator State & Logic ---
  const [income, setIncome] = useState(60000);
  const [obligation, setObligation] = useState(10000);
  const [eligRate, setEligRate] = useState(8.5);
  const [eligTenure, setEligTenure] = useState(20);

  const foir = 0.55; // 55% FOIR bank standard
  const availableEMI = Math.max(0, (income * foir) - obligation);
  const eligR = eligRate / 12 / 100;
  const eligN = eligTenure * 12;
  
  const eligibleLoan = eligR === 0 
    ? availableEMI * eligN 
    : (availableEMI * (Math.pow(1 + eligR, eligN) - 1)) / (eligR * Math.pow(1 + eligR, eligN));

  // --- Affordability Calculator State & Logic ---
  const [budgetEMI, setBudgetEMI] = useState(25000);
  const [affordRate, setAffordRate] = useState(8.5);
  const [affordTenure, setAffordTenure] = useState(15);

  const affordR = affordRate / 12 / 100;
  const affordN = affordTenure * 12;
  const affordableLoan = affordR === 0
    ? budgetEMI * affordN
    : (budgetEMI * (Math.pow(1 + affordR, affordN) - 1)) / (affordR * Math.pow(1 + affordR, affordN));
  
  const affordTotalPay = budgetEMI * affordN;
  const affordInterest = affordTotalPay - affordableLoan;

  const affordChartData = [
    { name: "Principal", value: affordableLoan, color: "#CBD5E1" },
    { name: "Interest", value: affordInterest, color: "#1E88E5" }
  ];

  // Helpers
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="flex flex-col w-full bg-section-bg">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Financial Calculators</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Calculators</span>
          </div>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="py-12 max-w-7xl mx-auto w-full px-6">
        <div className="flex bg-white p-1.5 rounded-card border border-border-color shadow-sm max-w-2xl mx-auto mb-16">
          <button
            onClick={() => setActiveTab("emi")}
            className={`flex-1 py-3 text-sm font-bold rounded-lg cursor-pointer transition-all duration-300 text-center flex items-center justify-center gap-2 ${
              activeTab === "emi" ? "bg-primary-blue text-white shadow-premium" : "text-text-gray hover:text-primary-blue"
            }`}
          >
            <Calculator className="w-4 h-4" />
            EMI Calculator
          </button>
          <button
            onClick={() => setActiveTab("eligibility")}
            className={`flex-1 py-3 text-sm font-bold rounded-lg cursor-pointer transition-all duration-300 text-center flex items-center justify-center gap-2 ${
              activeTab === "eligibility" ? "bg-primary-blue text-white shadow-premium" : "text-text-gray hover:text-primary-blue"
            }`}
          >
            <Award className="w-4 h-4" />
            Eligibility Calculator
          </button>
          <button
            onClick={() => setActiveTab("affordability")}
            className={`flex-1 py-3 text-sm font-bold rounded-lg cursor-pointer transition-all duration-300 text-center flex items-center justify-center gap-2 ${
              activeTab === "affordability" ? "bg-primary-blue text-white shadow-premium" : "text-text-gray hover:text-primary-blue"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Affordability
          </button>
        </div>

        {/* --- TAB 1: EMI CALCULATOR --- */}
        {activeTab === "emi" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-border-color rounded-card shadow-premium flex flex-col gap-8">
              <h3 className="font-extrabold text-xl text-dark-blue">Calculate Monthly Installment</h3>
              
              {/* Slider 1: Loan Amount */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Loan Amount</span>
                  <div className="flex items-center gap-2 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <span>₹</span>
                    <input 
                      type="number" 
                      value={emiAmount} 
                      onChange={(e) => setEmiAmount(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-24 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="100000000" 
                  step="50000"
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
                <div className="flex justify-between text-[10px] text-text-gray font-bold">
                  <span>1 Lakh</span>
                  <span>10 Crores</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Interest Rate</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      step="0.05"
                      value={emiRate} 
                      onChange={(e) => setEmiRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-14 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>% p.a.</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  step="0.05"
                  value={emiRate}
                  onChange={(e) => setEmiRate(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
                <div className="flex justify-between text-[10px] text-text-gray font-bold">
                  <span>5%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Loan Tenure</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      value={emiTenure} 
                      onChange={(e) => setEmiTenure(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-10 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>Years</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={emiTenure}
                  onChange={(e) => setEmiTenure(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
                <div className="flex justify-between text-[10px] text-text-gray font-bold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Outputs / Recharts */}
            <div className="lg:col-span-5 bg-[#071D3A] text-white p-6 md:p-8 rounded-card shadow-lg flex flex-col gap-6">
              <h3 className="font-extrabold text-lg border-b border-white/10 pb-4">EMI Summary</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center bg-white/4 p-4 rounded-lg border-l-4 border-primary-blue">
                  <span className="text-[#B8C6D9] text-sm">Monthly Installment (EMI)</span>
                  <span className="text-xl md:text-2xl font-black text-primary-blue">{formatCurrency(emi)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Principal Loan Amount</span>
                  <span className="font-bold">{formatCurrency(emiAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Total Interest Payable</span>
                  <span className="font-bold">{formatCurrency(totalInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4 mt-2">
                  <span className="text-[#B8C6D9] font-bold">Total Amount Payable</span>
                  <span className="font-black text-lg text-white">{formatCurrency(totalPayment)}</span>
                </div>
              </div>

              {/* Pie Chart */}
              {mounted && (
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/10 pt-6 mt-2">
                  <div className="w-32 h-32 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={emiChartData}
                          innerRadius={36}
                          outerRadius={48}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {emiChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 rounded bg-slate-300" />
                      <span className="text-[#B8C6D9]">Principal: {((emiAmount / totalPayment) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 rounded bg-primary-blue" />
                      <span className="text-[#B8C6D9]">Interest: {((totalInterest / totalPayment) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Amortization Table */}
            <div className="lg:col-span-12 mt-12 bg-white border border-border-color rounded-card p-6 md:p-8 shadow-premium">
              <h3 className="font-extrabold text-xl text-dark-blue mb-6">Yearly Amortization Schedule</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-section-bg text-dark-blue font-bold border-b border-border-color">
                      <th className="p-4">Year</th>
                      <th className="p-4">Principal Repaid</th>
                      <th className="p-4">Interest Paid</th>
                      <th className="p-4">Total Paid</th>
                      <th className="p-4">Outstanding Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getAmortization().map((row) => (
                      <tr key={row.year} className="border-b border-border-color hover:bg-section-bg/50 transition-colors">
                        <td className="p-4 font-bold text-text-dark">Year {row.year}</td>
                        <td className="p-4">{formatCurrency(row.principalPaid)}</td>
                        <td className="p-4 text-text-gray">{formatCurrency(row.interestPaid)}</td>
                        <td className="p-4">{formatCurrency(row.totalPaid)}</td>
                        <td className="p-4 font-bold text-primary-blue">{formatCurrency(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: ELIGIBILITY CALCULATOR --- */}
        {activeTab === "eligibility" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Inputs */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-border-color rounded-card shadow-premium flex flex-col gap-8">
              <h3 className="font-extrabold text-xl text-dark-blue">Check Loan Eligibility Limit</h3>
              
              {/* Income */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Net Monthly Income</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <span>₹</span>
                    <input 
                      type="number" 
                      value={income} 
                      onChange={(e) => setIncome(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-18 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="5000"
                  value={income}
                  onChange={(e) => setIncome(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>

              {/* Obligations */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Existing Monthly EMIs</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <span>₹</span>
                    <input 
                      type="number" 
                      value={obligation} 
                      onChange={(e) => setObligation(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-18 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="500000" 
                  step="2000"
                  value={obligation}
                  onChange={(e) => setObligation(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>

              {/* Rate */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Interest Rate</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      step="0.05"
                      value={eligRate} 
                      onChange={(e) => setEligRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-14 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>% p.a.</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  step="0.05"
                  value={eligRate}
                  onChange={(e) => setEligRate(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>

              {/* Tenure */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Loan Tenure</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      value={eligTenure} 
                      onChange={(e) => setEligTenure(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-10 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>Years</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={eligTenure}
                  onChange={(e) => setEligTenure(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>
            </div>

            {/* Outputs */}
            <div className="lg:col-span-5 bg-[#071D3A] text-white p-6 md:p-8 rounded-card shadow-lg flex flex-col gap-6">
              <h3 className="font-extrabold text-lg border-b border-white/10 pb-4">Eligibility Limit</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 bg-white/4 p-5 rounded-lg border-l-4 border-success-green">
                  <span className="text-[#B8C6D9] text-xs font-bold uppercase tracking-wider">Maximum Eligible Loan Amount</span>
                  <span className="text-2xl md:text-3xl font-black text-success-green">{formatCurrency(eligibleLoan)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Net Monthly Income</span>
                  <span className="font-bold">{formatCurrency(income)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Other EMIs Deducted</span>
                  <span className="font-bold">{formatCurrency(obligation)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4 mt-2">
                  <span className="text-[#B8C6D9] font-bold">Estimated Available Monthly EMI</span>
                  <span className="font-black text-lg text-white">{formatCurrency(availableEMI)}</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start bg-white/4 p-4 rounded-lg text-xs leading-relaxed text-[#B8C6D9] mt-2">
                <Info className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                <p>Calculations assume standard banking Fixed Obligation to Income Ratio (FOIR) of 55%. Sanctions depend on physical property appraisal and active credit file verification.</p>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: AFFORDABILITY CALCULATOR --- */}
        {activeTab === "affordability" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Inputs */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-border-color rounded-card shadow-premium flex flex-col gap-8">
              <h3 className="font-extrabold text-xl text-dark-blue">Affordability Analysis</h3>
              
              {/* Budget EMI */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Desired Monthly EMI Budget</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <span>₹</span>
                    <input 
                      type="number" 
                      value={budgetEMI} 
                      onChange={(e) => setBudgetEMI(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-18 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="1000"
                  value={budgetEMI}
                  onChange={(e) => setBudgetEMI(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>

              {/* Rate */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Interest Rate</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      step="0.05"
                      value={affordRate} 
                      onChange={(e) => setAffordRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-14 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>% p.a.</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  step="0.05"
                  value={affordRate}
                  onChange={(e) => setAffordRate(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>

              {/* Tenure */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-text-dark">Loan Tenure</span>
                  <div className="flex items-center gap-1 bg-section-bg border border-border-color rounded px-3 py-1 text-primary-blue font-bold">
                    <input 
                      type="number" 
                      value={affordTenure} 
                      onChange={(e) => setAffordTenure(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-10 bg-transparent text-right outline-none text-primary-blue font-black"
                    />
                    <span>Years</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={affordTenure}
                  onChange={(e) => setAffordTenure(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary-blue"
                />
              </div>
            </div>

            {/* Outputs */}
            <div className="lg:col-span-5 bg-[#071D3A] text-white p-6 md:p-8 rounded-card shadow-lg flex flex-col gap-6">
              <h3 className="font-extrabold text-lg border-b border-white/10 pb-4">Affordable Loan</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center bg-white/4 p-4 rounded-lg border-l-4 border-primary-blue">
                  <span className="text-[#B8C6D9] text-sm">Affordable Principal Loan</span>
                  <span className="text-xl md:text-2xl font-black text-primary-blue">{formatCurrency(affordableLoan)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Target EMI Budget</span>
                  <span className="font-bold">{formatCurrency(budgetEMI)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#B8C6D9]">Total Interest Charged</span>
                  <span className="font-bold">{formatCurrency(affordInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4 mt-2">
                  <span className="text-[#B8C6D9] font-bold">Total Liability Amount</span>
                  <span className="font-black text-lg text-white">{formatCurrency(affordTotalPay)}</span>
                </div>
              </div>

              {/* Pie Chart */}
              {mounted && affordableLoan > 0 && (
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/10 pt-6 mt-2">
                  <div className="w-32 h-32 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={affordChartData}
                          innerRadius={36}
                          outerRadius={48}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {affordChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 rounded bg-slate-300" />
                      <span className="text-[#B8C6D9]">Principal: {((affordableLoan / affordTotalPay) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-3 h-3 rounded bg-primary-blue" />
                      <span className="text-[#B8C6D9]">Interest: {((affordInterest / affordTotalPay) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-bold font-sans">Ready to Finalize Your Application?</h2>
          <p className="text-[#B8C6D9] text-sm md:text-base leading-relaxed">
            Submit your parameters to EAZYKREDIT. We will match you with the highest-rated lenders and handle everything else.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-2">
            <Link 
              href="/apply" 
              className="bg-white text-dark-blue px-8 py-3 font-bold text-sm rounded-btn shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Application
            </Link>
            <a 
              href="https://wa.me/919885011157?text=Hello%20EAZYKREDIT%2C%20I%20would%20like%20to%20apply%20for%20a%20loan." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 font-bold text-sm rounded-btn shadow flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.863-9.852.001-2.633-1.02-5.107-2.875-6.963C16.488 1.832 14.022.812 11.39.812 5.952.812 1.53 5.228 1.528 10.66c-.001 1.636.43 3.22 1.25 4.62l-.993 3.63 3.732-.979c1.378.75 2.919 1.157 4.54 1.159zm11.324-7.653c-.304-.152-1.802-.888-2.08-.989-.278-.101-.48-.152-.68.152-.2.304-.777.989-.953 1.19-.177.2-.354.228-.658.076-.304-.152-1.283-.473-2.443-1.507-.903-.805-1.512-1.8-1.69-2.103-.177-.304-.018-.468.13-.62.136-.136.304-.354.456-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.68-1.643-.933-2.253-.247-.59-.498-.51-.68-.52-.177-.008-.38-.01-.58-.01-.2 0-.527.076-.803.38-.278.304-1.062 1.037-1.062 2.53s1.088 2.937 1.24 3.139c.152.202 2.144 3.274 5.19 4.588.724.311 1.29.497 1.73.637.727.231 1.39.198 1.912.12.583-.088 1.802-.737 2.055-1.45.253-.715.253-1.328.177-1.45-.076-.122-.278-.202-.582-.354z"/></svg> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
