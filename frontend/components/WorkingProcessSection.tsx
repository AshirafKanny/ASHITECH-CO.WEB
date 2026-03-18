import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Info Gathering",
    description: "We begin by understanding your brand, goals, and target audience competitive",
    image: "/work-process1.webp",
  },
  {
    number: "02",
    title: "Idea Planning",
    description:
      "Idea planning involves brainstorming, research, setting goals, developing strategy and encouraging creativity",
    image: "/work-process2.webp",
  },
  {
    number: "03",
    title: "Design Analysis",
    description:
      "Design analysis involves evaluating requirements, examining structure, assessing usability, identifying strengths and weaknesses",
    image: "/work-process3.webp",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "This involve identifying and fixing errors, verifying functionality, ensuring performance, improving reliability, preparing deployment, releasing the product, and monitoring its initial performance.",
    image: "/work-process4.webp",
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="relative bg-white py-24 text-center" aria-labelledby="working-process-heading">
      <div className="site-container">
        {/* Top label with dots */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="text-[#FF6B4B] text-3xl">···</span>
          <span className="text-xl font-semibold text-[#FF6B4B]">Working Process</span>
          <span className="text-[#FF6B4B] text-3xl">···</span>
        </div>

        {/* Main heading */}
        <h2
          id="working-process-heading"
          className="mx-auto mb-44 max-w-2xl text-5xl font-bold text-[#0F172A]"
        >
          How does we works
        </h2>

        {/* Connected process steps with curved layout */}
        <div className="relative mt-20 h-120">
          {/* Curved dotted line SVG */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1400 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 112 178 C 260 64 338 20 448 25 C 560 30 666 220 784 198 C 946 168 1088 38 1288 63"
              stroke="rgba(15, 23, 42, 0.25)"
              strokeDasharray="15 10"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Process steps in curved wave pattern */}
          <div className="relative z-10 h-full">
            {/* Step 1 - lower */}
            <div className="absolute left-[8%] top-[70%] -translate-y-1/2 flex flex-col items-center">
              <span className="pointer-events-none absolute -top-24 -left-10 text-8xl font-semibold text-[#0F172A]/12 rotate-[-42deg]">
                {processSteps[0].number}
              </span>
              <div className="working-process-circle-wrap relative mb-8 h-40 w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#FF6B4B]">
                  <Image
                    src={processSteps[0].image}
                    alt={processSteps[0].title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                {processSteps[0].title}
              </h3>
              <p className="max-w-35 text-xs leading-5 text-[#666]">
                {processSteps[0].description}
              </p>
            </div>

            {/* Step 2 - higher */}
            <div className="absolute left-[32%] top-[34%] -translate-y-1/2 flex flex-col items-center">
              <span className="pointer-events-none absolute -top-24 -left-10 text-8xl font-semibold text-[#0F172A]/12 rotate-[-42deg]">
                {processSteps[1].number}
              </span>
              <div className="working-process-circle-wrap relative mb-8 h-40 w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#FF6B4B]">
                  <Image
                    src={processSteps[1].image}
                    alt={processSteps[1].title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                {processSteps[1].title}
              </h3>
              <p className="max-w-35 text-xs leading-5 text-[#666]">
                {processSteps[1].description}
              </p>
            </div>

            {/* Step 3 - lower */}
            <div className="absolute left-[56%] top-[75%] -translate-y-1/2 flex flex-col items-center">
              <span className="pointer-events-none absolute -top-24 -left-10 text-8xl font-semibold text-[#0F172A]/12 rotate-[-42deg]">
                {processSteps[2].number}
              </span>
              <div className="working-process-circle-wrap relative mb-8 h-40 w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#FF6B4B]">
                  <Image
                    src={processSteps[2].image}
                    alt={processSteps[2].title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                {processSteps[2].title}
              </h3>
              <p className="max-w-35 text-xs leading-5 text-[#666]">
                {processSteps[2].description}
              </p>
            </div>

            {/* Step 4 - higher */}
            <div className="absolute right-[8%] top-[44%] -translate-y-1/2 flex flex-col items-center">
              <span className="pointer-events-none absolute -top-24 -left-10 text-8xl font-semibold text-[#0F172A]/12 rotate-[-42deg]">
                {processSteps[3].number}
              </span>
              <div className="working-process-circle-wrap relative mb-8 h-40 w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#FF6B4B]">
                  <Image
                    src={processSteps[3].image}
                    alt={processSteps[3].title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
                {processSteps[3].title}
              </h3>
              <p className="max-w-35 text-xs leading-5 text-[#666]">
                {processSteps[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}