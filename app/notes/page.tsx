import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "English নোটস — বেস্ট টিউটোরিয়াল হোম",
  description: "বিনামূল্যে ডাউনলোডযোগ্য English Grammar, Writing ও Vocabulary নোটস।",
};

export default function NotesPage() {
  return (
    <SeoPageLayout
      eyebrow="Notes"
      title="English নোটস"
      lead="বিনামূল্যে ডাউনলোডযোগ্য English Grammar, Writing ও Vocabulary নোটস।"
    />
  );
}