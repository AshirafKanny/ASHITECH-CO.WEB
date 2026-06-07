import Link from "next/link";
import { ArrowRight, Megaphone, PenTool, Search, SearchCheck, ShoppingCart, Sparkles, TrendingUp } from "lucide-react";
import BlogHeroStats from "./BlogHeroStats";

type BlogHeroSectionProps = {
  searchTerm: string;
  articleCount: number;
  latestPostHref: string;
};

const topicCards = [
  {
    label: "Website Design",
    href: "/blog?q=website%20design",
    description: "UI ideas, UX patterns, and conversion-friendly layouts.",
    icon: PenTool,
  },
  {
    label: "SEO",
    href: "/blog?q=seo",
    description: "Search visibility, technical SEO, and content strategy.",
    icon: SearchCheck,
  },
  {
    label: "E-Commerce",
    href: "/blog?q=ecommerce",
    description: "Store design, product pages, and online sales systems.",
    icon: ShoppingCart,
  },
  {
    label: "Digital Marketing",
    href: "/blog?q=digital%20marketing",
    description: "Campaign ideas, messaging, and lead generation.",
    icon: Megaphone,
  },
  {
    label: "Branding",
    href: "/blog?q=branding",
    description: "Identity systems, visual direction, and trust signals.",
    icon: Sparkles,
  },
  {
    label: "Business Growth",
    href: "/blog?q=business%20growth",
    description: "Practical ideas for scaling visibility and revenue.",
    icon: TrendingUp,
  },
];

export default function BlogHeroSection({ searchTerm, articleCount, latestPostHref }: BlogHeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#171422] text-white"
      aria-labelledby="blog-hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(212,175,55,0.24),transparent_34%),radial-gradient(circle_at_84%_8%,rgba(245,240,230,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.14),transparent_42%)]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="site-container relative z-10 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl">
            <p className="animate-[blog-hero-fade_0.75s_ease-out_both] text-xs font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
              Web Design • SEO • Digital Growth
            </p>

            <h1
              id="blog-hero-heading"
              className="animate-[blog-hero-fade_0.9s_ease-out_both] mt-5 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            >
              Professional <span className="text-[#D4AF37]">Web Design</span>, <span className="text-[#D4AF37]">SEO</span> &amp;{' '}
              <span className="text-[#D4AF37]">Digital Growth</span> Insights
            </h1>

            <p className="mx-auto mt-6 max-w-175 text-lg leading-8 text-white/82 sm:text-xl">
              Discover expert articles, website design tips, SEO strategies, digital marketing insights, and business growth
              guides from Keni Web Design to help your business succeed online.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={latestPostHref}
                className="inline-flex items-center justify-center rounded-full bg-[#0b63f3] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0755d4]"
              >
                Read Latest Articles
                <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Get a Website Quote
              </Link>
            </div>

            <form action="/blog" method="get" className="mx-auto mt-8 max-w-3xl">
              <label htmlFor="blog-search" className="mb-3 block text-center text-sm font-semibold text-white/90">
                Search Our Blog
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7f695f]" size={18} aria-hidden="true" />
                  <input
                    id="blog-search"
                    name="q"
                    defaultValue={searchTerm}
                    type="search"
                    placeholder="Search web design, SEO, websites, digital marketing..."
                    className="h-14 w-full rounded-full border border-white/12 bg-white/96 pl-12 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#6f6057] shadow-[0_16px_35px_rgba(15,23,42,0.2)] outline-none transition focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#0b63f3] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0755d4]"
                >
                  Search
                </button>
              </div>
              <p className="mt-3 text-xs text-white/65">Browse {articleCount.toLocaleString()} articles and topic-led guides.</p>
            </form>

            <div className="mt-12">
              <BlogHeroStats />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">Explore Topics</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Explore Topics</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-white/72">
              Use these topic filters to move through our blog archive by search intent, service area, and business growth stage.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {topicCards.map((topic) => {
              const Icon = topic.icon;

              return (
                <Link
                  key={topic.label}
                  href={topic.href}
                  className="group rounded-2xl border border-white/10 bg-white/7 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/14 text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{topic.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/72">{topic.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}