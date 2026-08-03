"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/data/courses";
import type { HomeCourse } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";

const classFilters = [
  { label: "৬", href: "/courses?class=6" },
  { label: "৭", href: "/courses?class=7" },
  { label: "৮", href: "/courses?class=8" },
  { label: "৯", href: "/courses?class=9" },
  { label: "১০", href: "/courses?class=10" },
] as const;

const examFilters = [
  { label: "এসএসসি", href: "/courses?exam=ssc" },
  { label: "এইচএসসি", href: "/courses?exam=hsc" },
] as const;

export function CoursesPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby="courses-title"
        className="border-b border-best-border bg-best-paper py-8 sm:py-10"
      >
        <Container>
          <h1 id="courses-title" className="text-2xl sm:text-3xl">
            {t("coursespage.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-best-body">{t("coursespage.lead")}</p>

          <nav aria-label={t("coursespage.filter.nav")} className="mt-6 space-y-3">
            <div>
              <p className="mb-2 text-sm font-semibold text-best-muted">
                {t("coursespage.filter.class")}{" "}
                <span className="font-normal">{t("coursespage.filter.notactive")}</span>
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {classFilters.map((f) => (
                  <li key={f.href}>
                    <Link
                      href={f.href}
                      className="tap-target inline-flex min-w-[44px] items-center justify-center border border-best-border bg-best-cream px-4 py-2 text-sm font-semibold text-best-body no-underline hover:border-best-green hover:text-best-green"
                    >
                      {f.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-best-muted">
                {t("coursespage.filter.exam")}
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {examFilters.map((f) => (
                  <li key={f.href}>
                    <Link
                      href={f.href}
                      className="tap-target inline-flex items-center justify-center border border-best-border bg-best-cream px-4 py-2 text-sm font-semibold text-best-body no-underline hover:border-best-green hover:text-best-green"
                    >
                      {f.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </section>

      <section aria-labelledby="course-list-heading" className="py-10 sm:py-14">
        <Container>
          <h2 id="course-list-heading" className="sr-only">
            {t("coursespage.list.sr")}
          </h2>

          <p className="mb-6 border border-best-border bg-best-paper px-4 py-3 text-sm leading-[1.75] text-best-muted">
            {t("coursespage.notice")}
          </p>

          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 list-none p-0 m-0">
            {courses.map((course) => {
              const card: HomeCourse = {
                id: course.slug,
                audience: course.classOrExam,
                title: course.title,
                description: course.shortDescription,
                coverLabel: course.coverLabel,
                batchStart: course.batchStart,
                seats: course.seatsLabel,
                price: course.priceLabel,
              };
              return (
                <li key={course.slug}>
                  <CourseCard course={card} detailHref={`/courses/${course.slug}`} />
                </li>
              );
            })}
          </ul>

          <div className="mt-12 border-t border-best-border pt-8 text-center">
            <p className="text-best-body">{t("coursespage.bottom.text")}</p>
            <Link
              href="/#lead"
              className="tap-target mt-4 inline-flex items-center justify-center bg-best-green px-6 py-3 font-semibold text-white no-underline hover:bg-best-green-hover hover:text-white"
            >
              {t("coursespage.bottom.cta")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}