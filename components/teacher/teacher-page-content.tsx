"use client";

import Image from "next/image";
import Link from "next/link";
import { OwnerPortrait3D } from "@/components/brand/owner-portrait-3d";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

const helpItems = [
  { number: "০১", titleKey: "teacherpage.help1.title", descKey: "teacherpage.help1.desc" },
  { number: "০২", titleKey: "teacherpage.help2.title", descKey: "teacherpage.help2.desc" },
  { number: "০৩", titleKey: "teacherpage.help3.title", descKey: "teacherpage.help3.desc" },
] as const;

export function TeacherPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section
        aria-labelledby="teacher-page-title"
        className="border-b border-best-border bg-best-paper py-8 sm:py-12"
      >
        <Container>
          <nav aria-label={t("teacherpage.breadcrumb.nav")} className="text-sm text-best-muted">
            <Link href="/" className="no-underline hover:text-best-green">
              {t("teacherpage.breadcrumb.home")}
            </Link>
            <span aria-hidden="true" className="mx-2">
              ›
            </span>
            <span aria-current="page">{t("teacherpage.breadcrumb.teacher")}</span>
          </nav>

          <div className="mt-6 grid gap-10 md:grid-cols-[minmax(260px,380px)_1fr] md:items-center lg:gap-14">
            <OwnerPortrait3D priority size="large" showCaption={false} />

            <div>
              <p className="text-sm font-semibold text-best-muted">{t("teacherpage.ownerLabel")}</p>
              <h1 id="teacher-page-title" className="mt-2 text-3xl sm:text-4xl">
                <span className="content-placeholder">{t("teacherpage.ownerName")}</span>
              </h1>
              <p className="content-placeholder mt-4 max-w-2xl">{t("teacherpage.ownerDesc")}</p>
              <p className="mt-3 max-w-2xl text-best-body">{t("teacherpage.ownerNote")}</p>
              <p className="content-placeholder mt-4 border-t border-best-border pt-4 font-semibold">
                {t("teacherpage.ownerCred")}
              </p>
              <Link
                href="/#lead"
                className="button-primary tap-target mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold no-underline"
              >
                {t("teacherpage.cta")}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="philosophy-title" className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 id="philosophy-title" className="text-2xl sm:text-3xl">
              {t("teacherpage.philosophy.title")}
            </h2>
            <div className="border-l-2 border-best-saffron pl-5">
              <p className="content-placeholder">{t("teacherpage.philosophy.placeholder")}</p>
              <p className="mt-3 text-best-body">{t("teacherpage.philosophy.note")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="student-help-title"
        className="border-y border-best-border bg-best-paper py-10 sm:py-14"
      >
        <Container>
          <h2 id="student-help-title" className="text-2xl sm:text-3xl">
            {t("teacherpage.help.title")}
          </h2>
          <p className="mt-3 max-w-2xl text-best-muted">{t("teacherpage.help.note")}</p>
          <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-3">
            {helpItems.map((item) => (
              <li key={item.number} className="border border-best-border bg-best-cream p-5">
                <span className="inline-flex bg-best-saffron px-2 py-1 text-sm font-bold text-best-ink">
                  {item.number}
                </span>
                <h3 className="mt-3 text-xl">{t(item.titleKey)}</h3>
                <p className="content-placeholder mt-2 text-[15px]">{t(item.descKey)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="teacher-video-title" className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <figure className="border border-best-border bg-best-paper">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/home/teacher-video-poster.webp"
                  alt={t("teacherpage.video.alt")}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-best-border p-4">
                <button
                  type="button"
                  disabled
                  className="tap-target inline-flex cursor-not-allowed items-center justify-center bg-best-green px-4 py-2 font-semibold text-white opacity-70"
                >
                  {t("teacherpage.video.button")}
                </button>
                <p className="mt-2 text-sm leading-[1.75] text-best-muted">
                  {t("teacherpage.video.note")}
                </p>
              </figcaption>
            </figure>

            <div>
              <h2 id="teacher-video-title" className="text-2xl sm:text-3xl">
                {t("teacherpage.video.title")}
              </h2>
              <p className="content-placeholder mt-4">{t("teacherpage.video.placeholder")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="parent-trust-title"
        className="border-t border-best-border bg-best-paper py-10 sm:py-14"
      >
        <Container>
          <div className="grid gap-6 border border-best-border bg-best-cream p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold text-best-muted">{t("teacherpage.parent.kicker")}</p>
              <h2 id="parent-trust-title" className="mt-2 text-2xl sm:text-3xl">
                {t("teacherpage.parent.title")}
              </h2>
              <p className="content-placeholder mt-4 max-w-2xl">{t("teacherpage.parent.placeholder")}</p>
            </div>
            <Link
              href="/#lead"
              className="tap-target inline-flex items-center justify-center border border-best-green px-6 py-3 text-center font-semibold text-best-green no-underline hover:bg-best-paper hover:text-best-green-hover"
            >
              {t("teacherpage.parent.cta")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}