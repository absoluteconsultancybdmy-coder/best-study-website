import Link from "next/link";
import { OwnerPortrait3D } from "@/components/brand/owner-portrait-3d";
import { Container } from "@/components/layout/container";

export function TeacherIntro() {
  return (
    <section aria-labelledby="teacher-intro-title" className="owner-intro-section">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <OwnerPortrait3D />

          <div>
            <p className="story-kicker" lang="en">Meet the person behind BEST</p>
            <p className="mt-3 text-sm font-semibold text-best-green">Best Study-এর Owner</p>
            <h2 id="teacher-intro-title" className="mt-2 text-3xl sm:text-4xl">
              <span className="content-placeholder">[শিক্ষকের নাম] PLACEHOLDER</span>
            </h2>
            <p className="content-placeholder mt-5 max-w-2xl leading-[1.75]">
              [শিক্ষকের আসল পরিচিতি / পড়ানোর অভিজ্ঞতা যোগ হবে] PLACEHOLDER
            </p>
            <p className="mt-3 max-w-2xl text-best-body">
              Best Study-এর Owner-এর বিস্তারিত পরিচিতি এবং English learning role
              প্রতিষ্ঠাতার অনুমোদনের পর প্রকাশ করা হবে।
            </p>

            <ul className="mt-6 grid gap-3">
              <li className="content-placeholder border-t border-best-border pt-3 leading-[1.75]">
                [শিক্ষকের আসল ডিগ্রি / অভিজ্ঞতা যোগ হবে] PLACEHOLDER
              </li>
              <li className="content-placeholder border-t border-best-border pt-3 leading-[1.75]">
                [Grammar, Writing, Reading ও Vocabulary পড়ানোর পদ্ধতির তথ্য]
                PLACEHOLDER
              </li>
            </ul>

            <Link
              href="/teacher"
              className="tap-target mt-7 inline-flex items-center justify-center rounded-full border border-best-green px-6 py-3 font-semibold text-best-green no-underline hover:bg-best-paper hover:text-best-green-hover"
            >
              Owner পরিচিতি দেখো
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
