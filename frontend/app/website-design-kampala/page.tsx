import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";
import { absoluteUrl } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const slug = "website-design-kampala";
const content = getSeoLandingPage(slug);

export const metadata: Metadata = content
  ? {
      title: content.title,
      description: content.description,
      alternates: {
        canonical: "/website-design-kampala",
      },
      openGraph: {
        title: content.title,
        description: content.description,
        url: "/website-design-kampala",
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

export default function WebsiteDesignKampalaPage() {
  if (!content) {
    notFound();
  }

  return <SeoLandingTemplate content={content} slug={slug} />;
}
