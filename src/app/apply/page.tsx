"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { UploadCloud, CheckCircle2, ChevronRight, AlertCircle, RefreshCw } from "lucide-react";

const schema = zod.object({
  fullName: zod.string().min(3, "Full Name must be at least 3 characters"),
  mobileNumber: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: zod.string().email("Please enter a valid email address"),
  city: zod.string().min(2, "Please enter your city"),
  employmentType: zod.string().min(1, "Please select employment type"),
  loanType: zod.string().min(1, "Please select a loan type"),
  monthlyIncome: zod.number().min(1000, "Monthly Income must be at least ₹1,000"),
  loanAmount: zod.number().min(10000, "Loan Amount must be at least ₹10,000"),
  message: zod.string().optional(),
});

type FormData = zod.infer<typeof schema>;

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      message: "",
    },
  });

  useEffect(() => {
    const loanParam = searchParams.get("loan");
    if (loanParam) setValue("loanType", loanParam);
  }, [searchParams, setValue]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
  };

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const whatsappBase = "https://wa.me/919885011157";
    const waText = `Hello EAZYKREDIT,\n\nI would like to apply for a loan.\nLoan Type: ${data.loanType}\nName: ${data.fullName}\nCity: ${data.city}\n\nPlease assist me.`;
    const fullWaUrl = `${whatsappBase}?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => window.open(fullWaUrl, "_blank"), 3000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#c7d2fe]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#93c5fd] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#a5b4fc] rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B4F9F]">Loan Application</h1>
          <div className="flex justify-center items-center gap-2 text-sm font-semibold text-[#0B4F9F]/60 mt-3">
            <Link href="/" className="hover:text-[#1E88E5] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0B4F9F]">Apply Now</span>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#e0f2fe]" />
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#93c5fd] rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#a5b4fc] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-6 md:p-12">
            {!isSuccess ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="border-b border-white/30 pb-4">
                  <h3 className="font-extrabold text-2xl text-[#0B4F9F]">Submit Financial Inquiry</h3>
                  <p className="text-gray-600 text-sm mt-1">Please provide accurate parameters. EAZYKREDIT will refer you to the optimal bank.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.fullName ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                      }`}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.mobileNumber ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                      }`}
                      {...register("mobileNumber")}
                    />
                    {errors.mobileNumber && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.mobileNumber.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Email Address *</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.email ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                      }`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">City *</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.city ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                      }`}
                      {...register("city")}
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.city.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Employment Type *</label>
                    <select
                      className="w-full px-4 py-3 rounded-full border border-white/50 text-sm outline-none bg-white/70 focus:border-[#1E88E5]"
                      {...register("employmentType")}
                    >
                      <option value="Salaried">Salaried</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Proprietorship">Proprietorship / MSME</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Loan Type *</label>
                    <select
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none bg-white/70 transition-all ${
                        errors.loanType ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
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

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Monthly Net Income *</label>
                    <input
                      type="number"
                      placeholder="In Rupees"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.monthlyIncome ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                      }`}
                      {...register("monthlyIncome", { valueAsNumber: true })}
                    />
                    {errors.monthlyIncome && (
                      <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.monthlyIncome.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0B4F9F]">Loan Amount *</label>
                    <input
                      type="number"
                      placeholder="In Rupees"
                      className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                        errors.loanAmount ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
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
                  <label className="text-sm font-bold text-[#0B4F9F]">Message / Specific Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Provide additional details..."
                    className="w-full px-4 py-3 rounded-2xl border border-white/50 text-sm outline-none resize-y bg-white/70 focus:border-[#1E88E5]"
                    {...register("message")}
                  />
                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0B4F9F]">Upload Documents (Optional)</label>
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all bg-white/40 ${
                      dragActive ? "border-[#1E88E5] bg-blue-50/50" : "border-white/60 hover:border-[#1E88E5]"
                    }`}
                  >
                    <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                      <UploadCloud className="w-10 h-10 text-gray-500" />
                      <span className="font-bold text-sm text-[#0B4F9F]">Drag & Drop files here</span>
                      <span className="text-xs text-gray-500">Or click to select PDF / Image (Max 5MB)</span>
                    </label>

                    {selectedFile && (
                      <div className="mt-4 text-xs font-semibold text-green-600 flex items-center justify-center gap-2 bg-green-50/50 p-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1E88E5] text-white py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-[#0B4F9F] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Apply
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-12 gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-2xl text-[#0B4F9F]">Application Recorded Successfully!</h3>
                  <p className="text-gray-600 text-sm max-w-md">
                    Thank you. We have saved your credit request. Now redirecting you to WhatsApp to connect with a senior EAZYKREDIT relationship manager...
                  </p>
                </div>
                <div className="w-full max-w-sm mt-4 bg-white/50 border border-white/60 p-4 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-500 animate-pulse">
                  Opening WhatsApp Chat in 3 seconds...
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Apply() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-24 min-h-[400px]">
          <div className="w-8 h-8 border-4 border-[#1E88E5] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ApplyFormContent />
    </Suspense>
  );
}
