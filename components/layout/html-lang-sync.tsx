"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function HtmlLangSync() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "bn" ? "bn-BD" : "en");
  }, [lang]);

  return null;
}