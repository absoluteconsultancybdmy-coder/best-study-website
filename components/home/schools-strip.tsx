import Link from "next/link";

const SCHOOLS = [
  "Naogaon K.D. Govt. High School",
  "Naogaon Zilla School",
  "Naogaon Govt. Girls High School",
  "BIAM Laboratory School & College",
  "Shimanto Public School",
  "PM Girls High School",
  "Naogaon Govt. College",
];

const items = [...SCHOOLS, ...SCHOOLS];

export function SchoolsStrip() {
  return (
    <div
      className="schools-strip"
      role="region"
      aria-label="নাওগাঁর অংশীদার বিদ্যালয়"
    >
      <Link href="/schools" className="schools-strip-label no-underline hover:opacity-80">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="6.5" fill="#FDBA3B" fillOpacity="0.18" />
          <path d="M3.5 6.5l2 2 4-4" stroke="#FDBA3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>নাওগাঁর বিদ্যালয় →</span>
      </Link>

      <div className="schools-marquee-outer" aria-hidden="true">
        <div className="schools-marquee-track">
          {items.map((school, i) => (
            <span key={i} className="schools-marquee-item">
              {school}
              <span className="schools-marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
