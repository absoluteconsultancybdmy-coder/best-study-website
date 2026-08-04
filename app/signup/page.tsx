import type { Metadata } from "next";
import { SignupPageContent } from "@/components/auth/signup-page-content";
export const metadata: Metadata = {
  title: "সাইন আপ — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};
export default function SignupPage() { return <SignupPageContent />; }