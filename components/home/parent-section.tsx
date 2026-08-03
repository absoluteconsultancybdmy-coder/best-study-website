import { Container } from "@/components/layout/container";

export function ParentSection() {
  return (
    <section aria-labelledby="parent-section-title">
      <Container className="py-10 sm:py-14">
        <div className="grid items-center gap-6 border border-best-border p-5 sm:p-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold text-best-muted">অভিভাবকদের জন্য</p>
            <h2 id="parent-section-title" className="mt-2 text-2xl sm:text-3xl">
              আপনার সন্তানের English শেখার অগ্রগতি জানার ব্যবস্থা
            </h2>
            <p className="content-placeholder mt-4 max-w-2xl">
              [English learning report ও অভিভাবক যোগাযোগ প্রক্রিয়ার বিস্তারিত]
              PLACEHOLDER
            </p>
          </div>

          <a
            href="#"
            className="tap-target inline-flex items-center justify-center border border-best-green px-5 py-3 text-center font-semibold text-best-green underline decoration-dashed underline-offset-[0.2em] hover:bg-best-paper hover:text-best-green-hover"
          >
            [ফোন নম্বর] PLACEHOLDER
          </a>
        </div>
      </Container>
    </section>
  );
}
