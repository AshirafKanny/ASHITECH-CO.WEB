import { industries } from "@/lib/industries";
import Image from "next/image";
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
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                </div>
                <div className="bg-white p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="inline-block text-purple-600 font-semibold group-hover:text-purple-800 transition">
                      Explore →
                    </div>
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
