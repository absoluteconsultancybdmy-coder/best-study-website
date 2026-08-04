import type { Metadata } from "next";
import { LoginPageContent } from "@/components/auth/login-page-content";
export const metadata: Metadata = {
  title: "লগইন — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};
export default function LoginPage() { return <LoginPageContent />; }