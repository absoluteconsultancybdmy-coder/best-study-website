import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq/faq-page-content";

export const metadata: Metadata = {
  title: "সাধারণ প্রশ্নোত্তর — বেস্ট টিউটোরিয়াল হোম",
  description: "BEST TUTORIAL HOME English কোর্স, ভর্তি ও পেমেন্ট সম্পর্কে সাধারণ প্রশ্নের উত্তর।",
};

export default function FaqPage() {
  return <FaqPageContent />;
}