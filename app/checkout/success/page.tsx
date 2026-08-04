import type { Metadata } from "next";
import { CheckoutSuccessContent } from "@/components/checkout/checkout-success-content";
export const metadata: Metadata = { title: "ভর্তি সম্পন্ন — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };
export default function CheckoutSuccessPage() { return <CheckoutSuccessContent />; }