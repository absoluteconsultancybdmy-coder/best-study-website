"use client";

import { Container } from "@/components/layout/container";
import { learningJourney } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

export function LearningJourney() {
  const { t, lang } = useLanguage();

  return (
    <section aria-labelledby="learning-journey-title" className="learning-journey-section">
      <Container className="learning-journey-layout">
        <div className="learning-journey-sticky">
          <p className="story-kicker" lang="en">{t("journey.kicker")}</p>
          <h2 id="learning-journey-title" className="story-section-title">
            {t("journey.title1")}
            <span>{t("journey.title2")}</span>
          </h2>
          <p className="story-section-lead">{t("journey.lead")}</p>

          <div aria-hidden="true" className="journey-book-mark">
            <span lang="en">{t("journey.book.english")}</span>
            <strong>{t("journey.book.steps")}</strong>
            <i />
          </div>
        </div>

        <ol className="learning-journey-steps">
          {learningJourney.map((step) => (
            <li key={step.number} className="journey-step-card">
              <span className="journey-step-number">{step.number}</span>
              <div>
                <p className="journey-step-english" lang="en">{step.englishLabel}</p>
                <h3>{pick(lang, step.title)}</h3>
                <p>{pick(lang, step.description)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}