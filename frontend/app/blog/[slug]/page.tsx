import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { formatBlogDate, getBlogPostBySlug, getBlogPosts, getBlogSlugs } from "../../../lib/sanity";
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

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-7 text-3xl font-extrabold leading-tight text-[#1E293B]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-7 text-2xl font-extrabold leading-tight text-[#1E293B]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-extrabold text-[#1E293B]">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-5 border-l-4 border-[#ff5e2e] bg-[#F8FAFC] px-4 py-3 text-[#475569]">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-3 text-[16.5px] leading-7 text-[#2D374D]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-3 list-disc space-y-1.5 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-3 list-decimal space-y-1.5 pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7 text-[#2D374D]">{children}</li>,
    number: ({ children }) => <li className="leading-7 text-[#2D374D]">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const isExternal = /^https?:\/\//i.test(href);
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noreferrer" className="text-[#ff5e2e] underline">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="text-[#ff5e2e] underline">
          {children}
        </Link>
      );
    },
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const morePosts = (await getBlogPosts(6)).filter((item) => item.slug !== slug).slice(0, 4);

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
    publisher: {
      "@type": "Organization",
      name: "KENI WEB DESIGN",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/keniwebdesign-01.png"),
      },
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
                <Image
                  src={post.authorImageUrl}
                  alt={post.authorName}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <p className="text-base text-[#6A7486]">
                By <span className="font-semibold text-[#2A344A]">{post.authorName}</span>
              </p>
            </div>

            <div className="relative mt-8 h-96 w-full overflow-hidden rounded-lg">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-base sm:prose-lg max-w-none prose-headings:mt-6 prose-headings:mb-2 prose-p:my-3 prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-blockquote:my-4 prose-headings:text-[#1E293B] prose-p:text-[#2D374D] prose-a:text-[#ff5e2e] prose-strong:text-[#1E293B] prose-li:text-[#2D374D] prose-li:marker:text-[#ff5e2e] prose-blockquote:text-[#475569]">
              <PortableText value={post.body ?? []} components={portableTextComponents} />
            </div>

            <section className="mt-12 rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6" aria-label="Related links">
              <h2 className="text-xl font-semibold text-[#1E293B]">Related links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-full border border-[#dbe4f3] bg-white px-5 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
                >
                  Web design services
                </Link>
                <Link
                  href="/seo-services-uganda"
                  className="rounded-full border border-[#dbe4f3] bg-white px-5 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
                >
                  SEO services Uganda
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-[#dbe4f3] bg-white px-5 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#dbe4f3] bg-white px-5 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
                >
                  Talk to our team
                </Link>
              </div>
            </section>

            {morePosts.length > 0 ? (
              <section className="mt-14" aria-label="More blogs">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-[#1E293B]">More blogs</h2>
                  <Link href="/blog" className="text-sm font-semibold text-[#ff5e2e] hover:underline">
                    View all
                  </Link>
                </div>

                <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
                  {morePosts.map((blog) => (
                    <article key={blog.id} className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[10.5rem_1fr] sm:gap-5">
                      <div className="relative h-52 w-full overflow-hidden sm:h-42 sm:w-42">
                        <Image
                          src={blog.mainImageUrl}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 168px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="flex items-center gap-2 text-xl font-medium text-[#ff5e2e]">
                          {formatBlogDate(blog.publishedAt)}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold leading-tight text-[#2A344A] sm:text-2xl">
                          <Link href={`/blog/${blog.slug}`} className="hover:text-[#ff5e2e]">
                            {blog.title}
                          </Link>
                        </h3>

                        <div className="mt-1.5 flex items-center gap-3">
                          <div className="relative -mt-2 h-11 w-11 overflow-hidden rounded-full">
                            <Image
                              src={blog.authorImageUrl}
                              alt={blog.authorName}
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-lg text-[#778296]">Post by</p>
                            <p className="text-2xl text-[#2A344A]">{blog.authorName}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
