const LOCAL_DEV_URL = "http://localhost:3000";

function trimTrailingSlash(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (siteUrl && siteUrl.trim().length > 0) {
    return trimTrailingSlash(siteUrl.trim());
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl && vercelUrl.trim().length > 0) {
    return `https://${trimTrailingSlash(vercelUrl.trim())}`;
  }

  return LOCAL_DEV_URL;
}

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export const defaultSeoImagePath = "/images/ashitech.webp";
