"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";

const schema = zod.object({
  fullName: zod.string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
    .refine((val) => val.trim().length >= 3, "Name must contain at least 3 non-space characters"),
  mobileNumber: zod.string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
  email: zod.string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address"),
  city: zod.string()
    .min(2, "Enter your city")
    .refine((val) => val.trim().length >= 2, "City name must be valid"),
});

type QuickFormData = zod.infer<typeof schema>;

interface QuickApplyFormProps {
  loanType: string;
}

export default function QuickApplyForm({ loanType }: QuickApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuickFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      city: "",
    }
  });

  const onSubmit = (data: QuickFormData) => {
    setIsSubmitting(true);

    const whatsappBase = "https://wa.me/919885011157";
    const waText = `Hello EAZYKREDIT,\n\nI would like to apply for a loan.\nLoan Type: ${loanType}\nName: ${data.fullName}\nMobile: ${data.mobileNumber}\nEmail: ${data.email}\nCity: ${data.city}\n\nPlease assist me.`;
    const fullWaUrl = `${whatsappBase}?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();

      setTimeout(() => {
        window.open(fullWaUrl, "_blank");
      }, 2500);
    }, 1200);
  };

  return (
    <div className="bg-white border border-border-color rounded-card p-6 md:p-8 shadow-premium">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <h3 className="font-extrabold text-xl text-dark-blue border-b border-border-color pb-3">
              Quick Apply for {loanType}
            </h3>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-dark">Full Name *</label>
              <input
                type="text"
                placeholder="Enter full name"
                className={`w-full px-3.5 py-2.5 rounded-btn border text-xs text-gray-900 bg-white outline-none transition-all ${
                  errors.fullName ? "border-red-500" : "border-border-color focus:border-primary-blue"
                }`}
                {...register("fullName", {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  }
                })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-dark">Mobile Number *</label>
              <input
                type="tel"
                placeholder="10-digit number"
                className={`w-full px-3.5 py-2.5 rounded-btn border text-xs text-gray-900 bg-white outline-none transition-all ${
                  errors.mobileNumber ? "border-red-500" : "border-border-color focus:border-primary-blue"
                }`}
                {...register("mobileNumber", {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                  }
                })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mobileNumber.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-dark">Email *</label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`w-full px-3.5 py-2.5 rounded-btn border text-xs text-gray-900 bg-white outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-border-color focus:border-primary-blue"
                }`}
                {...register("email", {
                  onChange: (e) => {
                    e.target.value = e.target.value.trim();
                  }
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </span>
              )}
            </div>

            {/* City */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-dark">City *</label>
              <input
                type="text"
                placeholder="Residential city"
                className={`w-full px-3.5 py-2.5 rounded-btn border text-xs text-gray-900 bg-white outline-none transition-all ${
                  errors.city ? "border-red-500" : "border-border-color focus:border-primary-blue"
                }`}
                {...register("city", {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  }
                })}
              />
              {errors.city && (
                <span className="text-red-500 text-[10px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.city.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-3 rounded-btn font-bold text-xs shadow hover:shadow-md transition-shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Apply Now"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-6 gap-3"
          >
            <div className="w-10 h-10 bg-[#22C55E]/10 rounded-full flex items-center justify-center text-success-green">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-extrabold text-base text-dark-blue">Application Recorded!</h4>
              <p className="text-text-gray text-[11px] leading-relaxed">Connecting you with an EAZYKREDIT manager on WhatsApp...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
