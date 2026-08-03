import type { Metadata } from "next";
import { TermsPageContent } from "@/components/legal/terms-page-content";

export const metadata: Metadata = {
  title: "ব্যবহারের শর্তাবলি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোম ওয়েবসাইটের ব্যবহারের শর্তাবলির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function TermsPage() {
  return <TermsPageContent />;
}