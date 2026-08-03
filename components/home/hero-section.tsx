import Link from "next/link";
import { LiveBookHero } from "@/components/home/live-book-hero";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="story-hero">
      <Container className="story-hero-stage">
        <div className="story-hero-copy">
          <p className="story-eyebrow">English subject-only · বাংলা মিডিয়ামের জন্য</p>
          <h1 id="home-title" className="story-hero-title">
            ইংরেজি মুখস্থ না—
            <span>বোঝে শেখো।</span>
          </h1>
          <p className="story-hero-lead">
            Grammar, Writing, Reading, Vocabulary ও Board English—বাংলা মিডিয়ামের
            শিক্ষার্থীদের জন্য পরিষ্কারভাবে সাজানো।
          </p>

          <div className="story-hero-actions">
            <a href="#lead" className="button-primary tap-target story-primary-cta no-underline">
              English ফ্রি ক্লাস বুক করো
            </a>
            <Link href="/courses" className="tap-target story-secondary-cta no-underline">
              English কোর্স দেখো
            </Link>
          </div>

          <p className="story-teacher-note">
            <span className="content-placeholder font-semibold">
              [শিক্ষকের নাম] PLACEHOLDER
            </span>
            <span> · English শিক্ষক পরিচিতি পরে যোগ হবে</span>
          </p>
        </div>

        <div className="story-hero-object">
          <p aria-hidden="true" className="object-chapter-label" lang="en">
            Learn · Practise · Progress
          </p>
          <LiveBookHero />
        </div>

        <a href="#class-selector-title" className="story-scroll-hint no-underline">
          <span aria-hidden="true" className="story-scroll-line" />
          <span>স্ক্রল করো · English journey শুরু হোক</span>
        </a>
      </Container>
      <div aria-hidden="true" className="hero-to-selector-transition" />
    </section>
  );
}
