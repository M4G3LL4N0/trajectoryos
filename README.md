# TrajectoryOS

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="TrajectoryOS — animated project plate showing policy &rarr; control &rarr; evidence. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: policy &rarr; control &rarr; evidence." width="100%">
  </picture>
</p>

**Mission-grade calculations for the frontier.**

TrajectoryOS is an AI-native mission computation layer for space, physics, aerospace, robotics, and engineering teams. This repository contains the public marketing site (Next.js App Router).

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [pnpm](https://pnpm.io/) only

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Project layout

| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, metadata |
| `app/page.tsx` | Landing page composition |
| `app/globals.css` | Global styles, Tailwind, theme tokens |
| `components/landing/` | Section components for the marketing page |
| `RECOVERY_NOTES.md` | Agent / founder recovery context |
| `AUTOBUILDER_FOUNDATION.json` | Machine-readable project memory |
| `.autobuilder/` | Autobuilder state, next actions, guardrails |

## Deployment (manual)

Configure the project in the Vercel dashboard or CLI. Production deploy is **manual only** — do not automate `vercel --prod` from agents without explicit approval.

```bash
cd /Users/joshuadavis/startups/trajectoryos
pnpm install
pnpm build
vercel --prod
```

## Product truth

The live calculators, API export, and enterprise features described on the site are **roadmap** unless explicitly shipped in this repo. The landing page is investor- and partner-ready positioning, not a claim of shipped product scope beyond what exists in code.

## License

Proprietary — TrajectoryOS. All rights reserved.
