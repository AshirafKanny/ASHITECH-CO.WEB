import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";
import ContactForm from "../../components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

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
        <ScrollReveal>
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

            <ScrollReveal>
              <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-label="Local office">
              <div className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6">
                <h2 className="text-2xl font-semibold text-[#0F172A]">Visit our Kampala office</h2>
                <p className="mt-3 text-base leading-7 text-[#4B5563]">
                  Kansanga, UK Mall, Kampala, Uganda
                </p>
                <div className="mt-4 space-y-2 text-sm font-semibold text-[#0F172A]">
                  <p>Phone (Airtel): 0744429808</p>
                  <p>Phone (MTN): 0761856198</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/kUZ7XeRiaQ1dxrMt8"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-[#ff5e2e] hover:bg-[#fff4f0]"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E4E8F1] bg-white">
                <iframe
                  title="KENI WEB DESIGN location map"
                  src="https://www.google.com/maps?q=Kansanga%20UK%20Mall%20Kampala%20Uganda&output=embed"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              </section>
            </ScrollReveal>
          </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
