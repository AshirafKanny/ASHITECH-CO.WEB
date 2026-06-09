import { NextRequest, NextResponse } from "next/server";

const PREFERRED_HOST = "keniwebdesign.com";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();

  if (hostname === `www.${PREFERRED_HOST}`) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.hostname = PREFERRED_HOST;
    redirectUrl.protocol = "https";

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};