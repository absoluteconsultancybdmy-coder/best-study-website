import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/data/courses";
import type { HomeCourse } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "English কোর্স — বেস্ট স্টাডি",
  description:
    "বাংলা মিডিয়ামের Class 6–10, SSC ও HSC শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary এবং Board English প্রস্তুতি।",
};

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

export default function CoursesPage() {
  return (
    <>
      <section
        aria-labelledby="courses-title"
        className="border-b border-best-border bg-best-paper py-8 sm:py-10"
      >
        <Container>
          <h1 id="courses-title" className="text-2xl sm:text-3xl">
            English কোর্স
          </h1>
          <p className="mt-3 max-w-2xl text-best-body">
            বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing,
            Reading, Vocabulary ও Board English প্রস্তুতির পরিকল্পনা। চূড়ান্ত
            কোর্স তালিকা ও মূল্য প্রতিষ্ঠাতার অনুমোদনের পর যোগ হবে।
          </p>

          <nav
            aria-label="শ্রেণি ও পরীক্ষার ফিল্টার"
            className="mt-6 space-y-3"
          >
            <div>
              <p className="mb-2 text-sm font-semibold text-best-muted">
                ক্লাস{" "}
                <span className="font-normal">
                  (ফিল্টার W1 — এখনও কার্যকর নয়)
                </span>
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
                পরীক্ষা
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
            কোর্সের তালিকা
          </h2>

          <p className="mb-6 border border-best-border bg-best-paper px-4 py-3 text-sm leading-[1.75] text-best-muted">
            নিচের English কোর্স বিভাগগুলো উদাহরণমূলক — চূড়ান্ত class level,
            syllabus ও মূল্য
            প্রতিষ্ঠাতার অনুমোদনের পর নির্ধারিত হবে।
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
                  <CourseCard
                    course={card}
                    detailHref={`/courses/${course.slug}`}
                  />
                </li>
              );
            })}
          </ul>

          <div className="mt-12 border-t border-best-border pt-8 text-center">
            <p className="text-best-body">
              আগ্রহী? English-এর ফ্রি ক্লাসে যোগ দিয়ে শুরু করো।
            </p>
            <Link
              href="/#lead"
              className="tap-target mt-4 inline-flex items-center justify-center bg-best-green px-6 py-3 font-semibold text-white no-underline hover:bg-best-green-hover hover:text-white"
            >
              English ফ্রি ক্লাস বুক করো
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
