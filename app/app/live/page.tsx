import type { Metadata } from "next";
import { PortalDemo } from "@/components/portal/portal-demo";

export const metadata: Metadata = { title: "লাইভ ক্লাস — বেস্ট টিউটোরিয়াল হোম", robots: { index: false } };

export default function PortalLivePage() {
  return <PortalDemo page="live" />;
}
