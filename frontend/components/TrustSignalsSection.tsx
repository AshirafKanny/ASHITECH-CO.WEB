"use client";

import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "120+", label: "Websites delivered" },
  { value: "12", label: "Industries served" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "24/7", label: "Support coverage" },
];

const industries = [
  "Hospitality",
  "Education",
  "Healthcare",
  "Real estate",
  "Logistics",
  "Professional services",
];

const technologies = ["Next.js", "WordPress", "Shopify", "React", "Figma", "Google Analytics"];

export default function TrustSignalsSection() {
  return (
    <section className="trust-signals-section relative overflow-hidden bg-white py-16" aria-labelledby="trust-signals-heading">
      <div className="trust-signals-grid-bg" aria-hidden="true" />
      <div className="site-container relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
              Authority and trust
            </p>
            <h2 id="trust-signals-heading" className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">
              A trusted web design partner for Kampala businesses
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b6577]">
              We are focused on measurable outcomes: more inquiries, stronger brands, and better visibility on search.
            </p>
          </div>

          <MagneticButton>
            <Button href="/portfolio" variant="primary" className="inline-flex items-center justify-center bg-linear-to-b from-[#ff7b4a] to-[#ff5e2e] ring-1 ring-white/20 ring-offset-1 ring-offset-[#ff5e2e] transition-transform duration-150 active:scale-98">
              View recent projects
            </Button>
          </MagneticButton>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6 text-center">
              <p className="text-3xl font-bold text-[#ff5e2e]">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[#1E293B]">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[#E4E8F1] bg-white p-6">
            <h3 className="text-lg font-semibold text-[#1E293B]">Industries we serve</h3>
            <p className="mt-2 text-sm text-[#5b6577]">
              Local businesses across Uganda rely on our website developers for industry-specific solutions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((item) => (
                <span key={item} className="rounded-full border border-[#dbe4f3] px-4 py-1.5 text-xs font-semibold text-[#1E293B]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/website-design-uganda" className="text-xs font-semibold text-[#ff5e2e] hover:underline">
                Website design Uganda
              </Link>
              <Link href="/website-design-kampala" className="text-xs font-semibold text-[#ff5e2e] hover:underline">
                Web design Kampala
              </Link>
              <Link href="/seo-services-uganda" className="text-xs font-semibold text-[#ff5e2e] hover:underline">
                SEO services Uganda
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E4E8F1] bg-white p-6">
            <h3 className="text-lg font-semibold text-[#1E293B]">Technology stack</h3>
            <p className="mt-2 text-sm text-[#5b6577]">Modern tools for performance, security, and scalability.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <span key={item} className="rounded-full bg-[#0f172a] px-4 py-1.5 text-xs font-semibold text-white">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-[#1E293B]">
              <Link href="/portfolio" className="hover:text-[#ff5e2e]">
                View portfolio
              </Link>
              <Link href="/case-studies/kampala-legal-firm-website" className="hover:text-[#ff5e2e]">
                Read a case study
              </Link>
              <Link href="/contact" className="hover:text-[#ff5e2e]">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
