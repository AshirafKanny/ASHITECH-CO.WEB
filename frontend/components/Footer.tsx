import Image from "next/image";
import Link from "next/link";
import { Beaker, Facebook, Linkedin, Twitter } from "lucide-react";

const linksColA = [
  { label: "Web Design Uganda", href: "/website-design-uganda" },
  { label: "Web Design Kampala", href: "/website-design-kampala" },
  { label: "SEO Services Uganda", href: "/seo-services-uganda" },
  { label: "Ecommerce Websites Uganda", href: "/ecommerce-websites-uganda" },
  { label: "Website Maintenance Uganda", href: "/website-maintenance-uganda" },
  { label: "Branding Services Uganda", href: "/branding-services-uganda" },
];

const linksColB = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies/kampala-legal-firm-website" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#ECEFF4] text-[#2D374D]">
      <div className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_1.02fr_0.92fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/keniwebdesign-01.png"
                alt="KENI WEB DESIGN logo"
                width={320}
                height={120}
                className="h-16 w-auto sm:h-20"
              />
              <span className="sr-only">KENI WEB DESIGN</span>
            </Link>

            <p className="mt-6 max-w-md text-base leading-8 text-[#6A7486]">
              KENI WEB DESIGN helps Kampala businesses grow with modern web design, SEO-ready structure, and
              conversion-focused strategy. We build fast, mobile-first websites that turn visitors into customers.
            </p>

            <div className="mt-5 text-sm leading-6 text-[#6A7486]">
              <p className="font-semibold text-[#2A344A]">Kampala Office</p>
              <p>Kansanga, UK Mall, Kampala, Uganda</p>
              <p>Phone: 0744429808 / 0761856198</p>
              <a
                href="https://maps.app.goo.gl/kUZ7XeRiaQ1dxrMt8"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-[#ff6b3d] hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Beaker].map((Icon, index) => (
                <a
                  key={`social-${index}`}
                  href="#"
                  className="footer-social-icon grid h-12 w-12 place-items-center rounded-full bg-white text-[#ff6b3d] transition-colors hover:bg-[#ff6b3d] hover:text-white"
                  aria-label="Social profile"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-[#2A344A]">Quick Links</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-base text-[#6A7486]">
              <ul className="space-y-3">
                {linksColA.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="inline-flex items-center gap-3 hover:text-[#ff6b3d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {linksColB.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="inline-flex items-center gap-3 hover:text-[#ff6b3d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-md border border-[#D3DCEC] px-8 py-9">
            <h3 className="text-4xl font-semibold text-[#2A344A]">Newsletter</h3>
            <p className="mt-2 text-base text-[#6A7486]">Sing up to get more every updates</p>

            <form className="mt-5 space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                className="h-12 w-full rounded-sm bg-white px-6 text-sm text-[#2A344A] outline-none placeholder:text-[#8A92A1]"
              />

              <input
                type="tel"
                placeholder="Enter phone number"
                inputMode="tel"
                autoComplete="tel"
                className="h-12 w-full rounded-sm bg-white px-6 text-sm text-[#2A344A] outline-none placeholder:text-[#8A92A1]"
              />

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff6b3d] px-9 text-sm font-semibold text-white transition-colors hover:bg-[#ff7d54]"
              >
                Subscribe Now&nbsp;&raquo;
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-[#DCE2EC] py-6 text-center text-lg text-[#2A344A]">
        &copy; Copyright 2022 KENI WEB DESIGN. All right reserved
      </div>
    </footer>
  );
}
