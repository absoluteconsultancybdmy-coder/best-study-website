import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "অগ্রগতি — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalProgressPage() {
  return <PortalDemo page="progress" />;
}
