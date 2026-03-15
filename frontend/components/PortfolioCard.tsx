import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  category: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PortfolioCard({
  title,
  category,
  summary,
  imageSrc,
  imageAlt,
}: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#0F172A] bg-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={720}
        height={420}
        loading="lazy"
        className="h-52 w-full object-cover"
      />
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#012166]">{category}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">{title}</h3>
        <p className="mt-3 leading-7 text-[#0F172A]">{summary}</p>
      </div>
    </article>
  );
}
