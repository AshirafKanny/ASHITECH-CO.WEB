"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Handshake, Rocket, Trophy } from "lucide-react";

function CountingStatCard({ stat }: { stat: (typeof stats)[0] }) {
  const Icon = stat.icon;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const targetValue = parseInt(stat.value.replace("+", ""), 10);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, targetValue]);

  return (
    <article
      ref={ref}
      className="rounded-xl border border-[#D0DAEA] bg-white px-5 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-[#FFF0E8]">
        <Icon size={20} strokeWidth={1.8} className="text-[#ff5e2e]" aria-hidden="true" />
      </span>
      <p className="mt-4 text-3xl font-bold leading-none text-[#1E293B]">
        {count}
        <span className="text-[#ff5e2e]">+</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#ff5e2e]">{stat.label}</p>
      <p className="mt-2.5 text-[11.5px] leading-5 text-[#7A8899]">
        Trusted results from partners worldwide.
      </p>
    </article>
  );
}

const missionItems = [
  {
    title: "Company Mission",
    description:
      "We craft practical digital systems that help businesses scale with confidence and clear direction.",
  },
  {
    title: "Company Vision",
    description:
      "To become a reliable web partner for modern brands that value speed, quality, and growth.",
  },
  {
    title: "Our Philosophy",
    description:
      "Strong strategy, clean execution, and measurable outcomes in every project we deliver.",
  },
];

const stats = [
  { icon: Rocket, value: "2365+", label: "Projects Complete" },
  { icon: Handshake, value: "5234+", label: "Global Clients" },
  { icon: Trophy, value: "8532+", label: "Happy Customers" },
];

export default function AboutStatsSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="about-stats-heading">
      <div className="site-container">

        {/* Row 1 — image left, mission/vision right */}
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">

          {/* Image column */}
          <div className="relative isolate mx-auto w-fit shrink-0 lg:mx-0">
            <div className="about-image-backdrop about-image-backdrop-left" aria-hidden="true" />
            <Image
              src="/images/ashitech.webp"
              alt="KENI WEB DESIGN team member working"
              width={300}
              height={380}
              className="relative z-10 block h-96 w-64 object-cover"
              priority
            />
            {/* Decorative wavy line — left side */}
            <svg
              className="pointer-events-none absolute -left-14 top-1/2 h-48 w-10 -translate-y-1/2 opacity-80"
              viewBox="0 0 40 200"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M30 0C16 20 16 40 30 54C44 68 44 88 30 104C16 120 16 142 30 158C44 174 44 190 30 200"
                stroke="#ff5e2e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Text column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5e2e]">
              &#183;&#183;&#183; About Digital Solution
            </p>
            <h2
              id="about-stats-heading"
              className="mt-3 max-w-md text-3xl font-bold leading-snug text-[#1E293B] lg:text-4xl"
            >
              Best web design solutions agency to growth
            </h2>

            <div className="mt-8 divide-y divide-[#D6DEEA]">
              {missionItems.map((item) => (
                <article key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ff5e2e] text-white"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-6 text-[#5B677A]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — stats left, image right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1fr_auto] lg:gap-20">

          {/* Stats + heading column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5e2e]">
              &#183;&#183;&#183; Company Statistics
            </p>
            <h3 className="mt-3 max-w-md text-3xl font-bold leading-snug text-[#1E293B] lg:text-4xl">
              We&apos;ve some achievement from our global partners
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <CountingStatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative isolate mx-auto w-fit shrink-0 lg:mx-0 lg:justify-self-end">
            <div className="about-image-backdrop about-image-backdrop-right" aria-hidden="true" />
            <Image
              src="/images/ashitech.webp"
              alt="KENI WEB DESIGN consultant with client"
              width={300}
              height={380}
              className="relative z-10 block h-96 w-64 object-cover"
            />
            {/* Decorative wavy line — right side */}
            <svg
              className="pointer-events-none absolute -right-14 top-1/2 h-48 w-10 -translate-y-1/2 opacity-80"
              viewBox="0 0 40 200"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 0C24 20 24 40 10 54C-4 68 -4 88 10 104C24 120 24 142 10 158C-4 174 -4 190 10 200"
                stroke="#ff5e2e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}