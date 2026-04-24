import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Performance for SEO",
  description: "Learn how site performance improves SEO and user engagement.",
  alternates: {
    canonical: "/blog/performance-for-seo",
  },
  openGraph: {
    title: "Performance for SEO",
    description: "Learn how site performance improves SEO and user engagement.",
    url: "/blog/performance-for-seo",
    type: "article",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Performance for SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance for SEO",
    description: "Learn how site performance improves SEO and user engagement.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

export default function PerformanceForSeoPage() {
  return (
    <>
      <Navbar />
      <main>
        <article className="py-20" aria-labelledby="article-heading">
          <div className="site-container max-w-3xl">
            <h1 id="article-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Why Performance Matters for SEO
            </h1>
            <p className="mt-8 leading-8 text-[#0F172A]">
              Search visibility depends on technical quality. Faster loading pages support better user
              engagement metrics, reduce bounce rates, and improve indexation reliability across devices.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
