import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Web Development Service | ASHITECH",
  description: "Professional web development services for fast, scalable, and modern company websites.",
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
              ASHITECH develops robust websites using modern frontend architecture, performance-minded
              implementation, and clean code that scales with your business.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
