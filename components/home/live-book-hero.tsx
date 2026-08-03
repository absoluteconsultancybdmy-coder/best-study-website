const learningAreas = [
  { label: "Grammar", mark: "G", position: "subject-card-grammar" },
  { label: "Writing", mark: "W", position: "subject-card-writing" },
  { label: "Vocabulary", mark: "V", position: "subject-card-vocabulary" },
  { label: "Reading", mark: "R", position: "subject-card-reading" },
  { label: "Board Questions", mark: "BQ", position: "subject-card-board" },
] as const;

const pageLines = ["line-one", "line-two", "line-three", "line-four"] as const;

export function LiveBookHero() {
  return (
    <figure aria-labelledby="live-book-caption" className="premium-book-scene">
      <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
      <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
      <div aria-hidden="true" className="hero-light-sweep" />
      <div aria-hidden="true" className="hero-sparkle sparkle-one" />
      <div aria-hidden="true" className="hero-sparkle sparkle-two" />
      <div aria-hidden="true" className="hero-sparkle sparkle-three" />

      <div className="premium-book-stage" aria-hidden="true">
        <div className="book-ground-glow" />
        <div className="book-ground-shadow" />
        <div className="premium-book motion-book-float">
          <div className="book-cover-layer" />
          <div className="book-page-stack book-page-stack-left" />
          <div className="book-page-stack book-page-stack-right" />

          <div className="book-spread-3d">
            <div className="book-leaf book-leaf-left" lang="en">
              <span className="book-kicker">Learn clearly</span>
              <strong>English</strong>
              <span className="book-accent-rule" />
              <small>Grammar · Writing</small>
              <span className="book-page-lines">
                {pageLines.map((line) => (
                  <span key={line} className={line} />
                ))}
              </span>
              <span className="book-page-corner" />
            </div>

            <div className="book-spine" />

            <div className="book-leaf book-leaf-right" lang="en">
              <span className="book-kicker">Practice daily</span>
              <strong>Build confidence</strong>
              <span className="book-accent-rule" />
              <small>Reading · Vocabulary</small>
              <span className="book-page-lines">
                {pageLines.map((line) => (
                  <span key={line} className={line} />
                ))}
              </span>
              <span className="book-page-shimmer" />
            </div>
          </div>
        </div>
      </div>

      <ul aria-label="English শেখার ক্ষেত্র" className="subject-card-cloud">
        {learningAreas.map((area) => (
          <li key={area.label} className={`subject-glass-card ${area.position}`} lang="en">
            <span aria-hidden="true" className="subject-card-mark">
              {area.mark}
            </span>
            <span>{area.label}</span>
          </li>
        ))}
      </ul>

      <figcaption id="live-book-caption" className="sr-only">
        English Grammar, Writing, Vocabulary, Reading ও Board Questions শেখার ক্ষেত্রসহ
        একটি উদাহরণমূলক খোলা বই।
      </figcaption>
    </figure>
  );
}
