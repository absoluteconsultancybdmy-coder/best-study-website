import { Container } from "@/components/layout/container";
import { reasons } from "@/lib/data/home";

const learningBeliefs = [
  { number: "০১", title: "ভয় নয়", note: "শুরু হবে সহজ ব্যাখ্যা থেকে।" },
  { number: "০২", title: "মুখস্থ নয়", note: "নিয়ম বুঝে প্রয়োগ করতে শেখো।" },
  { number: "০৩", title: "কনফিউশন নয়", note: "ধাপে ধাপে গুছিয়ে অনুশীলন করো।" },
] as const;

export function WhyBestStudy() {
  return (
    <section aria-labelledby="why-best-study-title" className="belief-story-section">
      <Container className="pb-12 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="belief-story-intro">
          <p className="story-kicker" lang="en">A clearer way to learn English</p>
          <h2 id="why-best-study-title" className="story-section-title">
            ইংরেজি শেখার পথে
            <span>বাধা কমুক।</span>
          </h2>
          <p className="story-section-lead">
            কঠিন মনে হওয়া English-কে ছোট, পরিষ্কার ধাপে ভাঙলে শেখা সহজ হয়।
          </p>
        </div>

        <ol className="belief-statement-grid">
          {learningBeliefs.map((belief) => (
            <li key={belief.number} className="belief-statement">
              <span className="belief-number">{belief.number}</span>
              <h3>{belief.title}</h3>
              <p>{belief.note}</p>
            </li>
          ))}
        </ol>

        <div className="why-method-panel">
          <div>
            <p className="story-kicker" lang="en">Why Best Study</p>
            <h3>বোঝা থেকে প্রয়োগ—একটি গুছানো পথ।</h3>
          </div>
          <ol className="why-method-grid">
            {reasons.map((reason) => (
              <li key={reason.number}>
                <span>{reason.number}</span>
                <div>
                  <h4>{reason.title}</h4>
                  <p className="content-placeholder">{reason.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
