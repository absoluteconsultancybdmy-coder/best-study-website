import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "হোমওয়ার্ক — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalHomeworkPage() {
  return <PortalDemo page="homework" />;
}
