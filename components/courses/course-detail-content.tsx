"use client";

import Link from "next/link";
import { CourseCover } from "@/components/courses/course-cover";
import { Container } from "@/components/layout/container";
import type { Course } from "@/lib/data/courses";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

function bnNum(n: number): string {
  return String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);
}

export function CourseDetailContent({ course }: { course: Course }) {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="course-detail-title"
        className="border-b border-best-border bg-best-paper py-8 sm:py-10"
      >
        <Container>
          <nav aria-label={t("coursedetail.crumb.nav")}>
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-sm text-best-muted list-none p-0 m-0">
              <li>
                <Link href="/" className="no-underline hover:text-best-green">
                  {t("coursedetail.crumb.home")}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/courses" className="no-underline hover:text-best-green">
                  {t("coursedetail.crumb.courses")}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="content-placeholder">
                {course.title}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <p className="content-placeholder text-sm font-semibold text-best-muted">
                {pick(lang, course.classOrExam)} · {course.subject}
              </p>
              <h1 id="course-detail-title" className="content-placeholder mt-2 text-2xl sm:text-3xl">
                {course.title}
              </h1>
              <p className="content-placeholder mt-4 max-w-2xl text-best-body">
                {pick(lang, course.longDescription)}
              </p>
            </div>

            <aside aria-label={t("coursedetail.aside.label")} className="border border-best-border bg-best-cream">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-best-border bg-best-paper">
                <CourseCover label={course.coverLabel} />
                <span className="absolute left-3 top-3 bg-best-saffron px-2 py-1 text-xs font-semibold text-best-ink">
                  {t("coursedetail.cover.status")}
                </span>
              </div>

              <div className="p-5">
                <dl className="grid gap-3 text-sm leading-[1.75]">
                  <div className="flex items-baseline justify-between border-b border-best-border pb-3">
                    <dt className="text-best-muted">{t("coursedetail.price")}</dt>
                    <dd className="content-placeholder text-lg font-bold text-best-ink">
                      {pick(lang, course.priceLabel)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-best-muted">{t("coursedetail.batch")}</dt>
                    <dd className="content-placeholder mt-0.5 font-semibold">
                      {pick(lang, course.batchStart)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-best-muted">{t("coursedetail.seats")}</dt>
                    <dd className="content-placeholder mt-0.5 font-semibold">
                      {pick(lang, course.seatsLabel)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-best-muted">{t("coursedetail.schedule")}</dt>
                    <dd className="content-placeholder mt-0.5 font-semibold">
                      {pick(lang, course.scheduleLabel)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-best-muted">{t("coursedetail.teacher")}</dt>
                    <dd className="content-placeholder mt-0.5 font-semibold">
                      {pick(lang, course.teacherLabel)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <Link
                    href="/#lead"
                    className="tap-target flex w-full items-center justify-center bg-best-green px-5 py-3 text-center font-semibold text-white no-underline hover:bg-best-green-hover hover:text-white"
                  >
                    {t("coursedetail.cta")}
                  </Link>
                  <p className="mt-2 text-center text-sm leading-[1.75] text-best-muted">
                    {t("coursedetail.enroll.note")}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Who this is for */}
      <section aria-labelledby="who-title" className="border-b border-best-border py-10">
        <Container>
          <h2 id="who-title" className="text-xl sm:text-2xl">
            {t("coursedetail.who.title")}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
            {course.whoThisIsFor.map((item, i) => (
              <li
                key={i}
                className="content-placeholder flex items-start gap-2 border-l-2 border-best-saffron pl-3"
              >
                {pick(lang, item)}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Syllabus */}
      <section
        aria-labelledby="syllabus-title"
        className="border-b border-best-border bg-best-paper py-10"
      >
        <Container>
          <h2 id="syllabus-title" className="text-xl sm:text-2xl">
            {t("coursedetail.syllabus.title")}
          </h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
            {course.modules.map((mod, i) => (
              <li
                key={i}
                className="content-placeholder flex items-start gap-3 border border-best-border bg-best-cream p-4"
              >
                <span className="shrink-0 bg-best-saffron px-2 py-1 text-xs font-bold text-best-ink">
                  {bnNum(i + 1).padStart(2, "০")}
                </span>
                <span>{pick(lang, mod.title)}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="border-b border-best-border py-10">
        <Container>
          <h2 id="faq-title" className="text-xl sm:text-2xl">
            {t("coursedetail.faq.title")}
          </h2>
          <dl className="mt-5 grid gap-6">
            {course.faq.map((item, i) => (
              <div key={i} className="border-b border-best-border pb-6 last:border-0 last:pb-0">
                <dt className="content-placeholder font-semibold text-best-ink">
                  {pick(lang, item.question)}
                </dt>
                <dd className="content-placeholder mt-2 text-best-body">
                  {pick(lang, item.answer)}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-best-paper py-10 sm:py-14">
        <Container>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl">{t("coursedetail.bottom.title")}</h2>
            <p className="mt-3 text-best-body">{t("coursedetail.bottom.desc")}</p>
            <Link
              href="/#lead"
              className="tap-target mt-6 inline-flex items-center justify-center bg-best-green px-8 py-3 font-semibold text-white no-underline hover:bg-best-green-hover hover:text-white"
            >
              {t("coursedetail.cta")}
            </Link>
            <p className="mt-4 text-sm text-best-muted">
              <Link href="/courses" className="no-underline hover:text-best-green">
                {t("coursedetail.back")}
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}