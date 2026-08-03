import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/legal/privacy-page-content";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোমর গোপনীয়তা নীতির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}