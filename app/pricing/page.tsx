import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/pricing-page-content";

export const metadata: Metadata = {
  title: "মূল্য তালিকা — বেস্ট টিউটোরিয়াল হোম",
  description: "BEST TUTORIAL HOME English কোর্সের মূল্য তালিকা। ফ্রি ক্লাস দিয়ে শুরু করো।",
};

export default function PricingPage() {
  return <PricingPageContent />;
}