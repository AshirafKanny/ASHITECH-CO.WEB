import Link from "next/link";
import { BookOpen } from "lucide-react";

type BlogPost = {
  title: string;
  href: string;
  summary: string;
};

type BlogPreviewProps = {
  posts: BlogPost[];
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="py-20" aria-labelledby="blog-heading">
      <div className="site-container">
        <h2 id="blog-heading" className="text-3xl font-semibold text-[#0F172A]">
          From the Blog
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.href} className="rounded-xl border border-[#0F172A] bg-white p-6">
              <BookOpen className="text-[#01240D]" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">{post.title}</h3>
              <p className="mt-3 leading-7 text-[#0F172A]">{post.summary}</p>
              <Link
                href={post.href}
                className="mt-4 inline-flex text-sm font-medium text-[#012166] hover:text-[#0F172A]"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
