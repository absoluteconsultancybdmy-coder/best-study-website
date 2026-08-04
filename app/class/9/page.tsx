import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ক্লাস ৯ English শেখার গাইড — বেস্ট টিউটোরিয়াল হোম",
  description: "নবম শ্রেণির শিক্ষার্থীদের জন্য SSC ভিত্তি তৈরির English Grammar ও Writing গাইড।",
};

export default function Class9Page() {
  return (
    <SeoPageLayout
      eyebrow="ক্লাস ৯"
      title="ক্লাস ৯ English শেখার গাইড"
      lead="নবম শ্রেণিতে SSC-র ভিত্তি তৈরি হয়। Sentence Transformation, Clause ও Connector-এর দক্ষতা এই বছরেই শক্ত করতে হবে।"
    />
  );
}
