import type { Metadata } from "next";
import { CheckoutPageContent } from "@/components/checkout/checkout-page-content";

interface Props { params: Promise<{ courseSlug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseSlug } = await params;
  return {
    title: `ভর্তি হও · ${courseSlug} — বেস্ট টিউটোরিয়াল হোম`,
    robots: { index: false },
  };
}

export default async function CheckoutPage({ params }: Props) {
  const { courseSlug } = await params;
  return <CheckoutPageContent courseSlug={courseSlug} />;
}