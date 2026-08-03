"use client";

import { Container } from "@/components/layout/container";
import { freeResources } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

export function FreeResources() {
  const { t, lang } = useLanguage();

  return (
    <section
      aria-labelledby="free-resources-title"
      className="border-y border-best-border bg-best-paper"
    >
      <Container className="py-10 sm:py-14">
        <h2 id="free-resources-title" className="text-2xl sm:text-3xl">
          {t("resources.title")}
        </h2>
        <p className="mt-2 text-best-muted">{t("resources.lead")}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {freeResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="tap-target block border border-best-border bg-best-cream p-5 text-best-body no-underline hover:border-best-green hover:text-best-body"
            >
              <h3 className="text-xl">{resource.title}</h3>
              <p className="content-placeholder mt-2 text-[15px]">
                {pick(lang, resource.description)}
              </p>
              <span className="mt-3 inline-block font-semibold text-best-green">
                {pick(lang, resource.linkLabel)} →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}