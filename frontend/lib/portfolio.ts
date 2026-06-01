export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  exploreUrl?: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  impact: string[];
  services: string[];
  timeline: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "kampala-legal-firm-website",
    title: "Tourism and WildLife Website",
    category: "Professional Services",
    summary: "A trust-first website that positions the firm as credible, improves local discovery, and drives qualified inquiries. The experience balances authority, clarity, and mobile-first navigation for busy clients.",
    imageSrc: "/hikes1.webp",
    imageAlt: "Tourism and wildlife website preview",
    exploreUrl: "https://www.adventuresandhikes.com/",
    industry: "Legal services",
    challenge:
      "The firm relied on referrals and had no consistent digital footprint. The old site loaded slowly on mobile, buried critical contact information, and failed to rank for Kampala legal search terms.",
    solution:
      "We rebuilt the site around practice-area intent, added authority cues like case highlights and attorney bios, and structured every page around a clear next step. Technical SEO, clean schema, and mobile performance improvements helped the firm show up for local searches.",
    technologies: ["Next.js", "Tailwind CSS", "Formspree", "Google Analytics"],
    impact: [
      "Improved inquiry volume through page-level CTAs and simplified forms",
      "Stronger visibility for local legal search terms in Kampala",
      "Faster mobile load time and lower bounce rate on key pages",
    ],
    services: ["Website design", "Conversion copy", "Local SEO setup"],
    timeline: "4 weeks",
  },
  {
    slug: "boutique-hotel-booking-site",
    title: "Boutique Hotel Booking Site",
    category: "Hospitality",
    summary: "A booking-focused hotel website that elevates room showcases, amenities, and local experiences while encouraging direct inquiries. The layout is optimized for travelers comparing options quickly on mobile.",
    imageSrc: "/LLL9.webp",
    imageAlt: "Hotel website preview",
    exploreUrl: "https://www.kampala-hotels-ug.com/en/",
    industry: "Hospitality",
    challenge:
      "The hotel depended on third-party booking platforms and lacked a clear path to direct bookings. Existing pages did not provide enough detail to build trust with international guests.",
    solution:
      "We designed a premium visual system, added dedicated room detail pages, and created direct booking pathways with WhatsApp and inquiry CTAs. Performance tuning and image optimization ensured fast browsing for travelers on mobile data.",
    technologies: ["Next.js", "Sanity CMS", "Image optimization"],
    impact: [
      "Higher volume of direct booking inquiries from the website",
      "Reduced reliance on third-party platforms for reservations",
      "Stronger brand trust through detailed room and amenity content",
    ],
    services: ["Web design", "Content structure", "Performance optimization"],
    timeline: "5 weeks",
  },
  {
    slug: "primary-school-admissions-site",
    title: "Primary School Admissions Site",
    category: "Education",
    summary: "A school website that simplifies admissions, centralizes key policies, and improves communication with parents. The experience is designed for mobile-first parents who need answers quickly.",
    imageSrc: "/LLL4.webp",
    imageAlt: "School website preview",
    exploreUrl: "https://primary-school-project.vercel.app/",
    industry: "Education",
    challenge:
      "Parents struggled to access admissions details and school updates on mobile devices. The admissions process felt unclear and required too many office calls.",
    solution:
      "We organized admissions into a step-by-step flow, added downloadable forms, and built a responsive layout with clear contact pathways. Content was rewritten to answer common parent questions upfront.",
    technologies: ["Next.js", "Tailwind CSS", "Accessible UI"],
    impact: [
      "Higher admissions inquiries with clearer process steps",
      "Reduced office calls for routine admissions questions",
      "Improved trust with parents through transparent policies",
    ],
    services: ["Website strategy", "UI/UX design", "Content migration"],
    timeline: "3 weeks",
  },
  {
    slug: "ecommerce-fashion-store",
    title: "Ecommerce Fashion Store",
    category: "Ecommerce",
    summary: "An ecommerce store built for mobile shoppers with fast checkout, SEO-ready product pages, and clear merchandising. The design prioritizes discovery and quick add-to-cart actions.",
    imageSrc: "/LLL7.webp",
    imageAlt: "Ecommerce store preview",
    exploreUrl: "https://fashionclinik.com/",
    industry: "Retail",
    challenge:
      "The brand relied on social media sales and needed a reliable store with better product discovery and checkout flow. Customers had difficulty filtering and comparing similar items.",
    solution:
      "We built a clean product catalog with structured collections, optimized search, and a faster checkout flow. Mobile performance and image delivery were tuned to keep browsing smooth on slower connections.",
    technologies: ["Shopify", "Custom theme", "Analytics"],
    impact: [
      "Higher conversion rate from mobile traffic",
      "Improved product discovery through structured collections",
      "Stronger brand credibility with consistent product presentation",
    ],
    services: ["Ecommerce design", "Store setup", "SEO foundations"],
    timeline: "6 weeks",
  },
  {
    slug: "ngo-impact-storytelling-site",
    title: "NGO Impact Storytelling Site",
    category: "Nonprofit",
    summary: "A storytelling-focused NGO website that highlights programs, impact, and donor trust signals. The narrative is built around outcomes, transparency, and clear ways to support the mission.",
    imageSrc: "/LLL5.webp",
    imageAlt: "NGO website preview",
    exploreUrl: "https://techforcommunity.org/",
    industry: "Nonprofit",
    challenge:
      "The organization needed a credible online presence to attract partners and donors. Their existing content lacked clear impact proof and made it hard to understand program outcomes.",
    solution:
      "We structured the site around mission, impact data, and program pages with donor-ready CTAs. A clear content hierarchy and impact highlights help stakeholders quickly grasp results.",
    technologies: ["Next.js", "Content modeling", "SEO setup"],
    impact: [
      "Improved partner inquiries through clearer impact messaging",
      "Stronger storytelling and transparency for donor confidence",
      "Better engagement on program pages and impact reports",
    ],
    services: ["Web design", "Content strategy", "SEO"],
    timeline: "4 weeks",
  },
  {
    slug: "construction-company-portfolio",
    title: "Construction Company Portfolio",
    category: "Construction",
    summary: "A portfolio-driven website showcasing projects, capabilities, and bidding credibility. The layout communicates scale, safety, and reliability for government and commercial clients.",
    imageSrc: "/LLL6.webp",
    imageAlt: "Construction portfolio preview",
    exploreUrl: "https://www.pfmstone.com/",
    industry: "Construction",
    challenge:
      "The company needed to show project history and win trust with government and commercial clients. Their previous site did not explain capabilities or compliance standards clearly.",
    solution:
      "We created a clean portfolio layout, detailed service breakdowns, and proof sections with structured project details. The content emphasizes safety, scope, and delivery timelines to support bid credibility.",
    technologies: ["Next.js", "Image optimization", "SEO"],
    impact: [
      "Improved bid credibility with stronger proof and project clarity",
      "More inbound project inquiries from commercial clients",
      "Clearer presentation of services and delivery scope",
    ],
    services: ["Web design", "Portfolio content", "Performance optimization"],
    timeline: "5 weeks",
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
