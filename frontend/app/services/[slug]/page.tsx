import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";
import { getServiceBySlug } from "../../../lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: absoluteUrl(defaultSeoImagePath),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.summary,
      images: [absoluteUrl(defaultSeoImagePath)],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="service-heading">
          <div className="site-container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Our Services</p>
            <h1 id="service-heading" className="mt-4 text-4xl font-bold text-[#0F172A] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-8 leading-8 text-[#0F172A]">{service.summary}</p>
            <p className="mt-6 leading-8 text-[#475569]">
              Send me the content for this service page and I will place it here.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}