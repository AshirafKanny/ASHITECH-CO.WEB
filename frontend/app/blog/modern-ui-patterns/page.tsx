import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Modern UI Patterns",
  description: "Practical UI patterns for professional B2B and service websites.",
  alternates: {
    canonical: "/blog/modern-ui-patterns",
  },
  openGraph: {
    title: "Modern UI Patterns",
    description: "Practical UI patterns for professional B2B and service websites.",
    url: "/blog/modern-ui-patterns",
    type: "article",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Modern UI patterns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern UI Patterns",
    description: "Practical UI patterns for professional B2B and service websites.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

export default function ModernUiPatternsPage() {
  return (
    <>
      <Navbar />
      <main>
        <article className="py-20" aria-labelledby="article-heading">
          <div className="site-container max-w-3xl">
            <h1 id="article-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Modern UI Patterns for B2B Websites
            </h1>
            <p className="mt-8 leading-8 text-[#0F172A]">
              Effective B2B websites prioritize structure, hierarchy, and clarity over visual noise.
              Keep sections focused, support claims with proof, and ensure each block moves users
              toward a meaningful next step.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
