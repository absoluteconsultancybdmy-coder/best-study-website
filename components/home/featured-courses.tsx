import Link from "next/link";
import { CourseCard } from "@/components/courses/course-card";
import { Container } from "@/components/layout/container";
import { featuredCourses } from "@/lib/data/home";

export function FeaturedCourses() {
  return (
    <section id="courses" aria-labelledby="featured-courses-title" className="story-courses-section">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="story-courses-heading">
          <div>
            <p className="story-kicker" lang="en">Choose your next chapter</p>
            <h2 id="featured-courses-title" className="story-section-title">
              যে জায়গায় আটকে আছো,
              <span>সেখান থেকেই শুরু।</span>
            </h2>
          </div>
          <div>
            <p className="story-section-lead">
              Grammar, Writing, Reading ও Vocabulary-এর উদাহরণমূলক কোর্স বিভাগ।
              অনুমোদিত batch, schedule ও মূল্য পরে যোগ হবে।
            </p>
            <Link href="/courses" className="tap-target story-text-link">
              সব English কোর্স দেখো <span aria-hidden="true">→</span>
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
