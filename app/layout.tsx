import type { Metadata } from "next";
import { HtmlLangSync } from "@/components/layout/html-lang-sync";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LanguageProvider } from "@/lib/i18n/language-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "বেস্ট টিউটোরিয়াল হোম", template: "%s — বেস্ট টিউটোরিয়াল হোম" },
  description:
    "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary ও Board English শেখার প্ল্যাটফর্ম।",
  icons: { icon: "/images/brand/best-study-logo.png", apple: "/images/brand/best-study-logo.png" },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "বেস্ট টিউটোরিয়াল হোম",
    images: [{ url: "/images/brand/best-study-logo.png", width: 512, height: 512, alt: "বেস্ট টিউটোরিয়াল হোম" }],
  },
  twitter: { card: "summary", images: ["/images/brand/best-study-logo.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn-BD">
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <HtmlLangSync />
          <LanguageToggle />
          <a
            href="#main-content"
            className="fixed left-4 top-14 z-50 -translate-y-24 bg-best-ink px-4 py-2 text-best-cream no-underline transition-transform focus:translate-y-0"
          >
            মূল কনটেন্টে যান
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
