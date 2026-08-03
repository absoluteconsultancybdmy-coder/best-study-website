"use client";

import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

const fieldClassName =
  "min-h-12 w-full border border-best-border bg-best-paper px-3 text-best-ink focus:border-best-green";

const classOptions = [
  { value: "3", key: "lead.class3" },
  { value: "4", key: "lead.class4" },
  { value: "5", key: "lead.class5" },
  { value: "6", key: "lead.class6" },
  { value: "7", key: "lead.class7" },
  { value: "8", key: "lead.class8" },
  { value: "9", key: "lead.class9" },
  { value: "10", key: "lead.class10" },
  { value: "ssc", key: "lead.ssc" },
  { value: "hsc", key: "lead.hsc" },
] as const;

export function LeadCaptureSection() {
  const { t } = useLanguage();

  return (
    <section id="lead" aria-labelledby="lead-title" className="bg-best-green">
      <Container className="grid gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 id="lead-title" className="text-2xl text-white sm:text-3xl">
            {t("lead.title")}
          </h2>
          <p className="mt-4 max-w-xl text-best-border">{t("lead.desc")}</p>
        </div>

        <form
          aria-describedby="lead-help lead-status"
          className="grid gap-4 border border-best-green-hover bg-best-cream p-5 sm:p-6"
        >
          <label className="grid gap-1.5 font-semibold text-best-ink">
            {t("lead.label.name")}
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder={t("lead.placeholder.name")}
              className={fieldClassName}
            />
          </label>

          <label className="grid gap-1.5 font-semibold text-best-ink">
            {t("lead.label.phone")}
            <input
              type="tel"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder={t("lead.placeholder.phone")}
              className={`${fieldClassName} num-en`}
            />
          </label>

          <label className="grid gap-1.5 font-semibold text-best-ink">
            {t("lead.label.class")}
            <select name="class" required defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                {t("lead.placeholder.class")}
              </option>
              {classOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {t(option.key)}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            disabled
            className="min-h-[52px] cursor-not-allowed bg-best-green px-5 py-3 text-lg font-semibold text-white opacity-70"
          >
            {t("lead.submit")}
          </button>

          <p id="lead-status" className="content-placeholder text-sm leading-[1.75]">
            {t("lead.status")}
          </p>
          <p id="lead-help" className="text-sm leading-[1.75] text-best-muted">
            {t("lead.help")}
          </p>
        </form>
      </Container>
    </section>
  );
}