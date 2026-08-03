import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { LegalDraftNotice } from "@/components/legal/legal-draft-notice";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি (খসড়া) — বেস্ট টিউটোরিয়াল হোম",
  description:
    "বেস্ট টিউটোরিয়াল হোমর গোপনীয়তা নীতির খসড়া স্থানধারক। প্রতিষ্ঠাতা ও আইনি অনুমোদন বাকি।",
};

export default function PrivacyPage() {
  return (
    <article className="py-8 sm:py-12">
      <Container className="max-w-4xl">
        <header>
          <p className="text-sm font-semibold text-best-muted">আইনি নথি</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">গোপনীয়তা নীতি</h1>
          <p className="mt-3 text-best-muted">খসড়া · প্রকাশের জন্য অনুমোদিত নয়</p>
          <div className="mt-6">
            <LegalDraftNotice />
          </div>
        </header>

        <div className="mt-10 grid gap-9">
          <section aria-labelledby="privacy-identity">
            <h2 id="privacy-identity" className="text-2xl">নীতির পরিচয়</h2>
            <p className="content-placeholder mt-3">
              [আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER
            </p>
            <p className="mt-3">
              এটি চূড়ান্ত গোপনীয়তা নীতি নয়। তথ্য নিয়ন্ত্রণকারী প্রতিষ্ঠানের
              পরিচয় ও কার্যকর হওয়ার তারিখ পরে যোগ হবে।
            </p>
          </section>

          <section aria-labelledby="privacy-data">
            <h2 id="privacy-data" className="text-2xl">
              ভবিষ্যতে যে তথ্য সংগ্রহ হতে পারে
            </h2>
            <p className="mt-3">
              English ফ্রি ক্লাসের লিড ফর্ম সক্রিয় হলে নাম, ফোন নম্বর ও ক্লাসের
              তথ্য সংগ্রহ করা হতে পারে। বর্তমান W1 ফর্মটি UI-only এবং জমা দেওয়া
              যায় না।
            </p>
            <p className="content-placeholder mt-3">
              [ভবিষ্যৎ অথেন্টিকেশন, পেমেন্ট ও কারিগরি তথ্যের তালিকা]
              PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className="text-2xl">
              তথ্য কীভাবে ব্যবহার হতে পারে
            </h2>
            <p className="content-placeholder mt-3">
              [ক্লাস সম্পর্কে যোগাযোগ, সেবা প্রদান, নিরাপত্তা ও আইনি ব্যবহারের
              অনুমোদিত উদ্দেশ্য] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="privacy-sharing">
            <h2 id="privacy-sharing" className="text-2xl">
              তথ্য সংরক্ষণ ও শেয়ারিং
            </h2>
            <p className="content-placeholder mt-3">
              [তথ্য সংরক্ষণের সময়, সেবা প্রদানকারী, আইনি শেয়ারিং ও নিরাপত্তা
              ব্যবস্থা] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="text-2xl">
              ব্যবহারকারীর অনুরোধ ও অধিকার
            </h2>
            <p className="content-placeholder mt-3">
              [তথ্য দেখা, সংশোধন, মুছে ফেলা ও অভিযোগের প্রক্রিয়া] PLACEHOLDER
            </p>
            <p className="content-placeholder mt-3">
              [প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER
            </p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact" className="text-2xl">যোগাযোগ</h2>
            <p className="content-placeholder mt-3">
              [যোগাযোগের ইমেইল] PLACEHOLDER
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
