import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#171422] pb-16 pt-32 text-white lg:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="hero-blink-overlay pointer-events-none absolute inset-0 z-30" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_44%,rgba(6,8,18,0.16),rgba(23,20,34,0)_46%)]" aria-hidden="true" />
      <div className="hero-breath-wave hero-breath-wave-one pointer-events-none absolute -left-36 top-10 z-5 h-128 w-lg rounded-full" aria-hidden="true" />
      <div className="hero-breath-wave hero-breath-wave-two pointer-events-none absolute left-[20%] -top-16 z-5 h-104 w-104 rounded-full" aria-hidden="true" />
      <div className="hero-breath-wave hero-breath-wave-three pointer-events-none absolute -right-36 bottom-2 z-5 h-140 w-140 rounded-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(249,115,22,0.9),rgba(23,20,34,0)_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_90%,rgba(249,115,22,0.22),rgba(23,20,34,0)_28%)]" />
      <svg
        className="hero-bg-wave pointer-events-none absolute -left-12 top-24 h-64 w-[120%] opacity-60"
        viewBox="0 0 1440 280"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 168C97 137 184 122 292 126C438 131 505 219 643 218C774 217 837 127 971 113C1124 97 1257 175 1440 148"
          stroke="rgba(7,10,20,0.46)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="hero-bg-wave-alt pointer-events-none absolute -left-10 bottom-20 h-72 w-[118%] opacity-55"
        viewBox="0 0 1440 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 178C130 217 231 230 332 196C452 156 511 84 647 93C788 102 837 191 969 205C1128 221 1261 139 1440 117"
          stroke="rgba(7,10,20,0.38)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="wave-glow-shadow pointer-events-none absolute -right-4 -top-4 h-56 w-56 rounded-full bg-[#F97316]/90" />

      <div className="site-container relative z-10 grid gap-10 xl:grid-cols-[1fr_1.15fr] xl:items-center">
        <div className="relative z-20 pt-6 xl:-ml-4">
          <p className="text-base font-semibold text-white/90">We create modern, fast and SEO-optimized websites |KENI WEB DESIGN </p>
          <h1
            id="hero-heading"
            className="hero-title-reveal mt-5 max-w-2xl text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-white md:text-6xl"
          >
            <span>Website Design In Kampala</span>
            <br />
            <span>That Grows Your Business</span>
          </h1>

          <div className="hero-cta-reveal mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="hero-btn-sweep hero-btn-sweep-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              Get Started Us
              <span className="hero-btn-arrow" aria-hidden="true">&raquo;</span>
            </Link>
            <Link
              href="/services"
              className="hero-btn-sweep hero-btn-sweep-secondary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              Explore Services
              <span className="hero-btn-arrow" aria-hidden="true">&raquo;</span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            <span className="h-2.5 w-2.5 rounded-full border border-white/80" />
            <span className="h-2.5 w-2.5 rounded-full border border-white/80" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="overflow-hidden border border-white/10">
            <Image
              src="/images/ashitech.webp"
              alt="ASHITECH hero media card"
              width={900}
              height={620}
              priority
              className="h-127.5 w-full object-cover"
            />
          </div>
          <button
            type="button"
            aria-label="Play company intro video"
            className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#F97316] text-white"
          >
            <Play size={22} fill="currentColor" aria-hidden="true" />
          </button>
          <div className="hero-word-strip" aria-hidden="true">
            <span className="hero-word-swap hero-word-swap-a">DEVELOPMENT</span>
            <span className="hero-word-swap hero-word-swap-b">WEB DESIGN</span>
          </div>
        </div>
      </div>

      <svg
        className="hero-wave-line pointer-events-none absolute -bottom-3 left-0 h-44 w-88"
        viewBox="0 0 352 176"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 70C34 42 72 14 112 16C142 18 166 37 173 79C181 126 214 139 247 118C272 102 293 85 316 88C338 91 349 130 352 176"
          stroke="rgba(255,255,255,0.88)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="left-orbit-circle pointer-events-none absolute left-14 top-1/2 h-5 w-5 rounded-full border-2 border-white" />
      <div className="spin-right-loop pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,#ffffff_2px,transparent_2px)] bg-size-[9px_9px] opacity-45" />
      <div className="spin-right-loop pointer-events-none absolute bottom-12 left-[43%] h-24 w-24 rounded-full bg-[radial-gradient(circle,#ffffff_2px,transparent_2px)] bg-size-[9px_9px] opacity-45" />
      <span className="pointer-events-none absolute left-[7%] top-[40%] h-4 w-4 rounded-full border border-white" />
    </section>
  );
}
