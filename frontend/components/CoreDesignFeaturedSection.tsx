import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumn,
  MonitorSmartphone,
  Palette,
  SearchCheck,
  ShoppingCart,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type FeatureCard = {
  title: string;
  icon: LucideIcon;
};

const leftCards: FeatureCard[] = [
  { title: "Website Creation from Scratch", icon: Palette },
  { title: "Website maintenance Services", icon: Wrench },
];

const rightCards: FeatureCard[] = [
  { title: "Search Engine Optimization", icon: SearchCheck },
  { title: "User Experience and Design", icon: ChartNoAxesColumn },
];

const bottomCards: FeatureCard[] = [
  { title: "eCommerce and product selling", icon: ShoppingCart },
  { title: "Responsive websites (UI/UX) design", icon: MonitorSmartphone },
];

function ServiceFeatureCard({ title, icon: Icon }: FeatureCard) {
  return (
    <article className="group flex min-h-64 w-full max-w-64 flex-col items-center justify-center rounded-md bg-[#181821] px-8 py-10 text-center transition-transform duration-300 hover:-translate-y-2">
      <Icon size={50} strokeWidth={1.4} className="text-[#ff5e2e]" aria-hidden="true" />
      <h3 className="mt-8 text-4xl font-semibold leading-12 text-white">{title}</h3>
      <span className="mt-6 inline-flex text-white transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
        <ArrowRight size={36} strokeWidth={1.8} />
      </span>
    </article>
  );
}

export default function CoreDesignFeaturedSection() {
  return (
    <section className="relative overflow-hidden bg-[#1f1f25] py-32 text-white lg:py-44" aria-labelledby="core-design-featured-heading">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-80 bg-[radial-gradient(circle_at_left_center,rgba(249,115,22,0.2),rgba(31,31,37,0)_72%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle,rgba(249,115,22,0.6),rgba(31,31,37,0)_70%)]" />
      <div className="pointer-events-none absolute right-24 top-18 h-24 w-24 rounded-full bg-[radial-gradient(circle,#ffffff_1.4px,transparent_1.4px)] bg-size-[9px_9px] opacity-45" />

      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-96"
        viewBox="0 0 352 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 14C39 14 60 40 60 88C60 141 91 160 138 146C182 132 217 142 239 182C258 217 289 230 352 215"
          stroke="rgba(255,255,255,0.86)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <div className="site-container relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#ff5e2e]">
          &#183;&#183;&#183;{" "}
          <span className="underline decoration-[#ff5e2e] underline-offset-2 hover:text-[#ff8b5f] transition-colors">
            Core Design Featured
          </span>
          {" "}&#183;&#183;&#183;
        </p>
        <h2
          id="core-design-featured-heading"
          className="mx-auto mt-3 max-w-4xl text-center text-5xl font-bold leading-tight text-white lg:text-6xl"
        >
          What we provide for website
        </h2>

        <div className="mx-auto mt-24 w-full px-0">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_auto_1.2fr] lg:items-center">
            <div className="grid justify-items-center gap-6 lg:justify-items-end lg:pt-16">
              {leftCards.map((card) => (
                <ServiceFeatureCard key={card.title} {...card} />
              ))}
            </div>

            <div className="flex flex-col items-center px-4">
              <svg className="mb-4 h-20 w-96" viewBox="0 0 240 56" fill="none" aria-hidden="true">
                <path id="featured-curve-path" d="M18 42C56 4 184 4 222 42" />
                <text fill="white" fontSize="18" fontWeight="600" letterSpacing="0.03em">
                  <textPath href="#featured-curve-path" startOffset="50%" textAnchor="middle">
                    Our awesome digital web design solution
                  </textPath>
                </text>
              </svg>

              <div className="overflow-hidden rounded-[999px] bg-[#d9d0c6]">
                <Image
                  src="/images/ashitech.webp"
                  alt="ASHITECH featured central service showcase"
                  width={340}
                  height={510}
                  className="h-127.5 w-72 object-cover"
                />
              </div>
            </div>

            <div className="grid justify-items-center gap-6 lg:justify-items-start lg:pt-16">
              {rightCards.map((card) => (
                <ServiceFeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>

          <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
            {bottomCards.map((card) => (
              <ServiceFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}