"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "John Katumba",
    position: "Creative Director",
    image: "/slides2.webp",
    accent: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    name: "Abaaho Isaac",
    position: "Lead UI/UX Designer",
    image: "/slides1.webp",
    accent: "from-blue-500 via-indigo-500 to-slate-900",
  },
  {
    name: "Agaba Joshua",
    position: "Brand Strategist",
    image: "/slide4.webp",
    accent: "from-emerald-400 via-teal-500 to-cyan-700",
  },
  {
    name: "Amaar Kwikyi",
    position: "Frontend Developer",
    image: "/slide3.webp",
    accent: "from-violet-500 via-fuchsia-500 to-sky-600",
  },
  {
    name: "Ashiraf Kenny",
    position: "CEO & Senior Developer",
    image: "/MEEEE.webp",
    accent: "from-orange-400 via-amber-500 to-rose-600",
  },
];

export default function AboutTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="site-container py-16 sm:py-20 lg:py-24" aria-labelledby="our-team-heading">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,#071126_0%,#0b3ea8_48%,#0b63f3_100%)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />
        <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-50 backdrop-blur">
              <Sparkles size={14} aria-hidden="true" />
              Our Team
            </p>
            <h2 id="our-team-heading" className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              The people behind the builds, the polish, and the momentum.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              We keep the team small, sharp, and hands-on. Every project moves through strategy, design, development,
              and refinement with people who care about the result as much as the details.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Design-led thinking",
                "Fast execution",
                "Clean development",
                "Client-first delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white/92 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-136">
            <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" aria-hidden="true" />

            <div className="relative h-124 sm:h-140">
              {teamMembers.map((member, index) => {
                const depth = (index - activeIndex + teamMembers.length) % teamMembers.length;
                const scale = 1 - depth * 0.05;
                const xOffset = depth * 18;
                const yOffset = depth * 16;
                const rotation = depth === 0 ? 0 : depth % 2 === 0 ? -2.5 * depth : 2.5 * depth;

                return (
                  <article
                    key={member.name}
                    className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/14 bg-[#071126] shadow-[0_25px_80px_rgba(2,8,23,0.45)] transition-[transform,opacity,filter] duration-500 ease-out"
                    style={{
                      zIndex: teamMembers.length - depth,
                      transform: `translate3d(${xOffset}px, ${yOffset}px, 0) scale(${scale}) rotate(${rotation}deg)`,
                      opacity: 1 - depth * 0.08,
                      filter: depth === 0 ? "none" : "saturate(0.95)",
                      pointerEvents: depth === 0 ? "auto" : "none",
                    }}
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${member.accent} opacity-25`} />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.2)_35%,rgba(2,6,23,0.84)_100%)]" />

                    <div className="absolute left-0 top-0 z-10 flex items-center gap-2 px-5 py-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                      <span className={`h-2.5 w-2.5 rounded-full bg-linear-to-r ${member.accent}`} aria-hidden="true" />
                      Team Member {index + 1}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                      <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">{member.position}</p>
                        <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{member.name}</h3>
                        <p className="mt-3 max-w-md text-sm leading-7 text-white/78 sm:text-base">
                          A hands-on role focused on quality, momentum, and the kind of detail that makes a website feel
                          polished and trustworthy.
                        </p>

                        {depth === 0 ? (
                          <button
                            type="button"
                            onClick={() => setActiveIndex((value) => (value + 1) % teamMembers.length)}
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0b63f3] shadow-[0_14px_32px_rgba(15,23,42,0.22)] transition-transform hover:-translate-y-0.5"
                            aria-label="Show next team member"
                          >
                            Next
                            <ArrowRight size={16} aria-hidden="true" />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}