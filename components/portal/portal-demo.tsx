"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PortalAuthGate, PortalShell } from "@/components/portal/portal-shell";
import { hasSupabase, supabase } from "@/lib/supabase";

const lessons = [
  { id: "grammar", title: "Parts of Speech Foundation", time: "18 min", video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  { id: "writing", title: "Paragraph Writing Structure", time: "14 min", video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" },
  { id: "reading", title: "Reading Clues and Vocabulary", time: "16 min", video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
];

const questions = [
  { q: "He goes to school. Here 'goes' is a:", options: ["Noun", "Verb", "Adjective"], answer: 1 },
  { q: "A paragraph should usually keep one clear:", options: ["Topic", "Alphabet", "Tense only"], answer: 0 },
  { q: "The word 'quickly' usually works as an:", options: ["Adverb", "Article", "Preposition"], answer: 0 },
];

const card: React.CSSProperties = {
  border: "1px solid var(--color-best-border)",
  borderRadius: ".8rem",
  background: "var(--color-best-paper)",
  padding: "1.25rem",
};

function usePortalSession() {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState("");
  useEffect(() => {
    async function check() {
      if (hasSupabase) {
        const { data } = await supabase.auth.getSession();
        setSession(data.session?.access_token ?? "");
      } else {
        setSession(localStorage.getItem("best-study-session") ?? "");
      }
      setReady(true);
    }
    check();
  }, []);
  return { ready, session };
}

export function PortalDemo({ page }: { page: "dashboard" | "courses" | "live" | "exams" | "homework" | "progress" | "payments" }) {
  const { ready, session } = usePortalSession();
  const [lessonId, setLessonId] = useState(lessons[0].id);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const lesson = lessons.find((item) => item.id === lessonId) ?? lessons[0];
  const score = useMemo(() => questions.filter((item, i) => answers[i] === item.answer).length, [answers]);

  if (!ready) return null;
  if (!session) return <PortalShell title="Portal"><PortalAuthGate /></PortalShell>;

  const title = {
    dashboard: "Dashboard",
    courses: "My English courses",
    live: "Live class",
    exams: "Exams and MCQ",
    homework: "Homework",
    progress: "Progress",
    payments: "Payments",
  }[page];

  return (
    <PortalShell title={title}>
      {page === "dashboard" && (
        <div style={{ display: "grid", gap: "1rem" }}>
          <p className="text-best-body">Welcome back. Continue today&apos;s English lesson or take the MCQ practice.</p>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            <Link href="/app/courses" className="no-underline" style={card}>Continue lesson<br /><strong className="text-best-ink">{lesson.title}</strong></Link>
            <Link href="/app/exams" className="no-underline" style={card}>Latest score<br /><strong className="text-best-ink">{score}/{questions.length}</strong></Link>
          </div>
        </div>
      )}

      {(page === "courses" || page === "live") && (
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
          <div style={card}>
            <h2 className="text-lg font-bold text-best-ink">Lesson player</h2>
            <video key={lesson.video} controls poster="/images/home/teacher-video-poster.webp" style={{ width: "100%", marginTop: ".75rem", borderRadius: ".6rem", background: "#000" }}>
              <source src={lesson.video} />
            </video>
            <p className="mt-3 text-sm text-best-muted">{lesson.title} · {lesson.time}</p>
          </div>
          <div style={{ ...card, display: "grid", gap: ".75rem", alignContent: "start" }}>
            {lessons.map((item) => (
              <button key={item.id} type="button" onClick={() => setLessonId(item.id)} className="tap-target text-left font-semibold" style={{ border: "1px solid var(--color-best-border)", borderRadius: ".65rem", background: item.id === lessonId ? "var(--color-best-green)" : "var(--color-best-cream)", color: item.id === lessonId ? "white" : "var(--color-best-body)", padding: ".75rem" }}>
                {item.title}<br /><small>{item.time}</small>
              </button>
            ))}
          </div>
        </div>
      )}

      {page === "exams" && (
        <div style={{ display: "grid", gap: "1rem" }}>
          {questions.map((item, i) => (
            <fieldset key={item.q} style={card}>
              <legend className="font-bold text-best-ink">{i + 1}. {item.q}</legend>
              <div className="mt-3 grid gap-2">
                {item.options.map((option, optionIndex) => (
                  <label key={option} className="tap-target inline-flex items-center gap-2">
                    <input type="radio" name={`q-${i}`} checked={answers[i] === optionIndex} onChange={() => setAnswers({ ...answers, [i]: optionIndex })} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <p className="font-bold text-best-ink">Score: {score}/{questions.length}</p>
        </div>
      )}

      {page === "homework" && <div style={card}>Homework: Write five sentences using noun, verb, adjective, adverb, and preposition.</div>}
      {page === "progress" && <div style={card}>Grammar 65% · Writing 40% · Reading 55%. Weak area: paragraph structure.</div>}
      {page === "payments" && <div style={card}>Payment history: Demo enrolment · BDT {process.env.NEXT_PUBLIC_COURSE_PRICE_BDT ?? "500"} · pending verification.</div>}
    </PortalShell>
  );
}
