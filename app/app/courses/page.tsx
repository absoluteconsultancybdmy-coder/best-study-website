import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "আমার কোর্স — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalCoursesPage() {
  return <PortalDemo page="courses" />;
}
