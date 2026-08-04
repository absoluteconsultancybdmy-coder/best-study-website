import type { Metadata } from "next";
import { PortalAuthGate } from "@/components/portal/portal-shell";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "অভিভাবক পোর্টাল — বেস্ট টিউটোরিয়াল হোম",
  robots: { index: false },
};

export default function ParentPortalPage() {
  return (
    <section className="belief-story-section py-16 sm:py-24">
      <Container>
        <h1 className="text-2xl font-bold text-best-ink">অভিভাবক পোর্টাল</h1>
        <p className="mt-3 text-best-body">আপনার সন্তানের English শেখার অগ্রগতি দেখুন।</p>
        <PortalAuthGate />
      </Container>
    </section>
  );
}