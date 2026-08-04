import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ক্লাস ১০ English শেখার গাইড — বেস্ট টিউটোরিয়াল হোম",
  description: "দশম শ্রেণির শিক্ষার্থীদের জন্য SSC 2027 English পরীক্ষার সম্পূর্ণ প্রস্তুতির গাইড।",
};

export default function Class10Page() {
  return (
    <SeoPageLayout
      eyebrow="ক্লাস ১০"
      title="ক্লাস ১০ English শেখার গাইড"
      lead="দশম শ্রেণি হলো SSC পরীক্ষার বছর। সব Grammar Rules একত্রিত করে Board Pattern-এ অনুশীলন করাই এই বছরের মূল লক্ষ্য। এখনই শুরু করো।"
    />
  );
}
