import type { Metadata } from "next";
import { PortalShell, PortalAuthGate } from "@/components/portal/portal-shell";

export const metadata: Metadata = {
  title: "সেটিংস — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};

export default function PortalSettingsPage() {
  return (
    <PortalShell title="[PLACEHOLDER]">
      <PortalAuthGate />
    </PortalShell>
  );
}