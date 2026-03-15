"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Rocket, Search, X } from "lucide-react";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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
          className={`rounded-md p-2 md:hidden ${
            isHome ? "border border-white/70 text-white" : "border border-[#0F172A] text-[#0F172A]"
          }`}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
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
          {isHome ? (
            <li>
              <Link
                href="/contact"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0F172A]"
              >
                Get A Quote
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>

      {isOpen ? (
        <div className={`border-t md:hidden ${isHome ? "border-white/20 bg-[#171422]" : "border-[#0F172A] bg-white"}`}>
          <ul className="site-container grid gap-4 py-4 text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white! text-sm font-medium"
                  onClick={() => setIsOpen(false)}
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
    </header>
  );
}
