import { locations } from "@/lib/locations";
import Image from "next/image";
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
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.region}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.industries.slice(0, 3).map((ind, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {ind}
                      </span>
                    ))}
                    {location.industries.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{location.industries.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="inline-block text-blue-600 font-semibold group-hover:text-blue-800">
                    Learn More →
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
