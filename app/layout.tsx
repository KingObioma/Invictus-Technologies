import type { Metadata } from "next";
import { Syne, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invictustechnologies.com"),
  title: {
    default: "Invictus Technologies — Engineering Scalable Software Systems & AI Solutions",
    template: "%s | Invictus Technologies",
  },
  description:
    "Invictus Technologies engineers scalable digital systems for businesses that refuse to stay average. From AI solutions to enterprise software — production-grade systems that power growth.",
  keywords: [
    "software development Nigeria",
    "AI solutions",
    "web development",
    "mobile app development",
    "enterprise software",
    "SaaS development",
    "cloud infrastructure",
    "Next.js development",
    "digital transformation",
    "tech company Nigeria",
    "software engineering",
    "API development",
  ],
  authors: [{ name: "Invictus Technologies" }],
  creator: "Invictus Technologies",
  publisher: "Invictus Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Invictus Technologies",
    title: "Invictus Technologies — Engineering Scalable Software Systems & AI Solutions",
    description:
      "We engineer scalable digital systems for businesses that refuse to stay average. Production-grade software, AI solutions, and cloud infrastructure.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Invictus Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus Technologies",
    description: "Engineering Scalable Software Systems & AI Solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
