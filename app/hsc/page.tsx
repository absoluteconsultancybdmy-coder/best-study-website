import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "HSC English প্রস্তুতি — বেস্ট টিউটোরিয়াল হোম",
  description: "HSC পরীক্ষার্থীদের জন্য English Grammar, Writing ও Board English প্রস্তুতির কোর্স।",
};

export default function HscPage() {
  return (
    <SeoPageLayout
      eyebrow="HSC"
      title="HSC English প্রস্তুতি"
      lead="HSC পরীক্ষার্থীদের জন্য English Grammar, Writing ও Board English প্রস্তুতির কোর্স।"
    />
  );
}