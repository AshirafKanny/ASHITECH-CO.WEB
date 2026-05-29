"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { portfolioProjects } from "@/lib/portfolio";
const items = portfolioProjects.slice(0, 6);

export default function RecentProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[#ECEFF4] py-20 lg:py-24" aria-labelledby="recent-projects-heading">
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
      <div className="mx-auto w-full max-w-7xl px-4 relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#ff5e2e]">
          &#183;&#183;&#183;{" "}
          <span className="underline decoration-[#ff5e2e] underline-offset-2">Recent Projects</span>
          {" "}&#183;&#183;&#183;
        </p>

        <h2
          id="recent-projects-heading"
          className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold leading-tight text-[#1E293B]"
        >
          Look at latest works gallery
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <CardContainer key={item.slug} className="inter-var">
              <CardBody className="group/card relative h-full w-full rounded-xl border border-black/[0.08] bg-gray-50 p-4 shadow-[0_2px_12px_rgba(15,23,42,0.08)]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-[#273248]"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 text-sm text-[#ff5e2e]"
                >
                  {item.category}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={480}
                    height={360}
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  />
                </CardItem>
                <div className="mt-6 flex items-center justify-between">
                  <Link href={`/case-studies/${item.slug}`} aria-label={`Open case study: ${item.title}`}>
                    <CardItem
                      translateZ={20}
                      as="div"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-[#273248]"
                    >
                      View Case Study
                      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                    </CardItem>
                  </Link>
                  <Link
                    href={item.exploreUrl ?? `/case-studies/${item.slug}`}
                    aria-label={`Explore project: ${item.title}`}
                    target={item.exploreUrl ? "_blank" : undefined}
                    rel={item.exploreUrl ? "noreferrer" : undefined}
                  >
                    <CardItem
                      translateZ={20}
                      as="div"
                      className="rounded-xl bg-[#ff5e2e] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#ff6b3d]"
                    >
                      Explore
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full border border-[#ff5e2e]" />
          <span className="h-3 w-3 rounded-full bg-[#ff5e2e]" />
        </div>
      </div>
    </section>
  );
}