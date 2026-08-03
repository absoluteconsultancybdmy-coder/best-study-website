"use client";

import Link from "next/link";
import { LiveBookHero } from "@/components/home/live-book-hero";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="home-title" className="story-hero">
      <Container className="story-hero-stage">
        <div className="story-hero-copy">
          <p className="story-eyebrow">{t("hero.eyebrow")}</p>
          <h1 id="home-title" className="story-hero-title">
            {t("hero.title1")}
            <span>{t("hero.title2")}</span>
          </h1>
          <p className="story-hero-lead">{t("hero.lead")}</p>

          <div className="story-hero-actions">
            <a href="#lead" className="button-primary tap-target story-primary-cta no-underline">
              {t("hero.cta.primary")}
            </a>
            <Link href="/courses" className="tap-target story-secondary-cta no-underline">
              {t("hero.cta.secondary")}
            </Link>
          </div>

          <p className="story-teacher-note">
            <span className="content-placeholder font-semibold">
              {t("hero.teacher.name")}
            </span>
            <span> · {t("hero.teacher.note")}</span>
          </p>
        </div>

        <div className="story-hero-object">
          <p aria-hidden="true" className="object-chapter-label" lang="en">
            Learn · Practise · Progress
          </p>
          <LiveBookHero />
        </div>

        <a href="#class-selector-title" className="story-scroll-hint no-underline">
          <span aria-hidden="true" className="story-scroll-line" />
          <span>{t("hero.scroll")}</span>
        </a>
      </Container>
      <div aria-hidden="true" className="hero-to-selector-transition" />
    </section>
  );
}