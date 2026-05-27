import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import { absoluteUrl } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const slug = "business-websites-uganda";
const content = getSeoLandingPage(slug);

export const metadata: Metadata = content
  ? {
      title: content.title,
      description: content.description,
      alternates: {
        canonical: "/business-websites-uganda",
      },
      openGraph: {
        title: content.title,
        description: content.description,
        url: "/business-websites-uganda",
        type: "website",
        images: [
          {
            url: absoluteUrl(content.heroImage),
            width: 1200,
            height: 630,
            alt: content.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: content.title,
        description: content.description,
        images: [absoluteUrl(content.heroImage)],
      },
    }
  : {};

export default function BusinessWebsitesUgandaPage() {
  if (!content) {
    notFound();
  }

  return <SeoLandingTemplate content={content} slug={slug} />;
}
