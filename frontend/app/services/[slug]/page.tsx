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
  sections?: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  includes: string[];
  benefits: string[];
  whyChoose?: string[];
  process?: string[];
  cta: string;
  platforms?: string[];
  technologies?: string[];
  industries?: string[];
  relatedLinks?: Array<{
    href: string;
    label: string;
  }>;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
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

const defaultFaqItems = [
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
    relatedLinks: [
      { href: "/services/website-design", label: "Website design services" },
      { href: "/services/responsive-websites-ui-ux-design", label: "UI/UX design" },
      { href: "/services/web-development", label: "Web development" },
      { href: "/contact", label: "Request a quote" },
    ],
    cta: "Ready to turn your design into a live website? Contact us today.",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    intro:
      "We design and build modern mobile applications that deliver fast, intuitive, and reliable digital experiences for your customers.",
    heroImage: "/section-image1.webp",
    heroSubtitle: "Mobile apps designed to feel smooth, useful, and dependable.",
    includes: [
      "Mobile app UI/UX design",
      "Android app development",
      "Backend integration",
      "User authentication systems",
      "API integrations",
      "Performance optimization",
      "App testing and deployment",
    ],
    benefits: [
      "Reach users on their preferred device",
      "Better customer engagement",
      "Improved business accessibility",
      "Reliable app performance",
    ],
    process: [
      "Requirement gathering",
      "Planning and wireframing",
      "UI/UX design",
      "Development",
      "Testing",
      "Deployment",
    ],
    relatedLinks: [
      { href: "/industries/fitness", label: "Fitness app development" },
      { href: "/industries/restaurants", label: "Restaurant app development" },
      { href: "/industries/healthcare", label: "Healthcare mobile apps" },
      { href: "/services/digital-product-design-and-development", label: "Digital product development" },
      { href: "/contact", label: "Request a quote" },
    ],
    cta: "Let us build your next mobile app.",
  },
  "website-design": {
    title: "Website Design Uganda",
    intro:
      "We create strategic website design services in Uganda that help businesses build trust, communicate value clearly, and convert more visitors into enquiries. Every page is planned around your goals, your customers, and the actions you want people to take.",
    heroImage: "/m2.webp",
    heroSubtitle: "Professional web design in Uganda that builds trust, improves SEO, and drives more leads.",
    sections: [
      {
        heading: "Why professional web design matters",
        paragraphs: [
          "Your website is often the first place a potential customer judges your business. If it looks outdated, loads slowly, or makes it hard to understand what you do, people leave before they contact you. Professional web design changes that by creating a clear, credible experience from the first second a visitor arrives.",
          "A strong website does more than look modern. It guides attention, reduces confusion, supports your brand story, and helps visitors move from curiosity to action. That is why businesses that invest in web design Uganda services usually see better engagement, more enquiries, and stronger trust across every channel they use online.",
        ],
        bullets: [
          "Builds trust at first glance",
          "Improves mobile usability and conversions",
          "Supports search visibility and SEO-friendly content",
          "Makes your sales and enquiry process easier",
        ],
      },
      {
        heading: "Our website design services",
        paragraphs: [
          "We design business websites that speak clearly to your ideal customer and support your commercial goals. Whether you need a new company site, a redesign, a landing page, or a full custom website development project, we structure each page around results rather than decoration.",
          "Our website design services Uganda clients rely on include wireframing, user experience design, brand-aligned layouts, responsive build-outs, conversion-focused copy support, and clear calls to action. If you are looking for a professional web design company that understands both design and growth, we build the page experience to match that expectation.",
        ],
        bullets: [
          "Business website design",
          "Responsive website design",
          "Custom website development",
          "Website redesign services",
          "Landing page design",
          "SEO-friendly websites",
        ],
      },
      {
        heading: "Why businesses choose Keni Web Design",
        paragraphs: [
          "Keni Web Design focuses on outcomes, not just aesthetics. We think about how your visitors read, what they need to trust you, and what should happen next. That means your site is designed to support enquiries, bookings, quotes, calls, and sales in a more deliberate way.",
          "We also keep the experience practical for your team. That includes clean content structure, scalable pages, and a design system that can grow as your business expands. The result is a website that feels premium today and still makes sense as your services, campaigns, and content evolve.",
        ],
        bullets: [
          "Business-first thinking",
          "Clear communication throughout the project",
          "Design choices tied to conversion goals",
          "A scalable website foundation",
        ],
      },
      {
        heading: "Industries we work with",
        paragraphs: [
          "We design websites for a wide range of organizations across Uganda, including service businesses, schools, NGOs, hotels, law firms, healthcare providers, startups, and ecommerce brands. Each industry has different customer expectations, and the website has to match those expectations to build trust quickly.",
          "That is why our process begins with understanding your market. A school website needs simple navigation and admissions clarity. A hotel website needs visual appeal and booking confidence. A law firm needs authority and precision. The design approach changes, but the goal stays the same: help you win better business online.",
        ],
        bullets: [
          "Small businesses and startups",
          "NGOs and nonprofits",
          "Schools and educational institutions",
          "Hotels and hospitality brands",
          "Healthcare and professional services",
          "Ecommerce and product-based businesses",
        ],
      },
      {
        heading: "How the right website improves business growth",
        paragraphs: [
          "A well-designed website can improve more than appearance. It can reduce friction in the buying journey, make your offers easier to understand, and support your marketing team with a stronger destination for campaigns. When your website loads quickly, reads clearly, and feels trustworthy, it becomes a practical sales asset.",
          "That growth effect is especially important in Uganda, where customers often compare several providers before reaching out. If your competitors have clearer messaging, stronger social proof, or better mobile design, they may win the lead. Our role is to make sure your website gives visitors a stronger reason to choose you.",
        ],
        bullets: [
          "More enquiries from qualified visitors",
          "Better mobile conversion rates",
          "Stronger brand credibility",
          "Improved performance for paid ads and SEO",
        ],
      },
    ],
    includes: [
      "Business website design",
      "Information architecture",
      "Conversion-focused layouts",
      "Mobile-first responsive design",
      "Homepage and service page planning",
      "UI component design",
      "Landing pages",
      "Contact and inquiry sections",
      "Brand-aligned visuals",
      "SEO-friendly page structure",
      "SEO-ready structure",
      "Call-to-action strategy",
    ],
    benefits: [
      "A polished first impression that builds trust quickly",
      "Clear paths to inquiry, booking, or purchase",
      "Stronger mobile usability on every screen size",
      "Better support for SEO and digital marketing",
      "A design system your team can grow with",
      "A website that feels aligned with your brand",
    ],
    whyChoose: [
      "Clean layouts and strong visual hierarchy",
      "Mobile responsive across devices",
      "Conversion-first content structure",
      "SEO-aware page planning",
      "Fast feedback and clear communication",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Sanity CMS",
      "Node.js",
      "Vercel",
    ],
    industries: [
      "Small businesses",
      "Startups",
      "NGOs",
      "Schools",
      "Hotels",
      "Healthcare providers",
      "Law firms",
      "Ecommerce brands",
      "Real estate companies",
      "Professional service firms",
    ],
    relatedLinks: [
      { href: "/industries/schools", label: "Websites for schools" },
      { href: "/industries/hotels", label: "Websites for hotels" },
      { href: "/industries/restaurants", label: "Websites for restaurants" },
      { href: "/industries/real-estate", label: "Websites for real estate" },
      { href: "/industries/ngos", label: "Websites for NGOs" },
      { href: "/services/web-development", label: "Web development" },
      { href: "/services/seo-search-engine-optimization", label: "SEO services" },
      { href: "/contact", label: "Request a quote" },
    ],
    process: [
      "Discovery and planning",
      "Wireframes and page structure",
      "Visual design direction",
      "Responsive build and review",
      "Content and SEO refinement",
      "Launch and support",
    ],
    faqItems: [
      {
        question: "What makes your website design services in Uganda different?",
        answer:
          "We design websites around business outcomes, not just visuals. That means each page is planned to build trust, improve usability, support SEO, and encourage more enquiries from the right audience.",
      },
      {
        question: "How long does a professional website design project take?",
        answer:
          "Most website design projects take between two and six weeks depending on the size of the site, the speed of feedback, and how much content or functionality is required.",
      },
      {
        question: "Do you design SEO-friendly websites?",
        answer:
          "Yes. We structure pages, headings, content hierarchy, and calls to action with search visibility in mind so the site can support your SEO strategy from the start.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Absolutely. We can refresh outdated websites, improve the layout and messaging, and turn a weak site into a stronger lead-generation asset.",
      },
      {
        question: "Will my website be mobile responsive?",
        answer:
          "Yes. Every website we build is designed to adapt cleanly to mobile phones, tablets, laptops, and larger desktop screens.",
      },
      {
        question: "Do you help with content and conversion strategy?",
        answer:
          "Yes. We help shape page structure, messaging, and calls to action so the website speaks clearly to customers and supports your sales process.",
      },
    ],
    cta: "Create a website design that feels premium, ranks better, and generates more qualified leads.",
  },
  "ecommerce-development": {
    title: "eCommerce Development",
    intro:
      "We build online stores that make it easy to showcase products, manage orders, and create a smooth buying journey for your customers.",
    heroImage: "/m3.webp",
    heroSubtitle: "Online stores built to convert and scale.",
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
    relatedLinks: [
      { href: "/industries/ecommerce", label: "eCommerce businesses" },
      { href: "/industries/restaurants", label: "Restaurant online ordering" },
      { href: "/services/web-development", label: "Web development" },
      { href: "/contact", label: "Request a quote" },
    ],
    cta: "Start selling online with confidence.",
  },
  "product-selling-development": {
    title: "Product Selling Development",
    intro:
      "We create product-selling websites that focus on simple browsing, strong product presentation, and a fast path to checkout or inquiry.",
    heroImage: "/m1.webp",
    heroSubtitle: "Product pages and buying journeys that are easy to use.",
    includes: [
      "Product page design",
      "Checkout flow setup",
      "Lead capture for product inquiries",
      "Catalog and category structures",
      "Payment gateway integration",
      "Mobile-friendly product layouts",
      "Stock and order management",
    ],
    benefits: [
      "Clear product presentation",
      "Simpler buying experiences",
      "Better conversion paths",
      "Flexible setup for physical or digital products",
    ],
    platforms: ["Shopify", "WooCommerce", "Custom product websites"],
    relatedLinks: [
      { href: "/industries/ecommerce", label: "eCommerce businesses" },
      { href: "/industries/real-estate", label: "Real estate properties" },
      { href: "/services/ecommerce-development", label: "eCommerce development" },
      { href: "/contact", label: "Request a quote" },
    ],
    cta: "Build a product-selling site that makes buying easy.",
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
    relatedLinks: [
      { href: "/industries/hotels", label: "Hotel UI/UX design" },
      { href: "/industries/ecommerce", label: "eCommerce design" },
      { href: "/industries/restaurants", label: "Restaurant interface design" },
      { href: "/services/website-design", label: "Website design" },
      { href: "/contact", label: "Request a quote" },
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
    relatedLinks: [
      { href: "/industries/schools", label: "School SEO" },
      { href: "/industries/hotels", label: "Hotel SEO" },
      { href: "/industries/healthcare", label: "Healthcare SEO" },
      { href: "/industries/real-estate", label: "Real estate SEO" },
      { href: "/services/website-design", label: "SEO-friendly website design" },
      { href: "/contact", label: "Request SEO audit" },
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
    relatedLinks: [
      { href: "/industries/healthcare", label: "Healthcare digital products" },
      { href: "/industries/fitness", label: "Fitness app development" },
      { href: "/services/web-development", label: "Web app development" },
      { href: "/contact", label: "Request a quote" },
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
    relatedLinks: [
      { href: "/industries/ngos", label: "NGO websites" },
      { href: "/industries/law-firms", label: "Law firm websites" },
      { href: "/industries/healthcare", label: "Healthcare websites" },
      { href: "/services/website-design", label: "Website design" },
      { href: "/contact", label: "Request a quote" },
    ],
    cta: "Let us build your website.",
  },
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const details = serviceContent[slug];

  if (!service) {
    return {};
  }

  const pageTitle = details?.title ?? service.title;

  return {
    title: pageTitle,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: service.summary,
      url: `/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: absoluteUrl(defaultSeoImagePath),
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
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

  const faqData = details.faqItems ?? defaultFaqItems;
  const normalizeId = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

            {details.sections ? (
              <div className="mt-10 grid gap-10">
                {details.sections.map((section) => (
                  <section key={section.heading} aria-labelledby={normalizeId(section.heading)}>
                    <h2 id={normalizeId(section.heading)} className="text-2xl font-semibold text-[#0F172A]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 grid gap-4 text-[#475569]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-4 grid gap-3 text-[#475569] sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="rounded-lg border border-[#E2E8F0] px-4 py-3">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            ) : null}

            <div className="mt-12 grid gap-10">
              <section aria-labelledby="service-includes">
                <h2 id="service-includes" className="text-2xl font-semibold text-[#0F172A]">
                  Our website design services
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

              {details.technologies ? (
                <section aria-labelledby="service-technologies">
                  <h2 id="service-technologies" className="text-2xl font-semibold text-[#0F172A]">
                    Technologies we use
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {details.technologies.map((item) => (
                      <li key={item} className="rounded-full border border-[#E2E8F0] px-4 py-2 text-sm text-[#475569]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {details.industries ? (
                <section aria-labelledby="service-industries">
                  <h2 id="service-industries" className="text-2xl font-semibold text-[#0F172A]">
                    Industries we serve
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {details.industries.map((item) => (
                      <li key={item} className="rounded-full border border-[#E2E8F0] px-4 py-2 text-sm text-[#475569]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {details.relatedLinks ? (
                <section aria-labelledby="service-related-links">
                  <h2 id="service-related-links" className="text-2xl font-semibold text-[#0F172A]">
                    Helpful related pages
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {details.relatedLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-full border border-[#E2E8F0] px-4 py-2 text-sm font-medium text-[#0B63F3] transition-colors hover:border-[#0B63F3] hover:bg-[#EFF6FF]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
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
                  {faqData.map((item) => (
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