import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "pricing-uganda",
    question: "How much does a website cost in Uganda?",
    answer:
      "Pricing depends on page count, features, and integrations. Our packages start with affordable starter sites and scale up to ecommerce and custom builds. You can see current pricing or request a tailored quote.",
    details: [
      "Starter business sites focus on core pages, contact forms, and fast load times.",
      "Growth packages add SEO pages, lead capture, and conversion-focused layouts.",
      "Custom builds include integrations, dashboards, and advanced functionality.",
    ],
  },
  {
    value: "timeline",
    question: "How long does website development take?",
    answer:
      "Most business websites launch within 2 to 4 weeks. Larger ecommerce or custom projects may take 4 to 8 weeks depending on feedback speed and content readiness.",
    details: [
      "Timelines depend on how quickly content, approvals, and feedback are provided.",
      "We share milestones for design, development, testing, and launch.",
      "Urgent launches can be planned with a phased delivery approach.",
    ],
  },
  {
    value: "why-website-uganda",
    question: "Why does my business need a website in Uganda?",
    answer:
      "A professional website builds credibility, keeps your business visible on Google, and turns visitors into customers. It is the foundation for marketing, ads, and social media campaigns.",
    details: [
      "Local customers search online before contacting a business in Kampala and Uganda.",
      "A website gives you full control of your brand story and service positioning.",
      "It supports WhatsApp, phone, and email inquiries with clear CTAs.",
    ],
  },
  {
    value: "seo-uganda",
    question: "Do you provide SEO services in Uganda?",
    answer:
      "Yes. We offer SEO strategy, technical optimization, and content support to help businesses rank in Kampala and across Uganda.",
    details: [
      "We target location keywords like Kampala, Entebbe, and Uganda to build visibility.",
      "Technical SEO covers speed, indexing, schema markup, and site health checks.",
      "Content plans focus on high-intent service and blog topics.",
    ],
  },
  {
    value: "ecommerce-kampala",
    question: "Do you build ecommerce websites in Kampala?",
    answer:
      "Yes. We build ecommerce website development solutions in Kampala with secure checkout, product catalogs, and mobile-friendly user flows.",
    details: [
      "We integrate local and international payment options when needed.",
      "Stores are optimized for speed, conversions, and clear product discovery.",
      "Inventory and order management can be tailored to your workflow.",
    ],
  },
  {
    value: "responsive-uganda",
    question: "Do you offer responsive website design in Uganda?",
    answer:
      "Every site we deliver is mobile-first, ensuring responsive website design in Uganda that performs on phones, tablets, and desktops.",
    details: [
      "Layouts adapt to screen sizes without sacrificing speed or readability.",
      "Forms and CTA buttons are optimized for mobile conversions.",
      "We test on real devices and modern browsers before launch.",
    ],
  },
  {
    value: "ux-design-uganda",
    question: "What is included in your UI/UX design process?",
    answer:
      "Our UI/UX design Uganda process blends research, wireframes, and polished visuals to drive user trust and actions.",
    details: [
      "We map user journeys for key services like web development and SEO.",
      "Designs prioritize clarity, brand consistency, and accessibility.",
      "We validate layouts with stakeholders before development begins.",
    ],
  },
  {
    value: "hosting-maintenance",
    question: "Do you manage hosting, domains, and maintenance?",
    answer:
      "Yes. We help with domains, hosting, security updates, and ongoing support for businesses in Kampala and across Uganda.",
    details: [
      "We set up SSL, backups, and monitoring for uptime.",
      "Maintenance plans include content updates and technical fixes.",
      "You get a single point of contact for website support.",
    ],
  },
  {
    value: "digital-products",
    question: "Can you build web apps or digital products in Uganda?",
    answer:
      "Yes. Our digital product development Uganda services cover MVPs, dashboards, and custom web platforms.",
    details: [
      "We scope requirements, data flows, and user roles early.",
      "Tech stacks are chosen for scalability and performance.",
      "Ongoing iterations are supported after launch.",
    ],
  },
  {
    value: "content-needed",
    question: "What content do you need to start a website project?",
    answer:
      "We start with your services, branding assets, and key messages. If content is missing, we help structure the copy for website design Uganda and local SEO.",
    details: [
      "We provide a content checklist for images, brand colors, and service details.",
      "Copy guidance is included to target Kampala and Uganda search terms.",
      "You can supply draft text or request a full content plan.",
    ],
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
        text: `${faq.answer} ${faq.details.join(" ")}`,
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

        <Accordion type="multiple" className="mt-10 grid gap-5 lg:grid-cols-2" defaultValue={[faqs[0].value]}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="rounded-2xl border border-[#E4E8F1] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <AccordionTrigger className="group text-lg font-semibold text-[#1E293B]">
                {faq.question}
                <span className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E4E8F1] text-[#1E293B]">
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="mt-4 space-y-4 text-sm leading-6 text-[#5b6577]">
                <p>{faq.answer}</p>
                <ul className="space-y-2">
                  {faq.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5e2e]" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 rounded-2xl border border-[#E4E8F1] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#1E293B]">Related resources</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-[#1E293B]">
            <Link href="/blog" className="hover:text-[#ff5e2e]">
              Blog insights
            </Link>
            <Link href="/pricing" className="hover:text-[#ff5e2e]">
              Pricing packages
            </Link>
            <Link href="/website-design-uganda" className="hover:text-[#ff5e2e]">
              Website design Uganda
            </Link>
            <Link href="/seo-services-uganda" className="hover:text-[#ff5e2e]">
              SEO services Uganda
            </Link>
            <Link href="/portfolio" className="hover:text-[#ff5e2e]">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
