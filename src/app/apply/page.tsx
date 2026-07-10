"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2, ChevronRight, AlertCircle, RefreshCw } from "lucide-react";

// Zod Validation Schema
const schema = zod.object({
  fullName: zod.string().min(3, "Full Name must be at least 3 characters"),
  mobileNumber: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: zod.string().email("Please enter a valid email address"),
  city: zod.string().min(2, "Please enter your city"),
  employmentType: zod.string().min(1, "Please select employment type"),
  loanType: zod.string().min(1, "Please select a loan type"),
  monthlyIncome: zod.number().min(1000, "Monthly Income must be at least ₹1,000"),
  loanAmount: zod.number().min(10000, "Loan Amount must be at least ₹10,000"),
  message: zod.string().optional()
});

type FormData = zod.infer<typeof schema>;

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize Form with default loan type from URL queries if available
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      city: "",
      employmentType: "Salaried",
      loanType: "",
      monthlyIncome: undefined,
      loanAmount: undefined,
      message: ""
    }
  });

  useEffect(() => {
    const loanParam = searchParams.get("loan");
    if (loanParam) {
      setValue("loanType", loanParam);
    }
  }, [searchParams, setValue]);

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Submit Handler
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Build pre-filled WhatsApp message
    const whatsappBase = "https://wa.me/919885011157";
    const waText = `Hello EAZYKREDIT,\n\nI would like to apply for a loan.\nLoan Type: ${data.loanType}\nName: ${data.fullName}\nCity: ${data.city}\n\nPlease assist me.`;
    const fullWaUrl = `${whatsappBase}?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto redirect to WhatsApp after 3 seconds
      setTimeout(() => {
        window.open(fullWaUrl, "_blank");
      }, 3000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Loan Application</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Apply Now</span>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-4xl mx-auto w-full px-6 mt-12">
        <div className="bg-white border border-border-color rounded-card shadow-premium p-6 md:p-12 relative">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col gap-6"
                exit={{ opacity: 0 }}
              >
                <div className="border-b border-border-color pb-4">
                  <h3 className="font-extrabold text-2xl text-dark-blue">Submit Financial Inquiry</h3>
                  <p className="text-text-gray text-xs md:text-sm font-medium mt-1">Please provide accurate parameters. EAZYKREDIT will refer you to the optimal bank.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.fullName ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Mobile Number *</label>
                    <input 
                      type="tel" 
                      placeholder="10-digit mobile number" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.mobileNumber ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("mobileNumber")}
                    />
                    {errors.mobileNumber && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.mobileNumber.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.email ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">City *</label>
                    <input 
                      type="text" 
                      placeholder="Enter city" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.city ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("city")}
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.city.message}
                      </span>
                    )}
                  </div>

                  {/* Employment Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Employment Type *</label>
                    <select 
                      className="w-full px-4 py-3 rounded-btn border border-border-color text-sm outline-none bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      {...register("employmentType")}
                    >
                      <option value="Salaried">Salaried</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Proprietorship">Proprietorship / MSME</option>
                    </select>
                  </div>

                  {/* Loan Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Loan Type *</label>
                    <select 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none bg-white transition-all ${
                        errors.loanType ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("loanType")}
                    >
                      <option value="" disabled>Select Loan Type</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="Used Car Loan">Used Car Loan</option>
                    </select>
                    {errors.loanType && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.loanType.message}
                      </span>
                    )}
                  </div>

                  {/* Monthly Income */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Monthly Net Income *</label>
                    <input 
                      type="number" 
                      placeholder="In Rupees" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.monthlyIncome ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("monthlyIncome", { valueAsNumber: true })}
                    />
                    {errors.monthlyIncome && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.monthlyIncome.message}
                      </span>
                    )}
                  </div>

                  {/* Loan Amount */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Loan Amount *</label>
                    <input 
                      type="number" 
                      placeholder="In Rupees" 
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                        errors.loanAmount ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                      }`}
                      {...register("loanAmount", { valueAsNumber: true })}
                    />
                    {errors.loanAmount && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.loanAmount.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">Message / Specific Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide additional details..." 
                    className="w-full px-4 py-3 rounded-btn border border-border-color text-sm outline-none resize-y focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                    {...register("message")}
                  />
                </div>

                {/* Styled File Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">Upload Documents (Optional)</label>
                  <div 
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-btn p-8 text-center cursor-pointer transition-all ${
                      dragActive ? "border-primary-blue bg-primary-blue/5" : "border-border-color bg-section-bg hover:border-primary-blue"
                    }`}
                  >
                    <input 
                      type="file" 
                      id="file-upload"
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                      <UploadCloud className="w-10 h-10 text-text-gray" />
                      <span className="font-bold text-sm text-text-dark">Drag & Drop files here</span>
                      <span className="text-xs text-text-gray">Or click to select PDF / Image (Max 5MB)</span>
                    </label>
                    
                    {selectedFile && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 text-xs font-semibold text-success-green flex items-center justify-center gap-2 bg-[#22C55E]/5 p-2 rounded-lg"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-3.5 rounded-btn font-bold text-sm shadow-md hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit & Chat on WhatsApp
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 gap-6"
              >
                <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center text-success-green">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-2xl text-dark-blue">Application Recorded Successfully!</h3>
                  <p className="text-text-gray text-sm max-w-md">
                    Thank you. We have saved your credit request. Now redirecting you to WhatsApp to connect with a senior EAZYKREDIT relationship manager...
                  </p>
                </div>
                <div className="w-full max-w-sm mt-4 bg-section-bg border border-border-color p-4 rounded-lg flex items-center justify-center text-xs font-semibold text-text-gray animate-pulse">
                  Opening WhatsApp Chat in 3 seconds...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default function Apply() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center py-24 min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary-blue border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ApplyFormContent />
    </Suspense>
  );
}
