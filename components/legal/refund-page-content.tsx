"use client";

import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";
import { useLanguage } from "@/lib/i18n/language-context";

export function RefundPageContent() {
  const { t } = useLanguage();

  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">{t("legal.badge")}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">{t("refund.title")}</h1>
          <p className="mt-3 text-best-muted">{t("legal.draft.tag")}</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="refund-status">
            <h2 id="refund-status" className="text-2xl">{t("refund.s1")}</h2>
            <p className="mt-3">{t("refund.s1.p1")}</p>
            <p className="content-placeholder mt-3">{t("refund.s1.p2")}</p>
          </section>

          <section aria-labelledby="refund-requirement">
            <h2 id="refund-requirement" className="text-2xl">{t("refund.s2")}</h2>
            <p className="mt-3">{t("refund.s2.p1")}</p>
          </section>

          <section aria-labelledby="refund-terms">
            <h2 id="refund-terms" className="text-2xl">{t("refund.s3")}</h2>
            <p className="content-placeholder mt-3">{t("refund.s3.p1")}</p>
            <p className="mt-3">{t("refund.s3.p2")}</p>
          </section>

          <section aria-labelledby="refund-identity">
            <h2 id="refund-identity" className="text-2xl">{t("refund.s4")}</h2>
            <p className="content-placeholder mt-3">{t("refund.s4.p1")}</p>
            <p className="content-placeholder mt-3">{t("refund.s4.p2")}</p>
          </section>

          <section aria-labelledby="refund-contact">
            <h2 id="refund-contact" className="text-2xl">{t("refund.contact")}</h2>
            <p className="content-placeholder mt-3">{t("refund.contact.p1")}</p>
          </section>
        </div>
      </Container>
    </article>
  );
}