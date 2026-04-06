import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formatBlogDate, getBlogPosts } from "../../lib/sanity";

export const metadata: Metadata = {
  title: "Blog | KENI WEB DESIGN",
  description: "Read practical website design and development insights from KENI WEB DESIGN.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-20" aria-labelledby="blog-heading">
          <div className="site-container">
            <h1 id="blog-heading" className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F172A]">
              Insights on web design, UX, and technical execution for growing businesses.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-xl border border-[#D7DDE8] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.06)]">
                  <div className="relative h-54 w-full overflow-hidden">
                    <Image src={post.mainImageUrl} alt={post.title} fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-medium text-[#ff5e2e]">{formatBlogDate(post.publishedAt)}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#0F172A]">{post.title}</h2>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image src={post.authorImageUrl} alt={post.authorName} fill className="object-cover" />
                      </div>
                      <p className="text-sm text-[#6A7486]">
                        Post by <span className="font-semibold text-[#2A344A]">{post.authorName}</span>
                      </p>
                    </div>

                    <p className="mt-4 leading-7 text-[#0F172A]">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex rounded-full border border-[#ff5e2e] px-5 py-2 text-sm font-medium text-[#ff5e2e] transition-colors hover:bg-[#ff5e2e] hover:text-white"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
