# Layout Shell Status

## Files Created or Updated

- `components/layout/container.tsx`
- `components/layout/site-header.tsx`
- `components/layout/site-footer.tsx`
- `app/layout.tsx`
- `app/page.tsx`
- `docs/LAYOUT-SHELL-STATUS.md`

## Layout Decisions

- The root layout provides one semantic header, main region, and footer for all W1 pages.
- A keyboard skip link targets `#main-content`.
- The reusable container is capped at 1120px with mobile-first horizontal padding.
- The scaffold homepage is intentionally limited to a neutral W1 preparation message. Homepage sections have not been implemented.
- Navigation uses standard server-rendered links and requires no client JavaScript.

## Mobile Strategy

- The header wraps into a simple multi-row layout at narrow widths instead of using a scripted menu.
- Navigation remains visible and usable at the primary 360px viewport.
- Interactive shell elements use the shared 44px minimum tap-target helper.
- Container padding starts at 16px and increases at larger breakpoints.

## Contact Placeholder Policy

- No real or invented phone number or email address is present.
- Contact placeholders use `[ফোন নম্বর] PLACEHOLDER` and `[ইমেইল] PLACEHOLDER`.
- Placeholder contact links use `href="#"`; no fake `tel:` or `mailto:` targets are allowed.
- Payment names are explicitly labelled as future support that is not active.

## Remaining Before Homepage Conversion

- Add approved self-hosted Hind Siliguri WOFF2 assets when supplied.
- Convert the approved homepage reference section by section into semantic React components.
- Keep all unverified teacher, contact, course, pricing, statistics, results, and testimonials visibly placeholder-safe.
- Add real route page content only in separately approved W1 tasks.
- Validate the completed homepage at 360px with Bengali-copy, accessibility, and performance QA.
