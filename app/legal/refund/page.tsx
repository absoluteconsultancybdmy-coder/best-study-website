import type { Metadata } from "next";
import { RefundPageContent } from "@/components/legal/refund-page-content";

export const metadata: Metadata = {
  title: "রিফান্ড নীতি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোমর রিফান্ড নীতির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function RefundPage() {
  return <RefundPageContent />;
}