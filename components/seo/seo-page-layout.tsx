"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";

interface SeoPageLayoutProps {
  eyebrow: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
}

export function SeoPageLayout({ eyebrow, title, lead, children }: SeoPageLayoutProps) {
  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow">{eyebrow}</span>
            <h1 className="story-hero-title">{title}</h1>
            <p className="story-hero-lead">{lead}</p>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          {children ?? (
            <p className="content-placeholder text-best-muted">
              [বিষয়বস্তু অনুমোদনের পর যোগ হবে।] PLACEHOLDER
            </p>
          )}

          <div className="mt-16 text-center">
            <Link
              href="/free-class"
              className="button-primary tap-target inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
            >
              English ফ্রি ক্লাস বুক করো
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}