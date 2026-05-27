import Link from "next/link";

const stats = [
  { value: "120+", label: "Websites delivered" },
  { value: "12", label: "Industries served" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "24/7", label: "Support coverage" },
];

const industries = [
  "Hospitality",
  "Education",
  "Healthcare",
  "Real estate",
  "Logistics",
  "Professional services",
];

const technologies = ["Next.js", "WordPress", "Shopify", "React", "Figma", "Google Analytics"];

export default function TrustSignalsSection() {
  return (
    <section className="bg-white py-16" aria-labelledby="trust-signals-heading">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
              Authority and trust
            </p>
            <h2 id="trust-signals-heading" className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">
              A trusted web design partner for Kampala businesses
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b6577]">
              We are focused on measurable outcomes: more inquiries, stronger brands, and better visibility on search.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-[#ff5e2e] hover:bg-[#fff4f0]"
          >
            View recent projects
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6 text-center">
              <p className="text-3xl font-bold text-[#ff5e2e]">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[#1E293B]">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[#E4E8F1] bg-white p-6">
            <h3 className="text-lg font-semibold text-[#1E293B]">Industries we serve</h3>
            <p className="mt-2 text-sm text-[#5b6577]">
              Local businesses across Uganda rely on our website developers for industry-specific solutions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((item) => (
                <span key={item} className="rounded-full border border-[#dbe4f3] px-4 py-1.5 text-xs font-semibold text-[#1E293B]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#E4E8F1] bg-white p-6">
            <h3 className="text-lg font-semibold text-[#1E293B]">Technology stack</h3>
            <p className="mt-2 text-sm text-[#5b6577]">Modern tools for performance, security, and scalability.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <span key={item} className="rounded-full bg-[#0f172a] px-4 py-1.5 text-xs font-semibold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
