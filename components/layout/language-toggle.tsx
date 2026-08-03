"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Switch language"
      className="fixed left-3 top-3 z-40 flex items-center overflow-hidden rounded-full border border-best-border bg-best-cream/95 text-xs font-bold shadow-sm backdrop-blur sm:left-4 sm:top-4"
    >
      <button
        type="button"
        onClick={() => lang !== "bn" && toggle()}
        aria-pressed={lang === "bn"}
        className={`min-h-9 min-w-14 cursor-pointer px-3 py-1.5 no-underline transition-colors ${
          lang === "bn"
            ? "bg-best-green text-white"
            : "text-best-body hover:bg-best-paper"
        }`}
      >
        বাংলা
      </button>
      <span aria-hidden="true" className="h-4 w-px bg-best-border" />
      <button
        type="button"
        onClick={() => lang !== "en" && toggle()}
        aria-pressed={lang === "en"}
        className={`min-h-9 min-w-10 cursor-pointer px-3 py-1.5 no-underline transition-colors ${
          lang === "en"
            ? "bg-best-green text-white"
            : "text-best-body hover:bg-best-paper"
        }`}
      >
        EN
      </button>
    </div>
  );
}
