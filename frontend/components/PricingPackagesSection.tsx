const packages = [
  { name: "BASIC PLAN", price: "$248" },
  { name: "STANDARD PLAN", price: "$352" },
  { name: "GOLDER PLAN", price: "$583" },
  { name: "PLATINUM PLAN", price: "$834" },
];

const features = [
  "Landing page design (no pages)",
  "HTML+CSS design (12 pages)",
  "Social Media Marketing",
  "Domin hosting provider",
  "Online support (24/7)",
];

export default function PricingPackagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#ECEFF4] py-24" aria-labelledby="pricing-packages-heading">
      <div
        className="pointer-events-none absolute left-1/2 -top-14 h-84 w-6xl -translate-x-1/2 bg-[url('/pricing-bg-dots.webp')] bg-top bg-no-repeat opacity-65"
        style={{ backgroundSize: "100% auto" }}
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute -left-8 bottom-0 h-54 w-96"
        viewBox="0 0 380 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 24C56 24 82 56 82 108C82 153 108 178 154 170C206 162 238 188 250 220"
          stroke="#ff5e2e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="site-container relative z-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5e2e]">
          &#183;&#183;&#183;{" "}
          <span className="underline decoration-[#ff5e2e] underline-offset-2">Our Pricing Package</span>
          {" "}&#183;&#183;&#183;
        </p>

        <h2
          id="pricing-packages-heading"
          className="mx-auto mt-4 max-w-2xl text-center text-5xl font-bold text-[#1E293B]"
        >
          Website Design Packages
        </h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
          {packages.map((item) => (
            <article
              key={item.name}
              className="group relative min-h-66 overflow-hidden rounded-sm border border-white/70 bg-white px-7 py-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
            >
              <span
                className="pointer-events-none absolute -right-20 -top-12 rotate-30 bg-[#ff5e2e] px-16 py-1.5 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:-right-10 group-hover:top-4 group-hover:opacity-100"
                aria-hidden="true"
              >
                Popular Package
              </span>

              <h3 className="border-b border-[#DEE5EF] pb-3 text-center text-base font-semibold tracking-[0.28em] text-[#313b4f]">
                {item.name}
              </h3>

              <div className="mt-5 flex items-start gap-6">
                <ul className="flex-1 space-y-2.5 text-base text-[#697588]">
                  {features.map((feature) => (
                    <li key={`${item.name}-${feature}`} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5e2e]" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-44 shrink-0 text-right">
                  <p className="text-4xl font-bold leading-none text-[#ff5e2e]">
                    {item.price}
                    <span className="ml-0.5 text-sm font-medium text-[#677388]">/monthly</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#1E293B]">Save 25%</p>

                  <button
                    type="button"
                    className="pricing-package-btn mt-4 inline-flex h-10 items-center justify-center rounded-full border border-[#ff5e2e] px-4 text-xs font-semibold text-[#ff5e2e]"
                  >
                    <span className="relative z-10">Choose Package&nbsp;&raquo;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}