import type { Metadata } from "next";
import { ForgotPageContent } from "@/components/auth/forgot-page-content";
export const metadata: Metadata = {
  title: "পাসওয়ার্ড পুনরুদ্ধার — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};
export default function ForgotPasswordPage() { return <ForgotPageContent />; }