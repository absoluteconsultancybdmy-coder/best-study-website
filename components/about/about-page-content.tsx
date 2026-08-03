"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("about.eyebrow")}</span>
            <h1 className="story-hero-title">
              {t("about.title1")}
              <span>{t("about.title2")}</span>
            </h1>
            <p className="story-hero-lead">{t("about.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="story-kicker" lang="en">Mission</span>
            <h2 className="story-section-title mt-3">{t("about.mission.title")}</h2>
            <p className="story-section-lead mt-4">{t("about.mission.body")}</p>

            <ul
              className="belief-statement-grid mt-10"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))" }}
            >
              {[
                { num: "০১", title: "ভয় নয়", desc: "শুরু হবে সহজ ব্যাখ্যা থেকে।" },
                { num: "০২", title: "মুখস্থ নয়", desc: "নিয়ম বুঝে প্রয়োগ করতে শেখো।" },
                { num: "০৩", title: "কনফিউশন নয়", desc: "ধাপে ধাপে গুছিয়ে অনুশীলন করো।" },
              ].map((item) => (
                <li key={item.num} className="belief-statement">
                  <span className="belief-number num-bn">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="learning-journey-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="story-kicker" lang="en">Founder</span>
            <h2 className="story-section-title mt-3" style={{ color: "var(--color-best-cream)" }}>
              {t("about.founder.title")}
            </h2>
            <p className="story-section-lead mt-4 content-placeholder">{t("about.founder.placeholder")}</p>
          </div>
        </Container>
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="story-section-title">
              শুরু করো <span>ফ্রি ক্লাস</span> দিয়ে।
            </h2>
            <Link
              href="/free-class"
              className="button-primary tap-target mt-8 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
            >
              {t("about.cta")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
