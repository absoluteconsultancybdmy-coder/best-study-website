"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";
import type { DictionaryKey } from "@/lib/i18n/dictionary";

const footerLinks: readonly { href: string; label: DictionaryKey }[] = [
  { href: "/courses", label: "layout.nav.courses" },
  { href: "/free-class", label: "layout.nav.free" },
  { href: "/teacher", label: "layout.nav.teacher" },
  { href: "/blog", label: "layout.footer.blog" },
  { href: "/about", label: "layout.footer.about" },
  { href: "/faq", label: "layout.footer.faq" },
  { href: "/pricing", label: "layout.footer.pricing" },
  { href: "/contact", label: "layout.nav.contact" },
  { href: "/legal/terms", label: "layout.nav.terms" },
  { href: "/legal/privacy", label: "layout.footer.privacy" },
  { href: "/legal/refund", label: "layout.footer.refund" },
] as const;

const payments = [
  { name: "bKash", bg: "#E2136E", mark: "b", color: "#fff" },
  { name: "Nagad", bg: "#F5821F", mark: "N", color: "#fff" },
];

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="brand-site-footer bg-best-ink text-best-border" style={{ borderTop: "3px solid #006A4E" }}>
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="footer-brand-lockup no-underline">
              <span className="footer-brand-logo">
                <Image src="/images/brand/best-study-logo.png" alt="BEST TUTORIAL HOME logo" fill sizes="76px" className="object-contain" />
              </span>
              <span>
                <strong>{t("layout.brand")}</strong>
                <small lang="en">{t("layout.footer.tagline")}</small>
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-[1.75] text-best-border">{t("layout.footer.desc")}</p>
          </div>

          <nav aria-label={t("layout.footer.nav")}>
            <h2 className="text-base font-semibold text-best-cream">{t("layout.footer.links")}</h2>
            <ul className="mt-3 grid gap-1">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="tap-target inline-flex items-center text-best-border no-underline hover:text-best-cream">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-semibold text-best-cream">{t("layout.footer.contact")}</h2>
            <p className="mt-3 text-sm leading-[1.75] text-best-border">
              রাজশাহী-ভিত্তিক English শিক্ষা প্রতিষ্ঠান। Class ৩–১০, SSC ও HSC শিক্ষার্থীদের Grammar, Writing, Reading ও Vocabulary।
            </p>
            <p className="mt-2 text-xs text-best-border opacity-60">
              ফোন ও ইমেইল শীঘ্রই যোগ হবে।
            </p>
            <div className="mt-5">
              <p className="text-xs text-best-border" style={{ marginBottom: 6 }}>{t("layout.footer.payment")}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                {payments.map((item) => (
                  <span key={item.name} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: item.bg, borderRadius: 6, padding: "3px 8px 3px 5px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.18)" stroke="rgba(0,0,0,0.12)" />
                      <text x="8" y="12" textAnchor="middle" fill={item.color} fontSize={item.name === "COIN" ? "7" : "10"} fontWeight="bold" fontFamily="sans-serif">{item.mark}</text>
                    </svg>
                    <span style={{ color: item.color, fontSize: "0.7rem", fontWeight: 700 }}>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", background: "rgba(255,255,255,0.06)", borderTop: "1px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}>
        <Container>
          <div className="py-4 text-xs leading-[1.75]" style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem 1.5rem", color: "rgba(255,255,255,0.45)" }}>
            {[
              ["ব্যবসার নাম", "Best Tutorial Home"],
              ["স্বত্বাধিকারী", "Md. Intizam Chowdhury"],
              ["ট্রেড লাইসেন্স নং", "11152"],
              ["ইস্যুকারী", "Naogaon Municipality"],
              ["ঠিকানা", "House No. 8, Doyel Road, Post Office Para, Naogaon"],
              ["বৈধতা", "FY 2025-2026"],
            ].map(([label, value]) => (
              <span key={label}><span style={{ color: "rgba(255,255,255,0.65)" }}>{label}:</span> {value}</span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
