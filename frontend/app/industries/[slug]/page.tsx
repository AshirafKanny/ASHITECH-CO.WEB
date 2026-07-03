import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    title: industry.seoTitle ?? `${industry.heroTitle} | Keni Web Design`,
    description:
      industry.seoDescription ??
      `${industry.industryOverview} Professional website design for ${industry.name}.`,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: industry.seoTitle ?? industry.heroTitle,
      description: industry.seoDescription ?? industry.industryOverview,
      url: `/industries/${slug}`,
      images: [industry.image || "/city2.webp"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Website Design for ${industry.name}`,
    name: industry.heroTitle,
    description: industry.seoDescription ?? industry.industryOverview,
    areaServed: {
      "@type": "Country",
      name: "Uganda",
    },
    provider: {
      "@type": "Organization",
      name: "Keni Web Design",
      url: "https://keniwebdesign.com",
    },
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full h-125 md:h-150 overflow-hidden">
        <Image
          src={industry.image || "/city2.webp"}
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
              <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <p className="text-gray-800 pt-1">{solution}</p>
            </div>
          ))}
        </div>
      </section>

      {industry.sections && industry.sections.length > 0 && (
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            {industry.sections.map((section, index) => (
              <article key={`${section.heading}-${index}`} className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {(industry.caseStudy || industry.successStory) && (
        <section className="py-16 md:py-20 px-4 md:px-8 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.caseStudy && (
              <article className="rounded-xl border border-white/15 bg-white/5 p-6">
                <h2 className="text-2xl font-bold mb-4">{industry.caseStudy.title}</h2>
                <p className="leading-relaxed text-white/90">{industry.caseStudy.body}</p>
              </article>
            )}
            {industry.successStory && (
              <article className="rounded-xl border border-white/15 bg-white/5 p-6">
                <h2 className="text-2xl font-bold mb-4">{industry.successStory.title}</h2>
                <p className="leading-relaxed text-white/90">{industry.successStory.body}</p>
              </article>
            )}
          </div>
        </section>
      )}

      {industry.internalLinks && industry.internalLinks.length > 0 && (
        <section className="py-14 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Useful Pages for {industry.name}</h2>
            <div className="flex flex-wrap gap-3">
              {industry.internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-800 hover:border-blue-600 hover:text-blue-700 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            {industry.ctaTitle ?? `Ready to Build Your ${industry.name} Website?`}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {industry.ctaBody ?? "Let's create a professional website tailored to your industry needs."}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started Today
            </Link>
            <Link
              href="/services/website-design"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
