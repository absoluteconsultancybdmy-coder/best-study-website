# W1 Browser + Device QA

Status: Founder visual screenshot review passed — approved for real-device QA

## Final founder visual approval checkpoint

Final founder/PM screenshot review: **PASSED**

Approved visual surfaces:

- Desktop dark object-led hero
- Desktop hero and floating-panel containment
- Compact desktop header and CTA containment
- Hero-to-class-selector transition
- 360px mobile hero
- 360px mobile class selector
- Premium English subject-only brand direction
- Real BEST logo in the header and footer
- Real owner portrait on the homepage and `/teacher`
- Lightweight interactive CSS-only 3D owner portrait

W1 deliberately does not use a real 360-degree face model. A real 360-degree face model is deferred to a future phase and must not be inferred from the current CSS perspective treatment.

The desktop visual and the 360px responsive visual are approved. No further visual redesign should occur before real-device QA. This checkpoint approves the current design for testing; it is not final launch approval.

Remaining required real-device/browser checks:

- [ ] Real Android device
- [ ] iOS Safari, if available
- [ ] Chrome desktop
- [ ] Firefox desktop
- [ ] Lighthouse on `/`, `/courses`, and `/teacher`
- [ ] Confirm no horizontal overflow on every tested device/browser
- [ ] Complete keyboard and visible-focus testing
- [ ] Complete `prefers-reduced-motion` testing
- [ ] Confirm `/courses/unknown-test-slug` displays the 404 page

## Local real-device test access

Do not publish, tunnel, port-forward, or otherwise expose this development site to the public internet.

### Option A — Chrome responsive mode

1. Start the existing local development server with `pnpm dev`.
2. Open `http://localhost:3000` in Chrome.
3. Open DevTools and enable the device toolbar.
4. Test each required route at these exact viewport widths:
   - 360px
   - 390px
   - 768px
   - 1440px
5. Keep browser zoom at 100% and check both portrait and landscape where useful.

### Option B — Private local-network phone test

1. Connect the computer and phone to the same trusted Wi-Fi network.
2. If the existing server is not reachable from the phone, start it with host access using `pnpm dev --hostname 0.0.0.0`.
3. Run `ipconfig` and find the computer's private Wi-Fi IPv4 address.
4. On the phone, open `http://<LAN-IP>:3000`, replacing `<LAN-IP>` with that private address.
5. If Windows Firewall asks, allow access only on the trusted private network.
6. Stop the host-access development server after testing.

Do not enable router port forwarding, public firewall access, a public tunnel, or a temporary public deployment for this QA pass.

## Real-device route matrix

Test the following on Android Chrome and repeat on iOS Safari when available:

- [ ] `/`
- [ ] `/courses`
- [ ] `/courses/placeholder-course-1`
- [ ] `/teacher`
- [ ] `/legal/terms`
- [ ] `/courses/unknown-test-slug`

For every route and device:

- [ ] No horizontal overflow
- [ ] Header and sticky behavior fit the viewport
- [ ] Header logo is contained and readable
- [ ] CTA text is visible and tap targets remain usable
- [ ] Hero book and subject chips are readable
- [ ] Class selector appears early and remains tappable
- [ ] Real owner portrait is proportionate, contained, and honestly labelled
- [ ] Course cards stack without clipping
- [ ] Legal copy remains readable
- [ ] Footer logo and columns fit cleanly
- [ ] No fake teacher, contact, price, result, testimonial, or legal claim appears
- [ ] Reduced-motion mode removes nonessential movement without hiding content
- [ ] Keyboard and visible-focus behavior work where the device/browser permits
- [ ] Unknown course slug shows the Not Found page rather than course content

## Browser/device tested

| Browser or device | Version / OS | Tester | Date | Result |
| --- | --- | --- | --- | --- |
| [Add browser/device] | [Add version/OS] | [Add tester] | [Add date] | Not tested |

## Viewports tested

- [x] 360px mobile screenshot review
- [ ] 390px mobile
- [ ] Tablet viewport
- [x] Desktop screenshot review
- [ ] Physical Android device
- [ ] Physical iOS device

## Route checklist

For every route, verify rendering, navigation, Bengali text, placeholders, keyboard access, responsive layout, and absence of horizontal overflow.

- [ ] `/`
- [ ] `/courses`
- [ ] `/courses/placeholder-course-1`
- [ ] `/courses/placeholder-course-2`
- [ ] `/courses/placeholder-course-3`
- [ ] `/teacher`
- [ ] `/legal/terms`
- [ ] `/legal/privacy`
- [ ] `/legal/refund`
- [ ] `/courses/unknown-test-slug` displays the 404 page

## 360px mobile findings

- [ ] No horizontal overflow
- [ ] Header wraps cleanly
- [ ] Sticky header works without hiding content
- [ ] CTA buttons remain visible and tappable
- [ ] Bengali text is readable and glyphs do not clip
- [ ] Class selector `৬ ৭ ৮ ৯ ১০` fits cleanly
- [ ] Cards stack in one readable column
- [ ] Form fields use the available width
- [ ] Footer content wraps cleanly

Findings:

- [Record findings]

## Header/sticky behavior

- [ ] Brand, navigation, CTA, and contact placeholder remain readable
- [ ] Header wrapping is clean at 360px and 390px
- [ ] Sticky behavior does not cover focused elements or anchor targets
- [ ] Desktop header alignment is controlled

Findings:

- [Record findings]

## Class selector readability

- [ ] Bengali numerals are readable at 360px
- [ ] All class targets are at least 44px
- [ ] Labels do not collide or clip
- [ ] Class and exam links navigate to `/courses` with the expected query

Findings:

- [Record findings]

## Course cards

- [ ] Homepage cards link to the three valid placeholder detail routes
- [ ] `/courses` cards link to matching detail routes
- [ ] Cards stack cleanly on mobile
- [ ] Desktop grids are balanced
- [ ] Price, batch, and seat placeholders are visibly marked
- [ ] Illustrative covers do not imply real course outcomes

Findings:

- [Record findings]

## Lead form

- [ ] `/#lead` scrolls to the lead section
- [ ] Name, phone, and class fields are full width and labelled
- [ ] Keyboard focus is visible
- [ ] Disabled submit state is understandable
- [ ] Privacy/help text is readable
- [ ] No data is submitted because the form is UI-only

Findings:

- [Record findings]

## Teacher page

- [ ] Teacher identity and credentials remain visible placeholders
- [ ] Illustrative image is clearly labelled as not the real teacher
- [ ] Video placeholder does not autoplay
- [ ] Student and parent sections remain readable
- [ ] CTA reaches `/#lead`

Findings:

- [Record findings]

## Legal pages

- [ ] Terms page clearly says draft/unapproved
- [ ] Privacy page clearly says draft/unapproved
- [ ] Refund page clearly says draft/unapproved
- [ ] Legal placeholders are visible
- [ ] No invented legal, payment, jurisdiction, or refund commitment appears
- [ ] Long-form copy remains readable on mobile

Findings:

- [Record findings]

## Keyboard/focus test

- [ ] First Tab reveals the skip link
- [ ] Skip link moves focus to main content
- [ ] Focus outline is visible on every interactive element
- [ ] All links, buttons, and form controls are reachable
- [ ] Focus order follows the visual reading order
- [ ] No interaction requires hover

Findings:

- [Record findings]

## 404 test

- [ ] `/courses/unknown-test-slug` displays the Not Found page
- [ ] The response does not show placeholder course content
- [ ] Navigation back to a valid page remains available

Findings:

- [Record findings]

## Lighthouse results

Run Lighthouse for `/`, `/courses`, and `/teacher` in mobile and desktop modes. Use a production preview when practical so development tooling does not distort the measurements. Record category scores, Web Vitals, image/font findings, and the test environment.

| Route | Mode | Performance | Accessibility | Best Practices | SEO | LCP | CLS | INP/TBT | Image/font warnings | Notes |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| `/` | Mobile | 73 | 97 | 100 | 100 | 10.5 s | 0 | 130 ms | none flagged | Automated pre-check only, see note below |
| `/` | Desktop | — | — | — | — | — | — | — | — | Not run |
| `/courses` | Mobile | 73 | 100 | 100 | 100 | 10.3 s | 0 | 170 ms | none flagged | Automated pre-check only, see note below |
| `/courses` | Desktop | — | — | — | — | — | — | — | — | Not run |
| `/teacher` | Mobile | 74 | 100 | 100 | 100 | 10.6 s | 0 | 110 ms | none flagged | Automated pre-check only, see note below |
| `/teacher` | Desktop | — | — | — | — | — | — | — | — | Not run |

**Automated pre-check, 2026-08-03** — Lighthouse CLI v13.4.1, headless Chrome, `next build && next start` production preview on localhost, mobile form factor with default throttling. This substitutes for neither the manual real-device pass nor a desktop run; it's a same-day sanity check only.

- LCP (10.3–10.6 s) is far worse here than a same-config run limited to the Performance category alone showed minutes earlier (2.5–3.7 s) on the same build. That swing points to CPU/network contention in this sandboxed environment during the full multi-category audit, not a real regression — treat these LCP numbers as noise, not signal, until re-measured on real hardware or Lighthouse CI with consistent throttling.
- CLS (0) and TBT (110–170 ms) look stable across both runs and are the more trustworthy numbers here.
- **Real accessibility finding, not environment noise**: `/` fails `color-contrast` (insufficient contrast between background and foreground colors on at least one element) — 97/100, the only category score below 100 across all three routes. `/courses` and `/teacher` scored 100 accessibility. This needs a real fix, not a re-run.

Lighthouse notes to capture:

- Test date, browser version, mode, and throttling profile
- Largest Contentful Paint element and timing
- Cumulative Layout Shift sources
- Interaction to Next Paint when available, otherwise Total Blocking Time
- Image sizing, priority, compression, and delivery warnings
- Font loading, fallback, and text-rendering warnings
- Accessibility failures and affected elements
- Best Practices and SEO diagnostics requiring launch work

Known pre-test warnings:

- A development-only Next Image LCP warning may appear for the owner portrait; confirm whether it appears in the production preview before treating it as a production defect.
- Next.js currently reports a multiple-lockfile workspace-root warning.
- Self-hosted, subsetted Hind Siliguri WOFF2 files for weights 400/500/600/700 are still required before production.

## Issues found

| ID | Route | Viewport/device | Severity | Description | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| W1-BDQA-001 | `/` (footer, all routes via layout), `/` lead-capture section | N/A — CSS bug, all viewports | Critical | `app/globals.css` L52-62 sets `h1,h2,h3,h4,h5,h6 { color: var(--color-best-ink) }` as an **unlayered** rule (written after `@import "tailwindcss"` but not inside `@layer base { }`). Per CSS Cascade Layers, unlayered rules always beat layered rules regardless of specificity, and Tailwind v4 utilities (`.text-white`, `.text-best-cream`, ...) live inside named layers — so every heading using a Tailwind text-color utility is silently forced to near-black instead. Confirmed by Lighthouse `color-contrast` audit flagging `#lead-title` (`text-white` on `bg-best-green`, actual ratio 2.65 vs required 3:1) in `components/home/lead-capture-section.tsx:11`. Static-code check found two more affected headings that Lighthouse's contrast audit did not surface as a separate failure but which compute to identical foreground/background color (fully invisible, not just low-contrast): `components/layout/site-footer.tsx:41` and `:57`, both `text-best-cream` headings inside the `bg-best-ink` footer — text color equals background color. | Lighthouse JSON `home-mobile-full.json`, audit `color-contrast`; static read of `app/globals.css` L52-62 and the three affected component files | Open |

## Final verdict

Select one after every required route and test category is completed:

- [x] APPROVED FOR REAL-DEVICE QA
- [ ] APPROVED FOR W1 FOUNDER CONTENT INPUT
- [ ] NEEDS REVISION

Final notes:

- Founder visual screenshot review passed. Real-device, cross-browser, accessibility, reduced-motion, Lighthouse, overflow, and unknown-course 404 checks remain required before the next approval gate.
- Brand-asset review must confirm logo clarity in the compact header/footer, owner portrait crop and contrast on desktop and 360px mobile, and that the unapproved banner never appears in rendered UI.
- Founder visual approval, real logo review, real owner portrait review, and interactive CSS-only 3D portrait review have passed. The site is ready for the manual real-device and Lighthouse gate documented above.
