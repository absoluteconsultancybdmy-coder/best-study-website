"use client";

import Link from "next/link";
import { OwnerPortrait3D } from "@/components/brand/owner-portrait-3d";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function TeacherIntro() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="teacher-intro-title" className="owner-intro-section">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <OwnerPortrait3D />

          <div>
            <p className="story-kicker" lang="en">{t("teacher.kicker")}</p>
            <p className="mt-3 text-sm font-semibold text-best-green">{t("teacher.ownerLabel")}</p>
            <h2 id="teacher-intro-title" className="mt-2 text-3xl sm:text-4xl">
              <span className="content-placeholder">{t("hero.teacher.name")}</span>
            </h2>
            <p className="content-placeholder mt-5 max-w-2xl leading-[1.75]">
              {t("teacherpage.ownerDesc")}
            </p>
            <p className="mt-3 max-w-2xl text-best-body">{t("teacher.ownerIntro")}</p>

            <ul className="mt-6 grid gap-3">
              <li className="content-placeholder border-t border-best-border pt-3 leading-[1.75]">
                {t("teacher.list1")}
              </li>
              <li className="content-placeholder border-t border-best-border pt-3 leading-[1.75]">
                {t("teacher.list2")}
              </li>
            </ul>

            <Link
              href="/teacher"
              className="tap-target mt-7 inline-flex items-center justify-center rounded-full border border-best-green px-6 py-3 font-semibold text-best-green no-underline hover:bg-best-paper hover:text-best-green-hover"
            >
              {t("teacher.cta")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}