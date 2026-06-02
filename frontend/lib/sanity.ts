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
  body: Array<Record<string, unknown>>;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_API_READ_TOKEN;

const hasSanityConfig = Boolean(projectId && dataset);

const textToPortableText = (text: string): Array<Record<string, unknown>> => {
  const lines = text.split("\n");
  const blocks: Array<Record<string, unknown>> = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length === 0) return;
    listBuffer.forEach((item) => {
      blocks.push({
        _type: "block",
        style: "normal",
        listItem: "bullet",
        level: 1,
        children: [{ _type: "span", text: item }],
      });
    });
    listBuffer = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: line.replace("### ", "") }],
      });
      return;
    }
    if (line.startsWith("## ")) {
      flushList();
      blocks.push({
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: line.replace("## ", "") }],
      });
      return;
    }
    if (line.startsWith("- ")) {
      listBuffer.push(line.replace("- ", ""));
      return;
    }
    flushList();
    blocks.push({
      _type: "block",
      style: "normal",
      children: [{ _type: "span", text: line }],
    });
  });

  flushList();
  return blocks;
};

const fallbackPosts: BlogPost[] = [
  {
    id: "fallback-1",
    title: "Why Every Business in Uganda Needs a Website",
    slug: "why-every-business-uganda-needs-website",
    excerpt:
      "A professional website builds trust, attracts local customers, and keeps your business visible on Google in Uganda.",
    publishedAt: "2026-05-01",
    mainImageUrl: "/blog1.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author1.webp",
    body: textToPortableText(
      "## Why a website is no longer optional\n" +
      "Ugandan customers now search online before they call, visit, or buy. If your business does not show up, you are invisible. A professional website gives your company credibility and makes it easy for clients to trust you quickly.\n\n" +
      "## Local visibility and Google searches\n" +
      "Search terms like website design Uganda, web design Kampala, and affordable website design Uganda are competitive. A well-built website helps you rank for local searches and shows Google that your business is active and relevant.\n\n" +
      "## Turning visitors into leads\n" +
      "A good website does more than look nice. It guides visitors to call, send a WhatsApp message, or fill out a form. That is why conversion-focused design matters.\n\n" +
      "### Core elements every Uganda business site needs\n" +
      "- Clear headline and service summary\n" +
      "- Trust signals like testimonials and reviews\n" +
      "- Fast mobile performance for local users\n" +
      "- Visible call-to-action buttons\n" +
      "- Contact details and location info\n\n" +
      "## Building trust in competitive markets\n" +
      "Whether you run a hotel, school, NGO, or retail brand, your website becomes your digital storefront. It tells your story, shows your results, and positions you as the safer choice for customers.\n\n" +
      "## Connect with marketing and SEO\n" +
      "Your website supports ads, social media campaigns, and SEO services Uganda companies rely on. It is the base for every digital marketing channel and helps you measure results.\n\n" +
      "## Final thought\n" +
      "If you want more inquiries, your website must be clear, fast, and optimized for Uganda search behavior. You can explore /services/web-development to start a strong foundation.",
    ),
  },
  {
    id: "fallback-2",
    title: "How Much Does a Website Cost in Uganda?",
    slug: "website-cost-uganda",
    excerpt:
      "Website pricing in Uganda depends on scope, design complexity, and features like ecommerce or booking systems.",
    publishedAt: "2026-05-03",
    mainImageUrl: "/blog2.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author2.webp",
    body: textToPortableText(
      "## Understanding website pricing in Uganda\n" +
      "Pricing varies because websites have different goals. A simple brochure site costs less than an ecommerce platform or a custom web app. The biggest factors are number of pages, design complexity, and features such as payment or booking systems.\n\n" +
      "## Typical ranges for common projects\n" +
      "- Starter business website: basic pages and contact forms\n" +
      "- SME website: service pages, SEO setup, lead capture\n" +
      "- Ecommerce website Uganda businesses need: product pages, payments, shipping\n" +
      "- Custom web platforms: dashboards, integrations, automation\n\n" +
      "## What affects cost the most\n" +
      "Design quality, content writing, photography, and integrations all impact cost. Sites that rank on Google also require SEO planning and technical optimization.\n\n" +
      "### Cost-saving tips for Uganda businesses\n" +
      "- Start with clear goals and page structure\n" +
      "- Prepare content early to avoid delays\n" +
      "- Use a phased approach: launch core pages first\n\n" +
      "## Why cheap websites can cost more later\n" +
      "Low-cost websites often load slowly, look outdated, or fail to convert. Fixing those issues later costs more than doing it right from the start.\n\n" +
      "## Aligning cost with ROI\n" +
      "Your website should return value through inquiries, bookings, or sales. That is why conversion-focused design and SEO services Uganda businesses use are critical.\n\n" +
      "## Next steps\n" +
      "If you want a clear estimate, review /pricing or request a tailored quote. The best websites are built with long-term growth in mind.",
    ),
  },
  {
    id: "fallback-3",
    title: "Best Website Design Company in Uganda: What to Look For",
    slug: "best-website-design-company-uganda",
    excerpt:
      "The best web design company in Uganda combines SEO strategy, strong UX, and measurable results for clients.",
    publishedAt: "2026-05-05",
    mainImageUrl: "/blog3.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author3.webp",
    body: textToPortableText(
      "## The right partner goes beyond visuals\n" +
      "A good website design company is not just a design studio. The best teams understand conversions, SEO, and how to position your business to win clients.\n\n" +
      "## Questions to ask before hiring\n" +
      "### 1. Do they understand your industry?\n" +
      "Look for a team that has worked with businesses in Kampala or across Uganda. Industry context helps the website speak to your buyers.\n\n" +
      "### 2. Can they show results?\n" +
      "A strong portfolio shows more than screenshots. It includes outcomes like increased inquiries or improved visibility.\n\n" +
      "### 3. Are they SEO and performance focused?\n" +
      "If your website is slow or lacks SEO structure, you will struggle to rank. The best teams build with search and speed in mind.\n\n" +
      "## Signs of a strong web design agency\n" +
      "- Clear discovery and planning process\n" +
      "- Strong communication and timelines\n" +
      "- Conversion-focused layouts\n" +
      "- SEO services Uganda businesses need\n" +
      "- Reliable support after launch\n\n" +
      "## Why this matters in Uganda\n" +
      "Competition is rising across industries. To rank for keywords like web design Kampala and website design Uganda, your site must be structured for search and built to convert.\n\n" +
      "## Final guidance\n" +
      "Choose a team that treats your website as a business tool, not just a design project. Explore /portfolio to see real work and outcomes.",
    ),
  },
  {
    id: "fallback-4",
    title: "Benefits of Ecommerce Websites in Uganda",
    slug: "benefits-ecommerce-websites-uganda",
    excerpt:
      "Ecommerce websites in Uganda increase sales, improve customer convenience, and expand reach beyond Kampala.",
    publishedAt: "2026-05-07",
    mainImageUrl: "/blog4.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author4.webp",
    body: textToPortableText(
      "## Ecommerce is growing in Uganda\n" +
      "Customers now prefer ordering online, comparing prices, and paying digitally. An ecommerce website makes your products available 24/7 and expands your market beyond physical locations.\n\n" +
      "## Top benefits for Ugandan businesses\n" +
      "- Sell to customers across the country\n" +
      "- Reduce reliance on social media-only sales\n" +
      "- Build trust with clear product pages\n" +
      "- Track sales and inventory in one place\n\n" +
      "## Mobile-first shopping behavior\n" +
      "Most customers browse on phones. That is why ecommerce website Uganda businesses launch must be mobile-first, fast, and easy to navigate.\n\n" +
      "## SEO and product visibility\n" +
      "Product pages can rank on Google when they have clear descriptions, structured headings, and optimized images. That means you can attract buyers even without ads.\n\n" +
      "## Building trust for online payments\n" +
      "Shoppers want proof. Reviews, delivery information, return policies, and secure checkout improve confidence and reduce cart abandonment.\n\n" +
      "## Ready to launch?\n" +
      "If you are selling products, explore /ecommerce-websites-uganda and /services/ecommerce-and-product-selling-development to understand what is required for a winning store.",
    ),
  },
  {
    id: "fallback-5",
    title: "Website Trends in Uganda 2026",
    slug: "website-trends-uganda-2026",
    excerpt:
      "The top website trends in Uganda for 2026 include speed-first design, localized content, and stronger trust signals.",
    publishedAt: "2026-05-10",
    mainImageUrl: "/blog1.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author1.webp",
    body: textToPortableText(
      "## 1. Speed and performance lead the market\n" +
      "Fast websites rank higher and keep visitors engaged. Ugandan businesses are focusing on lighter pages, optimized images, and clean code.\n\n" +
      "## 2. Localized messaging\n" +
      "Businesses that mention Kampala, Uganda, and local service areas are performing better in search. Content must feel local and specific to the audience.\n\n" +
      "## 3. Conversion-driven layouts\n" +
      "Modern websites are built around clear CTAs, pricing transparency, and trust sections. This turns visitors into leads faster.\n\n" +
      "## 4. SEO and content depth\n" +
      "Thin pages no longer work. Websites that add FAQs, guides, and detailed service pages rank better for competitive keywords.\n\n" +
      "## 5. Trust and proof\n" +
      "Client logos, testimonials, and case studies are becoming standard. These elements show authority and help a website look established.\n\n" +
      "## 6. Simple, bold design\n" +
      "Minimal layouts with strong typography and clear hierarchy are trending. They make it easier to scan on mobile devices.\n\n" +
      "## 7. SEO-friendly tech\n" +
      "Modern stacks like Next.js and optimized WordPress setups are popular because they improve performance and SEO.\n\n" +
      "## How to stay ahead\n" +
      "If you want to build a future-ready website, align your design with SEO and conversion best practices. Explore /website-design-uganda for a strategy built for 2026.",
    ),
  },
  {
    id: "fallback-6",
    title: "SEO Tips for Ugandan Businesses",
    slug: "seo-tips-ugandan-businesses",
    excerpt:
      "Practical SEO tips for Ugandan businesses to rank higher, attract local traffic, and convert visitors into leads.",
    publishedAt: "2026-05-12",
    mainImageUrl: "/blog2.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author2.webp",
    body: textToPortableText(
      "## Start with keyword intent\n" +
      "Focus on the exact phrases your customers type, such as web design Kampala or affordable website design Uganda. These phrases should appear in your headings and page copy naturally.\n\n" +
      "## Improve technical SEO\n" +
      "Make sure your site loads fast, is mobile-friendly, and includes proper metadata. These technical elements help search engines trust your website.\n\n" +
      "## Build strong internal links\n" +
      "Link between your service pages, blog posts, and contact page. This improves crawlability and helps visitors navigate your site.\n\n" +
      "### Local SEO actions that matter\n" +
      "- Use Kampala and Uganda in page titles and headers\n" +
      "- Add your business address and phone number\n" +
      "- Keep your Google Business profile updated\n\n" +
      "## Publish useful content\n" +
      "Blog posts like pricing guides, industry tips, and case studies build authority. They also support rankings for long-tail keywords.\n\n" +
      "## Track and improve\n" +
      "SEO is not a one-time task. Use analytics to track top pages and update content regularly.\n\n" +
      "## Need help?\n" +
      "Explore /seo-services-uganda to see how professional SEO can accelerate growth in Uganda.",
    ),
  },
  {
    id: "fallback-7",
    title: "Why Schools Need Websites in Uganda",
    slug: "why-schools-need-websites-uganda",
    excerpt:
      "School websites in Uganda improve communication, admissions, and trust for parents and students.",
    publishedAt: "2026-05-15",
    mainImageUrl: "/blog3.webp",
    authorName: "KENI WEB DESIGN Team",
    authorImageUrl: "/author3.webp",
    body: textToPortableText(
      "## Strong communication builds trust\n" +
      "Parents want quick access to term dates, fees, and updates. A school website makes that information accessible without long phone calls.\n\n" +
      "## Admissions and reputation\n" +
      "Schools with professional websites appear more established. Clear admissions pages help parents understand how to apply and what to expect.\n\n" +
      "## Showcasing achievements\n" +
      "Schools can highlight exam results, extracurricular programs, and student success stories. This builds confidence and improves enrollment rates.\n\n" +
      "## Why mobile-first matters\n" +
      "Most parents use phones to browse. A responsive school website ensures information is easy to access on any device.\n\n" +
      "## SEO for local school searches\n" +
      "With the right structure, your school can rank for local searches like schools in Kampala or private schools in Uganda.\n\n" +
      "## Next steps for schools\n" +
      "If your school needs a modern website, review /school-websites-uganda to see what a complete solution looks like.",
    ),
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
  "body": body
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
  "body": body
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
    body: Array.isArray(post.body) ? post.body : fallback.body,
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
          body: Array.isArray(post.body) ? post.body : undefined,
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
        body: Array.isArray(rawPost.body) ? rawPost.body : undefined,
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
