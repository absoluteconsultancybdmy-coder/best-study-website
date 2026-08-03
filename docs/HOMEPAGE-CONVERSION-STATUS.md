# Homepage Conversion Status

## Files Created or Updated

- `app/page.tsx`
- `components/home/hero-section.tsx`
- `components/home/class-selector.tsx`
- `components/home/featured-courses.tsx`
- `components/home/why-best-study.tsx`
- `components/home/teacher-intro.tsx`
- `components/home/free-resources.tsx`
- `components/home/parent-section.tsx`
- `components/home/lead-capture-section.tsx`
- `components/courses/course-card.tsx`
- `lib/data/home.ts`
- `docs/HOMEPAGE-CONVERSION-STATUS.md`

## Design Reference

The implementation uses `../best-study-project/02_DESIGN/claude-design-files/Best Study Homepage.dc.html` only as a visual and UX reference. No raw design HTML, inline-style implementation, Claude Design syntax, support script, or design-only component format was copied into production.

## Sections Implemented

1. Hero
2. Class selector
3. Featured courses
4. Why Best Study
5. Teacher intro
6. Free resources
7. Parent section
8. Lead capture

The shared layout supplies the header and footer. No results or testimonials section exists because verified results and testimonials have not been provided.

## Placeholder Safety

- Teacher name, biography, credentials, subjects, photo, and video poster are visibly marked placeholders.
- Course names, audiences, covers, batch dates, seats, and prices are visibly marked placeholders.
- No invented student counts, experience years, results, ratings, testimonials, discounts, or scarcity claims are present.
- Phone placeholders use `href="#"`; no fake `tel:` or `mailto:` target is present.
- Resource availability and service details are visibly marked placeholders.
- The three-field lead form is UI-only, visibly marked as disconnected, and cannot submit.

## Remaining Before Real Launch

- Supply and approve real teacher identity, biography, credentials, and media
- Supply real contact details
- Supply approved course catalogue, dates, capacity, pricing, and covers
- Supply and approve free-resource content and destinations
- Finalize parent-report and lead-contact operating policies
- Connect the lead form only in an approved backend phase
- Add self-hosted subsetted Hind Siliguri WOFF2 assets
- Implement and approve the W1 destination pages

## QA Still Required

- Visual review against the approved design reference
- Real 360px mobile-device review
- Native Bengali copy review
- Accessibility review, including keyboard order and form behaviour
- Performance and page-weight review after real images and fonts are supplied
- Final placeholder and claim audit before launch

## W1 QA Required Fixes Applied

- Body-like Bengali copy with Tailwind text-size utilities now keeps a minimum 1.75 line-height.
- Lead-form fields now use an approved warm-neutral background.
- Homepage featured-course cards now link to their valid placeholder course-detail routes.

## English Teacher Motion Pivot

- The English subject-only homepage pivot is implemented for Bangla-medium students.
- The new live-book hero and English course-cover component are implemented as semantic React and CSS.
- Hero, class selector, featured courses, value propositions, teacher framing, resources, parent copy, and lead capture now focus on Grammar, Writing, Reading, Vocabulary, and Board English.
- Motion is decorative, mobile-limited, and disabled through prefers-reduced-motion; no client JavaScript or animation library is used.
- Former mathematics/science course imagery was replaced in production rendering by English-specific CSS covers.
- Teacher, course, contact, result, and operational unknowns remain visibly placeholder-safe.
- ChatGPT Image 2.0 is reserved for future founder-approved course, resource, and Open Graph assets.
- Full English motion-pivot static QA and browser/device QA are still required.
- Mobile live-book compact mode reduces the book and presents all five subject labels in two chip rows below 480px.
- The mobile-only teacher strip removal improves class-selector proximity while preserving the richer tablet/desktop glass and motion treatment.
- The compact correction remains CSS-only and adds no heavy animation library.

## Premium Hero Upgrade After Founder Review

- Founder browser review identified the first live-book version as too flat and the glass treatment as too weak.
- The homepage hero now has a stronger premium CSS 3D book, layered page depth, spine/shadow detail, floating glass subject panels, glow, texture, and restrained light motion.
- The global link cascade and shared green-button styling were corrected so header, hero, and course-card CTA text remains visibly readable.
- The richer tablet/desktop scene is preserved while the below-480px composition keeps a shorter book stage and compact two-row subject chips.
- No heavy animation library, WebGL, Three.js, Lottie, autoplay video, remote visual asset, or client-side parallax was added.

## Scroll-Storytelling Brand Experience Upgrade

- Founder benchmark direction is I & Me Coffee-inspired in interaction character only: object-led stage, short copy, strong centerpiece, premium pacing, and scroll storytelling. No benchmark assets, copy, exact composition, or brand identity were reproduced.
- The live book now leads a full-width brand stage instead of appearing inside a conventional two-column EdTech card layout.
- The homepage flow now moves through the early class decision, a “ভয় নয় / মুখস্থ নয় / কনফিউশন নয়” belief chapter, a five-step English learning journey, and then premium featured-course decisions.
- Desktop learning-path storytelling uses safe CSS `position: sticky`; mobile uses normal flow with no sticky trap or scroll hijacking.
- Course cards and CSS course covers were upgraded with editorial depth, glass surfaces, structured metadata, aligned CTAs, and nonessential hover lift.
- The reviewed 360px layout has no horizontal overflow, keeps CTA text visible, preserves all subject chips, and places the class selector immediately after the compact hero.
- Performance and accessibility boundaries remain unchanged: no added package, client component, remote image, video, WebGL, Three.js, Lottie, heavy JavaScript, or motion-dependent interaction; reduced-motion support is preserved.

## Founder-Approved Direction — Final Visual Polish

- Founder approved the dark object-led hero, live-book centerpiece, floating glass panels, scroll-storytelling direction, and editorial course-card system.
- The final polish pass reduces the desktop header to one compact row and keeps the phone placeholder present as a low-priority warm-neutral chip; the mobile header remains a compact two-row navigation surface.
- The hero-to-class-selector handoff now uses a controlled fade, saffron/green glow divider, warm paper texture, and elevated selector cards with stronger keyboard focus and optional hover feedback.
- Large storytelling headings now have safer line boxes, balanced wrapping, section scroll margins, and additional sticky-header clearance. The desktop learning-path sticky offset was aligned to the shorter header.
- The course heading scale and column ratio were refined, course cards now align on one baseline, and direct `#courses` navigation lands with the full heading visible below the sticky header.
- Browser review confirmed no 360px horizontal overflow, a 99px mobile header, class-selector entry within the first 800px viewport, readable subject chips, stacked course cards, and unclipped mobile course headings.
- Mobile visual QA is complete for this polish pass, but founder screenshot approval is still required before final launch approval.

## Final Founder Visual Screenshot Approval

Status: **APPROVED FOR REAL-DEVICE QA**

- Final founder/PM visual screenshot review passed.
- Desktop dark object-led hero, book containment, floating panels, header CTA containment, and hero-to-class-selector transition are approved.
- The 360px mobile hero and class selector are approved.
- The premium Bangla-first, English subject-only brand direction is approved.
- No further visual redesign should occur before real-device QA. Changes before that gate should be limited to defects discovered through device, browser, accessibility, reduced-motion, overflow, Lighthouse, or 404 testing.
- Remaining checks are a real Android device; iOS Safari if available; Chrome and Firefox desktop; Lighthouse on `/`, `/courses`, and `/teacher`; horizontal-overflow review; keyboard/focus review; reduced-motion review; and `/courses/unknown-test-slug` 404 verification.
- This is visual approval for real-device QA, not final launch approval. Verified founder content, production fonts, operational details, legal approval, and the remaining launch requirements are still outstanding.

## Founder Asset Integration

- The supplied `LOGO.png` is now used in the site header and footer and as the application icon.
- The supplied real owner portrait is presented in the homepage introduction and teacher route through a CSS-only perspective, depth, glow, and glass treatment.
- The portrait identifies the subject only as `Best Study Owner`; the teacher name, qualifications, experience, and detailed role remain visibly placeholder-safe pending founder approval.
- `Banner.png` was inspected and retained only as an unlinked reference asset because it contains unapproved marketing claims, including faculty, results, and parent-trust statements. It is not rendered by the website.
- The requested `CEO PHI.png` filename was not present. The existing `CEO PH.png` was preserved as the secondary owner-photo source; `CEO DES.png` is the primary rendered portrait.
- No animation package, remote image, real credential, result claim, or contact detail was introduced.

## Interactive Owner Portrait Upgrade

- The real owner portrait now uses a lightweight CSS-only interactive 3D card with fine-pointer hover tilt, layered depth planes, green/gold rim lighting, glass reflection, and restrained shadow movement.
- Mobile uses a static, contained presentation with no pointer tracking or complex interaction; `prefers-reduced-motion` removes the tilt and reflection movement.
- A real 360-degree face model remains deferred to a future phase. No face mesh, WebGL, Three.js, model viewer, client component, or animation package was added.
- The source portrait pixels and owner identity were not modified. Name, credentials, results, experience, and contact details remain placeholder-safe.

## Real-Device and Lighthouse Gate

Status: **READY FOR MANUAL REAL-DEVICE QA**

- Founder visual approval has passed for the premium English subject-only homepage, dark object-led hero, 360px mobile hero, class selector, real BEST logo, and real owner portrait.
- The interactive CSS-only 3D owner portrait is approved for device testing. It remains a layered presentation of the supplied photograph, not a real 360-degree face model.
- A real 360-degree face model is deferred to a future phase; no face mesh, WebGL, model viewer, or identity modification is part of W1.
- Static QA, visual QA, lint, and production build checks have passed. The next gate is manual Android/iOS testing plus Lighthouse on `/`, `/courses`, and `/teacher`.
- The detailed private-LAN instructions, route matrix, device checklist, Web Vitals fields, and known warnings are recorded in `docs/W1-BROWSER-DEVICE-QA.md`.
- No additional visual redesign should occur before this gate unless real-device or Lighthouse evidence identifies a defect.

## Approved Typography System

- The approved typography roles are implemented through global CSS tokens and targeted semantic language markers: Sora Bold for major English display labels, Hind Siliguri Bold for Bangla headings, Inter Regular for English body text, and Hind Siliguri Regular for Bangla body text.
- The Bangla-first document continues to default to Hind Siliguri with a Bengali-safe system fallback stack and body line-height of 1.75. Bangla headings use the dedicated bold Bengali heading token.
- English story kickers, book display words, subject chips, learning-step labels, course-cover titles, and owner badges use the Sora display token. Supporting English-only cover/footer copy uses the Inter body token.
- No remote font import, Google Fonts CDN, package, or layout-dependent font script was added.
- No approved self-hosted font files are currently present. Production still requires `public/fonts/sora-bold.woff2` (700), `public/fonts/inter-regular.woff2` (400), `public/fonts/hind-siliguri-regular.woff2` (400), and `public/fonts/hind-siliguri-bold.woff2` (700). Until supplied, the tokens resolve through safe local/system fallbacks without requesting missing files.
- Final visual typography QA must be repeated after the approved self-hosted WOFF2 files are installed. Production typography is not final until all four assets are installed and the desktop/mobile typography, layout shift, and readability checks pass again.
