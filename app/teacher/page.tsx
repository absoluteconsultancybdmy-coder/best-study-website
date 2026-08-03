import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OwnerPortrait3D } from "@/components/brand/owner-portrait-3d";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Best Study Owner পরিচিতি — বেস্ট স্টাডি",
  description:
    "Best Study-এর Owner পরিচিতি এবং English learning platform-এর অনুমোদন-অপেক্ষমাণ তথ্য।",
};

const helpItems = [
  {
    number: "০১",
    title: "Grammar ও Vocabulary সহায়তা",
    description: "[English প্রশ্ন পাঠানো ও উত্তর পাওয়ার পদ্ধতি] PLACEHOLDER",
  },
  {
    number: "০২",
    title: "Writing practice",
    description: "[Writing practice ও feedback পাওয়ার পদ্ধতি] PLACEHOLDER",
  },
  {
    number: "০৩",
    title: "Reading ও Board English",
    description: "[Reading ও Board English resource-এর প্রাপ্যতা] PLACEHOLDER",
  },
] as const;

export default function TeacherPage() {
  return (
    <>
      <section
        aria-labelledby="teacher-page-title"
        className="border-b border-best-border bg-best-paper py-8 sm:py-12"
      >
        <Container>
          <nav aria-label="ব্রেডক্রাম্ব" className="text-sm text-best-muted">
            <Link href="/" className="no-underline hover:text-best-green">
              হোম
            </Link>
            <span aria-hidden="true" className="mx-2">
              ›
            </span>
            <span aria-current="page">শিক্ষক</span>
          </nav>

          <div className="mt-6 grid gap-10 md:grid-cols-[minmax(260px,380px)_1fr] md:items-center lg:gap-14">
            <OwnerPortrait3D priority size="large" />

            <div>
              <p className="text-sm font-semibold text-best-muted">
                Best Study-এর Owner
              </p>
              <h1 id="teacher-page-title" className="mt-2 text-3xl sm:text-4xl">
                <span className="content-placeholder">
                  [শিক্ষকের নাম] PLACEHOLDER
                </span>
              </h1>
              <p className="content-placeholder mt-4 max-w-2xl">
                [শিক্ষকের আসল পরিচিতি / পড়ানোর অভিজ্ঞতা যোগ হবে] PLACEHOLDER
              </p>
              <p className="mt-3 max-w-2xl text-best-body">
                Owner-এর বিস্তারিত পরিচিতি ও English learning role অনুমোদনের পর যোগ
                হবে।
              </p>
              <p className="content-placeholder mt-4 border-t border-best-border pt-4 font-semibold">
                [শিক্ষকের আসল ডিগ্রি / অভিজ্ঞতা যোগ হবে] PLACEHOLDER
              </p>
              <Link
                href="/#lead"
                className="button-primary tap-target mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold no-underline"
              >
                English ফ্রি ক্লাস বুক করো
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="philosophy-title" className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 id="philosophy-title" className="text-2xl sm:text-3xl">
              English learning direction
            </h2>
            <div className="border-l-2 border-best-saffron pl-5">
              <p className="content-placeholder">
                [Grammar, Writing, Reading ও Vocabulary শেখানোর অনুমোদিত direction ও
                সহায়তা পদ্ধতি] PLACEHOLDER
              </p>
              <p className="mt-3 text-best-body">
                অনুমোদিত Owner পরিচয় ও বাস্তব বক্তব্য পাওয়ার পর এই অংশটি
                হালনাগাদ করা হবে।
              </p>
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
            English শিখতে শিক্ষার্থীরা কীভাবে সহায়তা পাবে
          </h2>
          <p className="mt-3 max-w-2xl text-best-muted">
            নিচের সেবাগুলোর চূড়ান্ত প্রক্রিয়া প্রতিষ্ঠাতার অনুমোদনের অপেক্ষায়।
          </p>
          <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-3">
            {helpItems.map((item) => (
              <li
                key={item.title}
                className="border border-best-border bg-best-cream p-5"
              >
                <span className="inline-flex bg-best-saffron px-2 py-1 text-sm font-bold text-best-ink">
                  {item.number}
                </span>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="content-placeholder mt-2 text-[15px]">
                  {item.description}
                </p>
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
                  alt="বাস্তব ভিডিও নয়—উদাহরণমূলক শিক্ষক পরিচিতি ভিডিও পোস্টার"
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
                  ভিডিও পরে যোগ হবে
                </button>
                <p className="mt-2 text-sm leading-[1.75] text-best-muted">
                  উদাহরণমূলক পোস্টার—বাস্তব ভিডিও নিজে থেকে চালু হবে না।
                </p>
              </figcaption>
            </figure>

            <div>
              <h2 id="teacher-video-title" className="text-2xl sm:text-3xl">
                Best Study-এর Owner-কে জানো
              </h2>
              <p className="content-placeholder mt-4">
                [Owner-এর অনুমোদিত পরিচিতি ভিডিও ও ভিডিওর সারসংক্ষেপ] PLACEHOLDER
              </p>
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
              <p className="text-sm font-semibold text-best-muted">
                অভিভাবকদের জন্য
              </p>
              <h2 id="parent-trust-title" className="mt-2 text-2xl sm:text-3xl">
                English শেখার অগ্রগতি নিয়ে স্বচ্ছ যোগাযোগ
              </h2>
              <p className="content-placeholder mt-4 max-w-2xl">
                [অভিভাবক রিপোর্ট, যোগাযোগ ও সহায়তার চূড়ান্ত প্রক্রিয়া]
                PLACEHOLDER
              </p>
            </div>
            <Link
              href="/#lead"
              className="tap-target inline-flex items-center justify-center border border-best-green px-6 py-3 text-center font-semibold text-best-green no-underline hover:bg-best-paper hover:text-best-green-hover"
            >
              English ফ্রি ক্লাস সম্পর্কে জানুন
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
