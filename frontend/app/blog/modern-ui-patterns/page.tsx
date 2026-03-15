import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Modern UI Patterns | ASHITECH Blog",
  description: "Practical UI patterns for professional B2B and service websites.",
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
