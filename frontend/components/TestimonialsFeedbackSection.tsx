"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useMemo, useState } from "react";

const testimonials = [
  {
    image: "/testimonial1.webp",
    name: "Joan N.",
    role: "Retail Owner, Kampala",
    quote: "Our new site loads fast on mobile and we now receive steady inquiries from Google search.",
  },
  {
    image: "/testimonial2.webp",
    name: "Michael K.",
    role: "Hotel Manager",
    quote: "The booking-focused design helped us increase direct inquiries and reduce reliance on OTAs.",
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
    <section className="relative overflow-hidden bg-[#081225] py-16 text-white" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/congsv%20(1).mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[#081225]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(8,18,37,0)_45%)]" />
      </div>

      <div className="site-container relative z-10">
        <span className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-6rem)] w-px bg-white/18 md:block" aria-hidden="true" />

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5e2e]">
              &#183;&#183;&#183;{" "}
              <span className="underline decoration-[#ff5e2e] underline-offset-2">Clients Testimonials</span>
            </p>
            <h2 id="testimonials-heading" className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Clients feedback
            </h2>
          </div>

          <div className="mt-3 flex items-center gap-3">
              <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
                className="app-animated-button grid h-13 w-13 place-items-center rounded-full bg-[#ff6b3d] text-white shadow-[0_10px_22px_rgba(255,107,61,0.28)] outline-none ring-0 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="app-animated-button grid h-13 w-13 place-items-center rounded-full bg-white/65 text-[#ff6b3d] outline-none ring-0 transition-colors hover:bg-white focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <ArrowRight size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-white/18" />

        <div className="grid gap-10 py-12 md:grid-cols-2 md:gap-12">
          {visibleTestimonials.map((item, index) => (
            <article key={`${item.name}-${index}`} className={`flex gap-6 rounded-2xl bg-white/6 p-5 backdrop-blur-md ${index === 1 ? "md:border-l md:border-white/18 md:pl-12" : ""}`}>
              <div className="relative h-28 w-28 shrink-0">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="112px"
                    className={item.image === "/images/ashitech.webp" ? "rounded-full object-cover object-center" : "object-cover"}
                  />
                </div>
                <span className="absolute -right-3 -top-2 grid h-11 w-11 place-items-center rounded-full bg-[#ff6b3d] text-white shadow-sm">
                  <Quote size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </div>

              <div className="pt-1">
                <p className="max-w-lg text-base leading-7 text-white/82 md:text-lg md:leading-8">{item.quote}</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="h-1 w-10 bg-[#ff5e2e]" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-[#7dd3fc] md:whitespace-nowrap md:text-3xl">{item.name}</h3>
                </div>
                <p className="mt-1 text-base text-white/72 md:text-lg">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}