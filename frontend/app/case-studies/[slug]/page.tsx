import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "@/lib/seo";
import { getPortfolioProject, portfolioProjects } from "@/lib/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/case-studies/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/case-studies/${project.slug}`,
      type: "article",
      images: [
        {
          url: absoluteUrl(project.imageSrc),
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [absoluteUrl(project.imageSrc)],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: absoluteUrl(project.imageSrc),
    about: project.industry,
    provider: {
      "@type": "Organization",
      name: "KENI WEB DESIGN",
      url: absoluteUrl("/"),
      logo: absoluteUrl(defaultSeoImagePath),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
      <Navbar />
      <main>
        <ScrollReveal>
          <section className="relative overflow-hidden bg-[#0b1220] pb-18 pt-30 text-white" aria-labelledby="case-study-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1f2937]" aria-hidden="true" />
          <div className="site-container relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
                Case study . {project.category}
              </p>
              <h1 id="case-study-heading" className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/80">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold">
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {project.exploreUrl ? (
                  <Link
                    href={project.exploreUrl}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:border-white"
                  >
                    Explore live project
                  </Link>
                ) : null}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
                >
                  Start a similar project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:border-white"
                >
                  View all projects
                </Link>
              </div>
            </div>

            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-white py-16" aria-label="Case study overview">
          <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6">
              <h2 className="text-xl font-semibold text-[#1E293B]">Project overview</h2>
              <div className="mt-4 space-y-3 text-sm font-semibold text-[#1E293B]">
                <p>Industry: <span className="font-normal text-[#4B5563]">{project.industry}</span></p>
                <p>Timeline: <span className="font-normal text-[#4B5563]">{project.timeline}</span></p>
                <p>Category: <span className="font-normal text-[#4B5563]">{project.category}</span></p>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">Technologies</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#0f172a] px-3 py-1 text-xs font-semibold text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-base leading-7 text-[#4B5563]">
              <div>
                <h2 className="text-2xl font-semibold text-[#1E293B]">Challenge</h2>
                <p className="mt-3">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#1E293B]">Solution</h2>
                <p className="mt-3">{project.solution}</p>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#F8FAFC] py-16" aria-label="Impact">
          <div className="site-container">
            <h2 className="text-2xl font-semibold text-[#1E293B]">Business impact</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.impact.map((item) => (
                <article key={item} className="rounded-2xl border border-[#E4E8F1] bg-white p-6">
                  <p className="text-sm font-semibold text-[#1E293B]">{item}</p>
                </article>
              ))}
            </div>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-white py-16" aria-label="More case studies">
          <div className="site-container">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#1E293B]">Explore more projects</h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-[#ff5e2e] hover:bg-[#fff4f0]"
              >
                Request a consultation
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioProjects
                .filter((item) => item.slug !== project.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/${item.slug}`}
                    className="group rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-5 transition hover:border-[#ff5e2e]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">{item.category}</p>
                    <h3 className="mt-3 text-lg font-semibold text-[#1E293B] group-hover:text-[#ff5e2e]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B5563]">{item.summary}</p>
                  </Link>
                ))}
            </div>
          </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
