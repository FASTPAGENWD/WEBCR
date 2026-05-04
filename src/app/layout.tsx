import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Websites en webapps op maat die converteren en snel laden. Premium webontwikkeling, design, performance en SEO — R.C Web Creations, Nederland.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R.C Web Creations | Premium webontwikkeling",
    template: "%s | R.C Web Creations",
  },
  description,
  keywords: [
    "webontwikkeling",
    "website laten maken",
    "webdesign",
    "Next.js",
    "SEO",
    "performance",
    "conversie",
    "Nederland",
  ],
  authors: [{ name: "R.C Web Creations", url: siteUrl }],
  creator: "R.C Web Creations",
  publisher: "R.C Web Creations",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "R.C Web Creations",
    title: "R.C Web Creations | Premium webontwikkeling",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "R.C Web Creations | Premium webontwikkeling",
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "R.C Web Creations",
      url: siteUrl,
      email: "info@rc-webcreation.nl",
      telephone: "+31685436044",
      address: { "@type": "PostalAddress", addressCountry: "NL" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "R.C Web Creations",
      inLanguage: "nl-NL",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
