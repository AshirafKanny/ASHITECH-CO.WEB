import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreFeaturesSection from "../components/CoreFeaturesSection";
import AboutStatsSection from "../components/AboutStatsSection";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import BlogPreview from "../components/BlogPreview";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ASHITECH delivers premium web design and development services for businesses that need results.",
};

const services = [
  {
    title: "Web Design",
    description: "Modern, conversion-focused website interfaces with clear visual hierarchy.",
  },
  {
    title: "Web Development",
    description: "Fast and scalable frontend implementation with clean TypeScript architecture.",
  },
  {
    title: "Brand Experience",
    description: "Consistent digital brand presentation across every key customer touchpoint.",
  },
];

const projects = [
  {
    title: "Nova Systems",
    category: "SaaS Website",
    summary: "Complete website redesign to position the brand for enterprise lead generation.",
    imageSrc: "/images/project-nova.svg",
    imageAlt: "Nova Systems website interface showcase",
  },
  {
    title: "Vertex Studio",
    category: "Company Website",
    summary: "Service-focused website with clearer user paths and stronger calls to action.",
    imageSrc: "/images/project-vertex.svg",
    imageAlt: "Vertex Studio website project preview",
  },
  {
    title: "Apex Commerce",
    category: "Ecommerce Website",
    summary: "Product and checkout experience optimized for trust and purchase completion.",
    imageSrc: "/images/project-apex.svg",
    imageAlt: "Apex Commerce website design preview",
  },
];

const posts = [
  {
    title: "How to Build a Website That Converts",
    href: "/blog/how-to-build-a-website",
    summary: "A practical framework for website pages that improve leads and conversions.",
  },
  {
    title: "Modern UI Patterns for B2B Websites",
    href: "/blog/modern-ui-patterns",
    summary: "Simple layout principles that improve readability and business trust.",
  },
  {
    title: "Why Performance Matters for SEO",
    href: "/blog/performance-for-seo",
    summary: "How website speed and clean architecture influence rankings and engagement.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreFeaturesSection />
        <AboutStatsSection />

        <section className="py-20" aria-labelledby="services-heading">
          <div className="site-container">
            <h2 id="services-heading" className="text-3xl font-semibold text-[#0F172A]">
              Services
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="portfolio-heading">
          <div className="site-container">
            <h2 id="portfolio-heading" className="text-3xl font-semibold text-[#0F172A]">
              Portfolio
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <PortfolioCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="why-us-heading">
          <div className="site-container">
            <h2 id="why-us-heading" className="text-3xl font-semibold text-[#0F172A]">
              Why Choose Us
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-[#0F172A] p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">Business-First Strategy</h3>
                <p className="mt-3 leading-7 text-[#0F172A]">
                  Every design decision is aligned with measurable business outcomes.
                </p>
              </article>
              <article className="rounded-xl border border-[#0F172A] p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">Clean Engineering</h3>
                <p className="mt-3 leading-7 text-[#0F172A]">
                  Modular, maintainable code that supports long-term growth.
                </p>
              </article>
              <article className="rounded-xl border border-[#0F172A] p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">Fast Collaboration</h3>
                <p className="mt-3 leading-7 text-[#0F172A]">
                  Structured process, clear feedback loops, and transparent delivery.
                </p>
              </article>
            </div>
          </div>
        </section>

        <BlogPreview posts={posts} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
