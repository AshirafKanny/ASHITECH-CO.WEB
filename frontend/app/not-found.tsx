import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-white/75">
          The page you requested does not exist or may have moved. Use the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950">
            Home
          </Link>
          <Link href="/services" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Services
          </Link>
          <Link href="/portfolio" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Portfolio
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}