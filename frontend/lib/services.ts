export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Website Design",
    slug: "website-design",
    summary: "Professional web design services in Uganda for business growth, SEO, and lead generation.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    summary: "Mobile apps designed and built for modern businesses.",
  },
  {
    title: "eCommerce Development",
    slug: "ecommerce-development",
    summary: "Online stores built to convert and scale.",
  },
  {
    title: "Product Selling Development",
    slug: "product-selling-development",
    summary: "Product-selling websites built for simple buying journeys.",
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
    title: "Digital Marketing",
    slug: "digital-marketing",
    summary: "Strategy-driven digital marketing that grows visibility, traffic, leads, and sales.",
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