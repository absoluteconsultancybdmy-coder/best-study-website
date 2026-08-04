import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "ভর্তির তথ্য — বেস্ট টিউটোরিয়াল হোম",
  description: "BEST TUTORIAL HOME-এ ভর্তির প্রক্রিয়া ও প্রয়োজনীয় তথ্য।",
};

export default function AdmissionPage() {
  return (
    <SeoPageLayout
      eyebrow="Admission"
      title="ভর্তির তথ্য"
      lead="BEST TUTORIAL HOME-এ ভর্তির প্রক্রিয়া ও প্রয়োজনীয় তথ্য। ফ্রি ক্লাস করে দেখো।"
    />
  );
}