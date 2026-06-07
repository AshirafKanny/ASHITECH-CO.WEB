"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, MapPin, SearchCheck, Smartphone } from "lucide-react";

type BlogHeroStat = {
  value?: number;
  displayValue?: string;
  suffix?: string;
  label: string;
  icon: typeof Code2;
};

const stats: BlogHeroStat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Hours of Web Development",
    icon: Code2,
  },
  {
    value: 50,
    suffix: "+",
    label: "SEO & Web Design Articles",
    icon: SearchCheck,
  },
  {
    value: 100,
    suffix: "%",
    label: "Mobile-Friendly Solutions",
    icon: Smartphone,
  },
  {
    displayValue: "UGANDA",
    label: "Uganda-Based Digital Agency",
    icon: MapPin,
  },
];

export default function BlogHeroStats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState(stats.map((stat) => stat.value ?? 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(true);
      setValues(stats.map((stat) => stat.value ?? 0));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const startTime = performance.now();
    const duration = 1100;
    let frameId = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(stats.map((stat) => (stat.value ? Math.round(stat.value * eased) : 0)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [visible]);

  return (
    <div ref={sectionRef} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                {stat.displayValue ? (
                  <p className="text-2xl font-semibold tracking-[0.16em] text-white">{stat.displayValue}</p>
                ) : (
                  <p className="text-2xl font-semibold text-white">
                    {values[index]}
                    {stat.suffix}
                  </p>
                )}
                <p className="mt-1 text-sm leading-6 text-white/72">{stat.label}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}