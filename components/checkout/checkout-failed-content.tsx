"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function CheckoutFailedContent() {
  const { t } = useLanguage();

  return (
    <section className="belief-story-section py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <div
            style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "#dc2626",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto",
            }}
            aria-hidden="true"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-best-ink">{t("checkout.failed.title")}</h1>
          <p className="mt-3 leading-[1.75] text-best-body">{t("checkout.failed.lead")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/courses"
              className="button-primary tap-target inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
            >
              {t("checkout.failed.retry")}
            </Link>
            <a
              href="https://wa.me/880XXXXXXXXX"
              className="tap-target inline-flex items-center justify-center px-8 py-3 font-semibold no-underline content-placeholder"
              style={{ border: "1px solid var(--color-best-border)", borderRadius: ".75rem", color: "var(--color-best-body)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}