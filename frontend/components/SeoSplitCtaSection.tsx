import { ArrowRight, Target } from "lucide-react";

export default function SeoSplitCtaSection() {
  return (
    <section className="py-14" aria-label="Project and SEO call to action">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="relative overflow-hidden border border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/section-image1.webp')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#060a15]/74" aria-hidden="true" />

          <div className="relative grid md:grid-cols-2">
            <article className="flex flex-col items-start gap-4 px-6 py-7 sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-8 lg:px-9 lg:py-9">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff6b3d] text-white lg:h-16 lg:w-16">
                <Target size={28} strokeWidth={2.1} aria-hidden="true" />
              </span>

              <h3 className="max-w-xs text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Have any Project On Minds ?
              </h3>

              <button
                type="button"
                aria-label="Open project discussion"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#0F172A] sm:ml-auto"
              >
                <ArrowRight size={24} strokeWidth={1.9} aria-hidden="true" />
              </button>
            </article>

            <article className="relative flex flex-col items-start gap-4 border-t border-white/15 px-6 py-7 sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-8 md:border-l md:border-t-0 lg:px-9 lg:py-9">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff6b3d] text-white lg:h-16 lg:w-16">
                <Target size={28} strokeWidth={2.1} aria-hidden="true" />
              </span>

              <h3 className="max-w-xs text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                We're to work SEO optimization?
              </h3>

              <button
                type="button"
                aria-label="Open seo optimization discussion"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#0F172A] sm:ml-auto"
              >
                <ArrowRight size={24} strokeWidth={1.9} aria-hidden="true" />
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}