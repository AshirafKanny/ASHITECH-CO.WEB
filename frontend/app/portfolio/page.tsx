import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View selected KENI WEB DESIGN projects in website design and development.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio",
    description: "View selected KENI WEB DESIGN projects in website design and development.",
    url: "/portfolio",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "KENI WEB DESIGN portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "View selected KENI WEB DESIGN projects in website design and development.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

const projectCards = [
  {
    title: "Saas Landing PSD Template",
    imageSrc: "/pot/project-two1.webp",
    imageAlt: "Saas landing template preview",
    frameClassName: "bg-[#6058ef]",
  },
  {
    title: "Fintex- eWallet PSD Template",
    imageSrc: "/pot/project-two2.webp",
    imageAlt: "Fintex ewallet template preview",
    frameClassName: "bg-[#0f172a]",
  },
  {
    title: "Job Finding Mobile Applications",
    imageSrc: "/pot/project-two3.webp",
    imageAlt: "Job finding mobile app preview",
    frameClassName: "bg-[#1e1b4b]",
  },
  {
    title: "Oxence Website development Template",
    imageSrc: "/pot/project-two7.webp",
    imageAlt: "Oxence website development template preview",
    frameClassName: "bg-[#ff6b3d]",
  },
  {
    title: "Web Design Landing PSD Template",
    imageSrc: "/pot/project-two10.webp",
    imageAlt: "Web design landing template preview",
    frameClassName: "bg-[#57d1cc]",
  },
  {
    title: "Social Media Marketing Web Template",
    imageSrc: "/pot/project-two11.webp",
    imageAlt: "Social media marketing template preview",
    frameClassName: "bg-[#6f86a6]",
  },
  {
    title: "Oxence Website development Services Template",
    imageSrc: "/pot/project-two12.webp",
    imageAlt: "Oxence website services template preview",
    frameClassName: "bg-[#0b63f3]",
  },
  {
    title: "Bcoach Education & Coach Web Template",
    imageSrc: "/pot/project-two13.webp",
    imageAlt: "Education and coach web template preview",
    frameClassName: "bg-[#12ce8f]",
  },
  {
    title: "University College Web Template",
    imageSrc: "/pot/project-two14.webp",
    imageAlt: "University college web template preview",
    frameClassName: "bg-[#a28a68]",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#ECEFF4] pb-16 pt-30 md:pb-22 md:pt-34" aria-labelledby="portfolio-hero-heading">
          <div className="pointer-events-none absolute -left-48 -top-44 h-[34rem] w-[34rem] rounded-full bg-white/55" aria-hidden="true" />
          <span className="pointer-events-none absolute left-18 top-28 rotate-[16deg] text-7xl leading-none text-[#111827]/75" aria-hidden="true">~</span>
          <span className="pointer-events-none absolute right-20 top-44 text-lg text-[#f59e0b]" aria-hidden="true">o</span>
          <span className="pointer-events-none absolute left-60 top-64 text-2xl text-[#22c3ff]" aria-hidden="true">o</span>
          <span className="pointer-events-none absolute right-18 top-64 rotate-[18deg] text-7xl leading-none text-[#111827]/80" aria-hidden="true">~</span>

          <div className="site-container relative z-10 text-center">
            <h1 id="portfolio-hero-heading" className="text-3xl font-bold tracking-tight text-[#27314a] sm:text-4xl md:text-[2.8rem]">
              Project Grid
            </h1>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#313b4f] sm:text-base">
              <Link href="/" className="transition-colors hover:text-[#0ea5e9]">Home</Link>
              <ChevronRight size={18} aria-hidden="true" />
              <span className="text-[#0b63f3] underline underline-offset-3">Project Grid</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] py-14 md:py-18" aria-labelledby="portfolio-grid-heading">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <h2 id="portfolio-grid-heading" className="max-w-xl text-3xl font-bold leading-tight text-[#27314a] md:text-[2.4rem]">
                Let&apos;s See Our Popular Website Template
              </h2>

              <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#374151] md:text-base">
                {[
                  { label: "All", isActive: true },
                  { label: "Business" },
                  { label: "Saas" },
                  { label: "Medical" },
                  { label: "Construction" },
                  { label: "Education" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.label}
                    className={`rounded-md px-4 py-2 transition-colors ${item.isActive ? "bg-white text-[#22b8ff] shadow-sm" : "text-[#374151] hover:bg-white"}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {projectCards.map((project) => (
                <article key={project.title} className="recent-project-card overflow-hidden rounded-sm border border-[#e5e7eb] bg-white shadow-[0_2px_14px_rgba(15,23,42,0.04)]">
                  <div className={`recent-project-media relative p-7 ${project.frameClassName}`}>
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={700}
                      height={410}
                      className="h-auto w-full object-cover"
                    />

                    <div className="recent-project-overlay" aria-hidden="true" />
                    <button
                      type="button"
                      aria-label={`Open project: ${project.title}`}
                      className="recent-project-cta absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0b63f3] shadow-lg"
                    >
                      <ArrowRight size={30} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="px-8 py-7 text-center">
                    <h3 className="text-2xl font-bold leading-tight text-[#2d364f] md:text-[1.95rem]">{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#020b18] py-16 md:py-20" aria-labelledby="portfolio-cta-heading">
          <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <article>
              <h2 id="portfolio-cta-heading" className="text-3xl font-bold text-white md:text-[2.4rem]">
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
