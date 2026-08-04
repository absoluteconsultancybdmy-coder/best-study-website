import type { Metadata } from "next";
import { CheckoutFailedContent } from "@/components/checkout/checkout-failed-content";
export const metadata: Metadata = { title: "পেমেন্ট ব্যর্থ — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };
export default function CheckoutFailedPage() { return <CheckoutFailedContent />; }