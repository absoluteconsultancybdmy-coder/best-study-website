import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "বেস্ট স্টাডি",
  description:
    "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary ও Board English শেখার প্ল্যাটফর্ম।",
  icons: {
    icon: "/images/brand/best-study-logo.png",
    apple: "/images/brand/best-study-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn-BD">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-24 bg-best-ink px-4 py-2 text-best-cream no-underline transition-transform focus:translate-y-0"
        >
          মূল কনটেন্টে যান
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
