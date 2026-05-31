import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
    <footer className="relative isolate overflow-hidden bg-[#DCE8FF] text-[#2D374D]">
      <div className="footer-hole-bg" aria-hidden="true">
        <div className="footer-hole-grid footer-hole-grid-a" />
        <div className="footer-hole-grid footer-hole-grid-b" />
        <div className="footer-hole-haze" />
        <div className="footer-hole-core" />
      </div>

      <div className="site-container relative z-10 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr_0.85fr_1fr] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">Keni Web design</span>
            </Link>

            <p className="mt-5 max-w-md text-xs leading-6 text-[#4f5b70] sm:text-sm sm:leading-7">
              KENI WEB DESIGN helps Kampala businesses grow with modern web design, SEO-ready structure, and
              conversion-focused strategy. We build fast, mobile-first websites that turn visitors into customers.
            </p>

            <div className="mt-6 space-y-3 text-xs leading-5 text-[#4f5b70] sm:text-sm sm:leading-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#2A344A]">Kampala Office</p>
                  <p>Kansanga, UK Mall, Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
                <div>
                  <p>0744429808</p>
                  <p>0761856198</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
                <a href="mailto:info@keniwebdesign.com" className="hover:text-[#ff6b3d]">
                  info@keniwebdesign.com
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/kUZ7XeRiaQ1dxrMt8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-[#ff6b3d] hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] sm:text-xl">Services</h3>
            <ul className="mt-5 space-y-3 text-xs text-[#4f5b70] sm:text-sm">
              {linksColA.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-3 transition-colors hover:text-[#ff6b3d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] sm:text-xl">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-xs text-[#4f5b70] sm:text-sm">
              {linksColB.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-3 transition-colors hover:text-[#ff6b3d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] sm:text-xl">Follow Us</h3>
            <p className="mt-5 max-w-xs text-xs leading-6 text-[#4f5b70] sm:text-sm sm:leading-7">
              Stay connected with us on social media for updates and insights.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="footer-social-icon grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-label="Facebook"
              >
                <img src="/facebook.webp" alt="Facebook" className="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://x.com/ashirafkanny?s=21"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-label="X"
              >
                <img src="/xx.webp" alt="X" className="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://www.linkedin.com/company/119583960/admin/dashboard/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.webp" alt="LinkedIn" className="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://www.tiktok.com/@keni_webdesign?_r=1&_t=ZS-96pYZcq9Vhq"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-label="TikTok"
              >
                <img src="/tiktok.webp" alt="TikTok" className="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://www.youtube.com/@Keni-webdesign"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-label="YouTube"
              >
                <img src="/youtube.webp" alt="YouTube" className="h-6 w-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#C9D7F1] bg-[#DCE8FF]">
        <div className="site-container flex flex-col gap-4 py-6 text-xs text-[#4f5b70] sm:text-sm lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2020 - 2026 - KENI WEB DESIGN. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-[#ff6b3d]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#ff6b3d]">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-[#ff6b3d]">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
