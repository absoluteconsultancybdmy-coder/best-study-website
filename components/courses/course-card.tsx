import Link from "next/link";
import { CourseCover } from "@/components/courses/course-cover";
import type { HomeCourse } from "@/lib/data/home";

type CourseCardProps = {
  course: HomeCourse;
  detailHref?: string;
  sequence?: number;
};

export function CourseCard({ course, detailHref = "/courses", sequence }: CourseCardProps) {
  const titleId = `${course.id}-title`;

  return (
    <article aria-labelledby={titleId} className="story-course-card">
      <div className="story-course-cover-wrap">
        <CourseCover label={course.coverLabel} sequence={sequence} />
        <span className="course-cover-status">উদাহরণমূলক কভার</span>
      </div>

      <div className="story-course-content">
        <p className="content-placeholder story-course-audience">{course.audience}</p>
        <h3 id={titleId}>{course.title}</h3>
        <p className="story-course-description">{course.description}</p>

        <dl className="story-course-meta">
          <div>
            <dt>ব্যাচ শুরু</dt>
            <dd className="content-placeholder">{course.batchStart}</dd>
          </div>
          <div>
            <dt>আসন</dt>
            <dd className="content-placeholder">{course.seats}</dd>
          </div>
        </dl>

        <div className="story-course-footer">
          <p className="content-placeholder story-course-price">{course.price}</p>
          <Link href={detailHref} className="button-primary tap-target story-course-cta no-underline">
            বিস্তারিত দেখো <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
