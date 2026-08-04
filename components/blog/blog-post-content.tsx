"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";

interface BlogPostContentProps {
  slug: string;
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  return (
    <>
      <section className="story-hero">
        <Container className="story-hero-stage">
          <div className="story-hero-copy" style={{ width: "100%", maxWidth: 640 }}>
            <span className="story-eyebrow" lang="en">Blog</span>
            <h1 className="story-hero-title content-placeholder">
              [ব্লগ পোস্টের শিরোনাম] PLACEHOLDER
            </h1>
          </div>
        </Container>
        <div className="hero-to-selector-transition" />
      </section>

      <section className="belief-story-section py-16 sm:py-24">
        <Container>
          <article className="mx-auto max-w-2xl">
            <p className="content-placeholder text-best-muted">
              [ব্লগ পোস্টের বিষয়বস্তু অনুমোদনের পর যোগ হবে।] PLACEHOLDER · slug: {slug}
            </p>

            <div className="mt-16 border-t border-best-border pt-10 text-center">
              <p className="text-best-body">আরও ব্লগ পড়তে চাও?</p>
              <Link
                href="/blog"
                className="button-primary tap-target mt-4 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
              >
                সব ব্লগ দেখো
              </Link>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
