"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronRight, MessageCircleQuestion, X } from "lucide-react";

const loanTypes = [
  "Home Loan",
  "Business Loan",
  "Personal Loan",
  "Loan Against Property",
  "Education Loan",
  "Used Car Loan",
];

export default function LoanAssistant() {
  const [open, setOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState("");

  const applyHref = selectedLoan ? `/apply?loan=${encodeURIComponent(selectedLoan)}` : "/apply";

  return (
    <div className="fixed bottom-24 right-4 z-40 md:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-border-color bg-white shadow-2xl"
            role="dialog"
            aria-label="Loan assistant"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-dark-blue to-primary-blue px-5 py-4 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <div>
                  <p className="text-sm font-extrabold">EAZYKREDIT Loan Assistant</p>
                  <p className="text-[10px] text-white/75">Guided help — no approval predictions</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/10"
                aria-label="Close loan assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-sm font-bold text-text-dark">What type of finance are you exploring?</p>
                <p className="mt-1 text-[11px] leading-relaxed text-text-gray">
                  Select one option and we will prefill the inquiry form. Final eligibility and pricing are determined by the lender.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {loanTypes.map((loan) => (
                  <button
                    key={loan}
                    type="button"
                    onClick={() => setSelectedLoan(loan)}
                    className={`rounded-xl border px-3 py-2 text-left text-[11px] font-semibold transition ${
                      selectedLoan === loan
                        ? "border-primary-blue bg-primary-blue/5 text-dark-blue"
                        : "border-border-color text-slate-700 hover:border-primary-blue/50"
                    }`}
                  >
                    {loan}
                  </button>
                ))}
              </div>

              <Link
                href={applyHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-dark-blue to-primary-blue px-4 py-3 text-xs font-bold text-white"
              >
                Continue to Secure Inquiry
                <ChevronRight className="h-4 w-4" />
              </Link>

              <p className="text-center text-[9px] leading-relaxed text-text-gray">
                Never share OTPs, PINs, passwords or card details in chat or forms.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-dark-blue shadow-xl ring-1 ring-border-color transition hover:-translate-y-0.5"
        aria-expanded={open}
        aria-label="Open loan assistant"
      >
        <MessageCircleQuestion className="h-5 w-5 text-primary-blue" />
        <span className="hidden sm:inline">Loan Assistant</span>
      </button>
    </div>
  );
}
