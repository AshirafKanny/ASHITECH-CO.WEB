const badges = [
  "Mobile-first websites",
  "SEO-ready structure",
  "Fast delivery timelines",
  "Secure hosting guidance",
  "Conversion-focused design",
  "Ongoing support",
];

export default function TrustBadgesSection() {
  return (
    <section className="bg-white py-10" aria-label="Trust badges">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[#E4E8F1] bg-[#F8FAFC] px-5 py-2 text-xs font-semibold text-[#1E293B]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
