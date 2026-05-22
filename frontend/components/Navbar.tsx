"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [isScrollPinned, setIsScrollPinned] = useState(false);
  const [navTranslateY, setNavTranslateY] = useState(0);
  const lastScrollRef = useRef(0);
  const pinTimerRef = useRef<number | null>(null);

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
      ? "fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white"
      : "fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white"
    : isHome
      ? "absolute inset-x-0 top-0 z-30 border-b border-black/10 bg-white"
      : "relative border-b border-black/10 bg-white";

  const headerMotionClass = `transform transition-transform duration-200 ease-out`;

  return (
    <header
      className={`${headerPositionClass} ${headerMotionClass}`}
      style={{ transform: `translateY(${navTranslateY}%)` }}
    >
      <nav className="site-container grid grid-cols-[auto_1fr_auto] items-center overflow-visible py-2" aria-label="Main navigation">
        <Link href="/" className="flex items-center">
          <Image
            src="/keniwebdesign-01.png"
            alt="KENI WEB DESIGN logo"
            width={190}
            height={60}
            priority
            className="-my-6 h-20 w-auto sm:h-22 lg:h-26"
          />
          <span className="sr-only">KENI WEB DESIGN</span>
        </Link>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-[#1F2A3F] transition-colors hover:text-[#F97316]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="justify-self-end rounded-md p-2 text-[#1F2A3F] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((value) => !value)}
        >
          {isMobileNavOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {isMobileNavOpen ? (
        <div className="border-t border-black/10 bg-white md:hidden">
          <ul className="site-container grid gap-4 py-4 text-[#1F2A3F]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
