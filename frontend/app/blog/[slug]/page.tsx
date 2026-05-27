import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
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

function renderBody(bodyText: string) {
  const lines = bodyText.split("\n").map((line) => line.trim());
  const elements: Array<JSX.Element> = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    const items = listItems;
    listItems = [];
    elements.push(
      <ul key={`list-${elements.length}`} className="mt-4 grid gap-2 text-base text-[#2D374D]">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="rounded-lg border border-[#E4E8F1] bg-[#F8FAFC] px-4 py-2">
            {item}
          </li>
        ))}
      </ul>,
    );
  };

  lines.forEach((line) => {
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="mt-6 text-2xl font-semibold text-[#1E293B]">
          {line.replace("### ", "")}
        </h3>,
      );
      return;
    }
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`} className="mt-8 text-3xl font-bold text-[#1E293B]">
          {line.replace("## ", "")}
        </h2>,
      );
      return;
    }
    if (line.startsWith("- ")) {
      listItems.push(line.replace("- ", ""));
      return;
    }
    flushList();
    elements.push(
      <p key={`p-${elements.length}`} className="text-lg leading-8 text-[#2D374D]">
        {line}
      </p>,
    );
  });

  flushList();
  return elements;
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

            <div className="mt-8 space-y-5 text-lg leading-8 text-[#2D374D]">
              {renderBody(post.bodyText)}
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
