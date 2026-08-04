import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata: Metadata = {
  title: "যোগাযোগ — বেস্ট টিউটোরিয়াল হোম",
  description: "BEST TUTORIAL HOME-এর সাথে যোগাযোগ করুন। English ফ্রি ক্লাস বা কোর্স সম্পর্কে জানতে কল করুন বা মেসেজ করুন।",
};

export default function ContactPage() {
  return <ContactPageContent />;
}