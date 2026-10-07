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

<!-- TRILLIONX:presentation:begin -->

### Animated surfaces

Generated from this repository's own source tree: every count, route and module below was measured, not written by hand.

#### Identity

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/hero-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/hero-light.svg">
  <img alt="Identity diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/hero.svg">
</picture>

#### Entry points

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/terminal-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/terminal-light.svg">
  <img alt="Entry points diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/terminal.svg">
</picture>

#### Modules

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/architecture-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/architecture-light.svg">
  <img alt="Modules diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/architecture.svg">
</picture>

#### Routes

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/data_flow-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/data_flow-light.svg">
  <img alt="Routes diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/data_flow.svg">
</picture>

#### Composition

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/component_map-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/component_map-light.svg">
  <img alt="Composition diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/component_map.svg">
</picture>

#### Build and tests

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/build-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/build-light.svg">
  <img alt="Build and tests diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/build.svg">
</picture>

#### Identity object

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/footer-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/footer-light.svg">
  <img alt="Identity object diagram for trajectoryos" src="https://raw.githubusercontent.com/M4G3LL4N0/trajectoryos/main/.github-art/surfaces/footer.svg">
</picture>

<!-- TRILLIONX:presentation:end -->

<!-- TRILLIONX:evidence:begin -->

## What is measurable here

Generated by `.github-art` from the source tree at publish time.

| Signal | Value |
| --- | --- |
| HTTP routes | 15 |
| Entry points | 2 |
| Module roots | 3 |
| Test files | 0 |
| CI workflows | 0 |
| Distinctive stack | scaffold only |
| Status | PROTOTYPE |
| Evidence confidence | E3 |
| Animated surfaces | 7 |

<!-- TRILLIONX:evidence:end -->
