import Link from "next/link";

export default function ScheduleCallSection() {
  return (
    <section className="bg-[#0b1220] py-16 text-white" aria-labelledby="schedule-call-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5e2e]">Free consultation</p>
          <h2 id="schedule-call-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
            Schedule a call with a web design expert
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
            Tell us about your goals and we will recommend the best website or SEO plan for your business in Uganda.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <span className="rounded-full border border-white/20 px-4 py-1.5">Response within 24 hours</span>
            <span className="rounded-full border border-white/20 px-4 py-1.5">Kampala-based team</span>
            <span className="rounded-full border border-white/20 px-4 py-1.5">Transparent pricing</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#ff5e2e] px-7 py-3 text-sm font-semibold text-white hover:bg-[#ff6b3d]"
          >
            Book a consultation
          </Link>
          <a
            href="tel:+256744429808"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            Call Airtel: 0744429808
          </a>
          <a
            href="tel:+256761856198"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            Call MTN: 0761856198
          </a>
        </div>
      </div>
    </section>
  );
}
