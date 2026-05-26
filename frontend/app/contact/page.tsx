import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact KENI WEB DESIGN to discuss your website design and development project.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description: "Contact KENI WEB DESIGN to discuss your website design and development project.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Contact KENI WEB DESIGN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Contact KENI WEB DESIGN to discuss your website design and development project.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ plan?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const selectedPlan = resolvedSearchParams?.plan ?? "";

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="contact-heading">
          <div className="site-container">
            <h1 id="contact-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Contact
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              Share your project goals and we will respond with the right next steps.
            </p>
            {selectedPlan && (
              <p className="mt-3 text-sm font-medium text-[#0F172A]">
                Selected package: <span className="font-semibold">{selectedPlan}</span>
              </p>
            )}
            <ContactForm selectedPlan={selectedPlan} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
