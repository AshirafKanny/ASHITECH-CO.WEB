const certifications = [
  {
    title: "Google Analytics Setup",
    description: "Conversion tracking and analytics baseline for growth-focused websites.",
  },
  {
    title: "SEO Technical Checklist",
    description: "Structured metadata, speed optimization, and local SEO coverage.",
  },
  {
    title: "Mobile UX Standards",
    description: "Responsive layouts that perform on Uganda mobile networks.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-[#0b1220] py-14 text-white" aria-labelledby="certifications-heading">
      <div className="site-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">Trust signals</p>
            <h2 id="certifications-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Proven standards and quality checks
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/70">
            We use repeatable quality systems so every website meets performance, SEO, and usability benchmarks.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {certifications.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
