import { getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import { slugifyLocationName } from "@/lib/locations";
import Footer from "@/components/Footer";

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const defaultInternalLinks = [
  { href: "/", label: "Homepage" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function buildFallbackSections(location: NonNullable<ReturnType<typeof getLocationBySlug>>): Section[] {
  return [
    {
      heading: `About Web Design in ${location.name}`,
      paragraphs: [
        `${location.name} businesses need a website that does more than look good. It should build trust quickly, explain what you do, and make it easy for customers to contact you on mobile or desktop.`,
        `${location.businessContext} We create websites that reflect the way customers search, compare, and buy in Uganda, so your business can grow with a stronger digital presence.`,
      ],
    },
    {
      heading: `Why Businesses in ${location.name} Need Websites`,
      paragraphs: [
        `A professional website helps businesses in ${location.name} show up in search results, communicate their value, and compete with larger brands. From retail and professional services to schools and hospitality, customers expect to find clear information online before they decide.`,
        `A website also supports SEO services in ${location.name}, local lead generation, online bookings, and e-commerce. It becomes the central place where customers can learn about your services, compare options, and take action.`,
      ],
      bullets: [
        `More visibility for customers in ${location.name}`,
        "A stronger brand and better first impression",
        "Mobile-friendly contact and enquiry paths",
        "Support for SEO and local search rankings",
      ],
    },
    {
      heading: `Our Web Design Services in ${location.name}`,
      paragraphs: [
        `We design business websites, e-commerce sites, service landing pages, and SEO-ready websites that match the needs of ${location.name} businesses. Each site is structured around clarity, trust, and conversion so customers can quickly understand what you offer.`,
        `Our process includes design, development, content guidance, on-page SEO, and launch support. We also help businesses use contact forms, WhatsApp buttons, and strong calls to action so more visitors become leads.`,
      ],
      bullets: ["Website design", "Website development", "SEO services", "E-commerce solutions", "Maintenance and support"],
    },
    {
      heading: `Industries We Serve in ${location.name}`,
      paragraphs: [
        `We work with the industries that drive business in ${location.name}, including retail, hospitality, healthcare, schools, real estate, NGOs, startups, and professional services.`,
        `Every industry needs different messaging. A hotel needs booking trust. A school needs admissions clarity. A clinic needs appointment requests. A retailer needs product discovery. We shape the site to suit the customer journey.`,
      ],
      bullets: location.industries,
    },
    {
      heading: `Why Choose Keni Web Design in ${location.name}`,
      paragraphs: [
        `We combine UX, SEO, and practical business thinking so your website does not just look modern - it performs. That means stronger structure, faster load times, and copy that feels natural and trustworthy.`,
        `Clients choose us because we understand local markets in Uganda and we build websites that are easy to maintain, easy to trust, and easier to find on Google.`,
      ],
    },
    {
      heading: `Website Design Process for ${location.name}`,
      paragraphs: [
        `We begin with discovery so we understand your business, your customers, and the questions people ask before they buy. Then we create a content structure and design direction that reflect your goals.`,
        `After development, we test the website on mobile, refine the SEO, and set up tracking and contact paths so your site is ready to support growth after launch.`,
      ],
      bullets: ["Discovery", "Planning", "Design", "Development", "Testing", "Launch"],
    },
    {
      heading: `SEO Services in ${location.name}`,
      paragraphs: [
        `SEO matters because local customers search by place and service. We help your site rank for website design in ${location.name}, web designer in ${location.name}, website developer in ${location.name}, and related searches by improving content, headings, metadata, and internal links.`,
        `When needed, we also align content with nearby towns, roads, and landmarks so search engines understand your local relevance and your customers feel the connection right away.`,
      ],
    },
    {
      heading: `Areas Near ${location.name}`,
      paragraphs: [
        `Businesses in ${location.name} often serve nearby areas and commuter routes, so we reference nearby locations naturally when we write and structure your page.`,
        `This helps the website feel genuinely local and makes it easier for customers from surrounding areas to recognise that you can serve them.`,
      ],
    },
  ];
}

function buildFallbackTestimonials(locationName: string) {
  return [
    {
      name: `${locationName} Client 1`,
      role: `Business Owner, ${locationName}`,
      quote: `Our website now looks professional and we receive more genuine enquiries from customers in and around ${locationName}.`,
    },
    {
      name: `${locationName} Client 2`,
      role: `Service Manager, ${locationName}`,
      quote: `Keni Web Design made our business easier to trust online and improved the way people contact us.`,
    },
    {
      name: `${locationName} Client 3`,
      role: `Founder, ${locationName}`,
      quote: `The site is fast on mobile and the messaging feels clear for our local audience.`,
    },
  ];
}

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
    title: location.seoTitle ?? `${location.heroTitle} | Keni Web Design`,
    description:
      location.seoDescription ??
      `${location.businessContext} Get professional web design services in ${location.name} from Keni Web Design.`,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title: location.heroTitle,
      description: location.seoDescription ?? location.businessContext,
      url: `/locations/${slug}`,
      type: "website",
      images: [absoluteUrl(location.image)],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle ?? `${location.heroTitle} | Keni Web Design`,
      description:
        location.seoDescription ??
        `${location.businessContext} Get professional web design services in ${location.name} from Keni Web Design.`,
      images: [absoluteUrl(location.image)],
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

  const sections = location.sections ?? buildFallbackSections(location);
  const testimonials = location.testimonials ?? buildFallbackTestimonials(location.name);
  const nearbyLinks = (location.nearbyAreas ?? [])
    .map((area) => ({ name: area, slug: slugifyLocationName(area) }))
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Locations", item: absoluteUrl("/locations") },
      { "@type": "ListItem", position: 3, name: location.name, item: absoluteUrl(`/locations/${slug}`) },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `KENI WEB DESIGN ${location.name}`,
    url: getSiteUrl(),
    areaServed: [location.name, location.region],
    serviceType: ["Web Design", "Web Development", "SEO"],
  };

  const relatedLinks = [
    ...defaultInternalLinks,
    ...(location.internalLinks ?? []),
    ...nearbyLinks.map((item) => ({ href: `/locations/${item.slug}`, label: item.name })),
  ].filter((item, index, items) => items.findIndex((candidate) => candidate.href === item.href) === index);

  return (
    <main className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      {/* Hero Section */}
      <section className="relative w-full h-125 overflow-hidden md:h-150">
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
            In {location.name}, a professional website is more than just an online presence—it&apos;s a
            competitive advantage that helps businesses attract customers, build credibility, and
            increase sales.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="py-16 md:py-20 px-4 md:px-8 bg-gray-50 odd:bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{section.heading}</h2>
            <div className="space-y-5 text-lg leading-8 text-gray-700">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {section.bullets.map((item) => (
                  <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 text-gray-800 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Industries We Serve in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.industries.map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{industry}</h3>
                <p className="text-gray-600">Professional websites tailored for {industry.toLowerCase()} in {location.name}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Client Testimonials for {location.name}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Frequently Asked Questions About Web Design in {location.name}</h2>
          <div className="space-y-6">
            {location.faqItems.map((item, idx) => (
              <details key={idx} className="bg-white p-6 rounded-lg shadow-md cursor-pointer group border border-gray-200">
                <summary className="font-semibold text-gray-800 text-lg group-open:text-blue-600 transition">{item.question}</summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nearby Areas We Also Serve</h2>
          <div className="flex flex-wrap gap-3">
            {location.nearbyAreas?.length ? location.nearbyAreas.map((area) => (
              <span key={area} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {area}
              </span>
            )) : <span className="text-gray-600">We serve clients across the surrounding business corridors and neighboring towns.</span>}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Useful Links</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Website in {location.name}?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s create a professional, conversion-focused website for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/website-design"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
