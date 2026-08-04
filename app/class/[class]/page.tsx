import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

const CLASS_BN: Record<string, string> = {
  "6": "ক্লাস ৬", "7": "ক্লাস ৭", "8": "ক্লাস ৮",
  "9": "ক্লাস ৯", "10": "ক্লাস ১০",
  "ssc": "SSC", "hsc": "HSC",
};

interface Props { params: Promise<{ class: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { class: cls } = await params;
  const label = CLASS_BN[cls] ?? cls;
  return {
    title: `${label} English কোর্স — বেস্ট টিউটোরিয়াল হোম`,
    description: `বাংলা মিডিয়াম ${label}-এর শিক্ষার্থীদের জন্য English Grammar, Writing ও Vocabulary কোর্স।`,
  };
}

export default async function ClassPage({ params }: Props) {
  const { class: cls } = await params;
  const label = CLASS_BN[cls] ?? cls;
  return (
    <SeoPageLayout
      eyebrow={label}
      title={`${label} English কোর্স`}
      lead={`বাংলা মিডিয়াম ${label}-এর শিক্ষার্থীদের জন্য English Grammar, Writing, Reading ও Vocabulary কোর্স।`}
    />
  );
}