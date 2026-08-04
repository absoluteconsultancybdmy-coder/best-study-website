import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "Board Questions — বেস্ট টিউটোরিয়াল হোম",
  description: "SSC ও HSC English বোর্ড প্রশ্ন এবং উত্তর সংগ্রহ।",
};

export default function BoardQuestionsPage() {
  return (
    <SeoPageLayout
      eyebrow="Board Questions"
      title="Board Questions"
      lead="SSC ও HSC English বোর্ড প্রশ্ন এবং উত্তর সংগ্রহ।"
    />
  );
}