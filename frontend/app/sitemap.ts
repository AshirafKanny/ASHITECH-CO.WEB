import type { MetadataRoute } from "next";
import { getBlogSlugs } from "../lib/sanity";
import { absoluteUrl } from "../lib/seo";
import { serviceItems } from "../lib/services";
import { portfolioProjects } from "../lib/portfolio";
import { getAllLocationSlugs } from "../lib/locations";
import { getAllIndustrySlugs } from "../lib/industries";

const staticRoutes = [
  "/",
  "/services",
  "/portfolio",
  "/blog",
  "/blog/how-to-build-a-website",
  "/blog/modern-ui-patterns",
  "/blog/performance-for-seo",
  "/about-us",
  "/contact",
  "/pricing",
  "/privacy-policy",
  "/refund-policy",
  "/terms-of-service",
  "/website-design-uganda",
  "/website-design-kampala",
  "/seo-services-uganda",
  "/ecommerce-websites-uganda",
  "/school-websites-uganda",
  "/hotel-websites-uganda",
  "/ngo-websites-uganda",
  "/business-websites-uganda",
  "/website-maintenance-uganda",
  "/branding-services-uganda",
  "/locations",
  "/industries",
];

const toUniqueRoutes = (routes: string[]) => Array.from(new Set(routes));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const serviceRoutes = serviceItems
    .filter((service) => service.slug !== "web-development")
    .map((service) => `/services/${service.slug}`);
  const caseStudyRoutes = portfolioProjects.map((project) => `/case-studies/${project.slug}`);
  const locationRoutes = getAllLocationSlugs().map((slug) => `/locations/${slug}`);
  const industryRoutes = getAllIndustrySlugs().map((slug) => `/industries/${slug}`);
  
  const staticEntries: MetadataRoute.Sitemap = toUniqueRoutes([
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...locationRoutes,
    ...industryRoutes,
  ]).map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/services")
          ? 0.9
          : route === "/portfolio"
            ? 0.9
            : route.startsWith("/locations") || route.startsWith("/industries")
              ? 0.8
              : route === "/blog"
                ? 0.7
                : route.startsWith("/blog/")
                  ? 0.6
                  : route.includes("case-studies")
                    ? 0.7
                    : 0.7,
  }));

  let slugs: string[] = [];
  try {
    slugs = await getBlogSlugs();
  } catch {
    slugs = [];
  }
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
