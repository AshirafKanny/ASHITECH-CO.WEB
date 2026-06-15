import { getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.heroTitle} | Keni Web Design`,
    description: `${location.businessContext} Get professional web design services in ${location.name} from Keni Web Design.`,
    openGraph: {
      title: location.heroTitle,
      description: location.businessContext,
      images: [location.image],
    },
  };
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{location.heroTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{location.heroSubtitle}</p>
        </div>
      </section>

      {/* Business Context Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About {location.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{location.businessContext}</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-gray-700 italic">
            In {location.name}, a professional website is more than just an online presence—it's a
            competitive advantage that helps businesses attract customers, build credibility, and
            increase sales.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Industries We Serve in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.industries.map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{industry}</h3>
                <p className="text-gray-600">
                  Professional websites tailored for {industry.toLowerCase()} in {location.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Services We Offer in {location.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Website Design",
              desc: "Beautiful, responsive websites optimized for conversions",
            },
            {
              title: "eCommerce Solutions",
              desc: "Online stores with secure payment processing",
            },
            {
              title: "SEO Services",
              desc: "Rank higher on Google and attract local customers",
            },
            {
              title: "Website Maintenance",
              desc: "Keep your site fast, secure, and up-to-date",
            },
            {
              title: "Mobile Optimization",
              desc: "Perfect display on all devices and screen sizes",
            },
            {
              title: "Website Redesign",
              desc: "Modernize and improve your existing website",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Frequently Asked Questions About Web Design in {location.name}
          </h2>
          <div className="space-y-6">
            {location.faqItems.map((item, idx) => (
              <details key={idx} className="bg-white p-6 rounded-lg shadow-md cursor-pointer group">
                <summary className="font-semibold text-gray-800 text-lg group-open:text-blue-600 transition">
                  {item.question}
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Website in {location.name}?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's create a professional, conversion-focused website for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services/website-design"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
