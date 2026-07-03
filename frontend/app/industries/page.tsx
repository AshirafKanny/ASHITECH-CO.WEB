import { industries } from "@/lib/industries";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import IndustriesCatalog from "@/components/IndustriesCatalog";

export const metadata: Metadata = {
  title: "Industries We Serve in Uganda | Keni Web Design",
  description:
    "Search and explore industry-specific website design solutions for Ugandan businesses across education, healthcare, hospitality, finance, technology, and more.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve in Uganda | Keni Web Design",
    description:
      "Search and explore industry-specific website design solutions for Ugandan businesses across education, healthcare, hospitality, finance, technology, and more.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve in Uganda | Keni Web Design",
    description:
      "Search and explore industry-specific website design solutions for Ugandan businesses across education, healthcare, hospitality, finance, technology, and more.",
  },
};

export default function IndustriesPage() {
  return (
    <main className="w-full">
      <section className="bg-linear-to-br from-slate-900 via-sky-900 to-cyan-800 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industry-Specific Website Design in Uganda
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Find your sector, explore tailored solutions, and launch a conversion-focused website strategy built for your market realities.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm md:text-base">
            <span>{industries.length}+ industry pages</span>
            <span className="opacity-70">|</span>
            <span>SEO-focused content architecture</span>
          </div>
        </div>
      </section>

      <IndustriesCatalog industries={industries} />

      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Why Industry-Specific Website Strategy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-cyan-700 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tailored Features</h3>
              <p className="text-gray-700">
                Every sector has specific buyer behavior, trust triggers, and operational workflows that need custom structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-cyan-700 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Knowledge</h3>
              <p className="text-gray-700">
                Better messaging and page architecture come from understanding your audience, objections, and conversion flow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-cyan-700 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Better Results</h3>
              <p className="text-gray-700">
                Sector-aligned websites typically rank better, convert better, and produce higher-quality enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-cyan-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Industry-Specific Website?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can build a website tailored to your industry.
          </p>
          <a href="/contact" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-800 transition">
            Schedule Your Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
