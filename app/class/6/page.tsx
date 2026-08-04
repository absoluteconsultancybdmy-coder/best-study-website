import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ক্লাস ৬ English শেখার গাইড — বেস্ট টিউটোরিয়াল হোম",
  description: "ষষ্ঠ শ্রেণির শিক্ষার্থীদের জন্য English Grammar, Reading ও Vocabulary-র ভিত্তি তৈরির গাইড।",
};

export default function Class6Page() {
  return (
    <SeoPageLayout
      eyebrow="ক্লাস ৬"
      title="ক্লাস ৬ English শেখার গাইড"
      lead="ষষ্ঠ শ্রেণি থেকেই সঠিক ভিত্তি তৈরি করলে পরের বছরগুলো অনেক সহজ হয়ে যায়। Parts of Speech, Basic Sentence Structure ও Vocabulary — এই তিনটি বিষয়েই মনোযোগ দাও।"
    />
  );
}
