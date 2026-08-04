import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "সম্পর্কে — বেস্ট টিউটোরিয়াল হোম",
  description: "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English শেখার প্ল্যাটফর্ম BEST TUTORIAL HOME সম্পর্কে জানুন।",
};

export default function AboutPage() {
  return <AboutPageContent />;
}