import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";

export const metadata: Metadata = {
  title: "রিফান্ড নীতি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোমর রিফান্ড নীতির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function RefundPage() {
  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">আইনি নথি</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">রিফান্ড নীতি</h1>
          <p className="mt-3 text-best-muted">খসড়া · প্রকাশের জন্য অনুমোদিত নয়</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="refund-status">
            <h2 id="refund-status" className="text-2xl">নীতির বর্তমান অবস্থা</h2>
            <p className="mt-3">
              রিফান্ড নীতি এখনো চূড়ান্ত নয়। W1-এ পেমেন্ট ও চেকআউট সক্রিয় নয়,
              তাই এই পাতাটি কোনো রিফান্ড অধিকার, সময়সীমা বা শর্ত তৈরি করে না।
            </p>
            <p className="content-placeholder mt-3">
              [রিফান্ড নীতি] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="refund-requirement">
            <h2 id="refund-requirement" className="text-2xl">
              লঞ্চের আগে যা প্রয়োজন
            </h2>
            <p className="mt-3">
              পেমেন্ট গেটওয়ে অনুমোদন ও অর্থ গ্রহণের আগে প্রতিষ্ঠাতা/ক্লায়েন্টকে
              লিখিত চূড়ান্ত রিফান্ড নীতি দিতে হবে এবং তা আইনি পরামর্শকের মাধ্যমে
              পর্যালোচনা করাতে হবে।
            </p>
          </section>

          <section aria-labelledby="refund-terms">
            <h2 id="refund-terms" className="text-2xl">
              ভবিষ্যৎ রিফান্ড শর্ত
            </h2>
            <p className="content-placeholder mt-3">
              [যোগ্যতা, আবেদন পদ্ধতি, প্রমাণ, প্রক্রিয়াকরণ ও ব্যতিক্রম]
              PLACEHOLDER
            </p>
            <p className="mt-3">
              কোনো দিনের সংখ্যা, বাতিলের শর্ত বা ফেরতের নিশ্চয়তা অনুমোদিত তথ্য
              ছাড়া এখানে যোগ করা হবে না।
            </p>
          </section>

          <section aria-labelledby="refund-identity">
            <h2 id="refund-identity" className="text-2xl">আইনি পরিচয়</h2>
            <p className="content-placeholder mt-3">
              [আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER
            </p>
            <p className="content-placeholder mt-3">
              [প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="refund-contact">
            <h2 id="refund-contact" className="text-2xl">যোগাযোগ</h2>
            <p className="content-placeholder mt-3">
              [যোগাযোগের ইমেইল] PLACEHOLDER
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
