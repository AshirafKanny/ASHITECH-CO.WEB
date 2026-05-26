import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";
import { getServiceBySlug } from "../../../lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceContent = {
  title: string;
  intro: string;
  includes: string[];
  benefits: string[];
  whyChoose?: string[];
  process?: string[];
  cta: string;
  platforms?: string[];
  heroImage: string;
  heroSubtitle: string;
};

const defaultWhyChoose = [
  "Clean code and modern best practices",
  "Mobile responsive across devices",
  "Clear communication and reliable support",
  "Affordable pricing that fits your budget",
];

const defaultProcess = [
  "Requirement gathering",
  "Planning and wireframing",
  "Design and implementation",
  "Testing and quality checks",
  "Launch and handover",
];

const faqItems = [
  {
    question: "How long does development take?",
    answer: "Typically 1-4 weeks depending on complexity.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes, ongoing maintenance and support are available.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely.",
  },
];

const serviceContent: Record<string, ServiceContent> = {
  "website-creation-from-figma-xd-or-photoshop": {
    title: "Website Creation from Figma, XD or Photoshop",
    intro:
      "Turn your design files into fully functional, responsive, and high-performance websites. We convert Figma, Adobe XD, and Photoshop (PSD) designs into clean, pixel-perfect websites using modern web technologies.",
    heroImage: "/m4.webp",
    heroSubtitle: "Turn visual designs into fast, responsive websites.",
    includes: [
      "Figma to HTML/CSS/JavaScript conversion",
      "Adobe XD to responsive website",
      "PSD to HTML conversion",
      "Pixel-perfect design implementation",
      "Mobile responsiveness",
      "Cross-browser compatibility",
      "Clean and optimized code",
      "Fast loading performance",
      "SEO-friendly structure",
      "Contact forms integration",
    ],
    benefits: [
      "Your design looks exactly as intended",
      "Professional and polished user experience",
      "Faster project delivery",
      "Mobile-friendly across all devices",
      "Easy future updates",
    ],
    process: [
      "Receive your design files",
      "Review project requirements",
      "Develop the frontend structure",
      "Optimize responsiveness",
      "Test across devices",
      "Launch your website",
    ],
    cta: "Ready to turn your design into a live website? Contact us today.",
  },
  "mobile-app-development-and-website-design": {
    title: "Mobile App Development and Website Design",
    intro:
      "We design and build modern mobile apps and websites that deliver seamless digital experiences across all devices.",
    heroImage: "/m1.webp",
    heroSubtitle: "Unified mobile and web experiences built to perform.",
    includes: [
      "Mobile app UI/UX design",
      "Website design and development",
      "Android app development",
      "Responsive web design",
      "Backend integration",
      "User authentication systems",
      "API integrations",
      "Performance optimization",
      "App testing and deployment",
    ],
    benefits: [
      "Reach users on both mobile and web",
      "Better customer engagement",
      "Improved business accessibility",
      "Professional digital presence",
    ],
    process: [
      "Requirement gathering",
      "Planning and wireframing",
      "UI/UX design",
      "Development",
      "Testing",
      "Deployment",
    ],
    cta: "Let us build your next digital product.",
  },
  "ecommerce-and-product-selling-development": {
    title: "eCommerce and Product Selling Development",
    intro:
      "We create powerful online stores designed to help businesses sell products efficiently and increase revenue.",
    heroImage: "/m3.webp",
    heroSubtitle: "Launch a store that converts and scales.",
    includes: [
      "Online store setup",
      "Product catalog creation",
      "Shopping cart functionality",
      "Secure payment integration",
      "Customer accounts",
      "Order tracking systems",
      "Inventory management",
      "Mobile optimization",
      "SEO optimization",
    ],
    benefits: [
      "Sell products online 24/7",
      "Reach more customers",
      "Easy product management",
      "Secure customer transactions",
    ],
    platforms: ["Shopify", "WooCommerce", "Custom eCommerce websites"],
    cta: "Start selling online with confidence.",
  },
  "responsive-websites-ui-ux-design": {
    title: "Responsive Websites (UI/UX) Design",
    intro:
      "Beautiful and intuitive interfaces designed to deliver excellent user experiences across desktop, tablet, and mobile.",
    heroImage: "/m2.webp",
    heroSubtitle: "Designs that feel great on every screen.",
    includes: [
      "UI design",
      "UX strategy",
      "Wireframes",
      "Prototypes",
      "Mobile responsiveness",
      "User journey optimization",
      "Accessibility improvements",
    ],
    benefits: [
      "Better engagement",
      "Professional appearance",
      "Improved conversion rates",
      "Easier navigation",
    ],
    cta: "Create a website users love to use.",
  },
  "seo-search-engine-optimization": {
    title: "SEO (Search Engine Optimization)",
    intro:
      "Improve your visibility on search engines and attract more organic traffic to your website.",
    heroImage: "/m5.webp",
    heroSubtitle: "Rank higher and drive consistent organic traffic.",
    includes: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Meta tags optimization",
      "Speed optimization",
      "Mobile SEO",
      "SEO audits",
      "Content recommendations",
    ],
    benefits: [
      "Higher Google rankings",
      "More website visitors",
      "Increased leads",
      "Long-term growth",
    ],
    cta: "Boost your online visibility today.",
  },
  "digital-product-design-and-development": {
    title: "Digital Product Design and Development",
    intro:
      "We design and develop digital products that solve real business problems and deliver value to users.",
    heroImage: "/m6.webp",
    heroSubtitle: "From idea to product-ready experience.",
    includes: [
      "Product strategy",
      "UI/UX design",
      "Web app development",
      "Dashboard systems",
      "SaaS platforms",
      "MVP development",
      "Testing and iteration",
    ],
    benefits: [
      "Faster product launch",
      "Scalable solutions",
      "Better customer satisfaction",
    ],
    cta: "Bring your digital product idea to life.",
  },
  "web-development": {
    title: "Web Development",
    intro:
      "Custom web development services tailored to your business needs using modern technologies and best practices.",
    heroImage: "/m7.webp",
    heroSubtitle: "Secure, scalable websites built for growth.",
    includes: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Corporate websites",
      "CMS integration",
      "Backend systems",
      "API integrations",
      "Website maintenance",
    ],
    benefits: [
      "Professional online presence",
      "Fast and secure websites",
      "Scalable solutions",
    ],
    whyChoose: [
      "Clean code",
      "Modern design",
      "Mobile responsive",
      "Reliable support",
      "Affordable pricing",
    ],
    cta: "Let us build your website.",
  },
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: absoluteUrl(defaultSeoImagePath),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.summary,
      images: [absoluteUrl(defaultSeoImagePath)],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const details = serviceContent[slug];

  if (!service || !details) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="pb-20" aria-labelledby="service-heading">
          <div className="relative min-h-screen overflow-hidden bg-[#0b1222]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${details.heroImage}')` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0b1222]/70" aria-hidden="true" />
            <div className="site-container relative z-10 flex min-h-screen flex-col justify-center py-16 text-white sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">Our Services</p>
              <h1 id="service-heading" className="mt-4 text-4xl font-bold sm:text-5xl">
                {details.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                {details.heroSubtitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
                {details.intro}
              </p>
            </div>
          </div>

          <div className="site-container max-w-4xl pt-12">
            <p className="text-lg leading-8 text-[#0F172A]">{details.intro}</p>

            <div className="mt-12 grid gap-10">
              <section aria-labelledby="service-includes">
                <h2 id="service-includes" className="text-2xl font-semibold text-[#0F172A]">
                  What this service includes
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {details.includes.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="service-benefits">
                <h2 id="service-benefits" className="text-2xl font-semibold text-[#0F172A]">
                  Benefits to your business
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {details.benefits.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="service-why">
                <h2 id="service-why" className="text-2xl font-semibold text-[#0F172A]">
                  Why choose us
                </h2>
                <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                  {(details.whyChoose ?? defaultWhyChoose).map((item) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {details.platforms ? (
                <section aria-labelledby="service-platforms">
                  <h2 id="service-platforms" className="text-2xl font-semibold text-[#0F172A]">
                    Platforms we work with
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {details.platforms.map((item) => (
                      <li key={item} className="rounded-full border border-[#E2E8F0] px-4 py-2 text-sm text-[#475569]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section aria-labelledby="service-process">
                <h2 id="service-process" className="text-2xl font-semibold text-[#0F172A]">
                  Our process
                </h2>
                <ol className="mt-4 grid gap-3 text-[#475569]">
                  {(details.process ?? defaultProcess).map((item, index) => (
                    <li key={item} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                      <span className="mr-2 font-semibold text-[#0F172A]">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="service-cta">
                <h2 id="service-cta" className="text-2xl font-semibold text-[#0F172A]">
                  Ready to get started?
                </h2>
                <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6">
                  <p className="text-[#475569]">{details.cta}</p>
                  <a
                    href="/contact"
                    className="inline-flex w-fit items-center justify-center rounded-lg bg-[#0B63F3] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0756D6]"
                  >
                    Contact us
                  </a>
                </div>
              </section>

              <section aria-labelledby="service-faq">
                <h2 id="service-faq" className="text-2xl font-semibold text-[#0F172A]">
                  FAQ
                </h2>
                <div className="mt-4 grid gap-4">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-lg border border-[#E2E8F0] px-4 py-4">
                      <p className="font-semibold text-[#0F172A]">{item.question}</p>
                      <p className="mt-2 text-[#475569]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}