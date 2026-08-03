# Brand Token Setup

## Files Changed

- `app/globals.css`
- `app/layout.tsx`
- `docs/BRAND-TOKEN-SETUP.md`

## Tailwind 4 Theme Tokens

The project uses Tailwind CSS 4 through PostCSS. Tokens are defined in `app/globals.css` with `@theme`; no Tailwind 3 configuration file is used.

| Token | Value | Purpose |
|---|---|---|
| `best-green` | `#006A4E` | Primary actions and links |
| `best-green-hover` | `#00563F` | Hover and active states |
| `best-saffron` | `#FDBA3B` | Accent backgrounds with `best-ink` text only |
| `best-cream` | `#FAF9F7` | Default page background |
| `best-paper` | `#F2F1ED` | Raised or alternate surfaces |
| `best-border` | `#E4E2DC` | Borders and dividers |
| `best-muted` | `#5C5952` | Muted readable text floor |
| `best-body` | `#423F3A` | Default body text |
| `best-ink` | `#1A1917` | Headings and near-black text |

Additional warm-neutral tokens are available for non-body decorative and structural use. `#7C7871` is exposed only as `best-decorative` and must not be used for normal text.

## Typography Rules

- Primary family: Hind Siliguri
- Fallbacks: Noto Sans Bengali, system UI, platform sans-serif
- Approved production weights: 400, 500, 600, and 700
- Default body size: 16px
- Bengali body and copy line-height: minimum 1.75
- Default heading line-height: 1.25
- Body colour: `#423F3A`
- Heading colour: `#1A1917`
- Bangla is the document default through `lang="bn-BD"`

## Accessibility Rules

- Visible `:focus-visible` outline: 2px Best Green with a 2px offset
- Reusable `.tap-target` helper enforces a 44px minimum target size
- Saffron selection uses near-black text; white text on saffron is prohibited
- Links use Best Green and the approved darker hover green
- Reduced-motion preferences suppress non-essential animation and transitions
- `.num-en` uses tabular numerals; `.num-bn` is available for Bengali numeral contexts
- `.content-placeholder` provides a visibly dashed placeholder convention

## Font Status

Local Hind Siliguri font files are not currently present in `public/fonts/`. No Google Fonts CDN import is used. The application uses the approved fallback stack until real font assets are supplied.

## Remaining Before Production

- Add self-hosted, subsetted Hind Siliguri WOFF2 files for weights 400, 500, 600, and 700
- Declare the local font faces and verify that every required Bengali glyph and conjunct is included
- Confirm font payload against the W1 performance budget
- Review Bengali typography at the primary 360px mobile viewport
- Verify all future saffron surfaces use `#1A1917` text, never white
