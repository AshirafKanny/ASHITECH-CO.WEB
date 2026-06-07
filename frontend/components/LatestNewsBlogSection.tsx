import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { formatBlogDate, getBlogPosts } from "../lib/sanity";

export default async function LatestNewsBlogSection() {
  const blogs = await getBlogPosts(4);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-18" aria-labelledby="latest-news-heading">
      <div className="absolute inset-0 sky-bg pointer-events-none" aria-hidden>
        <div className="stars">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className={`star star-${i + 1}`} />
          ))}
        </div>
      </div>
      <div className="site-container relative z-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5e2e]">
          &#183;&#183;&#183;{" "}
          <span className="underline decoration-[#ff5e2e] underline-offset-2">Get Every Updates</span>
          {" "}&#183;&#183;&#183;
        </p>

        <h2 id="latest-news-heading" className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold text-[#1E293B] sm:text-4xl md:text-5xl">
          Read Latest News &amp; Blog
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {blogs.map((blog) => (
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
                  <CalendarDays size={16} aria-hidden="true" />
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e74f20]"
          >
            Explore More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}