import type { Metadata } from "next";
import { OtpPageContent } from "@/components/auth/otp-page-content";
export const metadata: Metadata = {
  title: "OTP যাচাই — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};
export default function VerifyOtpPage() { return <OtpPageContent />; }