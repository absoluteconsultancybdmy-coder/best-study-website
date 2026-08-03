import type { Metadata } from "next";
import { CoursesPageContent } from "@/components/courses/courses-page-content";

export const metadata: Metadata = {
  title: "English কোর্স — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বাংলা মিডিয়ামের Class 6–10, SSC ও HSC শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary এবং Board English প্রস্তুতি।",
};

export default function CoursesPage() {
  return <CoursesPageContent />;
}