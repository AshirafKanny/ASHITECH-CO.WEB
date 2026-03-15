import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";

export const metadata: Metadata = {
  title: "Services | ASHITECH",
  description: "Explore ASHITECH web design, development, and strategy services for technology companies.",
};

const services = [
  {
    title: "Web Design",
    description: "Custom interface design with clear hierarchy, modern visual systems, and brand consistency.",
  },
  {
    title: "Web Development",
    description: "Performance-optimized websites built with clean, maintainable code and scalable architecture.",
  },
  {
    title: "UI/UX Strategy",
    description: "User journey mapping and conversion-focused structure to improve engagement and lead quality.",
  },
  {
    title: "Website Redesign",
    description: "Upgrade outdated websites into professional digital products aligned with current business goals.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="services-heading">
          <div className="site-container">
            <h1 id="services-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              We provide end-to-end website services for startups, agencies, and growing businesses.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
