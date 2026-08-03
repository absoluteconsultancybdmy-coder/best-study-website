import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailContent } from "@/components/courses/course-detail-content";
import { courses, getCourseBySlug } from "@/lib/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — বেস্ট টিউটোরিয়াল হোম`,
    description: course.shortDescription.bn,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <CourseDetailContent course={course} />;
}