"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function BlogPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("blog.eyebrow")}</span>
            <h1 className="story-hero-title">{t("blog.title")}</h1>
            <p className="story-hero-lead">{t("blog.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div
            style={{
              border: "1px solid var(--color-best-border)",
              borderRadius: "1.25rem",
              background: "var(--color-best-paper)",
              padding: "3rem 2rem",
              textAlign: "center",
            }}
          >
            <p className="content-placeholder text-best-muted leading-[1.75]">
              {t("blog.placeholder")}
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-best-body leading-[1.75]">এখনই English শেখা শুরু করতে চাও?</p>
            <Link
              href="/free-class"
              className="button-primary tap-target mt-6 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
            >
              {t("blog.cta")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}