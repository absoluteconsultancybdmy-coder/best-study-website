"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function PricingPageContent() {
  const { t } = useLanguage();

  const faqs = [
    { q: t("pricing.faq.q1"), a: t("pricing.faq.a1") },
    { q: t("pricing.faq.q2"), a: t("pricing.faq.a2") },
    { q: t("pricing.faq.q3"), a: t("pricing.faq.a3") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("pricing.eyebrow")}</span>
            <h1 className="story-hero-title">
              {t("pricing.title1")}
              <span>{t("pricing.title2")}</span>
            </h1>
            <p className="story-hero-lead">{t("pricing.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      {/* Free class card */}
      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div
              style={{
                border: "1px solid var(--color-best-border)",
                borderRadius: "1.5rem",
                background: "var(--color-best-paper)",
                padding: "2rem",
                boxShadow: "0 28px 70px rgba(26,25,23,.08)",
              }}
            >
              <span className="story-kicker" lang="en">Free</span>
              <h2 className="story-section-title mt-3">{t("pricing.free.title")}</h2>
              <p className="story-section-lead">{t("pricing.free.desc")}</p>
              <Link
                href="/free-class"
                className="button-primary tap-target mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold no-underline"
              >
                {t("pricing.free.cta")}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Course pricing placeholder */}
      <section className="story-courses-section py-16 sm:py-24">
        <Container>
          <span className="story-kicker" lang="en">Courses</span>
          <h2 className="story-section-title mt-3">{t("pricing.course.title")}</h2>

          <div
            className="mt-10"
            style={{
              border: "1px solid var(--color-best-border)",
              borderRadius: "1.25rem",
              background: "var(--color-best-paper)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <p className="content-placeholder text-best-muted">{t("pricing.course.placeholder")}</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <span className="story-kicker" lang="en">FAQ</span>
            <h2 className="story-section-title mt-3">{t("pricing.faq.title")}</h2>

            <dl
              className="mt-10"
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

            <div className="mt-10 text-center">
              <Link href="/faq" className="story-text-link">
                আরও প্রশ্নের উত্তর দেখো <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
