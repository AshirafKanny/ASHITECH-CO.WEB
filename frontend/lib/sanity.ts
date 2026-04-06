import { createClient } from "@sanity/client";
import groq from "groq";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImageUrl: string;
  authorName: string;
  authorImageUrl: string;
  bodyText: string;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_API_READ_TOKEN;

const hasSanityConfig = Boolean(projectId && dataset);

const fallbackPosts: BlogPost[] = [
  {
    id: "fallback-1",
    title: "Easy Ways to Incorporate Customer Feedback",
    slug: "easy-ways-incorporate-customer-feedback",
    excerpt: "Use direct feedback loops to improve clarity, trust, and conversion across your website pages.",
    publishedAt: "2022-03-25",
    mainImageUrl: "/blog1.webp",
    authorName: "Douglas B. Dickens",
    authorImageUrl: "/author1.webp",
    bodyText: "Use direct feedback loops to improve clarity, trust, and conversion across your website pages.",
  },
  {
    id: "fallback-2",
    title: "How to create modern web site for your business?",
    slug: "create-modern-web-site-for-business",
    excerpt: "Build modern business websites using cleaner hierarchy, stronger typography, and focused user journeys.",
    publishedAt: "2022-03-27",
    mainImageUrl: "/blog2.webp",
    authorName: "Carson C. Rhodes",
    authorImageUrl: "/author2.webp",
    bodyText: "Build modern business websites using cleaner hierarchy, stronger typography, and focused user journeys.",
  },
  {
    id: "fallback-3",
    title: "How to digital marketing work social networking?",
    slug: "digital-marketing-social-networking",
    excerpt: "Combine social distribution with consistent content production to create compounding awareness.",
    publishedAt: "2022-03-25",
    mainImageUrl: "/blog3.webp",
    authorName: "Robert T. Evans",
    authorImageUrl: "/author3.webp",
    bodyText: "Combine social distribution with consistent content production to create compounding awareness.",
  },
  {
    id: "fallback-4",
    title: "Easy Ways to Incorporate Customer Feedback",
    slug: "customer-feedback-workflows",
    excerpt: "Simple feedback systems can reveal friction quickly and improve both UX and business outcomes.",
    publishedAt: "2022-03-25",
    mainImageUrl: "/blog4.webp",
    authorName: "Stanley J. Contreras",
    authorImageUrl: "/author4.webp",
    bodyText: "Simple feedback systems can reveal friction quickly and improve both UX and business outcomes.",
  },
];

const sanityClient =
  hasSanityConfig && projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: token ? false : true,
        token,
      })
    : null;

const blogPostsQuery = groq`*[_type in ["post", "blog"] && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, summary, seoDescription),
  "publishedAt": coalesce(publishedAt, _createdAt),
  "mainImageUrl": coalesce(mainImage.asset->url, image.asset->url, coverImage.asset->url),
  "authorName": coalesce(author->name, authorName),
  "authorImageUrl": coalesce(author->image.asset->url, authorImage.asset->url),
  "bodyText": coalesce(pt::text(body), content, excerpt, summary)
}`;

const blogPostBySlugQuery = groq`*[_type in ["post", "blog"] && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, summary, seoDescription),
  "publishedAt": coalesce(publishedAt, _createdAt),
  "mainImageUrl": coalesce(mainImage.asset->url, image.asset->url, coverImage.asset->url),
  "authorName": coalesce(author->name, authorName),
  "authorImageUrl": coalesce(author->image.asset->url, authorImage.asset->url),
  "bodyText": coalesce(pt::text(body), content, excerpt, summary)
}`;

function normalizePost(post: Partial<BlogPost>, index: number): BlogPost {
  const fallback = fallbackPosts[index % fallbackPosts.length];

  return {
    id: post.id ?? fallback.id,
    title: post.title ?? fallback.title,
    slug: post.slug ?? fallback.slug,
    excerpt: post.excerpt ?? fallback.excerpt,
    publishedAt: post.publishedAt ?? fallback.publishedAt,
    mainImageUrl: post.mainImageUrl ?? fallback.mainImageUrl,
    authorName: post.authorName ?? "KENI WEB DESIGN Team",
    authorImageUrl: post.authorImageUrl ?? "/author1.webp",
    bodyText: post.bodyText ?? post.excerpt ?? fallback.bodyText,
  };
}

export function formatBlogDate(dateInput: string): string {
  const date = new Date(dateInput);

  if (Number.isNaN(date.getTime())) {
    return "25 March 2022";
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  if (!sanityClient) {
    return typeof limit === "number" ? fallbackPosts.slice(0, limit) : fallbackPosts;
  }

  try {
    const rawPosts = (await sanityClient.fetch(blogPostsQuery)) as Array<Record<string, unknown>>;
    const mapped = rawPosts.map((post, index) =>
      normalizePost(
        {
          id: String(post._id ?? ""),
          title: typeof post.title === "string" ? post.title : undefined,
          slug: typeof post.slug === "string" ? post.slug : undefined,
          excerpt: typeof post.excerpt === "string" ? post.excerpt : undefined,
          publishedAt: typeof post.publishedAt === "string" ? post.publishedAt : undefined,
          mainImageUrl: typeof post.mainImageUrl === "string" ? post.mainImageUrl : undefined,
          authorName: typeof post.authorName === "string" ? post.authorName : undefined,
          authorImageUrl: typeof post.authorImageUrl === "string" ? post.authorImageUrl : undefined,
          bodyText: typeof post.bodyText === "string" ? post.bodyText : undefined,
        },
        index,
      ),
    );

    if (mapped.length === 0) {
      return typeof limit === "number" ? fallbackPosts.slice(0, limit) : fallbackPosts;
    }

    return typeof limit === "number" ? mapped.slice(0, limit) : mapped;
  } catch {
    return typeof limit === "number" ? fallbackPosts.slice(0, limit) : fallbackPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    return fallbackPosts.find((post) => post.slug === slug) ?? fallbackPosts[0] ?? null;
  }

  try {
    const rawPost = (await sanityClient.fetch(blogPostBySlugQuery, { slug })) as Record<string, unknown> | null;

    if (!rawPost) {
      return null;
    }

    return normalizePost(
      {
        id: String(rawPost._id ?? ""),
        title: typeof rawPost.title === "string" ? rawPost.title : undefined,
        slug: typeof rawPost.slug === "string" ? rawPost.slug : undefined,
        excerpt: typeof rawPost.excerpt === "string" ? rawPost.excerpt : undefined,
        publishedAt: typeof rawPost.publishedAt === "string" ? rawPost.publishedAt : undefined,
        mainImageUrl: typeof rawPost.mainImageUrl === "string" ? rawPost.mainImageUrl : undefined,
        authorName: typeof rawPost.authorName === "string" ? rawPost.authorName : undefined,
        authorImageUrl: typeof rawPost.authorImageUrl === "string" ? rawPost.authorImageUrl : undefined,
        bodyText: typeof rawPost.bodyText === "string" ? rawPost.bodyText : undefined,
      },
      0,
    );
  } catch {
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getBlogPosts();
  return posts.map((post) => post.slug);
}
