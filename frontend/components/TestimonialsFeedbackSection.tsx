"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useMemo, useState } from "react";

const testimonials = [
  {
    image: "/testimonial1.webp",
    name: "Kiwana Collins",
    role: "CEO & Founder",
    quote: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliquasum susendise ultrices",
  },
  {
    image: "/testimonial2.webp",
    name: "Tomusange Marvin",
    role: "Business Consultant",
    quote: "Quis autem vel eum iure reprehe nderitue voluptate esseuam nihile molestias equatur veillum dolorem eum voluptas nulla",
  },
  {
    image: "/images/ashitech.webp",
    name: "Ashiraf Kenny",
    role: "Digital Strategist",
    quote: "Our collaboration model helps businesses validate ideas, execute quickly, and launch reliable digital experiences.",
  },
];

export default function TestimonialsFeedbackSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = useMemo(() => {
    return [
      testimonials[startIndex % testimonials.length],
      testimonials[(startIndex + 1) % testimonials.length],
    ];
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-16" aria-labelledby="testimonials-heading">
      <div className="site-container relative">
        <span className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-6rem)] w-px bg-[#D2DAE7] md:block" aria-hidden="true" />

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5e2e]">
              &#183;&#183;&#183;{" "}
              <span className="underline decoration-[#ff5e2e] underline-offset-2">Clients Testimonials</span>
            </p>
            <h2 id="testimonials-heading" className="mt-4 text-5xl font-bold text-[#1E293B]">
              Clients feedback
            </h2>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="grid h-13 w-13 place-items-center rounded-full bg-[#ff6b3d] text-white shadow-[0_10px_22px_rgba(255,107,61,0.28)] outline-none ring-0 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="grid h-13 w-13 place-items-center rounded-full bg-white/65 text-[#ff6b3d] outline-none ring-0 transition-colors hover:bg-white focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <ArrowRight size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-[#D2DAE7]" />

        <div className="grid gap-10 py-12 md:grid-cols-2 md:gap-12">
          {visibleTestimonials.map((item, index) => (
            <article key={`${item.name}-${index}`} className={`flex gap-6 ${index === 1 ? "md:border-l md:border-[#D2DAE7] md:pl-12" : ""}`}>
              <div className="relative h-28 w-28 shrink-0">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={item.image === "/images/ashitech.webp" ? "rounded-full object-cover object-center" : "object-cover"}
                  />
                </div>
                <span className="absolute -right-3 -top-2 grid h-11 w-11 place-items-center rounded-full bg-[#ff6b3d] text-white shadow-sm">
                  <Quote size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </div>

              <div className="pt-1">
                <p className="max-w-lg text-lg leading-8 text-[#636f80]">{item.quote}</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="h-1 w-10 bg-[#ff5e2e]" aria-hidden="true" />
                  <h3 className="whitespace-nowrap text-3xl font-semibold text-[#ff5e2e]">{item.name}</h3>
                </div>
                <p className="mt-1 text-lg text-[#374459]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}