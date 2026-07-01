import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formatBlogDate, getBlogPosts } from "../../lib/sanity";
import { absoluteUrl, defaultSeoImagePath } from "../../lib/seo";
import ScrollReveal from "@/components/ScrollReveal";
import BlogHeroSection from "../../components/BlogHeroSection";

const POSTS_PER_PAGE = 9;

type BlogPageSearchParams = {
  page?: string | string[];
  q?: string | string[];
};

export const metadata: Metadata = {
  title: "Keni Web Design Blog | Web Design, SEO & Digital Marketing Tips",
  description:
    "Explore expert insights on web design, SEO, website development, e-commerce, and digital marketing. Learn how to grow your business online with Keni Web Design.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Keni Web Design Blog | Web Design, SEO & Digital Marketing Tips",
    description:
      "Explore expert insights on web design, SEO, website development, e-commerce, and digital marketing. Learn how to grow your business online with Keni Web Design.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "KENI WEB DESIGN blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keni Web Design Blog | Web Design, SEO & Digital Marketing Tips",
    description:
      "Explore expert insights on web design, SEO, website development, e-commerce, and digital marketing. Learn how to grow your business online with Keni Web Design.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
};

function getCurrentPage(searchParams?: BlogPageSearchParams) {
  const pageValue = searchParams?.page;
  const rawPage = Array.isArray(pageValue) ? pageValue[0] : pageValue;
  const parsedPage = Number.parseInt(rawPage ?? "1", 10);

  return Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
}

function getSearchTerm(searchParams?: BlogPageSearchParams) {
  const queryValue = searchParams?.q;
  const rawQuery = Array.isArray(queryValue) ? queryValue[0] : queryValue;

  return rawQuery?.trim() ?? "";
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<BlogPageSearchParams> }) {
  const posts = await getBlogPosts();
  const resolvedSearchParams = await searchParams;
  const searchTerm = getSearchTerm(resolvedSearchParams);
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const filteredPosts = normalizedSearchTerm
    ? posts.filter((post) => {
        const searchableText = [post.title, post.excerpt, post.authorName].join(" ").toLowerCase();

        return searchableText.includes(normalizedSearchTerm);
      })
    : posts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(getCurrentPage(resolvedSearchParams), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const latestPostHref = posts[0] ? `/blog/${posts[0].slug}` : "#latest-articles";

  const getPageHref = (page: number) => {
    const params = new URLSearchParams();

    if (searchTerm) {
      params.set("q", searchTerm);
    }

    if (page > 1) {
      params.set("page", String(page));
    }

    const queryString = params.toString();

    return queryString ? `/blog?${queryString}` : "/blog";
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KENI WEB DESIGN Blog",
    url: absoluteUrl("/blog"),
    blogPost: pagePosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.publishedAt,
      url: absoluteUrl(`/blog/${post.slug}`),
      image: post.mainImageUrl,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KENI WEB DESIGN",
    url: absoluteUrl("/"),
    logo: absoluteUrl(defaultSeoImagePath),
    sameAs: [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <Navbar />
      <main>
        <BlogHeroSection searchTerm={searchTerm} articleCount={posts.length} latestPostHref={latestPostHref} />

        <ScrollReveal>
          <section className="bg-white py-18" aria-labelledby="latest-articles-heading" id="latest-articles">
            <div className="site-container">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Latest Articles</p>
                  <h2 id="latest-articles-heading" className="mt-2 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                    Latest Articles
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#4B5563]">
                  Showing {pagePosts.length} of {filteredPosts.length} articles
                  {searchTerm ? ` for “${searchTerm}”` : ""}.
                </p>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pagePosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-[#E3E6ED] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86FF] focus-visible:ring-offset-2"
                  >
                    <article className="h-full">
                      <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.mainImageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      </div>

                      <div className="p-6">
                        <p className="text-sm font-medium text-[#8B5E3C]">{formatBlogDate(post.publishedAt)}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-[#0F172A] transition-colors group-hover:text-[#6F86FF]">{post.title}</h3>

                        <div className="mt-4 flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={post.authorImageUrl}
                              alt={post.authorName}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <p className="text-sm text-[#6A7486]">
                            Post by <span className="font-semibold text-[#2A344A]">{post.authorName}</span>
                          </p>
                        </div>

                        <p className="mt-4 leading-7 text-[#0F172A]">{post.excerpt}</p>

                        <span className="mt-5 inline-flex rounded-full bg-[#6F86FF] px-5 py-2 text-sm font-medium text-white transition-colors group-hover:bg-[#5d72e8]">
                          Read article
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {pagePosts.length === 0 ? (
                <div className="mt-10 rounded-3xl border border-dashed border-[#D7DDE8] bg-[#F8FAFC] p-8 text-center">
                  <p className="text-lg font-semibold text-[#0F172A]">No articles matched your search.</p>
                  <p className="mt-2 text-sm text-[#4B5563]">Try a broader keyword or clear the search field to see all posts.</p>
                  <Link
                    href="/blog"
                    className="mt-5 inline-flex rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#3E2723]"
                  >
                    View all articles
                  </Link>
                </div>
              ) : null}

              <nav className="mt-12 flex items-center justify-center gap-4" aria-label="Blog pagination">
                <Link
                  href={getPageHref(Math.max(1, currentPage - 1))}
                  aria-disabled={currentPage === 1}
                  tabIndex={currentPage === 1 ? -1 : undefined}
                  className={`inline-flex items-center rounded-xl border px-5 py-3 text-base font-medium transition-colors ${
                    currentPage === 1
                      ? "pointer-events-none cursor-not-allowed border-[#D7DDE8] bg-white text-[#9AA4B2]"
                      : "border-[#D7DDE8] bg-white text-[#0F172A] hover:border-[#8B5E3C] hover:text-[#8B5E3C]"
                  }`}
                >
                  Previous
                </Link>

                <p className="text-lg font-medium text-[#0F172A]">
                  Page {currentPage} of {totalPages}
                </p>

                <Link
                  href={getPageHref(Math.min(totalPages, currentPage + 1))}
                  aria-disabled={currentPage === totalPages}
                  tabIndex={currentPage === totalPages ? -1 : undefined}
                  className={`inline-flex items-center rounded-xl border px-5 py-3 text-base font-medium transition-colors ${
                    currentPage === totalPages
                      ? "pointer-events-none cursor-not-allowed border-[#D7DDE8] bg-white text-[#9AA4B2]"
                      : "border-[#6F86FF] bg-[#6F86FF] text-white hover:bg-[#5d72e8]"
                  }`}
                >
                  Next
                </Link>
              </nav>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
