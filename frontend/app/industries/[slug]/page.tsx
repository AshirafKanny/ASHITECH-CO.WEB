import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries";
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
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.heroTitle} | Keni Web Design`,
    description: `${industry.industryOverview} Professional website design for ${industry.name}.`,
    openGraph: {
      title: industry.heroTitle,
      description: industry.industryOverview,
      images: [industry.image],
    },
  };
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.heroTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{industry.heroSubtitle}</p>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About {industry.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{industry.industryOverview}</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-gray-700 italic">
            In the {industry.name} industry, a professional website is essential for building trust,
            reaching customers, and staying competitive in a digital marketplace.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Common Challenges in {industry.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="text-gray-800 font-semibold">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">How We Help {industry.name}</h2>
        <div className="grid grid-cols-1 gap-6">
          {industry.solutions.map((solution, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <p className="text-gray-800 pt-1">{solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Frequently Asked Questions About {industry.name} Websites
          </h2>
          <div className="space-y-6">
            {industry.faqItems.map((item, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your {industry.name} Website?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's create a professional website tailored to your industry needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started Today
            </a>
            <a
              href="/services/website-design"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
