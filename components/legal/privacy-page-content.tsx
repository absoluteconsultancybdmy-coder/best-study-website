"use client";

import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";
import { useLanguage } from "@/lib/i18n/language-context";

export function PrivacyPageContent() {
  const { t } = useLanguage();

  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">{t("legal.badge")}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">{t("privacy.title")}</h1>
          <p className="mt-3 text-best-muted">{t("legal.draft.tag")}</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="privacy-identity">
            <h2 id="privacy-identity" className="text-2xl">{t("privacy.s1")}</h2>
            <p className="content-placeholder mt-3">{t("privacy.s1.p1")}</p>
            <p className="mt-3">{t("privacy.s1.p2")}</p>
          </section>

          <section aria-labelledby="privacy-data">
            <h2 id="privacy-data" className="text-2xl">{t("privacy.s2")}</h2>
            <p className="mt-3">{t("privacy.s2.p1")}</p>
            <p className="content-placeholder mt-3">{t("privacy.s2.p2")}</p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className="text-2xl">{t("privacy.s3")}</h2>
            <p className="content-placeholder mt-3">{t("privacy.s3.p1")}</p>
          </section>

          <section aria-labelledby="privacy-sharing">
            <h2 id="privacy-sharing" className="text-2xl">{t("privacy.s4")}</h2>
            <p className="content-placeholder mt-3">{t("privacy.s4.p1")}</p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="text-2xl">{t("privacy.s5")}</h2>
            <p className="content-placeholder mt-3">{t("privacy.s5.p1")}</p>
            <p className="content-placeholder mt-3">{t("privacy.s5.p2")}</p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact" className="text-2xl">{t("privacy.contact")}</h2>
            <p className="content-placeholder mt-3">{t("privacy.contact.p1")}</p>
          </section>
        </div>
      </Container>
    </article>
  );
}