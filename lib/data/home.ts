import type { Bi } from "@/lib/i18n/bi";

export type ClassOption = {
  label: string;
  helper: Bi;
  href: string;
};

export type ClassGroup = {
  title: Bi;
  columns: 2 | 5;
  options: readonly ClassOption[];
};

export type HomeCourse = {
  id: string;
  audience: Bi;
  title: string;
  description: Bi;
  coverLabel: string;
  batchStart: Bi;
  seats: Bi;
  price: Bi;
  detailHref?: string;
};

export type HomeReason = {
  number: string;
  title: Bi;
  description: Bi;
};

export type HomeResource = {
  title: string;
  description: Bi;
  linkLabel: Bi;
  href: string;
};

export type LearningJourneyStep = {
  number: string;
  englishLabel: string;
  title: Bi;
  description: Bi;
};

export const classGroups: readonly ClassGroup[] = [
  {
    title: { bn: "ক্লাস", en: "Class" },
    columns: 5,
    options: [
      { label: "৬", helper: { bn: "ক্লাস", en: "Class" }, href: "/courses?class=6" },
      { label: "৭", helper: { bn: "ক্লাস", en: "Class" }, href: "/courses?class=7" },
      { label: "৮", helper: { bn: "ক্লাস", en: "Class" }, href: "/courses?class=8" },
      { label: "৯", helper: { bn: "ক্লাস", en: "Class" }, href: "/courses?class=9" },
      { label: "১০", helper: { bn: "ক্লাস", en: "Class" }, href: "/courses?class=10" },
    ],
  },
  {
    title: { bn: "পরীক্ষা", en: "Exams" },
    columns: 2,
    options: [
      { label: "এসএসসি", helper: { bn: "পরীক্ষার্থী", en: "Examinee" }, href: "/courses?exam=ssc" },
      { label: "এইচএসসি", helper: { bn: "পরীক্ষার্থী", en: "Examinee" }, href: "/courses?exam=hsc" },
    ],
  },
] as const;

export const featuredCourses: readonly HomeCourse[] = [
  {
    id: "course-placeholder-1",
    audience: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    title: "English Grammar Foundation",
    description: {
      bn: "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য Grammar শেখার উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
      en: "An example course section for Bangla-medium students learning Grammar. Final description will be added after approval.",
    },
    coverLabel: "English Grammar",
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seats: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    price: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    detailHref: "/courses/placeholder-course-1",
  },
  {
    id: "course-placeholder-2",
    audience: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    title: "Board English Writing",
    description: {
      bn: "Board English-এর Writing অনুশীলনের উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
      en: "An example course section for Board English Writing practice. Final description will be added after approval.",
    },
    coverLabel: "English Writing",
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seats: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    price: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    detailHref: "/courses/placeholder-course-2",
  },
  {
    id: "course-placeholder-3",
    audience: { bn: "[ক্লাস / পরীক্ষা] PLACEHOLDER", en: "[Class / Exam] PLACEHOLDER" },
    title: "Reading & Vocabulary Practice",
    description: {
      bn: "Reading comprehension ও Vocabulary practice-এর উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
      en: "An example course section for Reading comprehension and Vocabulary practice. Final description will be added after approval.",
    },
    coverLabel: "Reading & Vocabulary",
    batchStart: { bn: "[ব্যাচ শুরু] PLACEHOLDER", en: "[Batch start] PLACEHOLDER" },
    seats: { bn: "[আসন] PLACEHOLDER", en: "[Seats] PLACEHOLDER" },
    price: { bn: "[মূল্য] PLACEHOLDER", en: "[Price] PLACEHOLDER" },
    detailHref: "/courses/placeholder-course-3",
  },
] as const;

export const reasons: readonly HomeReason[] = [
  {
    number: "০১",
    title: { bn: "Grammar বুঝে শেখা", en: "Learn Grammar with understanding" },
    description: {
      bn: "[English Grammar বোঝানোর পদ্ধতি ও অনুশীলনের বিস্তারিত] PLACEHOLDER",
      en: "[Details of how English Grammar is taught and practised] PLACEHOLDER",
    },
  },
  {
    number: "০২",
    title: { bn: "Writing অনুশীলন", en: "Writing practice" },
    description: {
      bn: "[Writing practice, feedback ও সংশোধনের পদ্ধতি] PLACEHOLDER",
      en: "[Writing practice, feedback and correction process] PLACEHOLDER",
    },
  },
  {
    number: "০৩",
    title: { bn: "Reading ও Vocabulary", en: "Reading & Vocabulary" },
    description: {
      bn: "[Reading comprehension ও Vocabulary practice-এর পদ্ধতি] PLACEHOLDER",
      en: "[Reading comprehension and Vocabulary practice process] PLACEHOLDER",
    },
  },
  {
    number: "০৪",
    title: { bn: "Board English প্রস্তুতি", en: "Board English preparation" },
    description: {
      bn: "[Board English syllabus ও question practice-এর বিস্তারিত] PLACEHOLDER",
      en: "[Details of Board English syllabus and question practice] PLACEHOLDER",
    },
  },
] as const;

export const learningJourney: readonly LearningJourneyStep[] = [
  {
    number: "০১",
    englishLabel: "Grammar",
    title: { bn: "ভিত্তি পরিষ্কার করো", en: "Clarify the foundation" },
    description: {
      bn: "Sentence কীভাবে তৈরি হয়—নিয়ম মুখস্থ না করে গঠন বুঝে শুরু করো।",
      en: "Learn how sentences are built—start by understanding structure instead of memorising rules.",
    },
  },
  {
    number: "০২",
    englishLabel: "Writing",
    title: { bn: "নিজের ভাষায় লেখো", en: "Write in your own words" },
    description: {
      bn: "Structure থেকে paragraph—ধাপে ধাপে ভাবনাকে English-এ সাজাও।",
      en: "From structure to paragraph—step by step, shape your thoughts in English.",
    },
  },
  {
    number: "০৩",
    englishLabel: "Reading",
    title: { bn: "পড়ে অর্থ ধরো", en: "Grasp meaning by reading" },
    description: {
      bn: "শুধু শব্দ নয়; passage-এর ভাব, clue ও প্রশ্ন বোঝার অভ্যাস তৈরি করো।",
      en: "Not just words—build the habit of understanding a passage's idea, clues and questions.",
    },
  },
  {
    number: "০৪",
    englishLabel: "Vocabulary",
    title: { bn: "শব্দকে কাজে লাগাও", en: "Put words to work" },
    description: {
      bn: "নতুন শব্দকে sentence ও context-এর মধ্যে দেখে ব্যবহার শেখো।",
      en: "Learn to use new words by seeing them within sentences and contexts.",
    },
  },
  {
    number: "০৫",
    englishLabel: "Board Questions",
    title: { bn: "প্রশ্নের ধরন চিনে নাও", en: "Recognise question patterns" },
    description: {
      bn: "Board English প্রস্তুতির অনুমোদিত কাঠামো ও অনুশীলন পরে যোগ হবে।",
      en: "The approved structure and practice for Board English preparation will be added later.",
    },
  },
] as const;

export const freeResources: readonly HomeResource[] = [
  {
    title: "Grammar Practice Sheet",
    description: {
      bn: "[Grammar topic, class level ও worksheet প্রাপ্যতার তথ্য] PLACEHOLDER",
      en: "[Grammar topic, class level and worksheet availability] PLACEHOLDER",
    },
    linkLabel: { bn: "Grammar resource দেখো", en: "View Grammar resource" },
    href: "#",
  },
  {
    title: "Writing Guide",
    description: {
      bn: "[Writing format, example ও practice guide-এর তথ্য] PLACEHOLDER",
      en: "[Writing format, example and practice guide information] PLACEHOLDER",
    },
    linkLabel: { bn: "Writing resource দেখো", en: "View Writing resource" },
    href: "#",
  },
  {
    title: "Reading & Vocabulary",
    description: {
      bn: "[Reading passage, word list ও practice-এর তথ্য] PLACEHOLDER",
      en: "[Reading passage, word list and practice information] PLACEHOLDER",
    },
    linkLabel: { bn: "Reading resource দেখো", en: "View Reading resource" },
    href: "#",
  },
] as const;
