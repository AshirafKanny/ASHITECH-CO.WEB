import { NextRequest, NextResponse } from "next/server";
import { getSiteUrl } from "./lib/seo";

export function middleware(request: NextRequest) {
  const { hostname, protocol } = request.nextUrl;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

  if (isLocalhost) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;

  if (hostname === "www.keniwebdesign.com") {
    redirectUrl.hostname = "keniwebdesign.com";
    shouldRedirect = true;
  }

  if (protocol !== "https:") {
    redirectUrl.protocol = "https:";
    shouldRedirect = true;
  }

  return shouldRedirect ? NextResponse.redirect(redirectUrl, 308) : NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};