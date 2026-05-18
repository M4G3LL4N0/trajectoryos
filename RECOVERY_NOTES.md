# TrajectoryOS — Recovery Notes

Agent and founder memory for restoring context after disk loss, branch chaos, or long gaps between sessions.

---

## Startup Identity

- **Name:** TrajectoryOS
- **Folder:** `/Users/joshuadavis/startups/trajectoryos`
- **What it is:** An AI-native **mission computation layer** for space, physics, aerospace, robotics, and engineering—not a generic SaaS calculator, not a slide deck factory.
- **Stage:** Pre-revenue startup; MVP product and public site evolving in parallel.

---

## Product Vision

TrajectoryOS gives technical teams one premium workspace to move from **mission intent and assumptions** to **validated calculations**, **trade studies**, **risk flags**, **scenario comparisons**, and **technical briefs**. It is the **mission computation operating layer** that sits above fragmented spreadsheets, one-off scripts, and siloed simulation tools.

**Target users:** Space startups, satellite teams, aerospace engineers, university mission labs, robotics teams, scientific R&D, advanced engineering, and defense-adjacent engineering (rigor and deployment options—not public claims about programs or customers).

---

## Website / App Structure

| Route / area | Role |
|--------------|------|
| `/` (`app/page.tsx`) | Single-page investor-ready landing: header, hero, dashboard preview, positioning, features, how it works, use cases, roadmap, CTA, footer |
| `app/layout.tsx` | Metadata, Geist fonts, root HTML shell |
| `app/globals.css` | Tailwind v4 entry, base body styles, ambient gradients, utilities (`grid-radial`) |
| `components/landing/*` | Section components; keep sections composable for future split routes |
| `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` | Core toolchain |

**Future (not built yet):** Authenticated app routes, calculator pages under e.g. `/tools/*`, API routes, mission brief generator UI, early access backend.

---

## Design Direction

- **Premium dark aerospace** — slate/cyan base, **glass** panels (`border-white/10`, `bg-white/[0.03]`, `backdrop-blur`).
- **Mission-control aesthetic** — disciplined grids, monospace accents where numbers appear, no cartoon space art.
- **Accents:** Cyan primary, subtle **violet** and **emerald**; **no unreadable neon**, no clutter.
- **Typography:** Geist Sans / Geist Mono via `next/font`.
- **Motion:** Prefer CSS-only; **framer-motion** is optional and was **not** added to keep the build lean unless explicitly needed later.

Preserve this direction on all marketing and future app chrome. Do not drift to generic SaaS card grids or bright “startup template” palettes.

---

## What Was Preserved

- Clear **product truth** boundary: roadmap vs shipped is labeled on the dashboard preview and in README.
- **pnpm-only** package manager; `packageManager` field set in `package.json`.
- **Autobuilder** foundation files under `.autobuilder/` plus `AUTOBUILDER_FOUNDATION.json` and this file.

---

## What Was Fixed

- _Initial creation:_ N/A — greenfield scaffold from TrajectoryOS zero-to-MVP spec (May 2026).

---

## What Was Removed

- Nothing removed post-create (greenfield).

---

## Current Build Status

After `pnpm install` and `pnpm build`, status should be **passing**. Re-run locally after any dependency or Next major bump.

---

## Manual Deploy Command

Do **not** deploy from agents unless the founder explicitly asks. Manual production path:

```bash
cd /Users/joshuadavis/startups/trajectoryos
pnpm install
pnpm build
vercel --prod
```

---

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/trajectoryos
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint
```

---

## Next Best Tasks

1. Validate clean production build on CI or locally after each significant change.
2. Add **real** mission calculators (orbital, mass, power, thermal, comms) as dedicated routes or embedded tools—not mocks.
3. Mission **brief generator** UI wired to real workspace state or a bounded demo dataset.
4. SEO-oriented **calculator landing pages** (`/tools/orbital`, etc.) with structured metadata.
5. **Early access** capture backed by a form API (e.g. Resend, Airtable, or Supabase)—replace the placeholder CTA form.

---

## Autobuilder Guardrails

Full rules: **`.autobuilder/guardrails.md`**. Summary:

- **Product truth:** No fake customers, NASA partnerships, or defense contracts. Roadmap language must stay distinguishable from shipped product.
- **Privacy:** Do not embed founder PII, personal emails, or non-public identifiers in repo or copy.
- **Do not delete:** `RECOVERY_NOTES.md`, `AUTOBUILDER_FOUNDATION.json`, `.autobuilder/*`, `README.md`, core `app/*` and `components/landing/*` without replacement plan.
- **Do not use npm** — **pnpm only**.
- **Do not** `git push` or `vercel --prod` from autonomous agents unless explicitly instructed.
