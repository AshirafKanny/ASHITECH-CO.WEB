"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, Search, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [isScrollPinned, setIsScrollPinned] = useState(false);
  const [navTranslateY, setNavTranslateY] = useState(0);
  const lastScrollRef = useRef(0);
  const pinTimerRef = useRef<number | null>(null);

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

  useEffect(() => {
    const clearPinTimer = () => {
      if (pinTimerRef.current !== null) {
        window.clearTimeout(pinTimerRef.current);
        pinTimerRef.current = null;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollRef.current;
      lastScrollRef.current = scrollY;

      if (scrollY <= 8) {
        clearPinTimer();
        setIsScrollPinned(false);
        setNavTranslateY(0);
        return;
      }

      if (!isScrollPinned) {
        // Follow the scroll direction
        setNavTranslateY((prev) => {
          const newTranslate = prev + scrollDelta;
          return Math.min(Math.max(newTranslate, -100), 0);
        });

        // Clear existing timer and set new one
        clearPinTimer();
        pinTimerRef.current = window.setTimeout(() => {
          setIsScrollPinned(true);
          setNavTranslateY(0);
          pinTimerRef.current = null;
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearPinTimer();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollPinned]);

  const headerPositionClass = isScrollPinned
    ? isHome
      ? "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#171422]/95 backdrop-blur"
      : "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#171422]/95 backdrop-blur"
    : isHome
      ? "absolute inset-x-0 top-0 z-30 border-b border-white/10"
      : "relative border-b border-white/10 bg-[#171422]";

  const headerMotionClass = `transform transition-transform duration-200 ease-out`;

  return (
    <header
      className={`${headerPositionClass} ${headerMotionClass}`}
      style={{ transform: `translateY(${navTranslateY}%)` }}
    >
      <nav className="site-container flex items-center justify-between py-5" aria-label="Main navigation">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          style={{ color: "#ffffff" }}
        >
          KENI WEB DESIGN
        </Link>

        <button
          type="button"
          className="rounded-md p-3 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((value) => !value)}
        >
          {isMobileNavOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-[#F97316]"
                style={{ color: "#ffffff" }}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              aria-label="Search"
              className="text-white hover:text-[#F97316]"
              style={{ color: "#ffffff" }}
            >
              <Search size={18} aria-hidden="true" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Toggle site menu"
              aria-expanded={isDesktopMenuOpen}
              className="rounded-md p-3 text-white transition-colors hover:text-[#F97316]"
              style={{ color: "#ffffff" }}
              onClick={() => setIsDesktopMenuOpen((value) => !value)}
            >
              {isDesktopMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </li>
        </ul>
      </nav>

      {isMobileNavOpen ? (
        <div className="border-t border-white/20 bg-[#171422] md:hidden">
          <ul className="site-container grid gap-4 py-4 text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium text-white"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full border border-white px-5 py-2 text-sm font-semibold text-white"
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
          className={`absolute inset-0 origin-right bg-[#000000]/64 backdrop-blur-[1px] transition-all duration-500 ease-out ${
            isDesktopMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
          aria-label="Close appointment drawer"
          onClick={() => setIsDesktopMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[320px] flex-col bg-[#171422] px-9 pb-10 pt-6 text-white shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out lg:max-w-87.5 ${
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
            <h2 className="mb-8 text-center text-[2rem] font-semibold leading-tight">Get Appointment</h2>

            <form className="flex flex-1 flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="h-12 rounded-md border border-white/14 bg-transparent px-5 text-sm text-white outline-none transition-colors placeholder:text-white/65 focus:border-[#ff6b3d]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-md border border-white/14 bg-transparent px-5 text-sm text-white outline-none transition-colors placeholder:text-white/65 focus:border-[#ff6b3d]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="min-h-34 rounded-md border border-white/14 bg-transparent px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/65 focus:border-[#ff6b3d]"
              />

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#ff6b3d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#ff7d54]"
              >
                Submit Now
              </button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-3">
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
                href="mailto:hello@keniwebdesign.com"
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
