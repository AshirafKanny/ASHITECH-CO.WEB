"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { CheckCircle2, Handshake, Rocket, Trophy } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { CometCard } from "@/components/ui/comet-card";
import { Globe3D } from "@/components/ui/3d-globe";

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
    <CometCard>
      <article
        ref={ref}
        className="feature-card-hover group flex min-h-34 flex-col items-center justify-center rounded-lg bg-[#1F2121] px-3 py-6 text-center"
      >
        <span className="feature-card-icon grid h-11 w-11 place-items-center text-[#ff5e2e] transition-colors group-hover:text-black">
          <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <p className="mt-4 text-3xl font-bold leading-none text-white transition-colors group-hover:text-black">
          {count}
          <span className="text-[#ff5e2e] transition-colors group-hover:text-black">+</span>
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#ff5e2e] transition-colors group-hover:text-black">
          {stat.label}
        </p>
        <p className="mt-2.5 text-[11.5px] leading-5 text-white/70 transition-colors group-hover:text-black">
          Trusted results from partners worldwide.
        </p>
      </article>
    </CometCard>
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

const sampleMarkers = [
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
  { lat: 37.5665, lng: 126.978, src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
];

export default function AboutStatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#05070d] py-20 lg:py-28"
      aria-labelledby="about-stats-heading"
    >
      {/* 3D Globe background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <Globe3D
          markers={sampleMarkers}
          className="h-130 w-130 opacity-35 sm:h-155 sm:w-155"
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.8,
            showAtmosphere: false,
            backgroundColor: null,
            enableZoom: false,
            enablePan: false,
            minDistance: 5,
            maxDistance: 15,
            radius: 2.6,
            ambientIntensity: 0.7,
            pointLightIntensity: 1.5,
          }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* Row 1 — image left, mission/vision right */}
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
          {/* Image column */}
          <div className="relative isolate mx-auto w-fit shrink-0 lg:mx-0">
            <div
              className="pointer-events-none absolute -inset-6 z-0 opacity-70 rounded-[28px]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle_at_top,rgba(15,23,42,0.14),transparent 55%),radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.2),transparent 45%),radial-gradient(circle_at_80%_60%,rgba(15,23,42,0.24),transparent 50%),radial-gradient(circle,rgba(15,23,42,0.28) 1px,transparent 1px)",
                backgroundSize: "auto, auto, auto, 14px 14px",
              }}
            />
            <div className="about-image-backdrop about-image-backdrop-left" aria-hidden="true" />
            <Image
              src="/images/ashitech.webp"
              alt="KENI WEB DESIGN team member working"
              width={300}
              height={380}
              className="relative z-10 block h-96 w-64 object-cover"
              priority
            />
            <div className="relative z-10 mt-4 text-center text-white">
              <p className="text-lg font-semibold">Ashiraf Kenny</p>
              <p className="mt-1 text-sm font-bold">CEO</p>
            </div>
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
          <div className="relative overflow-hidden px-6 py-6 text-white">
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-70"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle_at_top,rgba(15,23,42,0.12),transparent 55%),radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.18),transparent 40%),radial-gradient(circle_at_80%_60%,rgba(15,23,42,0.22),transparent 45%),radial-gradient(circle,rgba(15,23,42,0.25) 1px,transparent 1px)",
                backgroundSize: "auto, auto, auto, 14px 14px",
              }}
            />
            <div className="pointer-events-none absolute inset-0 z-0">
              <BackgroundBeamsWithCollision className="h-full w-full bg-transparent">
                <span className="sr-only" aria-hidden="true" />
              </BackgroundBeamsWithCollision>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5e2e]">
                &#183;&#183;&#183; About Digital Solution
              </p>
              <h2
                id="about-stats-heading"
                className="mt-3 max-w-md text-3xl font-bold leading-snug text-white lg:text-4xl"
              >
                Best web design solutions agency to growth
              </h2>

              <div className="mt-8 divide-y divide-white/10">
                {missionItems.map((item) => (
                  <article key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <span
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ff5e2e] text-white"
                      aria-hidden="true"
                    >
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — stats left, image right */}
        <div className="mt-20 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Stats + heading column */}
          <div className="relative overflow-hidden px-6 py-6 text-white">
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-70"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle_at_top,rgba(15,23,42,0.12),transparent 55%),radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.18),transparent 40%),radial-gradient(circle_at_80%_60%,rgba(15,23,42,0.22),transparent 45%),radial-gradient(circle,rgba(15,23,42,0.25) 1px,transparent 1px)",
                backgroundSize: "auto, auto, auto, 14px 14px",
              }}
            />
            <div className="pointer-events-none absolute inset-0 z-0">
              <BackgroundBeamsWithCollision className="h-full w-full bg-transparent">
                <span className="sr-only" aria-hidden="true" />
              </BackgroundBeamsWithCollision>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5e2e]">
                &#183;&#183;&#183; Company Statistics
              </p>
              <h3 className="mt-3 max-w-md text-3xl font-bold leading-snug text-white lg:text-4xl">
                We&apos;ve some achievement from our global partners
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <CountingStatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative isolate mx-auto w-fit shrink-0 lg:mx-0 lg:justify-self-end">
            <div
              className="pointer-events-none absolute -inset-6 z-0 opacity-70 rounded-[28px]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle_at_top,rgba(15,23,42,0.14),transparent 55%),radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.2),transparent 45%),radial-gradient(circle_at_80%_60%,rgba(15,23,42,0.24),transparent 50%),radial-gradient(circle,rgba(15,23,42,0.28) 1px,transparent 1px)",
                backgroundSize: "auto, auto, auto, 14px 14px",
              }}
            />
            <div className="about-image-backdrop about-image-backdrop-right" aria-hidden="true" />
            <Image
              src="/stuff.webp"
              alt="KENI WEB DESIGN consultant with client"
              width={300}
              height={380}
              className="relative z-10 block h-96 w-64 object-cover"
            />
            <div className="relative z-10 mt-4 text-right text-white lg:text-center">
              <p className="text-lg font-semibold">Isaac Timo</p>
              <p className="mt-1 text-sm font-medium">Manager</p>
            </div>
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