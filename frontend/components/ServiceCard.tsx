import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-[#0F172A] bg-white p-6 transition-colors hover:bg-[#F8FAFC]">
      <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
      <p className="mt-3 leading-7 text-[#0F172A]">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#012166]">
        Learn more <ArrowRight size={16} aria-hidden="true" />
      </span>
    </article>
  );
}
