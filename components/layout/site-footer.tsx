"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";
import type { DictionaryKey } from "@/lib/i18n/dictionary";

const footerLinks: readonly { href: string; label: DictionaryKey }[] = [
  { href: "/courses", label: "layout.nav.courses" },
  { href: "/teacher", label: "layout.nav.teacher" },
  { href: "/legal/terms", label: "layout.nav.terms" },
  { href: "/legal/privacy", label: "layout.footer.privacy" },
  { href: "/legal/refund", label: "layout.footer.refund" },
] as const;

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="brand-site-footer bg-best-ink text-best-border">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="footer-brand-lockup no-underline">
              <span className="footer-brand-logo">
                <Image
                  src="/images/brand/best-study-logo.png"
                  alt="BEST TUTORIAL HOME logo"
                  fill
                  sizes="76px"
                  className="object-contain"
                />
              </span>
              <span>
                <strong>{t("layout.brand")}</strong>
                <small lang="en">{t("layout.footer.tagline")}</small>
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-[1.75] text-best-border">
              {t("layout.footer.desc")}
            </p>
          </div>

          <nav aria-label={t("layout.footer.nav")}>
            <h2 className="text-base font-semibold text-best-cream">{t("layout.footer.links")}</h2>
            <ul className="mt-3 grid gap-1">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap-target inline-flex items-center text-best-border no-underline hover:text-best-cream"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-semibold text-best-cream">{t("layout.footer.contact")}</h2>
            <ul className="mt-3 grid gap-1">
              <li>
                <a href="#" className="tap-target content-placeholder inline-flex text-best-border">
                  {t("layout.footer.phone")}
                </a>
              </li>
              <li>
                <a href="#" className="tap-target content-placeholder inline-flex text-best-border">
                  {t("layout.footer.email")}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-[1.75] text-best-border">
              {t("layout.footer.payment")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}