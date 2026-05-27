import Link from "next/link";

const faqs = [
  {
    question: "How much does a website cost in Uganda?",
    answer:
      "Pricing depends on page count, features, and integrations. Our packages start with affordable starter sites and scale up to ecommerce and custom builds. You can see current pricing or request a tailored quote.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Most business websites launch within 2 to 4 weeks. Larger ecommerce or custom projects may take 4 to 8 weeks depending on feedback speed and content readiness.",
  },
  {
    question: "Why does my business need a website?",
    answer:
      "A professional website builds credibility, keeps your business visible on Google, and turns visitors into customers. It is the foundation for marketing, ads, and social media campaigns.",
  },
  {
    question: "Do you provide SEO services in Uganda?",
    answer:
      "Yes. We offer SEO strategy, technical optimization, and content support to help businesses rank in Kampala and across Uganda.",
  },
];

export default function HomeFaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#F8FAFC] py-16" aria-labelledby="home-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">FAQs</p>
            <h2 id="home-faq-heading" className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">
              Answers from a web design company in Kampala
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b6577]">
              Still deciding? These are the most common questions we get from businesses across Uganda.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
          >
            Talk to an expert
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-[#E4E8F1] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <h3 className="text-lg font-semibold text-[#1E293B]">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b6577]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
