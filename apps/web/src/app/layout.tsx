import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://theoriginstores.com";
const siteTitle = "TheOriginStores | Shop the Latest Fashion Trends";
const siteDescription =
  "TheOriginStores — curated, on-trend fashion launching soon. Discover our debut collection and follow us for updates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | TheOriginStores",
  },
  description: siteDescription,
  keywords: ["TheOriginStores", "fashion", "clothing", "trends", "online shopping"],
  // Tells Google not to auto-translate this page's title/snippet in search results
  other: {
    google: "notranslate",
  },
  icons: {
    icon: "/TheOriginLogoTab.png",
    shortcut: "/TheOriginLogoTab.png",
    apple: "/TheOriginLogoTab.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "TheOriginStores",
    images: [
      {
        url: "/TheOriginLogoTab.png",
        width: 512,
        height: 512,
        alt: "TheOriginStores",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/TheOriginLogoTab.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  // Add your real Search Console verification code here once you have it
  // verification: {
  //   google: "your-google-site-verification-code",
  // },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      translate="no"
      className={`notranslate ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Structured data helps Google understand this is a real business, not just a placeholder page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "TheOriginStores",
              url: siteUrl,
              logo: `${siteUrl}/TheOriginLogoTab.png`,
              image: `${siteUrl}/TheOriginLogoTab.png`,
              description: siteDescription,
              sameAs: ["https://www.instagram.com/theoriginstores.ofcl/"],
              // Once you have a physical/registered address, add it here —
              // it strengthens how Google displays you as a real business:
              // address: {
              //   "@type": "PostalAddress",
              //   streetAddress: "",
              //   addressLocality: "",
              //   addressRegion: "",
              //   postalCode: "",
              //   addressCountry: "IN",
              // },
            }),
          }}
        />
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}