"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { serviceItems } from "@/lib/services";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
  { name: "About Us", link: "/about-us" },
  { name: "Pricing", link: "/pricing" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody
          onMouseLeave={() => setIsServicesOpen(false)}
          className="hidden md:flex"
        >
          <NavbarLogo imageClassName="h-8 w-auto" />
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
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-2 block rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    More About Our Services
                  </Link>
                </div>
              ) : null}
            </div>
          </div>

          <a
            href="tel:+256744429808"
            className="hidden items-center gap-2 rounded-md bg-[#0070f3] px-8 py-2 text-sm font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] xl:inline-flex"
          >
            <img
              src="/phone-ico-r.webp"
              alt=""
              className="h-5 w-5"
            />
            <span className="text-white">0744429808, 0761856198</span>
          </a>
        </NavBody>

        <MobileNav>
          <MobileNavHeader className="h-14">
            <NavbarLogo imageClassName="h-7 w-auto" />
            <Drawer
              direction="right"
              open={isMobileMenuOpen}
              onOpenChange={(open) => {
                setIsMobileMenuOpen(open);
                if (!open) {
                  setIsMobileServicesOpen(false);
                }
              }}
            >
              <DrawerTrigger asChild>
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileServicesOpen(false)}
                />
              </DrawerTrigger>

              <DrawerContent className="bg-[#0b63f3] text-white">
                <DrawerHeader className="border-white/15">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/my_logor_500x500.webp"
                      alt="KENI WEB DESIGN logo"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-xl object-cover"
                      priority
                    />
                    <div>
                      <p className="text-lg font-semibold text-white">Keni Web Design</p>
                    </div>
                  </div>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+256744429808"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0b63f3]"
                    >
                      <img src="/phone-icon.webp" alt="" className="h-4 w-4" />
                      <span className="text-[#0b63f3]">0744429808, 0761856198</span>
                    </a>

                    {navItems.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="pt-2">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0b63f3]"
                        aria-expanded={isMobileServicesOpen}
                        onClick={() => setIsMobileServicesOpen((value) => !value)}
                      >
                        Services
                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`ml-2 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isMobileServicesOpen ? (
                        <div className="mt-3 grid gap-2 pl-3">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="inline-flex w-full items-center justify-center rounded-md border border-white/40 bg-white px-3 py-2 text-sm font-bold leading-tight text-[#06327f] shadow-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            More About Our Services
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <DrawerFooter className="border-white/15 bg-transparent">
                  <button
                    type="button"
                    className="w-full rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    Close
                  </button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </div>
  );
}
