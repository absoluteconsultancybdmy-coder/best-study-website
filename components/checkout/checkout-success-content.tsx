"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function CheckoutSuccessContent() {
  const { t } = useLanguage();

  return (
    <section className="belief-story-section py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <div
            style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "var(--color-best-green)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto",
            }}
            aria-hidden="true"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-best-ink">{t("checkout.success.title")}</h1>
          <p className="mt-3 leading-[1.75] text-best-body">{t("checkout.success.lead")}</p>
          <Link
            href="/app"
            className="button-primary tap-target mt-8 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
          >
            {t("portal.nav.dashboard")}
          </Link>
        </div>
      </Container>
    </section>
  );
}