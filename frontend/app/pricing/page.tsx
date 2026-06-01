import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PricingPackagesSection from "../../components/PricingPackagesSection";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore KENI WEB DESIGN website pricing packages and choose the best plan for your business.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing",
    description: "Explore KENI WEB DESIGN website pricing packages and choose the best plan for your business.",
    url: "/pricing",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "KENI WEB DESIGN pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing",
    description: "Explore KENI WEB DESIGN website pricing packages and choose the best plan for your business.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollReveal>
          <section
            className="relative overflow-hidden bg-cover bg-center text-white"
            aria-labelledby="pricing-page-heading"
            style={{ backgroundImage: "url('/currency-bann.webp')", minHeight: "70vh" }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" aria-hidden="true" />
            <div className="site-container relative z-20 text-center py-20 md:py-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5e2e]">
                &#183;&#183;&#183; Our Pricing Package &#183;&#183;&#183;
              </p>
              <h1 id="pricing-page-heading" className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Website Design Packages For Every Growth Stage
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                Choose a package that matches your goals, then send your content and I will tailor the final page for you.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6d47]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <PricingPackagesSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}