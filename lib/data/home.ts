export type ClassOption = {
  label: string;
  helper: string;
  href: string;
};

export type ClassGroup = {
  title: string;
  columns: 2 | 5;
  options: readonly ClassOption[];
};

export type HomeCourse = {
  id: string;
  audience: string;
  title: string;
  description: string;
  coverLabel: string;
  batchStart: string;
  seats: string;
  price: string;
  detailHref?: string;
};

export type HomeReason = {
  number: string;
  title: string;
  description: string;
};

export type HomeResource = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export type LearningJourneyStep = {
  number: string;
  englishLabel: string;
  title: string;
  description: string;
};

export const classGroups: readonly ClassGroup[] = [
  {
    title: "ক্লাস",
    columns: 5,
    options: [
      { label: "৬", helper: "ক্লাস", href: "/courses?class=6" },
      { label: "৭", helper: "ক্লাস", href: "/courses?class=7" },
      { label: "৮", helper: "ক্লাস", href: "/courses?class=8" },
      { label: "৯", helper: "ক্লাস", href: "/courses?class=9" },
      { label: "১০", helper: "ক্লাস", href: "/courses?class=10" },
    ],
  },
  {
    title: "পরীক্ষা",
    columns: 2,
    options: [
      { label: "এসএসসি", helper: "পরীক্ষার্থী", href: "/courses?exam=ssc" },
      { label: "এইচএসসি", helper: "পরীক্ষার্থী", href: "/courses?exam=hsc" },
    ],
  },
] as const;

export const featuredCourses: readonly HomeCourse[] = [
  {
    id: "course-placeholder-1",
    audience: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    title: "English Grammar Foundation",
    description:
      "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য Grammar শেখার উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
    coverLabel: "English Grammar",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seats: "[আসন] PLACEHOLDER",
    price: "[মূল্য] PLACEHOLDER",
    detailHref: "/courses/placeholder-course-1",
  },
  {
    id: "course-placeholder-2",
    audience: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    title: "Board English Writing",
    description:
      "Board English-এর Writing অনুশীলনের উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
    coverLabel: "English Writing",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seats: "[আসন] PLACEHOLDER",
    price: "[মূল্য] PLACEHOLDER",
    detailHref: "/courses/placeholder-course-2",
  },
  {
    id: "course-placeholder-3",
    audience: "[ক্লাস / পরীক্ষা] PLACEHOLDER",
    title: "Reading & Vocabulary Practice",
    description:
      "Reading comprehension ও Vocabulary practice-এর উদাহরণমূলক কোর্স বিভাগ। চূড়ান্ত বিবরণ অনুমোদনের পর যোগ হবে।",
    coverLabel: "Reading & Vocabulary",
    batchStart: "[ব্যাচ শুরু] PLACEHOLDER",
    seats: "[আসন] PLACEHOLDER",
    price: "[মূল্য] PLACEHOLDER",
    detailHref: "/courses/placeholder-course-3",
  },
] as const;

export const reasons: readonly HomeReason[] = [
  {
    number: "০১",
    title: "Grammar বুঝে শেখা",
    description: "[English Grammar বোঝানোর পদ্ধতি ও অনুশীলনের বিস্তারিত] PLACEHOLDER",
  },
  {
    number: "০২",
    title: "Writing অনুশীলন",
    description: "[Writing practice, feedback ও সংশোধনের পদ্ধতি] PLACEHOLDER",
  },
  {
    number: "০৩",
    title: "Reading ও Vocabulary",
    description: "[Reading comprehension ও Vocabulary practice-এর পদ্ধতি] PLACEHOLDER",
  },
  {
    number: "০৪",
    title: "Board English প্রস্তুতি",
    description: "[Board English syllabus ও question practice-এর বিস্তারিত] PLACEHOLDER",
  },
] as const;

export const learningJourney: readonly LearningJourneyStep[] = [
  {
    number: "০১",
    englishLabel: "Grammar",
    title: "ভিত্তি পরিষ্কার করো",
    description: "Sentence কীভাবে তৈরি হয়—নিয়ম মুখস্থ না করে গঠন বুঝে শুরু করো।",
  },
  {
    number: "০২",
    englishLabel: "Writing",
    title: "নিজের ভাষায় লেখো",
    description: "Structure থেকে paragraph—ধাপে ধাপে ভাবনাকে English-এ সাজাও।",
  },
  {
    number: "০৩",
    englishLabel: "Reading",
    title: "পড়ে অর্থ ধরো",
    description: "শুধু শব্দ নয়; passage-এর ভাব, clue ও প্রশ্ন বোঝার অভ্যাস তৈরি করো।",
  },
  {
    number: "০৪",
    englishLabel: "Vocabulary",
    title: "শব্দকে কাজে লাগাও",
    description: "নতুন শব্দকে sentence ও context-এর মধ্যে দেখে ব্যবহার শেখো।",
  },
  {
    number: "০৫",
    englishLabel: "Board Questions",
    title: "প্রশ্নের ধরন চিনে নাও",
    description: "Board English প্রস্তুতির অনুমোদিত কাঠামো ও অনুশীলন পরে যোগ হবে।",
  },
] as const;

export const freeResources: readonly HomeResource[] = [
  {
    title: "Grammar Practice Sheet",
    description: "[Grammar topic, class level ও worksheet প্রাপ্যতার তথ্য] PLACEHOLDER",
    linkLabel: "Grammar resource দেখো",
    href: "#",
  },
  {
    title: "Writing Guide",
    description: "[Writing format, example ও practice guide-এর তথ্য] PLACEHOLDER",
    linkLabel: "Writing resource দেখো",
    href: "#",
  },
  {
    title: "Reading & Vocabulary",
    description: "[Reading passage, word list ও practice-এর তথ্য] PLACEHOLDER",
    linkLabel: "Reading resource দেখো",
    href: "#",
  },
] as const;
