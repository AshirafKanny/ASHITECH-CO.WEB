import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20" aria-labelledby="cta-heading">
      <div className="site-container rounded-2xl bg-[#0F172A] px-8 py-12 text-white">
        <h2 id="cta-heading" className="text-3xl font-semibold">
          Ready to build your next company website?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7">
          Tell us your goals and timeline. Our team will map a clear strategy and deliver
          a high-performing website that represents your brand professionally.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-[#0F172A] transition-colors hover:bg-[#012166] hover:text-white"
        >
          Book Discovery Call
        </Link>
      </div>
    </section>
  );
}
