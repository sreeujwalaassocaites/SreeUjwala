"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";

const schema = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a 10-digit mobile number"),
  email: zod.string().email("Please enter a valid email address"),
  message: zod.string().min(5, "Message must contain some details"),
});

type ContactFormData = zod.infer<typeof schema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B4F9F]">Contact Us</h1>
          <div className="flex justify-center items-center gap-2 text-sm font-semibold text-[#0B4F9F]/60 mt-3">
            <Link href="/" className="hover:text-[#1E88E5] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0B4F9F]">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#dbeafe] to-[#e0f2fe]" />
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#93c5fd] rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#a5b4fc] rounded-full opacity-25 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="font-extrabold text-2xl text-[#0B4F9F]">Get In Touch</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with our authorized credit DSA consultants for immediate support.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-sm">
                      <h4 className="font-bold text-[#0B4F9F]">Office Address</h4>
                      <a
                        href="https://www.google.com/maps?q=17.493736267089844,78.41146850585938&z=17&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#1E88E5] leading-relaxed font-semibold transition-colors"
                      >
                        JNTU Road, Kukatpally, Hyderabad, Telangana - 500085
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-sm">
                      <h4 className="font-bold text-[#0B4F9F]">Phone / WhatsApp</h4>
                      <a href="tel:+919885011157" className="text-gray-600 hover:text-[#1E88E5] font-semibold">
                        +91 98850 11157
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-sm">
                      <h4 className="font-bold text-[#0B4F9F]">Corporate Email</h4>
                      <a href="mailto:info@eazykredit.com" className="text-gray-600 hover:text-[#1E88E5] font-semibold">
                        info@eazykredit.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1E88E5]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-sm">
                      <h4 className="font-bold text-[#0B4F9F]">Business Hours</h4>
                      <p className="text-gray-600">Monday - Saturday (09:30 AM - 06:30 PM)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-extrabold text-2xl text-[#0B4F9F] mb-6 border-b border-white/30 pb-4">
                  Send an Inquiry
                </h3>

                {!isSuccess ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#0B4F9F]">Your Name *</label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                            errors.name ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                          }`}
                          {...register("name")}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#0B4F9F]">Mobile Number *</label>
                        <input
                          type="tel"
                          placeholder="10-digit number"
                          className={`w-full px-4 py-3 rounded-full border text-sm outline-none transition-all bg-white/70 ${
                            errors.phone ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                          }`}
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                          </span>
                        )}
                      </div>
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
                      <label className="text-sm font-bold text-[#0B4F9F]">Your Message *</label>
                      <textarea
                        rows={4}
                        placeholder="Write your query details here..."
                        className={`w-full px-4 py-3 rounded-2xl border text-sm outline-none resize-y transition-all bg-white/70 ${
                          errors.message ? "border-red-500" : "border-white/50 focus:border-[#1E88E5]"
                        }`}
                        {...register("message")}
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#1E88E5] text-white py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#0B4F9F] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center text-center py-8 gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xl text-[#0B4F9F]">Message Sent Successfully!</h4>
                      <p className="text-gray-600 text-sm mt-1">Our advisory desk will contact you within 24 business hours.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 glass-card rounded-2xl overflow-hidden h-[400px]">
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
        </div>
      </section>
    </div>
  );
}
