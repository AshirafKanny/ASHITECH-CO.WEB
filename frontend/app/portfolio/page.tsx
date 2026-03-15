import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";

export const metadata: Metadata = {
  title: "Portfolio | ASHITECH",
  description: "View selected ASHITECH projects in website design and development.",
};

const projects = [
  {
    title: "Nova Systems",
    category: "SaaS Website",
    summary: "Repositioned the brand and redesigned their website to support enterprise conversions.",
    imageSrc: "/images/project-nova.svg",
    imageAlt: "Nova Systems website preview layout",
  },
  {
    title: "Vertex Studio",
    category: "Company Website",
    summary: "Built a clean service-focused website with structured content and clear call-to-action paths.",
    imageSrc: "/images/project-vertex.svg",
    imageAlt: "Vertex Studio service website preview",
  },
  {
    title: "Apex Commerce",
    category: "Ecommerce UI",
    summary: "Improved product presentation and checkout flow to increase trust and completed transactions.",
    imageSrc: "/images/project-apex.svg",
    imageAlt: "Apex Commerce ecommerce website preview",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20" aria-labelledby="portfolio-heading">
          <div className="site-container">
            <h1 id="portfolio-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              A selection of projects delivered for ambitious technology and service brands.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <PortfolioCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
