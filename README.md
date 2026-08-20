# Europe Research Summer — Website

Marketing website for **Europe Research Summer** (AI Summer Research
Initiative), a pan-European AI research programme by EuroTech Federation.

> Project conventions (anonymity rules, structure, design) live in
> [`.claude/CLAUDE.md`](.claude/CLAUDE.md).

## Tech stack (locked decision — 2026-08)

This stack is the agreed baseline. Do not swap frameworks or add dependencies
outside this list without updating this section first.

| Layer | Choice | Version policy |
|---|---|---|
| Framework | [Astro](https://astro.build) | v7.x, pinned |
| Styling | [Tailwind CSS](https://tailwindcss.com) via `@tailwindcss/vite` | v4.x, pinned |
| Language | TypeScript (`astro/tsconfigs/strict`) | bundled with Astro |
| Images | `sharp` (Astro's default image service) | pinned |
| Package manager | pnpm | lockfile committed; build scripts allow-listed in `pnpm-workspace.yaml` |
| Output | Static (`output: 'static'`, Astro default) | — |
| Hosting | Vercel | — |
| Fonts | Self-hosted via [Fontsource](https://fontsource.org) | pinned |

### Why this stack

- **Astro** — this is a content-focused marketing site: Astro ships zero
  client-side JavaScript by default, renders to static HTML, and is the
  current standard for this class of site. If an application portal is needed
  later, Astro supports on-demand rendering and server actions without a
  framework change.
- **Tailwind v4** — CSS-first configuration: brand tokens live in a single
  `@theme` block in `src/styles/global.css`, no `tailwind.config.js`.
  Integrated through the official Vite plugin in `astro.config.mjs`.
- **Static output** — no server, no runtime, nothing to patch. Deploys as
  plain files; Vercel auto-detects Astro and builds on push (no adapter
  needed for static output — add `@astrojs/vercel` only if SSR is ever
  introduced).
- **Explicitly rejected**: Next.js (server framework is overkill for a
  content site with no application logic), CSS-in-JS (against Tailwind v4
  norms), any UI component library (the design system is small and custom).

### Brand tokens

Defined once in `src/styles/global.css` under `@theme`:

| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#0F172A` | Primary / background |
| `--color-cyan` | `#22D3EE` | Highlight / CTA |
| `--color-accent` | `#0069a9` | Accent, gradient start |
| `--color-indigo` | `#1B1A88` | Secondary accent |
| `--color-text` | `#E2E8F0` | Text |
| Gradient | `#0069a9 → #0F172A` | Hero / banners |

Logos live in `src/assets/` (light `#E2E8F0` and dark `#0F172A` variants).

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
