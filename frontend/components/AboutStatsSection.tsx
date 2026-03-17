import Image from "next/image";
import { CircleDot, Handshake, Rocket, Trophy } from "lucide-react";

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
  { icon: Rocket, value: "2365+", label: "Projects complete" },
  { icon: Handshake, value: "5234+", label: "Global clients" },
  { icon: Trophy, value: "8532+", label: "Happy customers" },
];

export default function AboutStatsSection() {
  return (
    <section className="bg-[#ECEFF4] py-24" aria-labelledby="about-stats-heading">
      <div className="site-container">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-fit lg:mx-0">
            <div className="absolute -inset-2 -z-10 rotate-[-4deg] bg-[#ff5e2e]" aria-hidden="true" />
            <Image
              src="/images/ashitech.webp"
              alt="ASHITECH team member working with a tablet"
              width={360}
              height={430}
              className="h-90 w-72.5 object-cover"
            />
            <svg
              className="pointer-events-none absolute -left-18 top-1/2 h-52 w-12 -translate-y-1/2"
              viewBox="0 0 48 220"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M34 0C20 22 20 42 34 56C48 70 48 92 34 110C20 128 20 150 34 166C48 182 48 202 34 220"
                stroke="#ff5e2e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-[#ff5e2e]">... About digital solution</p>
            <h2 id="about-stats-heading" className="mt-3 max-w-lg text-4xl font-bold leading-tight text-[#1E293B]">
              Best web design solutions agency to growth
            </h2>

            <div className="mt-7">
              {missionItems.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-4 border-b border-[#D6DEEA] py-5 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full border border-[#1E293B] text-[#ff5e2e]">
                    <CircleDot size={15} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#5B677A]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#ff5e2e]">... Company Statistics</p>
            <h3 className="mt-3 max-w-lg text-4xl font-bold leading-tight text-[#1E293B]">
              We&apos;ve some achievement from global partners
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article key={stat.label} className="rounded-md border border-[#D0DAEA] bg-[#F3F6FB] px-4 py-5">
                    <Icon size={21} strokeWidth={1.9} className="text-[#ff5e2e]" aria-hidden="true" />
                    <p className="mt-4 text-[1.75rem] font-semibold leading-none text-[#1E293B]">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#ff5e2e]">{stat.label}</p>
                    <p className="mt-3 text-[11px] leading-5 text-[#68758A]">
                      On the other denounce with righteous indign.
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-fit lg:mx-0 lg:justify-self-end">
            <Image
              src="/images/ashitech.webp"
              alt="ASHITECH consultant meeting with a client"
              width={360}
              height={430}
              className="h-90 w-72.5 object-cover"
            />
            <svg
              className="pointer-events-none absolute -right-16 top-1/2 h-52 w-12 -translate-y-1/2"
              viewBox="0 0 48 220"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14 0C28 22 28 42 14 56C0 70 0 92 14 110C28 128 28 150 14 166C0 182 0 202 14 220"
                stroke="#ff5e2e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}