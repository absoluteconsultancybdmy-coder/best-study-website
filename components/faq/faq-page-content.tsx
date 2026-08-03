"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function FaqPageContent() {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ];

  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("faq.eyebrow")}</span>
            <h1 className="story-hero-title">{t("faq.title")}</h1>
            <p className="story-hero-lead">{t("faq.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <dl
              style={{
                display: "grid",
                gap: "1px",
                border: "1px solid var(--color-best-border)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                background: "var(--color-best-border)",
              }}
            >
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: "var(--color-best-cream)", padding: "1.5rem" }}>
                  <dt className="font-bold text-best-ink">{faq.q}</dt>
                  <dd className="mt-2 leading-[1.75] text-best-body">{faq.a}</dd>
                </div>
              ))}
            </dl>

            <div
              className="mt-12 text-center"
              style={{
                border: "1px solid var(--color-best-border)",
                borderRadius: "1.25rem",
                background: "var(--color-best-paper)",
                padding: "2rem",
              }}
            >
              <h2 className="text-xl font-bold text-best-ink">{t("faq.still")}</h2>
              <p className="mt-2 leading-[1.75] text-best-body">{t("faq.still.desc")}</p>
              <Link
                href="/contact"
                className="button-primary tap-target mt-6 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
              >
                {t("faq.still.cta")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
