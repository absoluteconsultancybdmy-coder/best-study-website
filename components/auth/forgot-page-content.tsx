"use client";

import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function ForgotPageContent() {
  const { t } = useLanguage();

  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--color-best-border)",
    borderRadius: ".65rem",
    padding: ".75rem 1rem",
    background: "var(--color-best-cream)",
    color: "var(--color-best-body)",
    fontSize: "1rem",
    width: "100%",
  };

  return (
    <section className="belief-story-section py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-sm">
          <div
            style={{
              border: "1px solid var(--color-best-border)",
              borderRadius: "1.5rem",
              background: "var(--color-best-paper)",
              padding: "2.5rem 2rem",
            }}
          >
            <h1 className="text-2xl font-bold text-best-ink">{t("auth.forgot.title")}</h1>
            <p className="mt-2 leading-[1.75] text-best-body">{t("auth.forgot.lead")}</p>

            <form
              className="mt-6"
              style={{ display: "grid", gap: "1rem" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("auth.login.phone")}</span>
                <input type="tel" placeholder="01XXXXXXXXX" disabled style={inputStyle} />
              </label>
              <button type="submit" disabled className="button-primary tap-target w-full px-6 py-3 font-semibold opacity-50">
                {t("auth.forgot.submit")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}