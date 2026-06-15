import { industries } from "@/lib/industries";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Design for Every Industry | Keni Web Design",
  description:
    "Industry-specific web design for schools, hospitals, restaurants, hotels, NGOs, eCommerce, and more.",
};

export default function IndustriesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industry-Specific Web Design
          </h1>
          <p className="text-xl opacity-90">
            Professional websites tailored to your industry's unique needs
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 hover:border-purple-300 flex flex-col h-full"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 inline-block">
                    <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-800 transition flex items-center gap-1">
                      Explore <span className="group-hover:translate-x-1 transition">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Why Industry-Specific Design?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tailored Features</h3>
              <p className="text-gray-700">
                Each industry has unique needs. We build features specifically for your business model.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Knowledge</h3>
              <p className="text-gray-700">
                We understand your industry's challenges, customers, and opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Better Results</h3>
              <p className="text-gray-700">
                Industry-specific design converts better, ranks higher, and serves your customers better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Industry-Specific Website?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can build a website tailored to your industry.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
