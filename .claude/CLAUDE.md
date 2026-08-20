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
Signature moves: hero affiliation marquee (logo + name, pauses on hover,
off under reduced motion) and logo walls whose names reveal on
hover/focus. Brand tokens in `src/styles/global.css` `@theme` are locked
(navy `#0F172A`, cyan `#22D3EE`, accent `#0069a9`, text `#E2E8F0`). Every
pressable element gives `active:scale` press feedback.

## Verification

`pnpm build` must pass. Visual changes are verified in a real browser
(serve `dist/`, screenshot, check the map toggle and tooltips).
