import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ক্লাস ৭ English শেখার গাইড — বেস্ট টিউটোরিয়াল হোম",
  description: "সপ্তম শ্রেণির শিক্ষার্থীদের জন্য English Tense, Writing ও Reading-এর গাইড।",
};

export default function Class7Page() {
  return (
    <SeoPageLayout
      eyebrow="ক্লাস ৭"
      title="ক্লাস ৭ English শেখার গাইড"
      lead="সপ্তম শ্রেণিতে Tense-এর পরিচয় ও সঠিক ব্যবহার শেখা সবচেয়ে গুরুত্বপূর্ণ। এই দক্ষতা ক্লাস ৮ থেকে SSC পর্যন্ত সব পরীক্ষায় কাজে আসে।"
    />
  );
}
