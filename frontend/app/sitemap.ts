import type { MetadataRoute } from "next";
import { getBlogSlugs } from "../lib/sanity";
import { absoluteUrl } from "../lib/seo";
import { serviceItems } from "../lib/services";

const staticRoutes = ["/", "/services", "/portfolio", "/blog", "/contact", "/pricing"];

const toUniqueRoutes = (routes: string[]) => Array.from(new Set(routes));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const serviceRoutes = serviceItems.map((service) => `/services/${service.slug}`);
  const staticEntries: MetadataRoute.Sitemap = toUniqueRoutes([
    ...staticRoutes,
    ...serviceRoutes,
  ]).map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.75 : 0.7,
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
