"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, ExternalLink, RefreshCw } from "lucide-react";
import TurnstileWidget from "@/components/TurnstileWidget";
import { submitLead, type LeadResponse } from "@/lib/lead-client";

const personNamePattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;

const schema = zod.object({
  fullName: zod.string().trim().min(3, "Name must be at least 3 characters").max(100).regex(personNamePattern, "Enter a valid name"),
  mobileNumber: zod.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: zod.string().trim().toLowerCase().email("Enter a valid email address").max(254),
  city: zod.string().trim().min(2, "Enter your city").max(100).regex(personNamePattern, "Enter a valid city"),
  consent: zod.boolean().refine((value) => value, { message: "Consent is required" }),
  website: zod.string().optional(),
});

type QuickFormData = zod.infer<typeof schema>;

interface QuickApplyFormProps {
  loanType: string;
}

export default function QuickApplyForm({ loanType }: QuickApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LeadResponse | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuickFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      city: "",
      consent: false,
      website: "",
    },
  });

  const handleTokenChange = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const onSubmit = async (data: QuickFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await submitLead({
        source: "quick-apply",
        ...data,
        loanType,
        turnstileToken,
      });
      setResult(response);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your inquiry.");
      setTurnstileResetSignal((value) => value + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-card border border-border-color bg-white p-6 shadow-premium md:p-8">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            <h3 className="border-b border-border-color pb-3 text-xl font-extrabold text-dark-blue">
              Quick Apply for {loanType}
            </h3>

            <CompactField label="Full Name" error={errors.fullName?.message}>
              <input
                type="text"
                autoComplete="name"
                placeholder="Enter full name"
                className={inputClass(Boolean(errors.fullName))}
                {...register("fullName")}
              />
            </CompactField>

            <CompactField label="Mobile Number" error={errors.mobileNumber?.message}>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit number"
                maxLength={10}
                className={inputClass(Boolean(errors.mobileNumber))}
                {...register("mobileNumber", {
                  onChange: (event) => {
                    event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
                  },
                })}
              />
            </CompactField>

            <CompactField label="Email" error={errors.email?.message}>
              <input
                type="email"
                autoComplete="email"
                placeholder="email@example.com"
                className={inputClass(Boolean(errors.email))}
                {...register("email")}
              />
            </CompactField>

            <CompactField label="City" error={errors.city?.message}>
              <input
                type="text"
                autoComplete="address-level2"
                placeholder="Residential city"
                className={inputClass(Boolean(errors.city))}
                {...register("city")}
              />
            </CompactField>

            <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor={`website-${loanType}`}>Website</label>
              <input id={`website-${loanType}`} tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-2 text-[10px] leading-relaxed text-text-gray">
                <input
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 accent-primary-blue"
                  {...register("consent")}
                />
                <span>
                  I consent to contact by phone, WhatsApp and email and accept the{" "}
                  <Link href="/privacy" className="font-bold text-primary-blue hover:underline">Privacy Policy</Link>.
                </span>
              </label>
              {errors.consent && <ErrorText>{errors.consent.message}</ErrorText>}
            </div>

            <TurnstileWidget onTokenChange={handleTokenChange} resetSignal={turnstileResetSignal} />

            {submitError && (
              <div role="alert" className="flex items-start gap-2 rounded-btn border border-red-200 bg-red-50 p-3 text-[10px] font-semibold text-red-700">
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-btn bg-gradient-to-r from-dark-blue to-primary-blue py-3 text-xs font-bold text-white shadow transition-shadow hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 py-6 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E]/10 text-success-green">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-extrabold text-dark-blue">Inquiry Received</h4>
              <p className="text-[11px] leading-relaxed text-text-gray">
                Reference: <strong>{result.referenceId}</strong>. Our team will contact you during business hours.
              </p>
            </div>
            {result.whatsappUrl && (
              <a
                href={result.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-btn bg-[#25D366] px-4 py-2 text-[11px] font-bold text-white"
              >
                Continue on WhatsApp <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-btn border bg-white px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-all ${
    hasError ? "border-red-500" : "border-border-color focus:border-primary-blue"
  }`;
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
      <AlertCircle className="h-3 w-3" /> {children}
    </span>
  );
}

function CompactField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-text-dark">{label} *</label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
