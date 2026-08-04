import { Container } from "@/components/layout/container";

const stats = [
  { value: "১৫+", label: "বছরের অভিজ্ঞতা", sub: "years teaching English" },
  { value: "৭+", label: "বিদ্যালয়ে পাঠদান", sub: "schools in Naogaon" },
  { value: "XX,XXX+", label: "শিক্ষার্থী", sub: "replace with verified count" },
] as const;

export function ResultsSection() {
  return (
    <section className="results-section" aria-labelledby="results-title">
      <Container>
        <h2 id="results-title" className="results-section-title">
          সংখ্যায় বেস্ট টিউটোরিয়াল হোম
        </h2>
        <div className="results-grid">
          {stats.map((s) => (
            <div key={s.value} className="results-card">
              <span className="results-value">{s.value}</span>
              <span className="results-label">{s.label}</span>
              <span className="results-sublabel">{s.sub}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
