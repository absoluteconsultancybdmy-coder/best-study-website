"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { classGroups } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

export function ClassSelector() {
  const { t, lang } = useLanguage();

  return (
    <section
      aria-labelledby="class-selector-title"
      className="class-selector-transition premium-class-selector border-b border-best-border bg-best-paper"
    >
      <Container className="relative py-6 sm:py-9">
        <div className="class-selector-heading">
          <p className="story-kicker" lang="en">{t("classselector.kicker")}</p>
          <h2 id="class-selector-title" className="mt-2 text-2xl sm:text-[1.8rem]">
            {t("classselector.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-[1.75] text-best-muted">
            {t("classselector.lead")}
          </p>
        </div>

        <nav
          aria-label={t("classselector.nav")}
          className="class-selector-groups mt-5 grid gap-4"
        >
          {classGroups.map((group) => (
            <div key={group.title.bn}>
              <h3 className="text-sm font-semibold text-best-muted">{pick(lang, group.title)}</h3>
              <ul
                className={`mt-2 grid gap-2 ${
                  group.columns === 5 ? "grid-cols-5" : "grid-cols-2"
                }`}
              >
                {group.options.map((option) => (
                  <li key={option.href}>
                    <Link
                      href={option.href}
                      className="class-selector-card flex min-h-16 flex-col items-center justify-center px-1 text-center text-best-ink no-underline"
                    >
                      <span className="text-xl font-bold leading-[1.2]">{option.label}</span>
                      <span className="text-xs font-medium">{pick(lang, option.helper)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>
    </section>
  );
}