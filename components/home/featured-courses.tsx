"use client";

import Link from "next/link";
import { CourseCard } from "@/components/courses/course-card";
import { Container } from "@/components/layout/container";
import { featuredCourses } from "@/lib/data/home";
import { useLanguage } from "@/lib/i18n/language-context";

export function FeaturedCourses() {
  const { t } = useLanguage();

  return (
    <section id="courses" aria-labelledby="featured-courses-title" className="story-courses-section">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="story-courses-heading">
          <div>
            <p className="story-kicker" lang="en">{t("courses.kicker")}</p>
            <h2 id="featured-courses-title" className="story-section-title">
              {t("courses.title1")}
              <span>{t("courses.title2")}</span>
            </h2>
          </div>
          <div>
            <p className="story-section-lead">{t("courses.lead")}</p>
            <Link href="/courses" className="tap-target story-text-link">
              {t("courses.all")} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="story-course-grid">
          {featuredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              detailHref={course.detailHref}
              sequence={index + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}