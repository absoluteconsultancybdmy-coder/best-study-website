"use client";

import { Container } from "@/components/layout/container";
import { reasons } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

const learningBeliefs = [
  { number: "০১", titleKey: "why.beliefs.title1", noteKey: "why.beliefs.note1" },
  { number: "০২", titleKey: "why.beliefs.title2", noteKey: "why.beliefs.note2" },
  { number: "০৩", titleKey: "why.beliefs.title3", noteKey: "why.beliefs.note3" },
] as const;

export function WhyBestStudy() {
  const { t, lang } = useLanguage();

  return (
    <section aria-labelledby="why-best-study-title" className="belief-story-section">
      <Container className="pb-12 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="belief-story-intro">
          <p className="story-kicker" lang="en">{t("why.kicker")}</p>
          <h2 id="why-best-study-title" className="story-section-title">
            {t("why.title1")}
            <span>{t("why.title2")}</span>
          </h2>
          <p className="story-section-lead">{t("why.lead")}</p>
        </div>

        <ol className="belief-statement-grid">
          {learningBeliefs.map((belief) => (
            <li key={belief.number} className="belief-statement">
              <span className="belief-number">{belief.number}</span>
              <h3>{t(belief.titleKey)}</h3>
              <p>{t(belief.noteKey)}</p>
            </li>
          ))}
        </ol>

        <div className="why-method-panel">
          <div>
            <p className="story-kicker" lang="en">{t("why.method.kicker")}</p>
            <h3>{t("why.method.title")}</h3>
          </div>
          <ol className="why-method-grid">
            {reasons.map((reason) => (
              <li key={reason.number}>
                <span>{reason.number}</span>
                <div>
                  <h4>{pick(lang, reason.title)}</h4>
                  <p className="content-placeholder">{pick(lang, reason.description)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}