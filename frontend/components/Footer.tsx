import Link from "next/link";
import { Beaker, Facebook, Linkedin, Rocket, Twitter } from "lucide-react";

const linksColA = [
  "Wed Design (UI/UX)",
  "Web development",
  "SEO Optimization",
  "Product Engineering",
  "Technical Support",
  "Landing Pages Design",
];

const linksColB = ["About company", "Meet our teams", "Case Stories", "Latest News", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#ECEFF4] text-[#2D374D]">
      <div className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_1.02fr_0.92fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-13 w-13 place-items-center rounded-full bg-[#ff6b3d]/18 text-[#ff6b3d]">
                <Rocket size={28} aria-hidden="true" />
              </span>
              <span className="text-4xl font-bold tracking-tight text-[#1F2A3F]">OXENCE</span>
            </Link>

            <p className="mt-6 max-w-md text-base leading-8 text-[#6A7486]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq dantium,
              totam rem aperiam eaqu quae ab illo inventore veritatis et quasi architecto beatae
            </p>

            <div className="mt-7 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Beaker].map((Icon, index) => (
                <a
                  key={`social-${index}`}
                  href="#"
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#ff6b3d] transition-colors hover:bg-[#ff6b3d] hover:text-white"
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
                  <li key={item}>
                    <a href="#" className="inline-flex items-center gap-3 hover:text-[#ff6b3d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {linksColB.map((item) => (
                  <li key={item}>
                    <a href="#" className="inline-flex items-center gap-3 hover:text-[#ff6b3d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9B0BD]" aria-hidden="true" />
                      {item}
                    </a>
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
        &copy; Copyright 2022 Oxence. All right reserved
      </div>
    </footer>
  );
}
