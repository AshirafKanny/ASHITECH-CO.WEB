import Link from "next/link";

export type SeoLandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoLandingTestimonial = {
  name: string;
  role: string;
  quote: string;
};

export type SeoLandingFaq = {
  question: string;
  answer: string;
};

export type SeoLandingPageContent = {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string[];
  sections: SeoLandingSection[];
  testimonials: SeoLandingTestimonial[];
  faqs: SeoLandingFaq[];
  internalLinks: { href: string; label: string }[];
  cta: {
    headline: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

type SeoLandingTemplateProps = {
  content: SeoLandingPageContent;
  slug: string;
};

export default function SeoLandingTemplate({ content, slug }: SeoLandingTemplateProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://keniwebdesign.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.title,
        item: `https://keniwebdesign.com/${slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section
        className="relative overflow-hidden bg-[#0b1220] pb-18 pt-30 text-white"
        aria-labelledby="landing-hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('${content.heroImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0b1220]/80" aria-hidden="true" />
        <div className="site-container relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
            Kampala . Uganda . East Africa
          </p>
          <h1 id="landing-hero-heading" className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            {content.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={content.cta.buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
            >
              {content.cta.buttonText}
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white hover:border-white"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14" aria-label="Introduction">
        <div className="site-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 text-base leading-7 text-[#5b6577]">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6">
            <h2 className="text-xl font-semibold text-[#1E293B]">What you get</h2>
            <p className="mt-3 text-sm text-[#5b6577]">
              Clear scope, clear communication, and a website that performs for local search and conversions.
            </p>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[#1E293B]">
              <span className="rounded-lg border border-[#dbe4f3] px-4 py-3">Mobile-first layout</span>
              <span className="rounded-lg border border-[#dbe4f3] px-4 py-3">SEO-ready structure</span>
              <span className="rounded-lg border border-[#dbe4f3] px-4 py-3">Conversion focused CTAs</span>
              <span className="rounded-lg border border-[#dbe4f3] px-4 py-3">Fast performance</span>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-[#ff5e2e] hover:bg-[#fff4f0]"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {content.sections.map((section) => (
        <section key={section.heading} className="bg-white py-12" aria-label={section.heading}>
          <div className="site-container">
            <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#5b6577]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-[#1E293B] sm:grid-cols-2">
                {section.bullets.map((item) => (
                  <li key={item} className="rounded-lg border border-[#E4E8F1] bg-[#F8FAFC] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-[#0b1220] py-16 text-white" aria-label="Testimonials">
        <div className="site-container">
          <h2 className="text-2xl font-bold sm:text-3xl">Client feedback from Uganda</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-6 text-white/80">{testimonial.quote}</p>
                <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-white/60">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="landing-faq-heading">
        <div className="site-container">
          <h2 id="landing-faq-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {content.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6">
                <h3 className="text-base font-semibold text-[#1E293B]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6577]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14" aria-label="Related links">
        <div className="site-container">
          <h2 className="text-xl font-semibold text-[#1E293B]">Related pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {content.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#dbe4f3] bg-white px-5 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-16 text-white" aria-label="Final call to action">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">{content.cta.headline}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">{content.cta.body}</p>
          </div>
          <Link
            href={content.cta.buttonHref}
            className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-7 py-3 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
          >
            {content.cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
