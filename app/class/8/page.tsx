import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ক্লাস ৮ English শেখার গাইড — বেস্ট টিউটোরিয়াল হোম",
  description: "অষ্টম শ্রেণির শিক্ষার্থীদের জন্য English Voice Change, Narration ও Writing-এর গাইড।",
};

export default function Class8Page() {
  return (
    <SeoPageLayout
      eyebrow="ক্লাস ৮"
      title="ক্লাস ৮ English শেখার গাইড"
      lead="অষ্টম শ্রেণিতে Voice Change ও Narration Change শেখা জরুরি — এই দুটি বিষয় SSC পর্যন্ত প্রতি পরীক্ষায় থাকে।"
    />
  );
}
