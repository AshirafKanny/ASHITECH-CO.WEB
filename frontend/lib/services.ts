export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Website Creation from Figma, XD or Photoshop",
    slug: "website-creation-from-figma-xd-or-photoshop",
    summary: "Custom website builds from your design files.",
  },
  {
    title: "Mobile App Development and Website Design",
    slug: "mobile-app-development-and-website-design",
    summary: "Mobile app and website experiences that work together.",
  },
  {
    title: "eCommerce and Product Selling Development",
    slug: "ecommerce-and-product-selling-development",
    summary: "Online stores built to convert and scale.",
  },
  {
    title: "Responsive Websites (UI/UX) Design",
    slug: "responsive-websites-ui-ux-design",
    summary: "Modern responsive interfaces that feel polished on every screen.",
  },
  {
    title: "SEO (Search Engine Optimization)",
    slug: "seo-search-engine-optimization",
    summary: "Technical and content SEO to improve visibility.",
  },
  {
    title: "Digital Product Design and Development",
    slug: "digital-product-design-and-development",
    summary: "Product design and development for web-based solutions.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    summary: "Fast, scalable website development for your business.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceItems.find((service) => service.slug === slug);
}