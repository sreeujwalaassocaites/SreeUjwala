"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import TurnstileWidget from "@/components/TurnstileWidget";
import { submitLead, type LeadResponse } from "@/lib/lead-client";

const personNamePattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;

const schema = zod.object({
  fullName: zod
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name is too long")
    .regex(personNamePattern, "Enter a valid full name"),
  mobileNumber: zod.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: zod.string().trim().toLowerCase().email("Enter a valid email address").max(254),
  city: zod
    .string()
    .trim()
    .min(2, "Enter your city")
    .max(100, "City name is too long")
    .regex(personNamePattern, "Enter a valid city"),
  employmentType: zod.string().min(1, "Select employment type"),
  loanType: zod.string().min(1, "Select a loan type"),
  monthlyIncome: zod
    .number()
    .min(1000, "Monthly income must be at least ₹1,000")
    .max(100_000_000, "Enter a realistic monthly income"),
  loanAmount: zod
    .number()
    .min(10_000, "Loan amount must be at least ₹10,000")
    .max(1_000_000_000, "Enter a realistic loan amount"),
  message: zod.string().max(1500, "Message must be under 1,500 characters").optional(),
  consent: zod.boolean().refine((value) => value, {
    message: "Please provide consent so our team can contact you",
  }),
  website: zod.string().optional(),
});

type FormData = zod.infer<typeof schema>;

const loanOptions = [
  "Home Loan",
  "Business Loan",
  "Personal Loan",
  "Loan Against Property",
  "Education Loan",
  "Used Car Loan",
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LeadResponse | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
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
      consent: false,
      website: "",
    },
  });

  useEffect(() => {
    const loanParam = searchParams.get("loan");
    if (loanParam && loanOptions.includes(loanParam)) {
      setValue("loanType", loanParam);
    }

    const employmentParam = searchParams.get("employment");
    if (employmentParam) {
      setValue("employmentType", employmentParam);
    }

    const cityParam = searchParams.get("city");
    if (cityParam) {
      setValue("city", cityParam.slice(0, 100));
    }
  }, [searchParams, setValue]);

  const handleTokenChange = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await submitLead({
        source: "full-application",
        ...data,
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
    <div className="flex w-full flex-col bg-section-bg pb-24">
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Loan Application</h1>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/70 md:text-sm">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Apply Now</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-4xl px-6">
        <div className="relative rounded-card border border-border-color bg-white p-6 shadow-premium md:p-12">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
                exit={{ opacity: 0 }}
                noValidate
              >
                <div className="border-b border-border-color pb-4">
                  <h2 className="text-2xl font-extrabold text-dark-blue">Submit Financial Inquiry</h2>
                  <p className="mt-1 text-xs font-medium text-text-gray md:text-sm">
                    Share the basic details below. Our team will review the inquiry and help you explore suitable lender options.
                  </p>
                </div>

                <div className="flex gap-3 rounded-btn border border-blue-100 bg-blue-50 p-4 text-xs leading-relaxed text-slate-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                  <p>
                    EAZYKREDIT is a loan facilitation service, not a lender. Approval, interest rate and final terms are decided by the lender after verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Full Name" error={errors.fullName?.message}>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={inputClass(Boolean(errors.fullName))}
                      {...register("fullName")}
                    />
                  </Field>

                  <Field label="Mobile Number" error={errors.mobileNumber?.message}>
                    <input
                      id="mobileNumber"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={inputClass(Boolean(errors.mobileNumber))}
                      {...register("mobileNumber", {
                        onChange: (event) => {
                          event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
                        },
                      })}
                    />
                  </Field>

                  <Field label="Email Address" error={errors.email?.message}>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      className={inputClass(Boolean(errors.email))}
                      {...register("email")}
                    />
                  </Field>

                  <Field label="City" error={errors.city?.message}>
                    <input
                      id="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Enter city"
                      className={inputClass(Boolean(errors.city))}
                      {...register("city")}
                    />
                  </Field>

                  <Field label="Employment Type" error={errors.employmentType?.message}>
                    <select
                      id="employmentType"
                      className={inputClass(Boolean(errors.employmentType))}
                      {...register("employmentType")}
                    >
                      <option value="Salaried">Salaried</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Proprietorship / MSME">Proprietorship / MSME</option>
                    </select>
                  </Field>

                  <Field label="Loan Type" error={errors.loanType?.message}>
                    <select
                      id="loanType"
                      className={inputClass(Boolean(errors.loanType))}
                      {...register("loanType")}
                    >
                      <option value="" disabled>Select Loan Type</option>
                      {loanOptions.map((loan) => (
                        <option key={loan} value={loan}>{loan}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Monthly Net Income" error={errors.monthlyIncome?.message}>
                    <input
                      id="monthlyIncome"
                      type="number"
                      inputMode="numeric"
                      min={1000}
                      max={100000000}
                      step={1000}
                      placeholder="In Rupees"
                      className={inputClass(Boolean(errors.monthlyIncome))}
                      {...register("monthlyIncome", { valueAsNumber: true })}
                    />
                  </Field>

                  <Field label="Loan Amount" error={errors.loanAmount?.message}>
                    <input
                      id="loanAmount"
                      type="number"
                      inputMode="numeric"
                      min={10000}
                      max={1000000000}
                      step={10000}
                      placeholder="In Rupees"
                      className={inputClass(Boolean(errors.loanAmount))}
                      {...register("loanAmount", { valueAsNumber: true })}
                    />
                  </Field>
                </div>

                <Field label="Message / Specific Requirements (Optional)" error={errors.message?.message}>
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={1500}
                    placeholder="Provide additional details..."
                    className={inputClass(Boolean(errors.message)) + " resize-y"}
                    {...register("message")}
                  />
                </Field>

                <div className="flex gap-3 rounded-btn border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
                  <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>
                    For your safety, this form does not accept Aadhaar, PAN, bank statements or other financial documents. Never share OTPs, PINs, passwords or card details. An advisor will provide a verified channel if documents are required later.
                  </p>
                </div>

                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-700">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-primary-blue"
                      {...register("consent")}
                    />
                    <span>
                      I consent to EAZYKREDIT contacting me by phone, WhatsApp and email regarding this inquiry. I have read the{" "}
                      <Link href="/privacy" className="font-bold text-primary-blue hover:underline">Privacy Policy</Link>{" "}
                      and{" "}
                      <Link href="/terms" className="font-bold text-primary-blue hover:underline">Terms</Link>.
                    </span>
                  </label>
                  {errors.consent && <ErrorText>{errors.consent.message}</ErrorText>}
                </div>

                <TurnstileWidget
                  onTokenChange={handleTokenChange}
                  resetSignal={turnstileResetSignal}
                />

                {submitError && (
                  <div role="alert" className="flex items-start gap-2 rounded-btn border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-btn bg-gradient-to-r from-dark-blue to-primary-blue py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-premium-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Securely Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22C55E]/10 text-success-green">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-extrabold text-dark-blue">Inquiry Submitted Successfully</h2>
                  <p className="mx-auto max-w-md text-sm text-text-gray">
                    Thank you. Our team has received your inquiry and will contact you during business hours.
                  </p>
                </div>
                {result.referenceId && (
                  <div className="rounded-btn border border-border-color bg-section-bg px-5 py-3 text-sm">
                    Reference: <strong className="text-dark-blue">{result.referenceId}</strong>
                  </div>
                )}
                {result.whatsappUrl && (
                  <a
                    href={result.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-btn bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow transition hover:-translate-y-0.5"
                  >
                    Continue on WhatsApp
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <p className="text-xs text-text-gray">Do not share OTPs, PINs, passwords or card details with anyone.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-btn border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-all ${
    hasError
      ? "border-red-500 focus:ring-4 focus:ring-red-100"
      : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
  }`;
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 flex items-center gap-1 text-xs font-bold text-red-500">
      <AlertCircle className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-text-dark">
        {label} {!label.includes("Optional") && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

export default function Apply() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center py-24">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-blue border-t-transparent" />
        </div>
      }
    >
      <ApplyFormContent />
    </Suspense>
  );
}
