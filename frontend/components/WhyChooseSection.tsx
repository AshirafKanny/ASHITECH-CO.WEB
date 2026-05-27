import { CheckCircle2, Gauge, Headphones, ShieldCheck, Timer, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Affordable pricing with clear scope",
    description: "Transparent packages for startups and SMEs without hidden fees.",
    icon: TrendingUp,
  },
  {
    title: "Mobile-first, fast-loading websites",
    description: "Optimized layouts that perform on phones and slow networks.",
    icon: Gauge,
  },
  {
    title: "SEO-ready structure",
    description: "Technical SEO foundations that help you rank in Uganda and Kampala.",
    icon: ShieldCheck,
  },
  {
    title: "Modern UI/UX",
    description: "Clean layouts that guide visitors toward calls and inquiries.",
    icon: CheckCircle2,
  },
  {
    title: "Fast delivery",
    description: "Clear timelines so your website launches on schedule.",
    icon: Timer,
  },
  {
    title: "Ongoing support",
    description: "Friendly after-launch support and maintenance options.",
    icon: Headphones,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#0b1220] py-16 text-white" aria-labelledby="why-choose-heading">
      <div className="site-container">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
          Why choose Keni Web Design
        </p>
        <h2 id="why-choose-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
          The web design company in Uganda built for growth
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
          We blend creative design, conversion strategy, and performance to deliver websites that win business in Kampala and beyond.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff5e2e] text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
