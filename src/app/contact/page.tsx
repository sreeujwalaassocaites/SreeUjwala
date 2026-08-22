"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
} from "lucide-react";
import TurnstileWidget from "@/components/TurnstileWidget";
import { submitLead, type LeadResponse } from "@/lib/lead-client";

const personNamePattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;

const schema = zod.object({
  name: zod.string().trim().min(3, "Name must be at least 3 characters").max(100).regex(personNamePattern, "Enter a valid name"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: zod.string().trim().toLowerCase().email("Enter a valid email address").max(254),
  message: zod.string().max(1500, "Message must be under 1,500 characters").optional(),
  consent: zod.boolean().refine((value) => value, { message: "Consent is required" }),
  website: zod.string().optional(),
});

type ContactFormData = zod.infer<typeof schema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LeadResponse | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", message: "", consent: false, website: "" },
  });

  const handleTokenChange = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await submitLead({
        source: "contact",
        fullName: data.name,
        mobileNumber: data.phone,
        email: data.email,
        message: data.message,
        consent: data.consent,
        website: data.website,
        turnstileToken,
      });
      setResult(response);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your inquiry.");
      setTurnstileResetSignal((value) => value + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col bg-section-bg pb-24 pt-24">
      <section className="mx-auto mt-4 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-6 rounded-card border border-border-color bg-white p-8 shadow-premium">
              <h1 className="text-2xl font-extrabold text-dark-blue">Get In Touch</h1>
              <p className="text-sm leading-relaxed text-text-gray">
                Connect with our credit facilitation team for guidance on the next steps in your loan inquiry.
              </p>

              <div className="flex flex-col gap-5">
                <ContactItem icon={<MapPin className="h-5 w-5 text-primary-blue" />} title="Office Address">
                  <a
                    href="https://www.google.com/maps?q=17.493736267089844,78.41146850585938&z=17&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold leading-relaxed text-text-gray transition-colors hover:text-primary-blue"
                  >
                    Plot No 572, 1st Floor, Vivekananda Nagar, Kukatpally, Hyderabad
                  </a>
                </ContactItem>

                <ContactItem icon={<Phone className="h-5 w-5 text-primary-blue" />} title="Phone / WhatsApp">
                  <a href="tel:+919885011157" className="font-semibold text-text-gray hover:text-primary-blue">
                    +91 98850 11157
                  </a>
                </ContactItem>

                <ContactItem icon={<Mail className="h-5 w-5 text-primary-blue" />} title="Corporate Email">
                  <a href="mailto:info@eazykredit.in" className="font-semibold text-text-gray hover:text-primary-blue">
                    info@eazykredit.in
                  </a>
                </ContactItem>

                <ContactItem icon={<Clock className="h-5 w-5 text-primary-blue" />} title="Business Hours">
                  <p className="text-text-gray">Monday - Saturday (09:30 AM - 06:00 PM)</p>
                </ContactItem>
              </div>
            </div>
          </div>

          <div className="rounded-card border border-border-color bg-white p-6 shadow-premium md:p-10 lg:col-span-7">
            <h2 className="mb-6 border-b border-border-color pb-4 text-2xl font-extrabold text-dark-blue">
              Send an Inquiry
            </h2>

            <AnimatePresence mode="wait">
              {!result ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field label="Your Name" error={errors.name?.message}>
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Enter full name"
                        className={inputClass(Boolean(errors.name))}
                        {...register("name")}
                      />
                    </Field>

                    <Field label="Mobile Number" error={errors.phone?.message}>
                      <input
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="10-digit number"
                        maxLength={10}
                        className={inputClass(Boolean(errors.phone))}
                        {...register("phone", {
                          onChange: (event) => {
                            event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
                          },
                        })}
                      />
                    </Field>
                  </div>

                  <Field label="Email Address" error={errors.email?.message}>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      className={inputClass(Boolean(errors.email))}
                      {...register("email")}
                    />
                  </Field>

                  <Field label="Your Message (Optional)" error={errors.message?.message} optional>
                    <textarea
                      rows={4}
                      maxLength={1500}
                      placeholder="Write your query details here..."
                      className={inputClass(Boolean(errors.message)) + " resize-y"}
                      {...register("message")}
                    />
                  </Field>

                  <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} />
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-700">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 accent-primary-blue"
                        {...register("consent")}
                      />
                      <span>
                        I consent to EAZYKREDIT contacting me by phone, WhatsApp and email. I have read the{" "}
                        <Link href="/privacy" className="font-bold text-primary-blue hover:underline">Privacy Policy</Link>.
                      </span>
                    </label>
                    {errors.consent && <ErrorText>{errors.consent.message}</ErrorText>}
                  </div>

                  <TurnstileWidget onTokenChange={handleTokenChange} resetSignal={turnstileResetSignal} />

                  {submitError && (
                    <div role="alert" className="flex items-start gap-2 rounded-btn border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-btn bg-gradient-to-r from-dark-blue to-primary-blue py-3.5 text-sm font-bold text-white shadow transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Sending Securely...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]/10 text-success-green">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-dark-blue">Inquiry Sent Successfully</h2>
                    <p className="mt-1 text-xs text-text-gray md:text-sm">
                      Reference: <strong>{result.referenceId}</strong>. Our advisory desk will contact you during business hours.
                    </p>
                  </div>
                  {result.whatsappUrl && (
                    <a
                      href={result.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-btn bg-[#25D366] px-5 py-3 text-xs font-bold text-white"
                    >
                      Continue on WhatsApp <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 h-[400px] w-full overflow-hidden rounded-card border border-border-color shadow-premium">
          <iframe
            src="https://maps.google.com/maps?q=17.493736267089844,78.41146850585938&z=17&output=embed&hl=en"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EAZYKREDIT Office Map Location"
          />
        </div>
      </section>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-btn border bg-white px-4 py-3 text-sm outline-none transition-all ${
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
  optional = false,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-text-dark">
        {label} {!optional && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-blue/8">{icon}</div>
      <div className="flex flex-col gap-0.5 text-sm">
        <h3 className="font-bold text-dark-blue">{title}</h3>
        {children}
      </div>
    </div>
  );
}
