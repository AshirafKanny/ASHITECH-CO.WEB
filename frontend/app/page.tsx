import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreFeaturesSection from "../components/CoreFeaturesSection";
import CoreDesignFeaturedSection from "../components/CoreDesignFeaturedSection";
import RecentProjectsSection from "../components/RecentProjectsSection";
import WorkingProcessSection from "../components/WorkingProcessSection";
import SeoSplitCtaSection from "../components/SeoSplitCtaSection";
import PricingPackagesSection from "../components/PricingPackagesSection";
import TestimonialsFeedbackSection from "../components/TestimonialsFeedbackSection";
import ContactMessageSection from "../components/ContactMessageSection";
import LatestNewsBlogSection from "../components/LatestNewsBlogSection";
import AboutStatsSection from "../components/AboutStatsSection";
import Footer from "../components/Footer";
import { absoluteUrl, defaultSeoImagePath, getSiteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "Website Design In Kampala",
  description:
    "KENI WEB DESIGN delivers premium web design and development services for businesses that need results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Design In Kampala",
    description:
      "KENI WEB DESIGN delivers premium web design and development services for businesses that need results.",
    url: "/",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Website Design In Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design In Kampala",
    description:
      "KENI WEB DESIGN delivers premium web design and development services for businesses that need results.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

const siteUrl = getSiteUrl();

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KENI WEB DESIGN",
  url: siteUrl,
  image: absoluteUrl(defaultSeoImagePath),
  areaServed: "Kampala",
  serviceType: ["Web Design", "Web Development", "SEO"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KENI WEB DESIGN",
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <CoreFeaturesSection />
        <AboutStatsSection />
        <CoreDesignFeaturedSection />
        <RecentProjectsSection />
        <WorkingProcessSection />
        <SeoSplitCtaSection />
        <PricingPackagesSection />
        <TestimonialsFeedbackSection />
        <ContactMessageSection />
        <LatestNewsBlogSection />
      </main>
      <Footer />
    </>
  );
}
