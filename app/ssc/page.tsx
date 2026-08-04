import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

export const metadata: Metadata = {
  title: "SSC English প্রস্তুতি — বেস্ট টিউটোরিয়াল হোম",
  description: "SSC পরীক্ষার্থীদের জন্য English Grammar, Writing ও Board English প্রস্তুতির কোর্স।",
};

export default function SscPage() {
  return (
    <SeoPageLayout
      eyebrow="SSC English"
      title="SSC English প্রস্তুতি"
      lead="Grammar, Writing ও Board English — তিনটি বিষয়েই সঠিক কাঠামো জানলে SSC-তে A+ পাওয়া সম্ভব। ক্লাস ৬ থেকেই শুরু করা যায়।"
    />
  );
}
