import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "How to Build a Website | ASHITECH Blog",
  description: "Step-by-step guide to planning and building a conversion-focused company website.",
};

export default function BlogArticlePage() {
  return (
    <>
      <Navbar />
      <main>
        <article className="py-20" aria-labelledby="article-heading">
          <div className="site-container max-w-3xl">
            <h1 id="article-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              How to Build a Website That Converts
            </h1>
            <p className="mt-8 leading-8 text-[#0F172A]">
              A strong website starts with clear business goals, audience-focused messaging,
              and a fast technical foundation. Prioritize page clarity, strong calls to action,
              and a trustworthy visual system to improve lead quality.
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-[#0F172A]">Core Steps</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-[#0F172A]">
              <li>Define one conversion goal per page.</li>
              <li>Structure content to answer user questions in order.</li>
              <li>Keep loading speed high and layout consistent across devices.</li>
              <li>Measure behavior and iterate based on analytics data.</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
