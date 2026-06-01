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
          <section className="relative overflow-hidden bg-[#0b1220] py-24 text-white" aria-labelledby="contact-heading">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/contact11.webp')" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0b1220]/60" aria-hidden="true" />

            <div className="site-container relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
                  Contact KENI WEB DESIGN
                </p>
                <h1 id="contact-heading" className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  Your next successful website starts here. Let&apos;s discuss your project today.
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                  Share your project goals and we will respond with the right next steps.
                </p>
                {selectedPlan && (
                  <p className="mt-4 text-sm font-medium text-white/85">
                    Selected package: <span className="font-semibold text-white">{selectedPlan}</span>
                  </p>
                )}

                <div className="mt-10 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                  <div className="bg-[#0f172a]/30 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Quick contact</p>
                    <div className="mt-6 space-y-4 text-base leading-7 text-white/85">
                      <p>Need a website, redesign, or SEO support? Send your details and we will guide you.</p>
                      <p>We work with businesses in Kampala and across Uganda to build websites that convert.</p>
                    </div>
                  </div>
                </div>
              </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:max-w-[460px]">
                  <ContactForm selectedPlan={selectedPlan} />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="contact-map-sky relative overflow-hidden py-20" aria-label="Contact form and details">
          <div className="contact-lightning" aria-hidden="true">
            <span className="contact-lightning-bolt bolt-1" />
            <span className="contact-lightning-bolt bolt-2" />
          </div>
          <div className="site-container relative z-10">

            <ScrollReveal>
              <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-label="Local office">
              <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
                <h2 className="text-2xl font-semibold text-white">Visit our Kampala office</h2>
                <p className="mt-3 text-base leading-7 text-white/75">
                  Kansanga, UK Mall, Kampala, Uganda
                </p>
                <div className="mt-4 space-y-2 text-sm font-semibold text-white/90">
                  <p>Phone (Airtel): 0744429808</p>
                  <p>Phone (MTN): 0761856198</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/q8er9En2ANf4GTN3A"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0b63f3] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,99,243,0.35)] transition hover:bg-[#0a56d0]"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E4E8F1] bg-white">
                <iframe
                  title="KENI WEB DESIGN location map"
                  src="https://maps.google.com/maps?q=Keni%20web%20design%20Kampala&output=embed"
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
