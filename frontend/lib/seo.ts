const LOCAL_DEV_URL = "http://localhost:3000";
const DEFAULT_SITE_URL = "https://keniwebdesign.com";

function trimTrailingSlash(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (siteUrl && siteUrl.trim().length > 0) {
    return trimTrailingSlash(siteUrl.trim());
  }

  if (process.env.NODE_ENV === "development") {
    return LOCAL_DEV_URL;
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (process.env.VERCEL_ENV === "preview" && vercelUrl && vercelUrl.trim().length > 0) {
    return `https://${trimTrailingSlash(vercelUrl.trim())}`;
  }

  return DEFAULT_SITE_URL;
}

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export const defaultSeoImagePath = "/keniwebdesign-01.png";
