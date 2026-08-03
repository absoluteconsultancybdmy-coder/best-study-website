import { Container } from "@/components/layout/container";

const fieldClassName =
  "min-h-12 w-full border border-best-border bg-best-paper px-3 text-best-ink focus:border-best-green";

export function LeadCaptureSection() {
  return (
    <section id="lead" aria-labelledby="lead-title" className="bg-best-green">
      <Container className="grid gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 id="lead-title" className="text-2xl text-white sm:text-3xl">
            English-এর একটা ফ্রি ক্লাস করে দেখো
          </h2>
          <p className="mt-4 max-w-xl text-best-border">
            English শেখার class level বুঝতে নাম, মোবাইল নম্বর ও ক্লাসের তথ্য
            দেওয়ার ফর্মটি এখন কেবল UI হিসেবে প্রস্তুত। যোগাযোগ প্রক্রিয়া
            অনুমোদনের পর সংযুক্ত হবে।
          </p>
        </div>

        <form
          aria-describedby="lead-help lead-status"
          className="grid gap-4 border border-best-green-hover bg-best-cream p-5 sm:p-6"
        >
          <label className="grid gap-1.5 font-semibold text-best-ink">
            তোমার নাম
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="তোমার নাম লিখো"
              className={fieldClassName}
            />
          </label>

          <label className="grid gap-1.5 font-semibold text-best-ink">
            মোবাইল নম্বর
            <input
              type="tel"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="[ফোন নম্বর] PLACEHOLDER"
              className={`${fieldClassName} num-en`}
            />
          </label>

          <label className="grid gap-1.5 font-semibold text-best-ink">
            ক্লাস
            <select name="class" required defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                ক্লাস বেছে নাও
              </option>
              <option value="6">ক্লাস ৬</option>
              <option value="7">ক্লাস ৭</option>
              <option value="8">ক্লাস ৮</option>
              <option value="9">ক্লাস ৯</option>
              <option value="10">ক্লাস ১০</option>
              <option value="ssc">এসএসসি পরীক্ষার্থী</option>
              <option value="hsc">এইচএসসি পরীক্ষার্থী</option>
            </select>
          </label>

          <button
            type="submit"
            disabled
            className="min-h-[52px] cursor-not-allowed bg-best-green px-5 py-3 text-lg font-semibold text-white opacity-70"
          >
            English ফ্রি ক্লাসের জন্য নাম দাও
          </button>

          <p id="lead-status" className="content-placeholder text-sm leading-[1.75]">
            [ফর্ম সংযোগ] PLACEHOLDER — জমা দেওয়ার সুবিধা এখনো সক্রিয় নয়।
          </p>
          <p id="lead-help" className="text-sm leading-[1.75] text-best-muted">
            নম্বর শুধু ক্লাস সম্পর্কে যোগাযোগের জন্য ব্যবহার করার নীতি প্রযোজ্য
            হবে। ফর্ম সংযোগের আগে গোপনীয়তা নীতি চূড়ান্ত করা হবে।
          </p>
        </form>
      </Container>
    </section>
  );
}
