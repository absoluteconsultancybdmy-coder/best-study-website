import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo/seo-page-layout";

const CLASS_BN: Record<string, string> = {
  "6": "ক্লাস ৬", "7": "ক্লাস ৭", "8": "ক্লাস ৮",
  "9": "ক্লাস ৯", "10": "ক্লাস ১০",
  "ssc": "SSC", "hsc": "HSC",
};

interface Props { params: Promise<{ class: string; subject: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { class: cls, subject } = await params;
  const label = CLASS_BN[cls] ?? cls;
  return {
    title: `${label} ${subject} MCQ — বেস্ট টিউটোরিয়াল হোম`,
    description: `${label} ${subject}-এ MCQ অনুশীলন। Grammar, Vocabulary ও Reading।`,
  };
}

export default async function McqPage({ params }: Props) {
  const { class: cls, subject } = await params;
  const label = CLASS_BN[cls] ?? cls;
  return (
    <SeoPageLayout
      eyebrow={`MCQ · ${label}`}
      title={`${label} ${subject} MCQ`}
      lead={`${label} ${subject}-এ MCQ অনুশীলন। English Grammar, Vocabulary ও Reading MCQ।`}
    />
  );
}