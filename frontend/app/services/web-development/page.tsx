import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";

const details = {
  title: "Web Development",
  heroImage: "/m7.webp",
  heroSubtitle: "Secure, scalable websites built for growth.",
  intro:
    "Custom web development services tailored to your business needs using modern technologies and best practices.",
  includes: [
    "Business websites",
    "Landing pages",
    "Portfolio websites",
    "Corporate websites",
    "CMS integration",
    "Backend systems",
    "API integrations",
    "Website maintenance",
  ],
  benefits: [
    "Professional online presence",
    "Fast and secure websites",
    "Scalable solutions",
  ],
  whyChoose: [
    "Clean code",
    "Modern design",
    "Mobile responsive",
    "Reliable support",
    "Affordable pricing",
  ],
  process: [
    "Requirement gathering",
    "Planning and wireframing",
    "Design and implementation",
    "Testing and quality checks",
    "Launch and handover",
  ],
  cta: "Let us build your website.",
};

const faqItems = [
  {
    question: "How long does development take?",
    answer: "Typically 1-4 weeks depending on complexity.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes, ongoing maintenance and support are available.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely.",
  },
];

export const metadata: Metadata = {
  title: "Web Development Service",
  description: "Professional web development services for fast, scalable, and modern company websites.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Web Development Service",
    description: "Professional web development services for fast, scalable, and modern company websites.",
    url: "/services/web-development",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Web development service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Service",
    description: "Professional web development services for fast, scalable, and modern company websites.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

export default function WebDevelopmentServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pb-20" aria-labelledby="service-heading">
          <div className="relative min-h-screen overflow-hidden bg-[#0b1222]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${details.heroImage}')` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0b1222]/70" aria-hidden="true" />
            <div className="site-container relative z-10 flex min-h-screen flex-col justify-center py-16 text-white sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">Our Services</p>
              <h1 id="service-heading" className="mt-4 text-4xl font-bold sm:text-5xl">
                {details.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                {details.heroSubtitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
                {details.intro}
              </p>
            </div>
          </div>

          <div className="site-container max-w-4xl pt-12">
            <p className="text-lg leading-8 text-[#0F172A]">{details.intro}</p>

            <div className="mt-12 grid gap-10">
              <section aria-labelledby="service-includes">
                <h2 id="service-includes" className="text-2xl font-semibold text-[#0F172A]">
                  What this service includes
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {details.includes.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="service-benefits">
                <h2 id="service-benefits" className="text-2xl font-semibold text-[#0F172A]">
                  Benefits to your business
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {details.benefits.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="service-why">
                <h2 id="service-why" className="text-2xl font-semibold text-[#0F172A]">
                  Why choose us
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {details.whyChoose.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="service-process">
                <h2 id="service-process" className="text-2xl font-semibold text-[#0F172A]">
                  Our process
                </h2>
                <ol className="mt-4 grid gap-3 text-[#475569]">
                  {details.process.map((item, index) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      <span className="mr-2 font-semibold text-[#0F172A]">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="service-cta">
                <h2 id="service-cta" className="text-2xl font-semibold text-[#0F172A]">
                  Ready to get started?
                </h2>
                <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6">
                  <p className="text-[#475569]">{details.cta}</p>
                  <a
                    href="/contact"
                    className="inline-flex w-fit items-center justify-center rounded-lg bg-[#0B63F3] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0756D6]"
                  >
                    Contact us
                  </a>
                </div>
              </section>

              <section aria-labelledby="service-faq">
                <h2 id="service-faq" className="text-2xl font-semibold text-[#0F172A]">
                  FAQ
                </h2>
                <div className="mt-4 grid gap-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-lg border border-[#E2E8F0] px-4 py-4">
                      <p className="font-semibold text-[#0F172A]">{item.question}</p>
                      <p className="mt-2 text-[#475569]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
