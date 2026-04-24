import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { formatBlogDate, getBlogPostBySlug, getBlogSlugs } from "../../../lib/sanity";
import { absoluteUrl, defaultSeoImagePath } from "../../../lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      images: [
        {
          url: post.mainImageUrl || absoluteUrl(defaultSeoImagePath),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.mainImageUrl || absoluteUrl(defaultSeoImagePath)],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    image: [post.mainImageUrl || absoluteUrl(defaultSeoImagePath)],
    mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <Navbar />
      <main>
        <article className="py-18" aria-labelledby="blog-post-title">
          <div className="site-container max-w-4xl">
            <p className="text-sm font-medium text-[#ff5e2e]">{formatBlogDate(post.publishedAt)}</p>
            <h1 id="blog-post-title" className="mt-3 text-5xl font-bold leading-tight text-[#1E293B]">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src={post.authorImageUrl} alt={post.authorName} fill className="object-cover" />
              </div>
              <p className="text-base text-[#6A7486]">
                By <span className="font-semibold text-[#2A344A]">{post.authorName}</span>
              </p>
            </div>

            <div className="relative mt-8 h-96 w-full overflow-hidden rounded-lg">
              <Image src={post.mainImageUrl} alt={post.title} fill className="object-cover" priority />
            </div>

            <div className="mt-8 space-y-5 text-lg leading-8 text-[#2D374D]">
              {post.bodyText
                .split("\n")
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph, index) => (
                  <p key={`${post.id}-${index}`}>{paragraph}</p>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
