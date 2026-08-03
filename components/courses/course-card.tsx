"use client";

import Link from "next/link";
import { CourseCover } from "@/components/courses/course-cover";
import type { HomeCourse } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";
import { pick } from "@/lib/i18n/bi";

type CourseCardProps = {
  course: HomeCourse;
  detailHref?: string;
  sequence?: number;
};

export function CourseCard({ course, detailHref = "/courses", sequence }: CourseCardProps) {
  const { t, lang } = useLanguage();
  const titleId = `${course.id}-title`;

  return (
    <article aria-labelledby={titleId} className="story-course-card">
      <div className="story-course-cover-wrap">
        <CourseCover label={course.coverLabel} sequence={sequence} />
        <span className="course-cover-status">{t("coursecard.status")}</span>
      </div>

      <div className="story-course-content">
        <p className="content-placeholder story-course-audience">{pick(lang, course.audience)}</p>
        <h3 id={titleId}>{course.title}</h3>
        <p className="story-course-description">{pick(lang, course.description)}</p>

        <dl className="story-course-meta">
          <div>
            <dt>{t("coursecard.batch")}</dt>
            <dd className="content-placeholder">{pick(lang, course.batchStart)}</dd>
          </div>
          <div>
            <dt>{t("coursecard.seats")}</dt>
            <dd className="content-placeholder">{pick(lang, course.seats)}</dd>
          </div>
        </dl>

        <div className="story-course-footer">
          <p className="content-placeholder story-course-price">{pick(lang, course.price)}</p>
          <Link href={detailHref} className="button-primary tap-target story-course-cta no-underline">
            {t("coursecard.details")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}