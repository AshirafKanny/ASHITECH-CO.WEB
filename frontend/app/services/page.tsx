import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkingProcessSection from "../../components/WorkingProcessSection";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore KENI WEB DESIGN web design, development, and strategy services for technology companies.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description: "Explore KENI WEB DESIGN web design, development, and strategy services for technology companies.",
    url: "/services",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "KENI WEB DESIGN services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services",
    description: "Explore KENI WEB DESIGN web design, development, and strategy services for technology companies.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

const popularServices = [
  {
    title: "Website Creation from Figma, XD or Photoshop",
    image: "/service-four1.webp",
  },
  {
    title: "Mobile App Development and Website Design",
    image: "/service-four2.webp",
  },
  {
    title: "eCommerce and Product Selling Development",
    image: "/service-four3.webp",
  },
  {
    title: "Responsive Websites (UI/UX) Design",
    image: "/service-four4.webp",
  },
  {
    title: "SEO (Search Engine Optimization)",
    image: "/service-four5.webp",
  },
  {
    title: "Digital Product Design and Development",
    image: "/service-four6.webp",
  },
];

const pricingRows = [
  { plan: "Basic Plan", price: "$248", save: "25%" },
  { plan: "Standard Plan", price: "$452", save: "43%" },
  { plan: "Premium Plan", price: "$683", save: "66%" },
];

const pricingFeaturesLeft = [
  "Landing page design (10 pages)",
  "HTML+CSS design (12 pages)",
  "Social Media Marketing",
];

const pricingFeaturesRight = [
  "Domin hosting provider",
  "Online support (24/7)",
  "WordPres development",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#ECEFF4] pb-16 pt-30 md:pb-24 md:pt-34" aria-labelledby="services-page-heading">
          <div className="pointer-events-none absolute -left-48 -top-44 h-[34rem] w-[34rem] rounded-full bg-white/55" aria-hidden="true" />
          <span className="pointer-events-none absolute left-18 top-28 rotate-[16deg] text-7xl leading-none text-[#111827]/75" aria-hidden="true">~</span>
          <span className="pointer-events-none absolute right-20 top-44 text-lg text-[#f59e0b]" aria-hidden="true">o</span>
          <span className="pointer-events-none absolute left-60 top-64 text-2xl text-[#22c3ff]" aria-hidden="true">o</span>
          <span className="pointer-events-none absolute right-18 top-64 rotate-[18deg] text-7xl leading-none text-[#111827]/80" aria-hidden="true">~</span>

          <div className="site-container relative z-10 text-center">
            <h1 id="services-page-heading" className="text-3xl font-bold tracking-tight text-[#27314a] sm:text-4xl md:text-[2.8rem]">
              Popular Services
            </h1>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#313b4f] sm:text-base">
              <Link href="/" className="transition-colors hover:text-[#0ea5e9]">Home</Link>
              <ChevronRight size={18} aria-hidden="true" />
              <span className="text-[#0b63f3] underline underline-offset-3">Popular Services</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] py-18 md:py-24" aria-labelledby="services-intro-heading">
          <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <article>
              <p className="inline-flex items-center gap-3 text-base font-semibold text-[#0b63f3] md:text-lg">
                <ArrowRight size={24} className="text-[#22b8ff]" aria-hidden="true" />
                <span>Company Statistics</span>
              </p>

              <h2 id="services-intro-heading" className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] text-[#27314a] md:text-4xl">
                Discover Extraordinary projects brought to life on Oxence.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b7280] md:text-lg md:leading-8">
                Start building your first prototype in no time. Ogency intuitive, drag & drop interface gives you all the building blocks that you need to get started! No skills required.
              </p>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#0b63f3] px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#0755d4]"
              >
                Learn More
                <span aria-hidden="true">&raquo;</span>
              </button>
            </article>

            <div className="mx-auto w-full max-w-5xl lg:ml-auto">
              <Image
                src="/statistics-five.webp"
                alt="Service showcase"
                width={1050}
                height={768}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <WorkingProcessSection />

        <section className="bg-[#020b18] py-18 md:py-24" aria-labelledby="popular-web-services-heading">
          <div className="site-container">
            <h2 id="popular-web-services-heading" className="text-center text-3xl font-bold text-white md:text-[2.3rem]">
              Popular Web Services
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {popularServices.map((service) => (
                <article key={service.title} className="rounded-lg bg-[#f5f7fb] p-8 text-center">
                  <div className="mx-auto max-w-[18.5rem]">
                    <Image src={service.image} alt={service.title} width={380} height={250} className="h-52 w-full object-contain" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-tight text-[#1f2b45] md:text-[1.65rem]">{service.title}</h3>

                  <button
                    type="button"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#bfddff] px-6 py-2.5 text-base font-semibold text-[#1f2b45] transition-colors hover:bg-[#edf5ff] md:text-lg"
                  >
                    Service Details
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f4f5f7] py-18 md:py-24" aria-labelledby="pricing-plan-heading">
          <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-white/60" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-white/45" aria-hidden="true" />

          <div className="site-container relative z-10">
            <p className="text-center text-lg font-semibold text-[#0b63f3] md:text-xl">Pricing Plan</p>
            <h2 id="pricing-plan-heading" className="mt-3 text-center text-3xl font-bold text-[#27314a] md:text-[2.3rem]">
              Best Pricing Package
            </h2>

            <div className="mt-10 space-y-6">
              {pricingRows.map((row) => (
                <article key={row.plan} className="grid overflow-hidden bg-white lg:grid-cols-[1fr_20rem]">
                  <div className="grid gap-7 p-8 sm:grid-cols-2 sm:gap-12 lg:p-12">
                    <div>
                      <h3 className="text-2xl font-bold text-[#27314a] md:text-[1.8rem]">{row.plan}</h3>
                      <ul className="mt-5 space-y-4 text-base leading-7 text-[#6b7280] md:text-[1.02rem]">
                        {pricingFeaturesLeft.map((feature) => (
                          <li key={`${row.plan}-${feature}`} className="flex items-start gap-3">
                            <span className="mt-4 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16bfff]" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="mt-14 space-y-4 text-base leading-7 text-[#6b7280] sm:mt-18 md:text-[1.02rem]">
                      {pricingFeaturesRight.map((feature) => (
                        <li key={`${row.plan}-${feature}`} className="flex items-start gap-3">
                          <span className="mt-4 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16bfff]" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l border-[#e2e8f0] px-8 py-10 lg:px-12 lg:py-12">
                    <p className="text-4xl font-bold text-[#16bfff] md:text-[2.6rem]">{row.price}</p>
                    <p className="mt-2 text-xl text-[#6b7280] md:text-[1.35rem]">
                      Save <span className="text-[#0b63f3]">{row.save}</span>
                    </p>

                    <button
                      type="button"
                      className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#0b63f3] px-6 py-2.5 text-base font-semibold text-[#27314a] transition-colors hover:bg-[#eff6ff] md:text-lg"
                    >
                      Choose Package
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#020b18] py-16 md:py-20" aria-labelledby="services-cta-heading">
          <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <article>
              <h2 id="services-cta-heading" className="text-3xl font-bold text-white md:text-[2.4rem]">
                Let&apos;s Design Your New Website
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/90 md:text-[1.02rem] md:leading-8">
                Do you want to have a website that stands out and impresses your clients? Then we are ready to help!
              </p>
              <p className="mt-2 text-base leading-7 text-white/90 md:text-[1.02rem] md:leading-8">
                Click the button below to contact us and discuss your ideas.
              </p>
            </article>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#11c2e9] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#08afd3] md:text-lg"
            >
              Let&apos;s Get Started
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
