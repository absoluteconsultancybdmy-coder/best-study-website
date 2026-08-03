import type { Metadata } from "next";
import { TeacherPageContent } from "@/components/teacher/teacher-page-content";

export const metadata: Metadata = {
  title: "BEST TUTORIAL HOME Owner পরিচিতি — বেস্ট টিউটোরিয়াল হোম",
  description:
    "BEST TUTORIAL HOME-এর Owner পরিচিতি এবং English learning platform-এর অনুমোদন-অপেক্ষমাণ তথ্য।",
};

export default function TeacherPage() {
  return <TeacherPageContent />;
}