"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";

const schema = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a 10-digit mobile number"),
  email: zod.string().email("Please enter a valid email address"),
  message: zod.string().min(5, "Message must contain some details")
});

type ContactFormData = zod.infer<typeof schema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulating API submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-section-bg pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <div className="flex justify-center items-center gap-2 text-xs md:text-sm font-semibold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto w-full px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column Left */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white border border-border-color p-8 rounded-card shadow-premium flex flex-col gap-6">
              <h3 className="font-extrabold text-2xl text-dark-blue">Get In Touch</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                Connect with our authorized credit DSA consultants for immediate support.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-blue/8 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <h4 className="font-bold text-dark-blue">Office Address</h4>
                    <p className="text-text-gray leading-relaxed">Central Business District, BKC, Mumbai, MH - 400051</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-blue/8 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <h4 className="font-bold text-dark-blue">Phone / WhatsApp</h4>
                    <a href="tel:+919885011157" className="text-text-gray hover:text-primary-blue font-semibold">
                      +91 98850 11157
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-blue/8 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <h4 className="font-bold text-dark-blue">Corporate Email</h4>
                    <a href="mailto:info@eazykredit.com" className="text-text-gray hover:text-primary-blue font-semibold">
                      info@eazykredit.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-blue/8 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <h4 className="font-bold text-dark-blue">Business Hours</h4>
                    <p className="text-text-gray">Monday - Saturday (09:30 AM - 06:30 PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column Right */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-border-color rounded-card shadow-premium">
            <h3 className="font-extrabold text-2xl text-dark-blue mb-6 border-b border-border-color pb-4">
              Send an Inquiry
            </h3>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-dark">Your Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter full name"
                        className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                          errors.name ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
                        }`}
                        {...register("name")}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-dark">Mobile Number *</label>
                      <input 
                        type="tel" 
                        placeholder="10-digit number"
                        className={`w-full px-4 py-3 rounded-btn border text-sm outline-none transition-all ${
                          errors.phone ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
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

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-dark">Your Message *</label>
                    <textarea 
                      rows={4}
                      placeholder="Write your query details here..."
                      className={`w-full px-4 py-3 rounded-btn border text-sm outline-none resize-y transition-all ${
                        errors.message ? "border-red-500 focus:ring-4 focus:ring-red-100" : "border-border-color focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10"
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
                    className="bg-gradient-to-r from-dark-blue to-primary-blue text-white py-3.5 rounded-btn font-bold text-sm shadow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
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
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-full flex items-center justify-center text-success-green">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl text-dark-blue">Message Sent Successfully!</h4>
                    <p className="text-text-gray text-xs md:text-sm mt-1">Our advisory desk will contact you via email or phone within 24 business hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Google Map Panel */}
        <div className="mt-16 w-full overflow-hidden border border-border-color rounded-card shadow-premium h-[400px]">
          {/* BKC Mumbai Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.442999616035!2d72.86244467599026!3d19.066228352264627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6dfd8487b%3A0xea2ee1c5e6bc90e9!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714529329188!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="EAZYKREDIT BKC Office Map Location"
          />
        </div>
      </section>
    </div>
  );
}
