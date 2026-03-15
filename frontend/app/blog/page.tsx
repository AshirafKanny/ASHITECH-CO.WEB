import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Blog | ASHITECH",
  description: "Read practical website design and development insights from ASHITECH.",
};

const posts = [
  {
    title: "How to Build a Website That Converts",
    href: "/blog/how-to-build-a-website",
    summary: "A practical framework for structuring pages that turn visitors into qualified leads.",
  },
  {
    title: "Modern UI Patterns for B2B Websites",
    href: "/blog/modern-ui-patterns",
    summary: "Design choices that increase clarity, trust, and business credibility.",
  },
  {
    title: "Why Performance Matters for SEO",
    href: "/blog/performance-for-seo",
    summary: "How speed and technical quality directly affect search visibility and user behavior.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="blog-heading">
          <div className="site-container">
            <h1 id="blog-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              Insights on web design, UX, and technical execution for growing businesses.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.href} className="rounded-xl border border-[#0F172A] bg-white p-6">
                  <h2 className="text-2xl font-semibold text-[#0F172A]">{post.title}</h2>
                  <p className="mt-3 leading-7 text-[#0F172A]">{post.summary}</p>
                  <Link
                    href={post.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#012166] hover:text-[#0F172A]"
                  >
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
