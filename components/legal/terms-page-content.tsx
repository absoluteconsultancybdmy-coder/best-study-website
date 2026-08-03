"use client";

import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";
import { useLanguage } from "@/lib/i18n/language-context";

export function TermsPageContent() {
  const { t } = useLanguage();

  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">{t("legal.badge")}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">{t("terms.title")}</h1>
          <p className="mt-3 text-best-muted">{t("legal.draft.tag")}</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="terms-identity">
            <h2 id="terms-identity" className="text-2xl">{t("terms.s1")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s1.p1")}</p>
            <p className="mt-3">{t("terms.s1.p2")}</p>
          </section>

          <section aria-labelledby="terms-use">
            <h2 id="terms-use" className="text-2xl">{t("terms.s2")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s2.p1")}</p>
          </section>

          <section aria-labelledby="terms-course">
            <h2 id="terms-course" className="text-2xl">{t("terms.s3")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s3.p1")}</p>
            <p className="mt-3">{t("terms.s3.p2")}</p>
          </section>

          <section aria-labelledby="terms-payment">
            <h2 id="terms-payment" className="text-2xl">{t("terms.s4")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s4.p1")}</p>
            <p className="mt-3">{t("terms.s4.p2")}</p>
          </section>

          <section aria-labelledby="terms-responsibility">
            <h2 id="terms-responsibility" className="text-2xl">{t("terms.s5")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s5.p1")}</p>
          </section>

          <section aria-labelledby="terms-disclaimer">
            <h2 id="terms-disclaimer" className="text-2xl">{t("terms.s6")}</h2>
            <p className="content-placeholder mt-3">{t("terms.s6.p1")}</p>
            <p className="content-placeholder mt-3">{t("terms.s6.p2")}</p>
          </section>

          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact" className="text-2xl">{t("terms.contact")}</h2>
            <p className="content-placeholder mt-3">{t("terms.contact.p1")}</p>
          </section>
        </div>
      </Container>
    </article>
  );
}