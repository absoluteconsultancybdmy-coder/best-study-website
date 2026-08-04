import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "পেমেন্ট — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalPaymentsPage() {
  return <PortalDemo page="payments" />;
}
