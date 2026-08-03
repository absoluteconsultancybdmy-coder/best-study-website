# Best Study English Teacher + Motion Pivot Plan

Status: Implemented for W1 — pending static motion-pivot QA and browser/device QA

## Implementation Status

- English subject-only positioning is implemented across the homepage, courses, teacher page, metadata, and relevant legal scope wording.
- The live open-book hero is implemented as semantic React and CSS with no client JavaScript.
- Glass cards, soft depth, green glow, book movement, and restrained floating motion use CSS only.
- Mobile limits and prefers-reduced-motion fallbacks are implemented.
- Mathematics and science course-cover dependencies were replaced by English-specific CSS course covers.
- No heavy animation library, Three.js, WebGL, Lottie, video background, or new package was added.
- ChatGPT Image 2.0 is reserved for future founder-approved course, resource, and Open Graph assets; it is not required by the current CSS-first W1 implementation.
- Mobile live-book compact mode now uses a smaller book and a two-row subject-chip layout below 480px.
- The non-essential teacher strip is hidden below 481px so the class selector follows the hero more quickly.
- Tablet/desktop glass, depth, floating-card placement, and motion remain unchanged; no animation dependency was added.

## 1. New Product Positioning

Best Study is now an English subject-only coaching website for Bangla-medium students. It is not a general coaching, mathematics, science, or multi-subject brand.

The W1 marketing experience should position the teacher and learning system around:

- English Grammar
- Writing
- Reading
- Vocabulary
- Board English preparation
- English learning support for Bangla-medium students
- Audience levels: Class 6–10, SSC, and HSC

The marketing language remains Bangla-first so students and parents can understand the offer clearly, while the subject, examples, labels, and learning materials remain specifically focused on English.

## 2. Pages Affected

The existing route structure can remain unchanged, but the following surfaces require a content and visual pass:

1. **Homepage `/`** — revise positioning, hero, course cards, value propositions, resources, teacher language, parent copy, and lead context.
2. **Courses catalogue `/courses`** — make every course label, description, filter explanation, cover, and metadata English subject-specific.
3. **Course detail pages `/courses/[slug]`** — replace generic modules, audiences, FAQ prompts, cover descriptions, and metadata with placeholder-safe English course structures.
4. **Teacher page `/teacher`** — describe the role only as an English teacher while keeping identity, credentials, experience, philosophy, and claims as explicit placeholders until approved.
5. **Legal pages** — change only wording that describes the service, subject scope, course type, or lead-form purpose. Draft/legal placeholders and approval status must remain intact.
6. **Metadata** — update root, homepage, courses, course-detail, and teacher descriptions to describe Bangla-medium students learning English.
7. **Assets** — retire mathematics, physics, and higher-mathematics cover meaning; prepare English Grammar, Writing, Reading/Vocabulary, board-preparation, and live-book visuals.
8. **QA checklist** — add English-only scope checks, motion/reduced-motion checks, glass contrast checks, low-end mobile checks, and stale maths/science copy scans.

Existing routes, legal draft status, and W1 exclusions do not change.

## 3. New Homepage Direction

Preserve the approved section order while changing the subject focus and presentation.

### Hero

- Lead with a clear Bangla promise about learning English confidently and systematically.
- Present a live, animated open-book visual as the main product motif.
- Keep the primary free-class CTA and course CTA immediately visible.
- Avoid unverified achievement or outcome claims.
- Keep the compact teacher identity area visibly placeholder-safe.

### Class Selector

- Keep Class 6–10, SSC, and HSC as audience entry points.
- Make the supporting copy explicitly say that each level leads to English courses and board-English preparation.
- Keep this section immediately after the hero, especially on mobile.

### Featured English Courses

- Replace the current general subject presentation with English-only course categories.
- Candidate placeholder categories: English Grammar, Writing Skills, Reading & Vocabulary, and Board English Preparation.
- Keep exact titles, batches, prices, schedules, and seats visibly placeholder-safe until approved.
- Continue linking each card to an existing valid placeholder detail route.

### Why Best Study for English

- Focus reasons on understandable grammar explanations, guided writing practice, reading comprehension, vocabulary building, and board-question preparation.
- Do not claim guaranteed improvement, marks, grades, response times, or results.
- Keep operational promises as placeholders until confirmed.

### Teacher Intro

- Frame the teacher as the English subject teacher without inventing identity, degree, institution, years, results, or achievements.
- Keep the approved teacher-name, biography, and credential placeholders.
- Replace general teaching-method language with placeholder-safe English teaching philosophy and support language.

### Free English Resources

- Shift resource labels toward grammar sheets, writing templates, vocabulary practice, reading passages, and board English questions.
- Keep download destinations and availability as visible placeholders.
- Do not present unavailable resources as live downloads.

### Parent Section

- Explain in respectful Bangla how parents may later understand their child’s English learning progress.
- Keep reporting frequency, method, and communication process as placeholders.

### Lead Capture

- Retain exactly three fields: name, phone, and class.
- Make the context explicitly about an English free class.
- Keep the form UI-only until an approved backend phase.
- Preserve privacy/help copy and placeholder-safe contact handling.

## 4. Live Book Hero Concept

The hero visual should centre on an open English-learning book with a premium, dimensional appearance without using a real-time 3D engine.

### Visual Composition

- Use an open-book illustration or layered HTML/CSS object with shallow perspective, page depth, soft shadows, and warm paper surfaces.
- Add very subtle page breathing or page-edge movement using `transform` and `opacity` only.
- Place five lightweight floating glass cards around the book: **Grammar**, **Writing**, **Vocabulary**, **Reading**, and **Board Questions**.
- Use a soft Best Study green glow behind the book and restrained saffron accents on tabs, page markers, or small badges.
- Keep all saffron surfaces paired with near-black text, never white text.

### Responsive Behaviour

- Desktop may show the full book, shallow perspective, floating cards, and restrained depth movement.
- Mobile should use a simplified, smaller book composition with fewer simultaneously visible floating cards.
- At 360px, the visual must not push the class selector far below the initial CTAs.
- A static optimized illustration or static CSS composition must remain available as the mobile and compatibility fallback.

### Reduced-Motion Behaviour

- Under `prefers-reduced-motion: reduce`, stop page floating, card drift, glow pulsing, and parallax.
- Preserve the exact content hierarchy, CTAs, book image, and labels in a stable static state.
- Motion must never reveal information that is otherwise hidden.

## 5. Motion System Rules

### Allowed Motion

- CSS transitions for hover, focus, and pressed states.
- `transform` and `opacity` animations for the book, page edges, decorative cards, and section entry enhancement.
- Slow, small-amplitude floating motion.
- Soft glow movement with restrained opacity.
- Subtle CSS perspective and shallow parallax as progressive enhancement.
- A tiny client-side observer may be considered later only if CSS cannot provide the required entry effect; it must remain isolated and optional.

### Motion Not Allowed

- Three.js, WebGL scenes, heavy 3D libraries, or large animation packages.
- Autoplay video backgrounds or looping background video.
- Scroll-jacking, smooth-scroll replacement, or forced scroll timelines.
- Large continuous rotations, rapid bouncing, flashing, or high-amplitude movement.
- Motion that delays navigation, blocks input, or makes content dependent on JavaScript.
- Multiple blurred full-screen layers that increase GPU and battery cost.

### Reduced Motion

- Every non-essential animation must stop under `prefers-reduced-motion: reduce`.
- Transitions should become effectively instant or use the existing reduced-motion foundation.
- The static state must remain complete, understandable, and visually balanced.

### Mobile Performance Rules

- Prefer compositor-friendly `transform` and `opacity`; avoid animating layout properties, large filters, or box shadows continuously.
- Limit continuous hero motion to one book movement plus no more than two lightweight decorative motions at a time on desktop.
- On mobile, allow at most one very subtle continuous movement or use the static fallback.
- Keep decorative motion durations slow, generally 6–12 seconds, and entry transitions brief, generally 150–450ms.
- Pause or avoid off-screen continuous animation where practical.
- Do not add dependencies for motion during this pivot.

### Complexity Ceiling

- One primary animated hero composition.
- No more than five decorative glass cards, with only a subset moving simultaneously.
- No page-wide parallax system.
- At most one isolated client component for progressive motion if later justified.
- No motion may be essential for reading, navigation, forms, or understanding course information.

## 6. Glassmorphism Rules

- Use glass selectively in the hero’s floating subject cards, one premium highlight card, or a small section overlay—not as the default surface for every section.
- Keep the page foundation on the approved warm neutrals `#FAF9F7`, `#F2F1ED`, and related locked tokens.
- Glass surfaces must retain a visible border and sufficiently opaque warm background so text remains readable when blur is unavailable.
- Backdrop blur must be modest and limited to small areas; the no-blur fallback must still look intentional.
- Normal text must use approved body, muted, or near-black colours with adequate contrast.
- Never place low-contrast muted text over complex imagery or transparent glow.
- Saffron may appear behind near-black `#1A1917` text only. White text on saffron remains prohibited.
- Green glass/tinted surfaces may use light text only after contrast is verified.
- Focus outlines must remain visible across glass and glow treatments.

## 7. Content Changes Needed

### Remove or Replace

- Remove mathematics, physics, higher mathematics, science, and general multi-subject references.
- Replace generic coaching descriptions with English subject-only positioning.
- Replace current course-cover alternative text and filenames/meaning with English-specific equivalents.
- Replace generic course subject placeholders with English-specific placeholder contexts.
- Replace generic modules with safe structures for Grammar, Writing, Reading, Vocabulary, and Board English while keeping unapproved details marked `PLACEHOLDER`.
- Replace generic resource labels with English grammar sheets, writing guidance, reading practice, vocabulary practice, and board English questions.
- Update teacher-page subject language to English teaching only.
- Update parent and lead-form copy to refer to English learning and an English free class.
- Update metadata and QA search terms to reject stale maths/science wording.

### Keep Until Founder Input Arrives

- Exact course names and grouping
- Exact syllabus and module coverage
- Batch dates, schedule, capacity, and pricing
- Teacher identity, credentials, experience, biography, and real media
- Resource files and download URLs
- Parent reporting process
- Legal/contact details

## 8. Placeholder Safety

The visual and content pivot must preserve the existing honesty rules:

- No fake teacher identity
- No fake credentials, university, experience, location, or achievements
- No fake phone number or email address
- No fake prices, batch dates, schedules, or seat counts
- No fake student numbers, marks, results, or guaranteed grades
- No fake testimonials or parent endorsements
- No invented legal, payment, or refund commitments
- Illustrations must be clearly identified as illustrative and must not imply a real teacher identity or verified student outcome

## 9. Implementation Plan

1. **Update documentation/status** — record the English-only product ruling, supersede the general/maths/science direction, and add the new QA gates.
2. **Update content/data to English subject-only** — revise typed homepage and course data, metadata, resource labels, alternative text, and placeholder wording without changing routes.
3. **Add lightweight motion/glass tokens** — define CSS-only durations, easing, perspective, glow, glass surfaces, reduced-motion states, and warm fallbacks.
4. **Rebuild the Hero with the live-book concept** — implement the semantic copy/CTA structure first, then progressively enhance the optimized book and floating subject cards.
5. **Update courses and teacher page** — align catalogue, detail modules, covers, FAQ placeholders, teacher subject language, parent copy, and relevant legal scope wording.
6. **Run lint/build** — confirm type safety, static generation, route integrity, and bundle impact.
7. **Static QA** — audit English-only scope, placeholder honesty, Bengali line-height, contrast, reduced-motion code, links, metadata, and asset safety.
8. **Browser/device QA** — test 360px/390px, low-end Android behaviour, desktop composition, keyboard focus, reduced motion, Lighthouse, animation smoothness, and no-JavaScript/static fallback usability.

## 10. Risk List

### Performance Risk

Blur, multiple layered shadows, large transparent images, continuous animation, or unnecessary client JavaScript can raise GPU, memory, battery, and download costs. Control this with a single hero motion system, optimized assets, transform/opacity animation, mobile fallbacks, and bundle comparison before approval.

### Accessibility and Contrast Risk

Glass surfaces, glow, motion, and imagery can reduce contrast or hide focus indicators. Require opaque fallbacks, locked text colours, visible focus states, keyboard testing, and reduced-motion testing.

### Over-Animation Risk

Too many floating cards or scroll effects can distract from the course decision and lead form. Keep motion restrained, slow, decorative, and concentrated in the hero.

### Bengali Readability Risk

English labels mixed with Bangla explanations, glass layers, tight cards, and animated surfaces may reduce readability. Preserve Bengali body line-height of at least 1.75, test conjuncts at 360px, and avoid placing long Bangla copy inside moving glass elements.

### Scope Creep Risk

A premium motion direction can expand into custom 3D, video, new routes, or application features. Hold W1 to the existing marketing routes, English-only content pivot, one live-book hero, lightweight CSS motion, and current backend exclusions.

## Founder Inputs Still Required

- Provide or approve final English course categories and titles.
- Confirm whether current placeholder course slugs remain until real course data is supplied.
- Confirm which English resource categories should be published first.
- Confirm whether an approved real teacher photo is available; otherwise retain a clearly illustrative placeholder.
- Supply verified teacher, contact, course, schedule, price, seat, and legal details before launch.

## Premium Hero Browser-Review Upgrade

- Founder browser review found the first CSS live-book treatment too flat, visually quiet, and insufficiently glass-like.
- The hero now uses a stronger CSS-only perspective scene with curved page transforms, stacked page edges, a visible spine, page details, layered green/saffron glow, and depth shadows.
- Grammar, Writing, Vocabulary, Reading, and Board Questions now appear as floating translucent panels on wider screens and compact two-row chips on small screens.
- Green header, hero, and course-card actions now preserve readable warm-light text through an explicit low-specificity base-link cascade and shared primary-button treatment.
- The mobile compact mode remains in place: the visual is shorter, decorative effects are simplified below 480px, and the class selector remains directly after the hero.
- Motion remains decorative and CSS-only, with `prefers-reduced-motion` support and no Three.js, WebGL, Lottie, video background, client parallax, or animation package.

## I & Me Coffee-Inspired Scroll Storytelling Direction

- Founder direction uses I & Me Coffee only as a benchmark for object-led storytelling, bold pacing, short copy, and premium scroll feeling; no protected assets, text, exact layout, visual identity, or brand elements were copied.
- The homepage hero is now a dark, full-width brand stage where the live English book is the visual centerpiece rather than an object contained inside a standard card.
- Hero copy was shortened to “ইংরেজি মুখস্থ না—বোঝে শেখো।” with the approved English-subject framing, two W1-safe calls to action, a lighter teacher placeholder note, and a decorative scroll prompt.
- A new belief chapter presents “ভয় নয় / মুখস্থ নয় / কনফিউশন নয়” before the existing Why Best Study learning-method content.
- A five-step Grammar → Writing → Reading → Vocabulary → Board Questions journey uses a CSS-only sticky desktop chapter and ordinary document flow on mobile.
- Featured courses now use editorial covers, warmer glass surfaces, aligned actions, and restrained hover lift while keeping every unknown course value visibly placeholder-safe.
- Sticky behavior, transforms, texture, glow, and transitions remain CSS-only. There is no scroll hijacking, required animation, client observer, remote media, WebGL, Three.js, Lottie, video, or new package.
- Below 480px the sticky composition is disabled, the book remains compact, all five subject chips stay visible, CTA targets remain at least 44px, and the class selector begins within the first viewport in the reviewed 360px layout.

## Final Polish After Founder Screenshot Review

- Founder approved the dark object-led storytelling direction; this pass refines presentation without changing the approved concept or W1 scope.
- Header dead space was removed by moving the placeholder phone contact into a compact desktop chip beside navigation and the English free-class CTA.
- The class selector now visually belongs to the hero transition through a warm glass/paper surface, restrained texture, glow divider, stronger hierarchy, and accessible focus treatment.
- Story sections and anchored headings use sticky-header clearance and safer line spacing; the learning-journey sticky position now matches the compact header.
- The course chapter uses a smaller balanced headline, wider editorial heading column, aligned course cards, and preserved placeholder-safe metadata and actions.
- The 360px check preserves the compact book, early class-selector placement, readable chips, stacked course cards, visible CTA copy, warm-neutral palette, and zero horizontal overflow.
- Mobile visual QA remains a required gate before founder-provided real content or final launch approval.

## Real Brand and Owner Assets

- The founder-supplied BEST Tutorial Home logo replaces the temporary text-only treatment in the header and footer and supplies the application icon.
- The founder-supplied owner photograph now anchors a reusable CSS-only 3D/glass portrait stage on the homepage and `/teacher` route.
- The asset treatment uses perspective, layered warm surfaces, restrained green/saffron glow, depth shadows, and reduced-motion-safe transitions without client JavaScript or a motion library.
- The portrait label remains `Best Study Owner`; all personal identity, credentials, experience, achievements, and role claims remain approval-gated placeholders.
- The supplied banner contains unapproved result/faculty/trust claims, so it is stored as an unlinked reference and is not rendered.
- Source note: `CEO DES.png` is the primary portrait. `CEO PHI.png` was not found; the available `CEO PH.png` is retained as the secondary portrait source.

## Lightweight Interactive Owner Portrait

- The owner portrait is upgraded from a static depth card to a CSS-only interactive editorial portrait with perspective, fine-pointer hover tilt, separated glass planes, gold rim light, green ambient glow, reflection sweep, and layered shadows.
- The experience remains static on small screens and fully understandable without motion. Reduced-motion mode disables hover transforms and the reflection sweep.
- A real 360-degree face model is explicitly deferred to a future phase. No face mesh, face modification, WebGL, Three.js, model viewer, client JavaScript, or heavy 3D dependency was introduced.
- Public labels remain limited to the honest `Best Study Owner` role and visibly marked identity placeholders.

## Approved Typography System

- The English subject-only visual system now maps major English display text to Sora Bold, English body text to Inter Regular, Bangla headings to Hind Siliguri Bold, and Bangla body text to Hind Siliguri Regular.
- CSS tokens and reusable classes provide `font-display`, `font-body-en`, `font-bn`, and `font-heading-bn` roles while the Bangla-first body retains a 1.75 line-height.
- Sora is limited to English display surfaces such as subject glass cards, book typography, story kickers, learning-step labels, course-cover titles, and owner badges; it is not applied to Bangla paragraphs or headings.
- The project contains no approved self-hosted WOFF2 files yet. Required production assets are `public/fonts/sora-bold.woff2`, `public/fonts/inter-regular.woff2`, `public/fonts/hind-siliguri-regular.woff2`, and `public/fonts/hind-siliguri-bold.woff2`.
- Safe fallback stacks are active now. No remote font request, Google Fonts import, new package, or missing-file `@font-face` request was introduced.
- Final visual typography QA must be repeated after the approved self-hosted WOFF2 files are installed. The production typography must remain unapproved until those files are present and the responsive visual, readability, and layout-shift checks have been rerun successfully.
