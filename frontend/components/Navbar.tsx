"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, Rocket, Search, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  useEffect(() => {
    if (!isDesktopMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDesktopMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDesktopMenuOpen]);

  return (
    <header
      className={`${
        isHome
          ? "absolute inset-x-0 top-0 z-30 border-b border-white/10"
          : "relative border-b border-[#0F172A]"
      }`}
    >
      <nav className="site-container flex items-center justify-between py-5" aria-label="Main navigation">
        <Link href="/" className={`inline-flex items-center gap-2 text-xl font-semibold ${isHome ? "text-white" : "text-[#0F172A]"}`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F97316] text-white">
            <Rocket size={18} aria-hidden="true" />
          </span>
          ASHITECH
        </Link>

        <button
          type="button"
          className={`rounded-md p-3 md:hidden ${
            isHome ? "text-white" : "text-[#0F172A]"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((value) => !value)}
        >
          {isMobileNavOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <ul className="hidden items-center gap-7 text-white md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-white! text-sm font-medium transition-colors ${
                  isHome ? "hover:text-[#F97316]" : "hover:text-[#F97316]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              aria-label="Search"
              className={`${isHome ? "text-white hover:text-[#F97316]" : "text-[#0F172A] hover:text-[#012166]"}`}
            >
              <Search size={18} aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Toggle site menu"
              aria-expanded={isDesktopMenuOpen}
              className={`rounded-md p-3 transition-colors ${
                isHome
                  ? "text-white hover:text-[#F97316]"
                  : "text-[#0F172A] hover:text-[#F97316]"
              }`}
              onClick={() => setIsDesktopMenuOpen((value) => !value)}
            >
              {isDesktopMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </li>
        </ul>
      </nav>

      {isMobileNavOpen ? (
        <div className={`border-t md:hidden ${isHome ? "border-white/20 bg-[#171422]" : "border-[#0F172A] bg-white"}`}>
          <ul className="site-container grid gap-4 py-4 text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white! text-sm font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`inline-flex w-fit rounded-full px-5 py-2 text-sm font-semibold ${
                  isHome ? "border border-white text-white" : "border border-[#0F172A] text-[#0F172A]"
                }`}
              >
                Get A Quote
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      <div
        className={`fixed inset-0 z-50 hidden md:block ${
          isDesktopMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isDesktopMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 origin-right bg-[#04070f]/60 backdrop-blur-[2px] transition-all duration-500 ease-out ${
            isDesktopMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
          aria-label="Close appointment drawer"
          onClick={() => setIsDesktopMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-95 flex-col bg-[#2d3650] px-8 pb-10 pt-6 text-white shadow-2xl transition-transform duration-300 ease-out ${
            isDesktopMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Appointment drawer"
        >
          <div className="mb-12 flex justify-end">
            <button
              type="button"
              className="p-1 text-white transition-colors hover:text-[#ff6b3d]"
              aria-label="Close appointment drawer"
              onClick={() => setIsDesktopMenuOpen(false)}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="mb-8 text-[2rem] font-semibold leading-tight">Get Appointment</h2>

            <form className="flex flex-1 flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="h-12 rounded-md border border-white/10 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-white/60 focus:border-[#ff6b3d]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-md border border-white/10 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-white/60 focus:border-[#ff6b3d]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="min-h-34 rounded-md border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/60 focus:border-[#ff6b3d]"
              />

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#ff6b3d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#ff7d54]"
              >
                Submit Now
              </button>
            </form>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#2d3650] transition-transform hover:-translate-y-0.5"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@ashitech.com"
                aria-label="Email"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#2d3650] transition-transform hover:-translate-y-0.5"
              >
                <Send size={18} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#2d3650] transition-transform hover:-translate-y-0.5"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
