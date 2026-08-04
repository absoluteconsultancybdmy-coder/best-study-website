import type { Metadata } from "next";
import { FreeClassPageContent } from "@/components/free-class/free-class-page-content";

export const metadata: Metadata = {
  title: "English ফ্রি ক্লাস বুক করো — বেস্ট টিউটোরিয়াল হোম",
  description: "বিনামূল্যে English Grammar, Writing বা Reading ক্লাস করে দেখো। কোনো প্রতিশ্রুতি নেই।",
};

export default function FreeClassPage() {
  return <FreeClassPageContent />;
}