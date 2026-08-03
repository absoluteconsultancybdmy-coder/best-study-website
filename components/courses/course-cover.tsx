"use client";

import { useLanguage } from "@/lib/i18n/language-context";

type CourseCoverProps = {
  label: string;
  sequence?: number;
};

export function CourseCover({ label, sequence }: CourseCoverProps) {
  const { t } = useLanguage();
  const chapter = sequence ? String(sequence).padStart(2, "0") : "EN";

  return (
    <div
      role="img"
      aria-label={`${label} ${t("coursecard.status")}`}
      className="editorial-course-cover"
    >
      <div aria-hidden="true" className="course-cover-orbit" />
      <div aria-hidden="true" className="course-cover-light" />
      <span aria-hidden="true" className="course-cover-chapter" lang="en">
        {chapter}
      </span>
      <span aria-hidden="true" className="course-cover-monogram" lang="en">
        Aa
      </span>
      <div className="course-cover-title-card" lang="en">
        <p>English learning · W1</p>
        <strong>{label}</strong>
        <span>Read · Understand · Practise</span>
      </div>
    </div>
  );
}