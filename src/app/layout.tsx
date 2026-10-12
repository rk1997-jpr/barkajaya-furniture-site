import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Barkajaya Indonesia",
  },
  description: siteConfig.description,
  keywords: [
    "furniture manufacturing",
    "indonesian furniture",
    "teak furniture",
    "custom furniture",
    "export furniture",
    "Barkajaya Indonesia",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://barkajaya-furniture-site.vercel.app",
    images: [
      {
        url: "https://barkajaya-furniture-site.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barkajaya Indonesia - Premium Furniture Manufacturing",
      },
    ],
    siteName: "Barkajaya Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      "https://barkajaya-furniture-site.vercel.app/og-image.jpg",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject
          attributes like cz-shortcut-listen into <body> before hydration */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
