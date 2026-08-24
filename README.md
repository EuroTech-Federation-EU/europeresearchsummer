# Europe Research Summer, Website

Marketing website for **Europe Research Summer** (AI Summer Research
Initiative), a pan-European AI research programme by EuroTech Federation.

> Project conventions (anonymity rules, structure, design) live in
> [`.claude/CLAUDE.md`](.claude/CLAUDE.md).

## Tech stack (locked decision, 2026-08)

This stack is the agreed baseline. Do not swap frameworks or add dependencies
outside this list without updating this section first.

| Layer | Choice | Version policy |
|---|---|---|
| Framework | [Astro](https://astro.build) | v7.x, pinned |
| Styling | [Tailwind CSS](https://tailwindcss.com) via `@tailwindcss/vite` | v4.x, pinned |
| Language | TypeScript (`astro/tsconfigs/strict`) | bundled with Astro |
| Images | `sharp` (Astro's default image service) | pinned |
| Package manager | pnpm | lockfile committed; build scripts allow-listed in `pnpm-workspace.yaml` |
| Output | Static (`output: 'static'`, Astro default) | n/a |
| Hosting | Vercel | n/a |
| Fonts | Space Grotesk + Space Mono, self-hosted woff2 in `public/fonts` | files copied into the repo, no package |

### Why this stack

- **Astro**: this is a content-focused marketing site: Astro ships zero
  client-side JavaScript by default, renders to static HTML, and is the
  current standard for this class of site. If an application portal is needed
  later, Astro supports on-demand rendering and server actions without a
  framework change.
- **Tailwind v4**: CSS-first configuration: brand tokens live in a single
  `@theme` block in `src/styles/global.css`, no `tailwind.config.js`.
  Integrated through the official Vite plugin in `astro.config.mjs`.
- **Static output**: no server, no runtime, nothing to patch. Deploys as
  plain files; Vercel auto-detects Astro and builds on push (no adapter
  needed for static output, add `@astrojs/vercel` only if SSR is ever
  introduced).
- **Explicitly rejected**: Next.js (server framework is overkill for a
  content site with no application logic), CSS-in-JS (against Tailwind v4
  norms), any UI component library (the design system is small and custom).

### Typography (locked decision, 2026-08)

| Role | Face | Notes |
|---|---|---|
| Display and body | Space Grotesk (variable, 300 to 700) | `--font-sans` |
| Micro-labels, figures, actions | Space Mono (400, 700) | `--font-mono` |

The two are one design: Space Grotesk is the proportional derivative of Space
Mono, so the display type and the mono micro-labels share a skeleton.

Both are SIL OFL 1.1. The woff2 subsets live in `public/fonts` and the
`@font-face` rules in `src/styles/fonts.css`, so no request ever leaves the
origin, which is what the cookieless claim in the footer requires. The two
`latin` files are preloaded in `src/layouts/Layout.astro`; `latin-ext` is
fetched on demand by unicode-range.

Tracking is size-specific, never one fixed value: `--tracking-display`
(`-0.03em`) above 5rem, `--tracking-heading` (`-0.02em`) for section titles,
0 for body copy.

**Explicitly rejected**: a system font stack (Avenir Next only exists on
macOS, so most visitors were seeing Segoe UI), Google Fonts over CDN (sends
visitor IPs to a third party), Fontsource (a package for six files that never
change).

### Brand tokens

Defined once in `src/styles/global.css` under `@theme`:

| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#0F172A` | Primary / background |
| `--color-cyan` | `#22D3EE` | Highlight / CTA |
| `--color-accent` | `#0069a9` | Working accent on the paper ground (cyan is illegible on white) |
| `--color-indigo` | `#1B1A88` | Secondary accent |
| `--color-text` | `#E2E8F0` | Text |
| Gradient | `#0069a9` to `#0F172A` | Hero / banners |

Logos live in `src/assets/` (light `#E2E8F0` and dark `#0F172A` variants).

The site is dark everywhere except the Network section, which inverts to
paper. `.on-paper` in `src/styles/global.css` rebinds the ink tokens for that
scope, so components written against `text-body` / `text-muted` /
`border-line` flip with no markup change.

## Development

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static build to dist/
pnpm preview  # serve the production build locally
```

## Repository layout

```
src/
  data/           # all site content as typed constants (one file per domain)
  components/
    layout/       # Header, Footer
    sections/     # one file per homepage section (Hero, CohortMap, Network…)
    ui/           # small reusable primitives (SectionHead, LogoWall)
  lib/            # shared helpers (styles.ts: repeated class strings)
  layouts/        # base page layout (head, meta)
  pages/          # one file = one route; index.astro composes the sections
  styles/         # global.css (Tailwind import + @theme brand tokens)
  assets/         # processed images (logos/, europe-paths.svg, brand logos)
public/           # served as-is (favicon)
```

## Contact

contact@eurotech-federation.com
