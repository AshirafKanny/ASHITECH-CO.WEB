import type { MetadataRoute } from "next";
import { getBlogSlugs } from "../lib/sanity";
import { absoluteUrl } from "../lib/seo";

const staticRoutes = ["/", "/services", "/services/web-development", "/portfolio", "/blog", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const slugs = await getBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
