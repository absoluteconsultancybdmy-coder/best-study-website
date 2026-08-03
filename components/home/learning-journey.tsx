import { Container } from "@/components/layout/container";
import { learningJourney } from "@/lib/data/home";

export function LearningJourney() {
  return (
    <section aria-labelledby="learning-journey-title" className="learning-journey-section">
      <Container className="learning-journey-layout">
        <div className="learning-journey-sticky">
          <p className="story-kicker" lang="en">Your English journey</p>
          <h2 id="learning-journey-title" className="story-section-title">
            এক পৃষ্ঠা থেকে
            <span>পরের অধ্যায়।</span>
          </h2>
          <p className="story-section-lead">
            Grammar দিয়ে ভিত্তি। Writing-এ প্রয়োগ। Reading ও Vocabulary-তে গভীরতা।
            শেষে Board Questions-এর প্রস্তুতি।
          </p>

          <div aria-hidden="true" className="journey-book-mark">
            <span lang="en">English</span>
            <strong>৫টি ধাপ</strong>
            <i />
          </div>
        </div>

        <ol className="learning-journey-steps">
          {learningJourney.map((step) => (
            <li key={step.number} className="journey-step-card">
              <span className="journey-step-number">{step.number}</span>
              <div>
                <p className="journey-step-english" lang="en">{step.englishLabel}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
