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

export const metadata: Metadata = {
  title: "Home",
  description:
    "ASHITECH delivers premium web design and development services for businesses that need results.",
};

export default function Home() {
  return (
    <>
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
