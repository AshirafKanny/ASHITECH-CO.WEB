import Link from "next/link";

export default function HomeIntroSection() {
  return (
    <section className="bg-white py-14" aria-labelledby="home-intro-heading">
      <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">
            Kampala . Uganda . East Africa
          </p>
          <h2
            id="home-intro-heading"
            className="mt-4 text-3xl font-bold leading-tight text-[#1E293B] sm:text-4xl"
          >
            Website design Uganda businesses trust for growth
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5b6577] sm:text-lg">
            KENI WEB DESIGN builds modern, mobile-ready websites that help local businesses win more clients.
            We specialize in {" "}
            <Link href="/website-design-uganda" className="font-semibold text-[#ff5e2e] hover:underline">
              website design Uganda
            </Link>{" "}
            companies rely on, {" "}
            <Link href="/website-design-kampala" className="font-semibold text-[#ff5e2e] hover:underline">
              web design Kampala
            </Link>{" "}
            startups can scale with, and {" "}
            <Link href="/ecommerce-websites-uganda" className="font-semibold text-[#ff5e2e] hover:underline">
              ecommerce website Uganda
            </Link>{" "}
            stores that need faster sales. Our team blends UI/UX, {" "}
            <Link href="/seo-services-uganda" className="font-semibold text-[#ff5e2e] hover:underline">
              SEO services Uganda
            </Link>{" "}
            expertise, and conversion strategy to turn traffic into booked calls.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#1E293B]">
            <span className="rounded-full border border-[#ff5e2e]/30 px-4 py-1.5">Website Developers Uganda</span>
            <span className="rounded-full border border-[#ff5e2e]/30 px-4 py-1.5">Ecommerce Website Uganda</span>
            <span className="rounded-full border border-[#ff5e2e]/30 px-4 py-1.5">SEO Services Uganda</span>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4E8F1] bg-[#F8FAFC] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <h3 className="text-xl font-semibold text-[#1E293B]">Start with the right solution</h3>
          <p className="mt-3 text-sm leading-6 text-[#5b6577]">
            Choose the service that matches your business goals, or talk to us for a custom plan.
          </p>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-[#1E293B]">
            <Link href="/services/web-development" className="rounded-lg border border-[#dbe4f3] px-4 py-3 hover:border-[#ff5e2e] hover:text-[#ff5e2e]">
              Web design and development
            </Link>
            <Link href="/services/seo-search-engine-optimization" className="rounded-lg border border-[#dbe4f3] px-4 py-3 hover:border-[#ff5e2e] hover:text-[#ff5e2e]">
              SEO strategy and optimization
            </Link>
            <Link
              href="/services/ecommerce-and-product-selling-development"
              className="rounded-lg border border-[#dbe4f3] px-4 py-3 hover:border-[#ff5e2e] hover:text-[#ff5e2e]"
            >
              Ecommerce websites
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
            >
              Request a free consultation
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-[#ff5e2e] px-6 py-2.5 text-sm font-semibold text-[#ff5e2e] hover:bg-[#fff4f0]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
