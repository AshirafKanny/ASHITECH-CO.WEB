import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Dumbbell,
  Gauge,
  GraduationCap,
  HeartPulse,
  Home,
  Layers3,
  Lock,
  MapPin,
  MonitorSmartphone,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Scale,
  type LucideIcon,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects } from "../../lib/portfolio";
import { serviceItems } from "../../lib/services";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";

type CardLink = {
  title: string;
  href: string;
  description: string;
  Icon: LucideIcon;
};

const heroImage = encodeURI("/Services at Keni Web Design.webp");

export const metadata: Metadata = {
  title: "World-Class Web Design & Digital Solutions for Businesses in Kampala, Uganda",
  description:
    "Premium website design, web development, eCommerce development, mobile app development, SEO services, digital marketing, and custom digital solutions for Kampala and businesses across Uganda.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "World-Class Web Design & Digital Solutions for Businesses in Kampala, Uganda",
    description:
        "Premium website design, web development, eCommerce development, mobile app development, SEO services, digital marketing, and custom digital solutions for Kampala and businesses across Uganda.",
    url: "/services",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "Keni Web Design services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World-Class Web Design & Digital Solutions for Businesses in Kampala, Uganda",
    description:
        "Premium website design, web development, eCommerce development, mobile app development, SEO services, digital marketing, and custom digital solutions for Kampala and businesses across Uganda.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

const trustIndicators = [
  "Professional Website Designers",
  "SEO Optimized Websites",
  "Mobile Friendly Designs",
  "Fast & Secure Websites",
  "Businesses Across Uganda Trust Us",
];

const serviceIconMap: Record<string, LucideIcon> = {
  "website-design": PenTool,
  "mobile-app-development": MonitorSmartphone,
  "ecommerce-development": ShoppingCart,
  "product-selling-development": Sparkles,
  "responsive-websites-ui-ux-design": Palette,
  "seo-search-engine-optimization": Search,
  "digital-marketing": Megaphone,
  "web-development": Code2,
};

const whyChooseCards = [
  {
    title: "Professional Experience",
    description:
      "You get an experienced team that understands website design Uganda, conversion strategy, and the practical expectations of serious business owners.",
    Icon: TrendingUp,
  },
  {
    title: "Modern UI/UX",
    description:
      "Every page is structured to feel premium, easy to scan, and convincing across desktop, laptop, tablet, and mobile devices.",
    Icon: Palette,
  },
  {
    title: "Fast Performance",
    description:
      "We build with performance in mind so your website loads quickly, keeps attention longer, and supports better SEO outcomes.",
    Icon: Gauge,
  },
  {
    title: "Mobile Responsive",
    description:
      "Your visitors should never struggle to read, tap, or enquire on small screens, so responsive design is baked into every build.",
    Icon: MonitorSmartphone,
  },
  {
    title: "SEO First Development",
    description:
      "We structure headings, content, links, schema, and metadata to support long-term visibility for SEO Services Uganda and related keywords.",
    Icon: Search,
  },
  {
    title: "Secure Websites",
    description:
      "Modern security standards, good hosting practices, and disciplined code help protect your users and your brand reputation.",
    Icon: Lock,
  },
  {
    title: "Affordable Pricing",
    description:
      "We balance quality and budget so you can get a serious business website without paying for unnecessary complexity.",
    Icon: ShieldCheck,
  },
  {
    title: "Reliable Support",
    description:
      "We stay available after launch to support updates, maintenance, and continued growth as your business evolves.",
    Icon: Users,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by learning what your business actually needs: the services you sell, the audiences you serve, the actions you want users to take, and the competitors you need to beat in Kampala and beyond.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We map information architecture, page hierarchy, content requirements, and conversion paths so the final build has a clear strategy behind it rather than a random collection of sections.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft the visual direction, spacing, typography, imagery treatment, and component styles to create a premium UI/UX that feels credible and memorable.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved design is built in Next.js with clean TypeScript, responsive layouts, and performance-minded implementation so the experience stays fast and dependable.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We check responsive behavior, accessibility, link integrity, metadata, and browser performance so the site is ready for real users and search engines.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Once the site is validated, we deploy carefully, confirm analytics and search visibility settings, and make sure the public version reflects the approved experience.",
  },
  {
    number: "07",
    title: "Support",
    description:
      "After launch, we continue with improvements, maintenance, content updates, and growth support so your website stays effective as your business evolves.",
  },
];

const industryCards: CardLink[] = [
  {
    title: "Schools",
    href: "/industries/schools-and-educational-institutions",
    description: "Admissions-focused websites that build parent trust and simplify school communication.",
    Icon: GraduationCap,
  },
  {
    title: "Hotels",
    href: "/industries/hotels-and-hospitality",
    description: "Booking-friendly hospitality websites that increase direct enquiries and room confidence.",
    Icon: BedDouble,
  },
  {
    title: "Hospitals",
    href: "/industries/healthcare-and-medical-clinics",
    description: "Patient-first websites designed for healthcare credibility, bookings, and service clarity.",
    Icon: HeartPulse,
  },
  {
    title: "NGOs",
    href: "/industries/ngo-and-nonprofit-organizations",
    description: "Impact-driven sites that strengthen mission storytelling, donor trust, and volunteer interest.",
    Icon: Users,
  },
  {
    title: "Restaurants",
    href: "/industries/restaurants-and-food-business",
    description: "Menu-led experiences that make reservations, orders, and location discovery simple.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate-and-property",
    description: "Property websites that showcase listings clearly and turn browsers into qualified leads.",
    Icon: Home,
  },
  {
    title: "Law Firms",
    href: "/industries/law-firms-and-legal-services",
    description: "Authority-first legal websites that support credibility, expertise, and consultation requests.",
    Icon: Scale,
  },
  {
    title: "Fitness",
    href: "/industries/fitness-and-wellness",
    description: "Membership-focused websites built to attract signups, class bookings, and inquiries.",
    Icon: Dumbbell,
  },
  {
    title: "eCommerce",
    href: "/industries/ecommerce-and-retail",
    description: "Online retail sites that improve product discovery, trust, and checkout conversions.",
    Icon: ShoppingCart,
  },
];

const locationCards: CardLink[] = [
  {
    title: "Kampala",
    href: "/locations/kampala",
    description: "High-intent website design for businesses competing in Uganda's most active digital market.",
    Icon: MapPin,
  },
  {
    title: "Entebbe",
    href: "/locations/entebbe",
    description: "Tourism, hospitality, and travel-ready websites for a fast-growing lakeside market.",
    Icon: MapPin,
  },
  {
    title: "Mukono",
    href: "/locations/mukono",
    description: "Responsive local business websites for a growing commuter and trade corridor.",
    Icon: MapPin,
  },
  {
    title: "Mbarara",
    href: "/locations/mbarara",
    description: "Regional growth websites for retail, healthcare, and hospitality businesses.",
    Icon: MapPin,
  },
  {
    title: "Jinja",
    href: "/locations/jinja",
    description: "Digital experiences for tourism, industry, and service brands in Eastern Uganda.",
    Icon: MapPin,
  },
  {
    title: "Gulu",
    href: "/locations/gulu",
    description: "Lead-generation sites for education, NGOs, healthcare, and service providers.",
    Icon: MapPin,
  },
  {
    title: "Fort Portal",
    href: "/locations/fort-portal",
    description: "Tourism-focused websites for lodges, attractions, and hospitality businesses.",
    Icon: MapPin,
  },
  {
    title: "Mbale",
    href: "/locations/mbale",
    description: "Professional sites for businesses serving trade, tourism, and regional customers.",
    Icon: MapPin,
  },
  {
    title: "Lira",
    href: "/locations/lira",
    description: "Location-aware websites that help local businesses build visibility and trust.",
    Icon: MapPin,
  },
  {
    title: "Masaka",
    href: "/locations/masaka",
    description: "Conversion-ready pages for traders, hospitality brands, and professional services.",
    Icon: MapPin,
  },
];

const testimonialCards = [
  {
    name: "Kampala Growth Partner",
    role: "Managing Director, Service Business",
    quote:
      "Our website finally communicates what we do, why customers should trust us, and how to contact us fast. That alone improved the quality of inquiries.",
  },
  {
    name: "Hospitality Operator",
    role: "Owner, Uganda Hospitality Brand",
    quote:
      "The new structure made our services and booking journey much easier to understand. Guests now reach us with fewer questions and more intent.",
  },
  {
    name: "Education Administrator",
    role: "Admissions Lead, School Brand",
    quote:
      "We needed a site that parents could understand quickly on mobile. The final result is cleaner, more credible, and much easier to maintain.",
  },
];

const faqItems = [
  {
    question: "How much does a website cost in Uganda?",
    answer:
      "Website cost in Uganda depends on scope, design depth, integrations, and content requirements. A brochure site, a custom business website, and a full eCommerce platform are not priced the same because the build complexity and strategy work differ. We keep pricing practical and explain the scope clearly so you know exactly what you are paying for.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Most projects take between two and six weeks, depending on the number of pages, content readiness, approval speed, and functionality. Simple websites move faster, while custom website development, SEO-heavy builds, and multi-section landing pages naturally need more time. We always set realistic timelines and work in milestones.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. If your current site looks outdated, loads slowly, or fails to convert, we can redesign it without throwing away the parts that still work. We review structure, messaging, SEO, and user flow, then rebuild the site so it looks premium and performs better for real business goals.",
  },
  {
    question: "Can you build an eCommerce website?",
    answer:
      "Yes. We build eCommerce development solutions that make product browsing, cart flow, payment steps, and mobile checkout feel straightforward. Whether you sell physical goods, digital products, or a small curated catalog, we can create an online store that supports growth and customer trust.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes. SEO Services Uganda are part of the way we think about websites from the beginning. We plan page structure, metadata, internal links, technical performance, and on-page content so your website can rank more effectively and support long-term organic growth.",
  },
  {
    question: "Can I pay in phases?",
    answer:
      "In many cases, yes. For larger projects, phased payments can make the process easier while still keeping the work structured and accountable. We discuss milestones, scope, and delivery expectations up front so the arrangement works for both sides.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes. Website maintenance is available for updates, content changes, technical fixes, backups, and general support after launch. A website should not become stale once it goes live, so ongoing care is important for performance, security, and credibility.",
  },
  {
    question: "Can you build custom web applications?",
    answer:
      "Yes. We can build custom website development and web application experiences for workflows that need more than a standard marketing site. That includes dashboards, booking flows, portals, and other business tools that must feel fast, secure, and easy to use.",
  },
];

const serviceCards = serviceItems.map((service) => ({
  ...service,
  Icon: serviceIconMap[service.slug] ?? Code2,
}));

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KENI WEB DESIGN",
    url: absoluteUrl("/"),
    logo: absoluteUrl(defaultSeoImagePath),
    image: absoluteUrl(defaultSeoImagePath),
    sameAs: ["https://keniwebdesign.com"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+256744429808",
        areaServed: "UG",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design and Digital Solutions",
    serviceType: [
      "Website Design Uganda",
      "Web Development Uganda",
      "eCommerce Development",
      "Mobile App Development",
      "SEO Services Uganda",
      "Digital Marketing Uganda",
    ],
    provider: {
      "@type": "Organization",
      name: "KENI WEB DESIGN",
      url: absoluteUrl("/"),
    },
    areaServed: ["Kampala", "Uganda"],
    url: absoluteUrl("/services"),
    description:
      "Premium website design, web development, eCommerce development, mobile app development, SEO services, digital marketing, and custom digital solutions for businesses in Kampala and across Uganda.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#EEF2F8] text-[#0F172A]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <ScrollReveal>
          <section className="relative isolate overflow-hidden bg-[#06101e] text-white" aria-labelledby="services-page-heading">
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt="Keni Web Design services background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,10,22,0.86),rgba(10,17,34,0.78)_45%,rgba(4,10,22,0.94))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,94,46,0.18),transparent_30%)]" />
              <div className="absolute left-4 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-pulse" aria-hidden="true" />
              <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl motion-safe:animate-pulse" aria-hidden="true" />
            </div>

            <div className="site-container relative z-10 py-24 sm:py-28 lg:py-32">
              <div className="max-w-5xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7dd3fc]">
                  Kampala · Uganda · Digital Solutions
                </p>
                <h1 id="services-page-heading" className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  World-Class Web Design & Digital Solutions for Businesses in Kampala, Uganda
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">
                  Grow your business with professionally designed websites, eCommerce stores, mobile applications, SEO services, and custom digital solutions built to attract more customers, generate leads, and increase revenue.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(255,94,46,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#ff6a42]"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="#complete-digital-services"
                    className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                  >
                    Explore Our Services
                  </a>
                </div>

                <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {trustIndicators.map((indicator) => (
                    <li
                      key={indicator}
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-3 text-sm text-white/86 backdrop-blur-md"
                    >
                      <CheckCircle2 size={18} className="shrink-0 text-[#7dd3fc]" aria-hidden="true" />
                      <span>{indicator}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-white/76">
                  <Link href="/portfolio" className="rounded-full border border-white/14 bg-white/6 px-4 py-2 transition-colors hover:bg-white/12">
                    Portfolio
                  </Link>
                  <Link href="/about-us" className="rounded-full border border-white/14 bg-white/6 px-4 py-2 transition-colors hover:bg-white/12">
                    About
                  </Link>
                  <Link href="/pricing" className="rounded-full border border-white/14 bg-white/6 px-4 py-2 transition-colors hover:bg-white/12">
                    Pricing
                  </Link>
                  <Link href="/blog" className="rounded-full border border-white/14 bg-white/6 px-4 py-2 transition-colors hover:bg-white/12">
                    Blog
                  </Link>
                  <Link href="/contact" className="rounded-full border border-white/14 bg-white/6 px-4 py-2 transition-colors hover:bg-white/12">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="complete-digital-services" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="complete-digital-services-heading">
            <div className="site-container">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                  Complete Digital Services
                </p>
                <h2 id="complete-digital-services-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  Complete Digital Services for Ambitious Businesses
                </h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  This is the full service stack we already offer through the existing project architecture. Each card links to its own live service detail page, so visitors can move from a high-level overview to a deeper explanation without leaving the site structure that is already in place. Whether you need responsive web design, custom website development, SEO Services Uganda, eCommerce development, or mobile app development, the path is clear, direct, and conversion-ready.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {serviceCards.map(({ title, slug, summary, Icon }) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group block h-full rounded-3xl border border-[#dbe4f3] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb29b] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)]"
                  >
                    <article className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eff6ff] text-[#0b63f3] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#ffefe8] group-hover:text-[#ff5e2e]">
                          <Icon size={22} aria-hidden="true" />
                        </span>
                        <ArrowUpRight size={18} className="mt-1 text-[#94a3b8] transition-colors group-hover:text-[#ff5e2e]" aria-hidden="true" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">{title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{summary}</p>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b63f3] transition-colors group-hover:text-[#ff5e2e]">
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#06101e] py-16 text-white sm:py-20" aria-labelledby="why-choose-heading">
            <div className="site-container">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                  Why Choose Keni Web Design
                </p>
                <h2 id="why-choose-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
                  Why clients choose Keni Web Design for serious digital growth
                </h2>
                <p className="mt-4 text-base leading-8 text-white/76">
                  Businesses do not come to us for decoration. They come for a website that feels premium, supports sales, ranks well, and gives customers confidence at every step. That means the design must look sharp, the content must answer real questions, and the user journey must reduce friction rather than create it. The result is a website that acts like a dependable sales and credibility engine.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {whyChooseCards.map(({ title, description, Icon }) => (
                  <article key={title} className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ff5e2e] text-white shadow-[0_12px_22px_rgba(255,94,46,0.25)]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16 sm:py-20" aria-labelledby="development-process-heading">
            <div className="site-container">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                  Our Website Development Process
                </p>
                <h2 id="development-process-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  An interactive timeline built around clarity, speed, and accountability
                </h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  The process is simple enough for clients to follow but detailed enough to protect quality. Each phase has a reason to exist: discovery prevents guesswork, planning keeps the build aligned with business goals, design shapes the experience, development turns the plan into a working website, testing catches friction, launch opens the site to the public, and support keeps it moving forward after go-live.
                </p>
              </div>

              <ol className="mt-10 grid gap-5 lg:grid-cols-2">
                {processSteps.map((step) => (
                  <li
                    key={step.number}
                    className="group rounded-3xl border border-[#dbe4f3] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb29b]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b63f3] text-base font-bold text-white shadow-[0_12px_22px_rgba(11,99,243,0.24)]">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-[#0F172A]">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#475569]">{step.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-white py-16 sm:py-20" aria-labelledby="industries-heading">
            <div className="site-container">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                    Industries We Serve
                  </p>
                  <h2 id="industries-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                    Clickable industry pages for the sectors that matter most
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#475569]">
                    Keni Web Design already has strong industry pages in the application, so this section simply surfaces them in a cleaner, more conversion-friendly way. Visitors can move straight into the relevant page for schools, hospitality, healthcare, nonprofits, restaurants, property, fitness, eCommerce, and law firms.
                  </p>
                </div>

                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#0b63f3] px-5 py-3 text-sm font-semibold text-[#0b63f3] transition-colors hover:bg-[#eff6ff]"
                >
                  View All Industries
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {industryCards.map(({ title, href, description, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group rounded-3xl border border-[#dbe4f3] bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb29b] hover:bg-white hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
                  >
                    <article className="flex h-full flex-col">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eff6ff] text-[#0b63f3] transition-transform group-hover:scale-105 group-hover:bg-[#ffefe8] group-hover:text-[#ff5e2e]">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">{title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b63f3] transition-colors group-hover:text-[#ff5e2e]">
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#06101e] py-16 text-white sm:py-20" aria-labelledby="locations-heading">
            <div className="site-container">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                    Locations We Serve
                  </p>
                  <h2 id="locations-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
                    Important Uganda locations with dedicated local landing links
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/76">
                    Location intent matters, especially for businesses targeting local search. These cards connect the Services page to existing location pages so people in Kampala, Entebbe, Mukono, Mbarara, Jinja, Gulu, Fort Portal, Mbale, Lira, and Masaka can move into the most relevant local content quickly.
                  </p>
                </div>

                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-white/18 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                >
                  View All Locations
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {locationCards.map(({ title, href, description, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group rounded-3xl border border-white/10 bg-white/6 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7dd3fc]/50 hover:bg-white/12"
                  >
                    <article>
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-[#7dd3fc] transition-transform group-hover:scale-105">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/74">{description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16 sm:py-20" aria-labelledby="website-matters-heading">
            <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <article>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                  Why a Professional Website Matters
                </p>
                <h2 id="website-matters-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  Strong websites do much more than look good
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-[#475569]">
                  <p>
                    A professional website changes the way people judge your business the moment they land on your page. It builds brand credibility, makes your offer easier to understand, and creates a better first impression than a social profile or a phone number alone ever can. For many buyers, the website is the trust test that decides whether they contact you or keep searching.
                  </p>
                  <p>
                    The real value goes beyond appearance. With the right structure, a website becomes a lead generation asset that works day and night. It helps your business appear for Website Design Uganda searches, supports SEO Services Uganda campaigns, and makes your digital presence easier to scale. That is why businesses that invest in professional website designers usually see stronger visibility, more enquiries, and better customer confidence.
                  </p>
                  <p>
                    It also improves competitive advantage. If your competitors have slow pages, confusing navigation, or weak messaging, a cleaner site gives you an immediate edge. Combine that with responsive web design, clear calls to action, internal links to pricing and portfolio pages, and useful content that answers real customer questions, and the website starts acting like a revenue tool instead of a digital brochure.
                  </p>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Brand credibility", "Premium design and consistent messaging make your business feel established."],
                    ["Lead generation", "Clear forms and calls to action turn visitors into real enquiries."],
                    ["SEO and visibility", "Structure and content support organic traffic and local discovery."],
                    ["Mobile traffic", "Responsive layouts keep mobile users engaged and moving forward."],
                    ["Customer trust", "Social proof, contact clarity, and strong UX reduce hesitation."],
                    ["Sales growth", "A better online journey can improve inquiries, bookings, and revenue."],
                    ["Digital transformation", "Your website becomes a platform for future growth and expansion."],
                    ["Competitive advantage", "Better speed, design, and clarity help you stand out quickly."],
                  ].map(([title, description]) => (
                    <li key={title} className="rounded-2xl border border-[#dbe4f3] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                      <h3 className="text-base font-semibold text-[#0F172A]">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#475569]">{description}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full bg-[#0b63f3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0755d4]">
                    View Portfolio
                  </Link>
                  <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-[#0b63f3] px-5 py-3 text-sm font-semibold text-[#0b63f3] transition-colors hover:bg-[#eff6ff]">
                    View Pricing
                  </Link>
                  <Link href="/about-us" className="inline-flex items-center justify-center rounded-full border border-[#dbe4f3] px-5 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#f8fafc]">
                    About Keni Web Design
                  </Link>
                  <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-[#dbe4f3] px-5 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#f8fafc]">
                    Read the Blog
                  </Link>
                </div>
              </article>

              <aside className="rounded-3xl border border-[#dbe4f3] bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                  Conversion Focus
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                  What this page is built to do
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#475569]">
                  <p>
                    It helps people quickly understand what Keni Web Design offers, why the brand is different, and how to move from interest to action without friction.
                  </p>
                  <p>
                    It supports SEO by concentrating value around website design Uganda, web development Uganda, custom website development, business website design, responsive web design, UI/UX design, digital solutions Uganda, and SEO Services Uganda.
                  </p>
                  <p>
                    It improves internal linking across service pages, industry pages, location pages, pricing, portfolio, contact, and the blog, which helps both user navigation and crawl depth.
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#0F172A]">Website Design Uganda</div>
                  <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#0F172A]">Web Development Uganda</div>
                  <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#0F172A]">eCommerce Development</div>
                  <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#0F172A]">Mobile App Development</div>
                  <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm font-medium text-[#0F172A]">SEO Services Uganda</div>
                </div>
              </aside>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-white py-16 sm:py-20" aria-labelledby="recent-work-heading">
            <div className="site-container">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                    Our Recent Work
                  </p>
                  <h2 id="recent-work-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                    A few recent portfolio pieces to show the standard of work
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#475569]">
                    These projects give visitors a quick look at the kind of digital experiences Keni Web Design builds. They also reinforce trust by proving that the team already works across different industries and complex user journeys.
                  </p>
                </div>

                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#0b63f3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0755d4]">
                  View Portfolio
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {portfolioProjects.slice(0, 3).map((project) => (
                  <article key={project.slug} className="overflow-hidden rounded-3xl border border-[#dbe4f3] bg-[#F8FAFC] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">{project.category}</p>
                      <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#475569]">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((service) => (
                          <span key={service} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0F172A] shadow-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#06101e] py-16 text-white sm:py-20" aria-labelledby="testimonials-heading">
            <div className="site-container">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                  Client Testimonials
                </p>
                <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
                  Beautiful feedback from businesses that wanted a stronger website
                </h2>
                <p className="mt-4 text-base leading-8 text-white/76">
                  Testimonials matter because they reduce doubt. They also help a services page feel human instead of purely promotional, which is important when you are asking people to trust you with their brand, their visibility, and their revenue.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {testimonialCards.map((testimonial) => (
                  <article key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                    <Star size={18} className="text-[#fbbf24]" aria-hidden="true" />
                    <p className="mt-4 text-sm leading-7 text-white/78">{testimonial.quote}</p>
                    <h3 className="mt-5 text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
            <div className="site-container">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5e2e]">
                  Frequently Asked Questions
                </p>
                <h2 id="faq-heading" className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  Detailed answers to the questions people ask before they buy
                </h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  This FAQ section is built for both users and search engines. It answers practical buying questions, reduces hesitation, and adds another layer of structured content to strengthen the page's organic relevance.
                </p>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                {faqItems.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-3xl border border-[#dbe4f3] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-[#0F172A]">
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className="mt-1 shrink-0 text-[#0b63f3] transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-[#475569]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-[#06101e] py-16 text-white sm:py-20" aria-labelledby="final-cta-heading">
            <div className="site-container grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,99,243,0.12),rgba(255,94,46,0.12))] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <article>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                  Ready to Grow Your Business?
                </p>
                <h2 id="final-cta-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
                  Let's Build Something Amazing Together
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
                  Whether you're launching a new business or upgrading your existing website, Keni Web Design is ready to help you build a professional online presence that delivers real business results. We can shape the strategy, refine the content, design the experience, and ship a site that supports your next stage of growth.
                </p>
              </article>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(255,94,46,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#ff6a42]"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
