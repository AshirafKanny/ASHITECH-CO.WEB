import { locations } from "@/lib/locations";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Design Services by Location | Keni Web Design",
  description:
    "Professional web design services for businesses in Kampala, Entebbe, Jinja, and across Uganda. Local expertise, global standards.",
};

export default function LocationsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web Design Services by Location
          </h1>
          <p className="text-xl opacity-90">
            Find professional web design services for your business in Uganda
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">All Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 hover:border-blue-300 flex flex-col h-full"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{location.name}</h3>
                    <p className="text-sm font-medium text-blue-600">{location.region}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{location.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.industries.slice(0, 3).map((ind, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium border border-blue-200">
                        {ind}
                      </span>
                    ))}
                    {location.industries.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium border border-gray-200">
                        +{location.industries.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="pt-4 border-t border-gray-100 inline-block">
                    <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition flex items-center gap-1">
                      Learn More <span className="group-hover:translate-x-1 transition">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Your location not listed?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We serve businesses across all of Uganda. Contact us to discuss your specific location needs.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-blue-600 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 hover:border-blue-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
