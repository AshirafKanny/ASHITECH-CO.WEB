import {
  Gauge,
  Laptop,
  LayoutTemplate,
  SearchCheck,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  title: string;
  icon: LucideIcon;
};

const features: FeatureItem[] = [
  { title: "Responsive design", icon: Laptop },
  { title: "Powerful Customization", icon: Settings },
  { title: "Cool & modern animations", icon: Gauge },
  { title: "SEO Friendly Coding", icon: SearchCheck },
  { title: "Best Technical supports", icon: Wrench },
  { title: "Varied Layouts & parallax", icon: LayoutTemplate },
];

export default function CoreFeaturesSection() {
  return (
    <section className="bg-[#ECEFF4] py-22" aria-labelledby="core-features-heading">
      <div className="site-container">
        <p className="flex items-center justify-center gap-3 text-sm font-semibold text-[#F97316]">
          <span aria-hidden="true">...</span>
          <span className="underline underline-offset-3">Core Features</span>
          <span aria-hidden="true">...</span>
        </p>

        <h2
          id="core-features-heading"
          className="mt-4 text-center text-4xl font-bold tracking-[-0.02em] text-[#0F172A]"
        >
          Amazing web design features
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="feature-card-hover flex min-h-34 flex-col items-center justify-center rounded-lg bg-[#F7F7F8] px-3 py-6 text-center"
              >
                <span className="feature-card-icon grid h-11 w-11 place-items-center text-[#ff5e2e]">
                  <Icon size={34} strokeWidth={1.3} aria-hidden="true" />
                </span>
                <h3 className="feature-card-title mt-4 text-base leading-6 font-normal text-[#0F172A]">{feature.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}