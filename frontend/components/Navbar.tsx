"use client";

import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { serviceItems } from "@/lib/services";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Pricing", link: "/pricing" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody onMouseLeave={() => setIsServicesOpen(false)}>
          <NavbarLogo />
          <div className="flex items-center gap-6">
            <NavItems items={navItems} />
            <div className="relative hidden md:block">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#1F2A3F] transition-colors hover:text-[#F97316]"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((value) => !value)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown size={16} aria-hidden="true" />
              </button>

              {isServicesOpen ? (
                <div className="absolute left-0 top-full z-50 mt-3 w-88 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
                  <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                    Our Services
                  </div>
                  <ul className="grid gap-1">
                    {serviceItems.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block rounded-xl px-3 py-2 text-sm text-[#1F2A3F] transition-colors hover:bg-blue-50 hover:text-blue-700"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="block font-medium">{service.title}</span>
                          <span className="block text-xs text-[#6b7280]">{service.summary}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <a
            href="tel:+256744429808"
            className="hidden items-center gap-2 rounded-md bg-[#0070f3] px-8 py-2 text-sm font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] xl:inline-flex"
          >
            <span className="text-white">0744429808, 0761856198</span>
          </a>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <a
              href="tel:+256744429808"
              className="inline-flex items-center gap-2 rounded-md bg-[#0070f3] px-8 py-2 text-sm font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]"
            >
              <img
                src="/phone-icon.webp"
                alt=""
                className="h-4 w-4"
              />
              <span>0744429808, 0761856198</span>
            </a>
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-sm font-medium text-[#1F2A3F]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/services"
                className="block text-sm font-medium text-[#1F2A3F]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <div className="mt-3 grid gap-2 pl-3">
                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#51607a]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
