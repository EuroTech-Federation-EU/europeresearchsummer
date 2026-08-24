# Europe Research Summer — Project Rules

Marketing website for the AI Summer Research Initiative by EuroTech Federation.

## Non-negotiable: anonymity

Papers are under double-blind review. Nothing on the site may allow anyone to
associate a person with a paper:

- **Never** publish a participant's or reviewer's first name, last name, or
  individual research topic/domain.
- Only **aggregate** views are allowed: counts as ranges (never exact per-country
  numbers in text), affiliation logo walls, research-area groupings.
- Affiliations and organizations are fine — as logo walls, never as lists of names.
- The tracker CSVs in `~/Downloads` are internal source data. Only publicly
  appropriate aggregates derived from them may appear on the site (no budget
  figures, no individual rows).

## Stack (locked — see README.md)

Astro 7 (static) · Tailwind CSS 4 (`@tailwindcss/vite`, tokens in `@theme`) ·
TypeScript strict · pnpm · Vercel. No new dependencies without updating README
first. No SSR adapter unless SSR is actually introduced.

## Structure — no god files

One concern per file, folder by folder:

- `src/data/` — all content as typed constants (one file per domain:
  `site`, `program`, `cohort`, `network`, `faq`). Copy changes happen here,
  not in components.
- `src/components/layout/` — Header, Footer.
- `src/components/sections/` — one file per homepage section.
- `src/components/ui/` — small reusable primitives (SectionHead, LogoWall).
- `src/lib/` — shared helpers (`styles.ts` holds repeated class strings).
- `src/assets/` — processed images (`logos/` for the affiliation walls,
  `europe-paths.svg` for the map).
- `public/` — served as-is (favicon).

Keep components presentation-only; data lives in `src/data/`.

## Design

Dark editorial-brutalist world (ref: europeanrobotics.house): deep navy
ground, massive uppercase display type, monospace micro-labels
(`font-mono`, wide tracking), hairline rules (`border-line`) instead of
boxes, sharp `rounded-xs` actions, cyan as the single working accent.
Vertical rules belong to the hero and nowhere else (`GridLines`). They
frame a single large object with room around it; run behind dense
content they stop reading as structure and become a cage. This was tried
site-wide and reverted. Horizontal hairlines carry the structure
everywhere else.

Signature moves: section rules that draw left to right on reveal, and
the Network section inverting to paper (`.on-paper`) as the one break in
the dark run. The hero carries no affiliation marquee: it duplicated the
Network wall and was cut. The hero is a masthead: three stacked words
sized so the longest meets the column's right edge (`cqw`, never `vw`,
which includes the scrollbar), with a height cap so short viewports keep
the call to action. The header carries no background or rule until the
page is scrolled. Affiliation walls are hairline grids with the
name always under the mark, never floating chips with hover-only labels:
on a light ground the marks already read, and a hover-only name is
unreachable on touch. Photographs are graded into the navy world with
`.photo`, never framed in bordered boxes. Type is Space Grotesk + Space
Mono, self-hosted (see README); tracking is size-specific
(`tracking-display` above 5rem, `tracking-heading` for section titles).
Type is a closed system, and staying inside it is the point.

- **Sizes**: nine named roles in the `@theme` ramp (`text-label`,
  `text-ui`, `text-copy`, `text-lede`, `text-subtitle`, `text-title`,
  `text-headline`, `text-display`, `text-display-lg`). Each binds its own
  leading so the two cannot drift. Never a Tailwind t-shirt size, never an
  arbitrary value, never an unstyled element left at the inherited 16px.
  The only exceptions are the two wordmarks (hero, Paris), sized per
  instance because filling a column is a composition, not a ramp step.
- **Tracking**: exactly three, `tracking-display` / `tracking-heading` /
  `tracking-label`. Every mono uppercase label uses the last one.
- **Durations**: exactly four. 150ms for press, hover, colour and exits;
  300ms for things that move or open; 420ms for the scroll reveal; 700ms
  for the rule draw. Stagger offsets are always 70ms.

Verify by inventorying computed styles in the browser, not by reading the
source: `getComputedStyle` over every text node is what catches a stray. The nav bar is quiet chrome, sentence case throughout, with
the button as its only emphasis.
Brand tokens in `src/styles/global.css` `@theme` are locked (navy
`#0F172A`, cyan `#22D3EE`, accent `#0069a9`, text `#E2E8F0`). Every
pressable element gives `active:scale` press feedback.

## Verification

`pnpm build` must pass. Visual changes are verified in a real browser
(serve `dist/`, screenshot, check the map toggle and tooltips).
