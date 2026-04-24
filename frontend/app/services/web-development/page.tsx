import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";

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
        <section className="py-20" aria-labelledby="service-heading">
          <div className="site-container max-w-3xl">
            <h1 id="service-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Web Development
            </h1>
            <p className="mt-8 leading-8 text-[#0F172A]">
              KENI WEB DESIGN develops robust websites using modern frontend architecture, performance-minded
              implementation, and clean code that scales with your business.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
