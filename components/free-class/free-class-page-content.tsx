"use client";

import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

const CLASS_OPTIONS = ["৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "SSC", "HSC"];

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--color-best-border)",
  borderRadius: ".65rem",
  padding: ".65rem .9rem",
  background: "var(--color-best-cream)",
  color: "var(--color-best-body)",
  fontSize: "1rem",
  width: "100%",
};

export function FreeClassPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("freeclass.eyebrow")}</span>
            <h1 className="story-hero-title">
              {t("freeclass.title1")}
              <span>{t("freeclass.title2")}</span>
            </h1>
            <p className="story-hero-lead">{t("freeclass.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div
            style={{
              display: "grid",
              gap: "2.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            }}
          >
            <div>
              <h2 className="story-section-title">{t("freeclass.what.title")}</h2>
              <ul className="mt-8" style={{ display: "grid", gap: "1rem" }}>
                {[t("freeclass.what.p1"), t("freeclass.what.p2"), t("freeclass.what.p3")].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="content-placeholder"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        padding: "1.25rem",
                        border: "1px solid var(--color-best-border)",
                        borderRadius: "1rem",
                        background: "var(--color-best-paper)",
                      }}
                    >
                      <span
                        className="num-bn shrink-0 font-bold text-best-green"
                        style={{ fontSize: "1.25rem", lineHeight: 1 }}
                      >
                        {["০১", "০২", "০৩"][i]}
                      </span>
                      <span className="leading-[1.75] text-best-body">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div
              style={{
                border: "1px solid var(--color-best-border)",
                borderRadius: "1.5rem",
                background: "var(--color-best-paper)",
                padding: "2rem",
              }}
            >
              <h2 className="text-xl font-bold text-best-ink">{t("freeclass.form.title")}</h2>
              <p className="mt-2 text-sm content-placeholder text-best-muted">
                [ফর্ম সংযোগ] PLACEHOLDER — ফ্রি ক্লাস বুকিং ফর্ম এখনো সক্রিয় নয়।
              </p>

              <form
                className="mt-6"
                style={{ display: "grid", gap: "1rem" }}
                onSubmit={(e) => e.preventDefault()}
                aria-label={t("freeclass.form.title")}
              >
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">নাম</span>
                  <input type="text" placeholder="তোমার পুরো নাম" disabled style={inputStyle} />
                </label>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">মোবাইল নম্বর</span>
                  <input type="tel" placeholder="01XXXXXXXXX" disabled style={inputStyle} />
                </label>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">ক্লাস</span>
                  <select disabled style={inputStyle}>
                    <option value="">ক্লাস বেছে নাও</option>
                    {CLASS_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c.match(/^[A-Z]/) ? c : `ক্লাস ${c}`}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  disabled
                  className="button-primary tap-target w-full px-6 py-3 font-semibold opacity-50"
                >
                  ফ্রি ক্লাস বুক করো
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
