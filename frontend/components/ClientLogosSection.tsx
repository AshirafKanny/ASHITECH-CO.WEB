const logos = [
  "Education",
  "Hospitality",
  "Healthcare",
  "Legal",
  "Construction",
  "Retail",
  "NGO",
  "SaaS",
];

export default function ClientLogosSection() {
  return (
    <section className="bg-white py-12" aria-label="Trusted by industries">
      <div className="site-container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
          Trusted by local industries
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] px-5 py-6 text-sm font-semibold text-[#1E293B]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
