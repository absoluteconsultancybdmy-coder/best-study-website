# W1 Route Expansion Status

## Implemented Routes

- `/courses` — implemented and approved before this task
- `/courses/[slug]` — implemented and approved before this task
- `/teacher` — implemented
- `/legal/terms` — implemented
- `/legal/privacy` — implemented
- `/legal/refund` — implemented

## English Subject-Only Pivot

- Existing W1 routes are unchanged.
- Homepage, courses catalogue, course details, and teacher page now use English subject-only positioning for Bangla-medium students.
- Relevant terms/privacy wording reflects English course and English free-class scope while remaining draft and placeholder-safe.
- Course structures cover Grammar, Writing, Reading, Vocabulary, and Board English without adding prices, dates, results, or other unverified claims.
- The live-book hero and course-cover system use CSS-only visuals and no heavy animation dependency.
- Reduced-motion support is present, and browser/device motion QA remains required.
- ChatGPT Image 2.0 is reserved for future approved course, resource, and Open Graph assets.

## Teacher Page Status

- Bangla metadata and semantic page sections are present.
- Teacher name, biography, credentials, teaching philosophy, support process, parent communication, image, and video remain visibly placeholder-safe.
- No university, city, experience year, student count, board result, achievement, or other unverified identity claim is present.
- The teacher image and video poster are explicitly labelled illustrative and are not presented as the real teacher.

## Legal Page Status

- All three legal routes reuse `components/legal/legal-draft-notice.tsx`.
- Every page is visibly marked as a draft requiring founder and legal approval.
- Legal identity, domain, contact email, refund rules, payment terms, data handling, disclaimers, and jurisdiction remain explicit placeholders.
- No refund period, cancellation rule, registration detail, address, payment commitment, or contact detail was invented.

## Launch Gate

Founder and qualified legal approval are still required before launch. Draft legal pages must not be treated as final policies, and real teacher information must not replace placeholders until verified and approved.
