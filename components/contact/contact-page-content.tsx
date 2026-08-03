"use client";

import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function ContactPageContent() {
  const { t } = useLanguage();

  const cardStyle: React.CSSProperties = {
    border: "1px solid var(--color-best-border)",
    borderRadius: "1rem",
    background: "var(--color-best-paper)",
    padding: "1.25rem",
  };

  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--color-best-border)",
    borderRadius: ".65rem",
    padding: ".65rem .9rem",
    background: "var(--color-best-cream)",
    color: "var(--color-best-body)",
    fontSize: "1rem",
    width: "100%",
  };

  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">{t("contact.eyebrow")}</span>
            <h1 className="story-hero-title">{t("contact.title")}</h1>
            <p className="story-hero-lead">{t("contact.lead")}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            }}
          >
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-best-ink">যোগাযোগের তথ্য</h2>
              <div className="mt-6" style={{ display: "grid", gap: "1rem" }}>
                <div style={cardStyle}>
                  <h3 className="font-bold text-best-ink">{t("contact.phone.title")}</h3>
                  <p className="mt-1 text-sm text-best-body">{t("contact.phone.desc")}</p>
                  <a href="tel:#" className="content-placeholder mt-2 inline-block font-semibold text-best-green">
                    {t("contact.phone.value")}
                  </a>
                </div>
                <div style={cardStyle}>
                  <h3 className="font-bold text-best-ink">{t("contact.email.title")}</h3>
                  <p className="mt-1 text-sm text-best-body">{t("contact.email.desc")}</p>
                  <a href="mailto:#" className="content-placeholder mt-2 inline-block font-semibold text-best-green">
                    {t("contact.email.value")}
                  </a>
                </div>
                <div style={cardStyle}>
                  <h3 className="font-bold text-best-ink">{t("contact.hours.title")}</h3>
                  <p className="content-placeholder mt-2 text-sm">{t("contact.hours.value")}</p>
                </div>
              </div>
            </div>

            {/* Contact form — UI only, not connected */}
            <div
              style={{
                border: "1px solid var(--color-best-border)",
                borderRadius: "1.25rem",
                background: "var(--color-best-paper)",
                padding: "2rem",
              }}
            >
              <h2 className="text-xl font-bold text-best-ink">{t("contact.form.title")}</h2>
              <p className="mt-2 text-sm content-placeholder text-best-muted">{t("contact.form.status")}</p>

              <form
                className="mt-6"
                style={{ display: "grid", gap: "1rem" }}
                onSubmit={(e) => e.preventDefault()}
                aria-label={t("contact.form.title")}
              >
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">{t("contact.form.name")}</span>
                  <input type="text" placeholder="তোমার নাম" disabled style={inputStyle} />
                </label>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">{t("contact.form.phone")}</span>
                  <input type="tel" placeholder="01XXXXXXXXX" disabled style={inputStyle} />
                </label>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">{t("contact.form.subject")}</span>
                  <input type="text" placeholder="বিষয়" disabled style={inputStyle} />
                </label>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span className="text-sm font-semibold text-best-ink">{t("contact.form.message")}</span>
                  <textarea
                    rows={4}
                    placeholder="তোমার বার্তা লিখো…"
                    disabled
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </label>
                <button
                  type="submit"
                  disabled
                  className="button-primary tap-target w-full px-6 py-3 font-semibold opacity-50"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
