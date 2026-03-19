import Image from "next/image";
import { CalendarDays } from "lucide-react";

const blogs = [
  {
    image: "/blog1.webp",
    date: "25 March 2022",
    title: "Easy Ways to Incorporate Customer Feedback",
    authorImage: "/author1.webp",
    authorName: "Douglas B. Dickens",
  },
  {
    image: "/blog2.webp",
    date: "27 March 2022",
    title: "How to create modern web site for your business?",
    authorImage: "/author2.webp",
    authorName: "Carson C. Rhodes",
  },
  {
    image: "/blog3.webp",
    date: "25 March 2022",
    title: "How to digital marketing work social networking?",
    authorImage: "/author3.webp",
    authorName: "Robert T. Evans",
  },
  {
    image: "/blog4.webp",
    date: "25 March 2022",
    title: "Easy Ways to Incorporate Customer Feedback",
    authorImage: "/author4.webp",
    authorName: "Stanley J. Contreras",
  },
];

export default function LatestNewsBlogSection() {
  return (
    <section className="bg-white py-18" aria-labelledby="latest-news-heading">
      <div className="site-container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5e2e]">
          &#183;&#183;&#183;{" "}
          <span className="underline decoration-[#ff5e2e] underline-offset-2">Get Every Updates</span>
          {" "}&#183;&#183;&#183;
        </p>

        <h2 id="latest-news-heading" className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold text-[#1E293B]">
          Read Latest News &amp; Blog
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {blogs.map((blog) => (
            <article key={`${blog.title}-${blog.authorName}`} className="grid grid-cols-[10.5rem_1fr] items-start gap-5">
              <div className="relative h-42 w-42 overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>

              <div>
                <p className="flex items-center gap-2 text-xl font-medium text-[#ff5e2e]">
                  <CalendarDays size={16} aria-hidden="true" />
                  {blog.date}
                </p>

                <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#2A344A]">{blog.title}</h3>

                <div className="mt-1.5 flex items-center gap-3">
                  <div className="relative -mt-2 h-11 w-11 overflow-hidden rounded-full">
                    <Image src={blog.authorImage} alt={blog.authorName} fill className="object-cover" />
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
      </div>
    </section>
  );
}