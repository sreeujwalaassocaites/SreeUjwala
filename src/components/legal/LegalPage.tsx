import React from "react";
import Link from "next/link";

interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export default function LegalPage({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: LegalSection[];
}) {
  return (
    <div className="w-full bg-section-bg pb-24">
      <section className="bg-gradient-to-r from-dark-blue to-primary-blue py-14 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-white/80">{summary}</p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-4xl px-6">
        <div className="space-y-8 rounded-card border border-border-color bg-white p-6 shadow-premium md:p-10">
          <p className="text-xs font-semibold text-text-gray">Last reviewed: August 2026</p>
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-extrabold text-dark-blue">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-700">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}

          <div className="rounded-btn border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-slate-700">
            Questions or concerns may be sent to{" "}
            <a href="mailto:info@eazykredit.in" className="font-bold text-primary-blue hover:underline">info@eazykredit.in</a>{" "}
            or discussed by calling{" "}
            <a href="tel:+919885011157" className="font-bold text-primary-blue hover:underline">+91 98850 11157</a>.
          </div>

          <Link href="/contact" className="inline-flex rounded-btn bg-primary-blue px-5 py-3 text-sm font-bold text-white">
            Contact EAZYKREDIT
          </Link>
        </div>
      </section>
    </div>
  );
}
