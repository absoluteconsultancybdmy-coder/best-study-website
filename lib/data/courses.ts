export type CourseFaq = {
  readonly question: string;
  readonly answer: string;
};

export type CourseModule = {
  readonly title: string;
};

export type Course = {
  readonly slug: string;
  readonly classOrExam: string;
  readonly subject: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly batchStart: string;
  readonly seatsLabel: string;
  readonly priceLabel: string;
  readonly coverLabel: string;
  readonly scheduleLabel: string;
  readonly teacherLabel: string;
  readonly modules: readonly CourseModule[];
  readonly whoThisIsFor: readonly string[];
  readonly faq: readonly CourseFaq[];
};

export const courses: readonly Course[] = [
  {
    slug: "placeholder-course-1",
    classOrExam: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    subject: "English Grammar",
    title: "English Grammar Foundation",
    shortDescription:
      "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar শেখার উদাহরণমূলক কোর্স বিভাগ।",
    longDescription:
      "[English Grammar কোর্সের লক্ষ্য, শেখানোর পদ্ধতি, class level ও syllabus coverage] PLACEHOLDER",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seatsLabel: "[আসন] PLACEHOLDER",
    priceLabel: "[মূল্য] PLACEHOLDER",
    coverLabel: "English Grammar",
    scheduleLabel: "[শিডিউল] PLACEHOLDER",
    teacherLabel: "[শিক্ষকের নাম] PLACEHOLDER",
    modules: [
      { title: "[Grammar module — Parts of Speech ও Sentence] PLACEHOLDER" },
      { title: "[Grammar module — Tense ও Verb] PLACEHOLDER" },
      { title: "[Grammar module — Clause ও Transformation] PLACEHOLDER" },
      { title: "[Grammar module — Board question practice] PLACEHOLDER" },
    ],
    whoThisIsFor: [
      "[Grammar শেখার লক্ষ্য class / exam level] PLACEHOLDER",
      "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER",
    ],
    faq: [
      {
        question: "[English Grammar course সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
      {
        question: "[Practice ও support সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
    ],
  },
  {
    slug: "placeholder-course-2",
    classOrExam: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    subject: "English Writing",
    title: "Board English Writing",
    shortDescription:
      "Bangla-medium students-এর Board English Writing practice-এর উদাহরণমূলক কোর্স বিভাগ।",
    longDescription:
      "[English Writing কোর্সের লক্ষ্য, format, guided practice ও feedback process] PLACEHOLDER",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seatsLabel: "[আসন] PLACEHOLDER",
    priceLabel: "[মূল্য] PLACEHOLDER",
    coverLabel: "English Writing",
    scheduleLabel: "[শিডিউল] PLACEHOLDER",
    teacherLabel: "[শিক্ষকের নাম] PLACEHOLDER",
    modules: [
      { title: "[Writing module — Sentence ও Paragraph] PLACEHOLDER" },
      { title: "[Writing module — Email / Letter / Application] PLACEHOLDER" },
      { title: "[Writing module — Story / Composition] PLACEHOLDER" },
      { title: "[Writing module — Board writing practice] PLACEHOLDER" },
    ],
    whoThisIsFor: [
      "[Writing practice-এর লক্ষ্য class / exam level] PLACEHOLDER",
      "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER",
    ],
    faq: [
      {
        question: "[English Writing course সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
      {
        question: "[Writing feedback সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
    ],
  },
  {
    slug: "placeholder-course-3",
    classOrExam: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    subject: "English Reading & Vocabulary",
    title: "Reading & Vocabulary Practice",
    shortDescription:
      "Reading comprehension ও Vocabulary practice-এর উদাহরণমূলক English course বিভাগ।",
    longDescription:
      "[Reading ও Vocabulary course-এর লক্ষ্য, passage type, word practice ও support process] PLACEHOLDER",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seatsLabel: "[আসন] PLACEHOLDER",
    priceLabel: "[মূল্য] PLACEHOLDER",
    coverLabel: "Reading & Vocabulary",
    scheduleLabel: "[শিডিউল] PLACEHOLDER",
    teacherLabel: "[শিক্ষকের নাম] PLACEHOLDER",
    modules: [
      { title: "[Reading module — Passage বোঝার কৌশল] PLACEHOLDER" },
      { title: "[Reading module — Question ও answer practice] PLACEHOLDER" },
      { title: "[Vocabulary module — Word meaning ও usage] PLACEHOLDER" },
      { title: "[Vocabulary module — Board context practice] PLACEHOLDER" },
    ],
    whoThisIsFor: [
      "[Reading / Vocabulary লক্ষ্য class / exam level] PLACEHOLDER",
      "[প্রয়োজনীয় পূর্বপ্রস্তুতি বা learning need] PLACEHOLDER",
    ],
    faq: [
      {
        question: "[Reading course সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
      {
        question: "[Vocabulary practice সম্পর্কে প্রশ্ন] PLACEHOLDER",
        answer: "[অনুমোদিত উত্তর] PLACEHOLDER",
      },
    ],
  },
] as const;

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
