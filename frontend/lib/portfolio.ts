export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
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
    title: "Kampala Legal Firm Website",
    category: "Professional Services",
    summary: "A modern, trust-first website for a legal firm focused on lead generation and local SEO visibility.",
    imageSrc: "/pot/project-two1.webp",
    imageAlt: "Legal firm website preview",
    industry: "Legal services",
    challenge:
      "The firm relied on referrals and had no digital presence. Their old site did not load well on mobile and did not rank for local searches.",
    solution:
      "We built a fast, mobile-first website with clear practice area pages, trust sections, and conversion-focused contact pathways.",
    technologies: ["Next.js", "Tailwind CSS", "Formspree", "Google Analytics"],
    impact: [
      "Improved inquiry volume through clear CTAs",
      "Stronger visibility for local legal search terms",
      "Faster mobile load time and better engagement",
    ],
    services: ["Website design", "Conversion copy", "Local SEO setup"],
    timeline: "4 weeks",
  },
  {
    slug: "boutique-hotel-booking-site",
    title: "Boutique Hotel Booking Site",
    category: "Hospitality",
    summary: "A booking-focused hotel website that highlights rooms, amenities, and local experiences.",
    imageSrc: "/pot/project-two2.webp",
    imageAlt: "Hotel website preview",
    industry: "Hospitality",
    challenge:
      "The hotel depended on third-party booking platforms and lacked direct booking inquiries from their website.",
    solution:
      "We created a premium design, room detail pages, and booking CTAs with a mobile-first layout and WhatsApp inquiries.",
    technologies: ["Next.js", "Sanity CMS", "Image optimization"],
    impact: [
      "Increase in direct booking inquiries",
      "Reduced reliance on third-party platforms",
      "Stronger brand trust for international guests",
    ],
    services: ["Web design", "Content structure", "Performance optimization"],
    timeline: "5 weeks",
  },
  {
    slug: "primary-school-admissions-site",
    title: "Primary School Admissions Site",
    category: "Education",
    summary: "A school website that simplifies admissions and improves communication with parents.",
    imageSrc: "/pot/project-two3.webp",
    imageAlt: "School website preview",
    industry: "Education",
    challenge:
      "Parents struggled to access admissions details and school updates on mobile devices.",
    solution:
      "We organized admissions information, added downloadable forms, and built a responsive layout optimized for parents.",
    technologies: ["Next.js", "Tailwind CSS", "Accessible UI"],
    impact: [
      "Higher admissions inquiries",
      "Reduced office calls for routine questions",
      "Improved trust with parents",
    ],
    services: ["Website strategy", "UI/UX design", "Content migration"],
    timeline: "3 weeks",
  },
  {
    slug: "ecommerce-fashion-store",
    title: "Ecommerce Fashion Store",
    category: "Ecommerce",
    summary: "An ecommerce store built for mobile shoppers with fast checkout and SEO-ready product pages.",
    imageSrc: "/pot/project-two7.webp",
    imageAlt: "Ecommerce store preview",
    industry: "Retail",
    challenge:
      "The brand relied on social media sales and needed a reliable store with better product discovery and checkout flow.",
    solution:
      "We built a clean product catalog, optimized search, and added fast checkout with mobile performance focus.",
    technologies: ["Shopify", "Custom theme", "Analytics"],
    impact: [
      "Higher conversion rate from mobile traffic",
      "Improved product discovery",
      "Stronger brand credibility",
    ],
    services: ["Ecommerce design", "Store setup", "SEO foundations"],
    timeline: "6 weeks",
  },
  {
    slug: "ngo-impact-storytelling-site",
    title: "NGO Impact Storytelling Site",
    category: "Nonprofit",
    summary: "A storytelling-focused NGO website highlighting programs, impact, and donor trust signals.",
    imageSrc: "/pot/project-two10.webp",
    imageAlt: "NGO website preview",
    industry: "Nonprofit",
    challenge:
      "The organization needed a credible online presence to attract partners and donors.",
    solution:
      "We structured the site around mission, impact data, and program pages with donor-ready CTAs.",
    technologies: ["Next.js", "Content modeling", "SEO setup"],
    impact: [
      "Improved partner inquiries",
      "Stronger storytelling and transparency",
      "Better engagement on program pages",
    ],
    services: ["Web design", "Content strategy", "SEO"],
    timeline: "4 weeks",
  },
  {
    slug: "construction-company-portfolio",
    title: "Construction Company Portfolio",
    category: "Construction",
    summary: "A portfolio-driven website showcasing projects, capabilities, and bidding credibility.",
    imageSrc: "/pot/project-two11.webp",
    imageAlt: "Construction portfolio preview",
    industry: "Construction",
    challenge:
      "The company needed to show project history and win trust with government and commercial clients.",
    solution:
      "We created a clean portfolio layout, service breakdowns, and proof sections with structured project details.",
    technologies: ["Next.js", "Image optimization", "SEO"],
    impact: [
      "Improved bid credibility",
      "More inbound project inquiries",
      "Clearer presentation of services",
    ],
    services: ["Web design", "Portfolio content", "Performance optimization"],
    timeline: "5 weeks",
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
