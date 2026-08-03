import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";

export const metadata: Metadata = {
  title: "ব্যবহারের শর্তাবলি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোম ওয়েবসাইটের ব্যবহারের শর্তাবলির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function TermsPage() {
  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">আইনি নথি</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">ব্যবহারের শর্তাবলি</h1>
          <p className="mt-3 text-best-muted">খসড়া · প্রকাশের জন্য অনুমোদিত নয়</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="terms-identity">
            <h2 id="terms-identity" className="text-2xl">পরিচয় ও প্রযোজ্যতা</h2>
            <p className="content-placeholder mt-3">
              [আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER
            </p>
            <p className="mt-3">
              চূড়ান্ত আইনি পরিচয়, ওয়েবসাইট মালিকানা এবং শর্ত কার্যকর হওয়ার
              তারিখ প্রতিষ্ঠাতা ও আইনি পরামর্শকের অনুমোদনের পর যোগ হবে।
            </p>
          </section>

          <section aria-labelledby="terms-use">
            <h2 id="terms-use" className="text-2xl">ওয়েবসাইট ব্যবহার</h2>
            <p className="content-placeholder mt-3">
              [ওয়েবসাইটের অনুমোদিত ব্যবহার, সীমাবদ্ধতা ও ব্যবহারকারীর যোগ্যতা]
              PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="terms-course">
            <h2 id="terms-course" className="text-2xl">
              English কোর্স ও ভর্তি সংক্রান্ত তথ্য
            </h2>
            <p className="content-placeholder mt-3">
              [English কোর্সের প্রাপ্যতা, ভর্তি প্রক্রিয়া ও তথ্য পরিবর্তনের নিয়ম]
              PLACEHOLDER
            </p>
            <p className="mt-3">
              বর্তমান কোর্স, সময়সূচি, মূল্য ও আসনের সব প্রদর্শিত স্থানধারক
              চূড়ান্ত অনুমোদনের আগে কোনো প্রতিশ্রুতি নয়।
            </p>
          </section>

          <section aria-labelledby="terms-payment">
            <h2 id="terms-payment" className="text-2xl">পেমেন্ট শর্ত</h2>
            <p className="content-placeholder mt-3">
              [পেমেন্ট পদ্ধতি, মূল্য, চালান ও লেনদেনের শর্ত] PLACEHOLDER
            </p>
            <p className="mt-3">
              W1-এ পেমেন্ট সক্রিয় নয়। এখানে কোনো পেমেন্ট নিয়ম বা আর্থিক
              অঙ্গীকার নির্ধারণ করা হয়নি।
            </p>
          </section>

          <section aria-labelledby="terms-responsibility">
            <h2 id="terms-responsibility" className="text-2xl">
              ব্যবহারকারীর দায়িত্ব
            </h2>
            <p className="content-placeholder mt-3">
              [সঠিক তথ্য প্রদান, গ্রহণযোগ্য ব্যবহার ও অ্যাকাউন্ট দায়িত্ব]
              PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="terms-disclaimer">
            <h2 id="terms-disclaimer" className="text-2xl">
              সীমাবদ্ধতা ও দায়-অস্বীকার
            </h2>
            <p className="content-placeholder mt-3">
              [দায় সীমাবদ্ধতা ও আইনসম্মত দায়-অস্বীকার] PLACEHOLDER
            </p>
            <p className="content-placeholder mt-3">
              [প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact" className="text-2xl">যোগাযোগ</h2>
            <p className="content-placeholder mt-3">
              [যোগাযোগের ইমেইল] PLACEHOLDER
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
