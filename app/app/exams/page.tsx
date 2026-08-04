import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "পরীক্ষা — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalExamsPage() {
  return <PortalDemo page="exams" />;
}
