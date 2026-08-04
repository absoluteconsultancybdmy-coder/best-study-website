import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "নাওগাঁর বিদ্যালয় — বেস্ট টিউটোরিয়াল হোম",
  description:
    "নাওগাঁ জেলার যেসব বিদ্যালয়ে Best Tutorial Home-এর শিক্ষার্থীরা পড়াশোনা করে — সেই সব বিদ্যালয়ের বিস্তারিত তথ্য।",
};

const SCHOOLS = [
  {
    name: "Naogaon K.D. Govt. High School",
    nameBn: "নাওগাঁ কে.ডি. সরকারি উচ্চ বিদ্যালয়",
    location: "KD Road, Naogaon Sadar",
    type: "সরকারি উচ্চ বিদ্যালয়",
  },
  {
    name: "Naogaon Zilla School",
    nameBn: "নাওগাঁ জিলা স্কুল",
    location: "Naogaon Sadar",
    type: "সরকারি উচ্চ বিদ্যালয়",
  },
  {
    name: "Naogaon Govt. Girls High School",
    nameBn: "নাওগাঁ সরকারি বালিকা উচ্চ বিদ্যালয়",
    location: "Naogaon Sadar",
    type: "সরকারি বালিকা বিদ্যালয়",
  },
  {
    name: "BIAM Laboratory School & College",
    nameBn: "বিয়াম ল্যাবরেটরি স্কুল ও কলেজ",
    location: "BIAM Campus, Naogaon",
    type: "বেসরকারি স্কুল ও কলেজ",
  },
  {
    name: "Shimanto Public School",
    nameBn: "শিমান্তো পাবলিক স্কুল",
    location: "Naogaon Sadar",
    type: "বেসরকারি বিদ্যালয়",
  },
  {
    name: "PM Girls High School",
    nameBn: "পিএম গার্লস হাই স্কুল",
    location: "Naogaon",
    type: "বালিকা উচ্চ বিদ্যালয়",
  },
  {
    name: "Naogaon Govt. College",
    nameBn: "নাওগাঁ সরকারি কলেজ",
    location: "Naogaon Sadar",
    type: "সরকারি কলেজ",
  },
] as const;

export default function SchoolsPage() {
  return (
    <>
      <div className="schools-page-hero">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-60" lang="en">
            Naogaon District
          </p>
          <h1>নাওগাঁর বিদ্যালয়</h1>
          <p>
            Best Tutorial Home-এর শিক্ষার্থীরা নাওগাঁর এই বিদ্যালয়গুলোতে পড়াশোনা করে।<br />
            Class ৬–১০ এবং HSC স্তরে English শেখার পাশাপাশি বোর্ড পরীক্ষার প্রস্তুতি নিচ্ছে।
          </p>
        </Container>
      </div>

      <Container>
        <div className="schools-page-grid">
          {SCHOOLS.map((school) => (
            <div key={school.name} className="school-glass-card">
              <div className="school-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 8l8-5 8 5v9a1 1 0 01-1 1H3a1 1 0 01-1-1V8z"
                    stroke="#006A4E"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <rect x="7" y="12" width="6" height="6" rx="0.5" stroke="#006A4E" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="school-card-name">{school.nameBn}</p>
              <p className="text-xs text-best-muted mt-1" lang="en">{school.name}</p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  background: "rgba(0,106,78,0.08)",
                  color: "#006A4E",
                  borderRadius: "999px",
                  padding: "2px 10px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                }}
              >
                {school.type}
              </span>
              <p className="school-card-location">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M6 1a3.5 3.5 0 013.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 016 1z"
                    stroke="#7C7871"
                    strokeWidth="1"
                  />
                  <circle cx="6" cy="4.5" r="1" fill="#7C7871" />
                </svg>
                {school.location}
              </p>
            </div>
          ))}
        </div>

        <div style={{ paddingBottom: "3rem", textAlign: "center" }}>
          <p className="text-sm text-best-muted">
            তোমার বিদ্যালয়ের নাম তালিকায় নেই?{" "}
            <Link href="/contact" className="text-best-green font-medium no-underline hover:underline">
              আমাদের জানাও
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
