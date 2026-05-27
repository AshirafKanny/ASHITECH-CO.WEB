import {
  Gauge,
  Laptop,
  LayoutTemplate,
  SearchCheck,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { CometCard } from "@/components/ui/comet-card";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

type FeatureItem = {
  title: string;
  icon: LucideIcon;
};

const features: FeatureItem[] = [
  { title: "Responsive design", icon: Laptop },
  { title: "Custom website builds", icon: Settings },
  { title: "Modern UI and motion", icon: Gauge },
  { title: "SEO-ready structure", icon: SearchCheck },
  { title: "Reliable support", icon: Wrench },
  { title: "Flexible layouts", icon: LayoutTemplate },
];

export default function CoreFeaturesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#ECEFF4] py-22"
      aria-labelledby="core-features-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <DottedGlowBackground
          className="pointer-events-none opacity-20"
          opacity={1}
          gap={12}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      </div>

      <div className="site-container relative z-10">
        <p className="flex items-center justify-center gap-3 text-sm font-semibold text-[#F97316]">
          <span aria-hidden="true">...</span>
          <span className="underline underline-offset-3">Core Features</span>
          <span aria-hidden="true">...</span>
        </p>

        <h2
          id="core-features-heading"
          className="mt-4 text-center text-4xl font-bold tracking-[-0.02em] text-[#0F172A]"
        >
          Web design features built for growth
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <CometCard key={feature.title}>
                <article className="feature-card-hover flex min-h-34 flex-col items-center justify-center rounded-lg bg-[#1F2121] px-3 py-6 text-center">
                  <span className="feature-card-icon grid h-11 w-11 place-items-center text-[#ff5e2e]">
                    <Icon size={34} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <h3 className="feature-card-title mt-4 text-base leading-6 font-normal text-white">
                    {feature.title}
                  </h3>
                </article>
              </CometCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}