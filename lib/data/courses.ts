import type { Bi } from "@/lib/i18n/bi";

export type CourseFaq = {
  readonly question: Bi;
  readonly answer: Bi;
};

export type CourseModule = {
  readonly title: Bi;
};

export type Course = {
  readonly slug: string;
  readonly classOrExam: Bi;
  readonly subject: string;
  readonly title: string;
  readonly shortDescription: Bi;
  readonly longDescription: Bi;
  readonly batchStart: Bi;
  readonly seatsLabel: Bi;
  readonly priceLabel: Bi;
  readonly coverLabel: string;
  readonly scheduleLabel: Bi;
  readonly teacherLabel: Bi;
  readonly modules: readonly CourseModule[];
  readonly whoThisIsFor: readonly Bi[];
  readonly faq: readonly CourseFaq[];
};

export const courses: readonly Course[] = [
  {
    slug: "placeholder-course-1",
    classOrExam: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    subject: "English Grammar",
    title: "English Grammar Foundation",
    shortDescription: {
      bn: "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar শেখার উদাহরণমূলক কোর্স বিভাগ।",
      en: "An example course section for Bangla-medium students learning English Grammar.",
    },
    longDescription: {
      bn: "[English Grammar কোর্সের লক্ষ্য, শেখানোর পদ্ধতি, class level ও syllabus coverage] PLACEHOLDER",
      en: "[English Grammar course goals, teaching method, class level and syllabus coverage] PLACEHOLDER",
    },
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seatsLabel: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    priceLabel: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    coverLabel: "English Grammar",
    scheduleLabel: { bn: "[শিডিউল] PLACEHOLDER", en: "[Schedule] PLACEHOLDER" },
    teacherLabel: { bn: "[শিক্ষকের নাম] PLACEHOLDER", en: "[Teacher name] PLACEHOLDER" },
    modules: [
      { title: { bn: "[Grammar module — Parts of Speech ও Sentence] PLACEHOLDER", en: "[Grammar module — Parts of Speech and Sentence] PLACEHOLDER" } },
      { title: { bn: "[Grammar module — Tense ও Verb] PLACEHOLDER", en: "[Grammar module — Tense and Verb] PLACEHOLDER" } },
      { title: { bn: "[Grammar module — Clause ও Transformation] PLACEHOLDER", en: "[Grammar module — Clause and Transformation] PLACEHOLDER" } },
      { title: { bn: "[Grammar module — Board question practice] PLACEHOLDER", en: "[Grammar module — Board question practice] PLACEHOLDER" } },
    ],
    whoThisIsFor: [
      { bn: "[Grammar শেখার লক্ষ্য class / exam level] PLACEHOLDER", en: "[Grammar learning target class / exam level] PLACEHOLDER" },
      { bn: "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER", en: "[Required prior preparation or learning need] PLACEHOLDER" },
    ],
    faq: [
      {
        question: { bn: "[English Grammar course সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about the English Grammar course] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
      {
        question: { bn: "[Practice ও support সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about practice and support] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
    ],
  },
  {
    slug: "placeholder-course-2",
    classOrExam: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    subject: "English Writing",
    title: "Board English Writing",
    shortDescription: {
      bn: "Bangla-medium students-এর Board English Writing practice-এর উদাহরণমূলক কোর্স বিভাগ।",
      en: "An example course section for Bangla-medium students' Board English Writing practice.",
    },
    longDescription: {
      bn: "[English Writing কোর্সের লক্ষ্য, format, guided practice ও feedback process] PLACEHOLDER",
      en: "[English Writing course goals, format, guided practice and feedback process] PLACEHOLDER",
    },
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seatsLabel: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    priceLabel: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    coverLabel: "English Writing",
    scheduleLabel: { bn: "[শিডিউল] PLACEHOLDER", en: "[Schedule] PLACEHOLDER" },
    teacherLabel: { bn: "[শিক্ষকের নাম] PLACEHOLDER", en: "[Teacher name] PLACEHOLDER" },
    modules: [
      { title: { bn: "[Writing module — Sentence ও Paragraph] PLACEHOLDER", en: "[Writing module — Sentence and Paragraph] PLACEHOLDER" } },
      { title: { bn: "[Writing module — Email / Letter / Application] PLACEHOLDER", en: "[Writing module — Email / Letter / Application] PLACEHOLDER" } },
      { title: { bn: "[Writing module — Story / Composition] PLACEHOLDER", en: "[Writing module — Story / Composition] PLACEHOLDER" } },
      { title: { bn: "[Writing module — Board writing practice] PLACEHOLDER", en: "[Writing module — Board writing practice] PLACEHOLDER" } },
    ],
    whoThisIsFor: [
      { bn: "[Writing practice-এর লক্ষ্য class / exam level] PLACEHOLDER", en: "[Writing practice target class / exam level] PLACEHOLDER" },
      { bn: "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER", en: "[Required prior preparation or learning need] PLACEHOLDER" },
    ],
    faq: [
      {
        question: { bn: "[English Writing course সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about the English Writing course] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
      {
        question: { bn: "[Writing feedback সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about writing feedback] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
    ],
  },
  {
    slug: "placeholder-course-3",
    classOrExam: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    subject: "English Reading & Vocabulary",
    title: "Reading & Vocabulary Practice",
    shortDescription: {
      bn: "Reading comprehension ও Vocabulary practice-এর উদাহরণমূলক English course বিভাগ।",
      en: "An example English course section for Reading comprehension and Vocabulary practice.",
    },
    longDescription: {
      bn: "[Reading ও Vocabulary course-এর লক্ষ্য, passage type, word practice ও support process] PLACEHOLDER",
      en: "[Reading and Vocabulary course goals, passage type, word practice and support process] PLACEHOLDER",
    },
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seatsLabel: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    priceLabel: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    coverLabel: "Reading & Vocabulary",
    scheduleLabel: { bn: "[শিডিউল] PLACEHOLDER", en: "[Schedule] PLACEHOLDER" },
    teacherLabel: { bn: "[শিক্ষকের নাম] PLACEHOLDER", en: "[Teacher name] PLACEHOLDER" },
    modules: [
      { title: { bn: "[Reading module — Passage বোঝার কৌশল] PLACEHOLDER", en: "[Reading module — Passage comprehension strategy] PLACEHOLDER" } },
      { title: { bn: "[Reading module — Question ও answer practice] PLACEHOLDER", en: "[Reading module — Question and answer practice] PLACEHOLDER" } },
      { title: { bn: "[Vocabulary module — Word meaning ও usage] PLACEHOLDER", en: "[Vocabulary module — Word meaning and usage] PLACEHOLDER" } },
      { title: { bn: "[Vocabulary module — Board context practice] PLACEHOLDER", en: "[Vocabulary module — Board context practice] PLACEHOLDER" } },
    ],
    whoThisIsFor: [
      { bn: "[Reading / Vocabulary লক্ষ্য class / exam level] PLACEHOLDER", en: "[Reading / Vocabulary target class / exam level] PLACEHOLDER" },
      { bn: "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER", en: "[Required prior preparation or learning need] PLACEHOLDER" },
    ],
    faq: [
      {
        question: { bn: "[Reading course সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about the Reading course] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
      {
        question: { bn: "[Vocabulary practice সম্পর্কে প্রশ্ন] PLACEHOLDER", en: "[Question about vocabulary practice] PLACEHOLDER" },
        answer: { bn: "[অনুমোদিত উত্তর] PLACEHOLDER", en: "[Approved answer] PLACEHOLDER" },
      },
    ],
  },
] as const;

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
