import Image from "next/image";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Mobile Application Design",
    imageSrc: "/images/project1.webp",
    imageAlt: "Mobile application design showcase",
  },
  {
    title: "Software Landing Pages",
    imageSrc: "/images/project2.webp",
    imageAlt: "Software landing page showcase",
  },
  {
    title: "Creative Website design",
    imageSrc: "/images/project3.webp",
    imageAlt: "Creative website design showcase",
  },
];

export default function RecentProjectsSection() {
  return (
    <section className="bg-[#ECEFF4] py-20 lg:py-24" aria-labelledby="recent-projects-heading">
      <div className="mx-auto w-full max-w-7xl px-4">
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

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="recent-project-card overflow-hidden bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
              <div className="recent-project-media relative h-72 w-full bg-[#2f2a74]">
                <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
                <div className="recent-project-overlay" aria-hidden="true" />
                <button
                  type="button"
                  aria-label={`Open project: ${item.title}`}
                  className="recent-project-cta absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#ff5e2e] shadow-lg"
                >
                  <ArrowRight size={24} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>

              <div className="px-5 pb-2.5 pt-3 text-center">
                <h3 className="text-[1.65rem] font-normal leading-tight text-[#273248]">{item.title}</h3>
                <p className="mt-1.5 text-base font-normal text-[#ff5e2e]">
                  <span aria-hidden="true">&#8212;</span>
                  <span className="mx-4">Design Responsive</span>
                  <span aria-hidden="true">&#8212;</span>
                </p>
              </div>
            </article>
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