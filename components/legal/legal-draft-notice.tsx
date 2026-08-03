"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LegalDraftNotice() {
  const { t } = useLanguage();

  return (
    <div role="note" className="border border-best-saffron bg-best-paper px-4 py-3 text-sm leading-[1.75]">
      <p className="font-semibold text-best-ink">{t("legal.draft.title")}</p>
      <p className="mt-1 text-best-body">{t("legal.draft.body")}</p>
    </div>
  );
}