import type { Metadata } from "next";
import { Inter, Poppins, Geist } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FloatingPhone from "../components/FloatingPhone";
import { absoluteUrl, defaultSeoImagePath, getSiteUrl } from "../lib/seo";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "KENI WEB DESIGN | Website Design Company",
    template: "%s | KENI WEB DESIGN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  description:
    "KENI WEB DESIGN is a professional website design company building high-performance websites for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "KENI WEB DESIGN | Website Design Company",
    description:
      "KENI WEB DESIGN is a professional website design company building high-performance websites for modern businesses.",
    siteName: "KENI WEB DESIGN",
    images: [
      {
        url: absoluteUrl(defaultSeoImagePath),
        width: 1200,
        height: 630,
        alt: "KENI WEB DESIGN",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KENI WEB DESIGN | Website Design Company",
    description:
      "KENI WEB DESIGN is a professional website design company building high-performance websites for modern businesses.",
    images: [absoluteUrl(defaultSeoImagePath)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KENI WEB DESIGN",
    url: getSiteUrl(),
    logo: absoluteUrl(defaultSeoImagePath),
    image: absoluteUrl(defaultSeoImagePath),
    telephone: "+256744429808",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kansanga, UK Mall",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    hasMap: "https://maps.app.goo.gl/q8er9En2ANf4GTN3A",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+256744429808",
        contactType: "customer service",
        areaServed: "UG",
      },
      {
        "@type": "ContactPoint",
        telephone: "+256761856198",
        contactType: "customer service",
        areaServed: "UG",
      },
    ],
    areaServed: ["Kampala", "Uganda", "East Africa"],
    serviceType: ["Web Design", "Web Development", "SEO"],
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {clarityProjectId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityProjectId}");`}
          </Script>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <FloatingPhone />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
