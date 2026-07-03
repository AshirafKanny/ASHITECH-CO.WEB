"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Industry } from "@/lib/industries";

type IndustriesCatalogProps = {
  industries: Industry[];
};

const categoryLabelMap: Record<string, string> = {
  agriculture: "Agriculture",
  automotive: "Automotive",
  construction: "Construction",
  education: "Education",
  entertainment: "Entertainment",
  finance: "Finance",
  food: "Food & Beverage",
  healthcare: "Healthcare",
  hospitality: "Hospitality",
  manufacturing: "Manufacturing",
  "professional-services": "Professional Services",
  "real-estate": "Real Estate",
  religious: "Religious & Faith",
  sports: "Sports & Fitness",
  technology: "Technology",
  general: "General",
};

const toCategoryLabel = (category?: string) => {
  if (!category) {
    return categoryLabelMap.general;
  }

  return (
    categoryLabelMap[category] ??
    category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

export default function IndustriesCatalog({ industries }: IndustriesCatalogProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const rawCategories = Array.from(
      new Set(
        industries.map((industry) => industry.category ?? "general"),
      ),
    ).sort((a, b) => toCategoryLabel(a).localeCompare(toCategoryLabel(b)));

    return ["all", ...rawCategories];
  }, [industries]);

  const filteredIndustries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return industries.filter((industry) => {
      const category = industry.category ?? "general";
      const matchesCategory = selectedCategory === "all" || category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        industry.name.toLowerCase().includes(normalizedQuery) ||
        industry.description.toLowerCase().includes(normalizedQuery) ||
        industry.heroTitle.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [industries, query, selectedCategory]);

  const groupedIndustries = useMemo(() => {
    const groups = new Map<string, Industry[]>();

    for (const industry of filteredIndustries) {
      const category = industry.category ?? "general";
      const existing = groups.get(category) ?? [];
      groups.set(category, [...existing, industry]);
    }

    return Array.from(groups.entries())
      .sort((a, b) => toCategoryLabel(a[0]).localeCompare(toCategoryLabel(b[0])))
      .map(([category, entries]) => ({
        category,
        label: toCategoryLabel(category),
        entries: entries.sort((a, b) => a.name.localeCompare(b.name)),
      }));
  }, [filteredIndustries]);

  return (
    <section className="py-14 md:py-18 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 rounded-2xl border border-gray-200 bg-slate-50 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
            <label className="block">
              <span className="block mb-2 text-sm font-semibold text-gray-700">Search industries</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: hospitals, fintech, schools, logistics..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-sm font-semibold text-gray-700">Filter category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full md:w-64 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : toCategoryLabel(category)}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Showing {filteredIndustries.length} of {industries.length} industries.
          </p>
        </div>

        {groupedIndustries.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-700">
            No industries match your search. Try a broader term or switch category.
          </div>
        )}

        <div className="space-y-12">
          {groupedIndustries.map((group) => (
            <section key={group.category} aria-label={group.label}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{group.label}</h2>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">
                  {group.entries.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {group.entries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:border-cyan-400"
                  >
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-cyan-700">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-cyan-700 group-hover:text-cyan-900">
                      Open Industry Page
                      <span className="ml-1 transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
