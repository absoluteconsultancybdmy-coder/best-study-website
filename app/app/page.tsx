import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "ড্যাশবোর্ড — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalDashboardPage() {
  return <PortalDemo page="dashboard" />;
}
