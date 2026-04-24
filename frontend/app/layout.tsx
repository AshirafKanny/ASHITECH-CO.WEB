import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FloatingPhone from "../components/FloatingPhone";
import { absoluteUrl, defaultSeoImagePath, getSiteUrl } from "../lib/seo";

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
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
        <FloatingPhone />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
