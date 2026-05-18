# TrajectoryOS — Autobuilder Guardrails

Instructions for humans and agents working in this repository.

---

## Product Truth

- TrajectoryOS is an **AI-native mission computation layer** for space, physics, aerospace, robotics, and engineering teams.
- The **marketing site** may describe roadmap capabilities. Anything not implemented in this repo is **future work**—say so in UI copy or docs when ambiguous.
- **Never invent:** customer names, logos, case studies, NASA or government partnerships, defense contracts, certifications, or revenue figures.

---

## Public Positioning

- Acceptable: “defense-adjacent engineering teams,” enterprise deployment options, rigor and traceability.
- Not acceptable: implying endorsement by NASA, DoD, or specific primes without written approval and evidence.

---

## Do Not Expose

- Founder or team **private** contact details, home addresses, personal phone numbers, or non-public financial terms.
- **Secrets:** API keys, tokens, `.env`, `.env.local`, or Vercel tokens in git, issues, or screenshots.
- **Customer-confidential** mission parameters if ever stored—assume future data classes and design accordingly.

---

## Do Not Delete

- `README.md`, `RECOVERY_NOTES.md`, `AUTOBUILDER_FOUNDATION.json`
- `.autobuilder/` directory contents (update in place instead)
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css` without a migration plan
- `components/landing/` section components unless replaced with equivalent structure
- `.env.example` (template only, no secrets)

---

## Do Not Drift Toward

- Generic SaaS marketing templates, cartoon space themes, or neon overload.
- **npm** or **yarn** as the install path—**pnpm only**.
- Autonomous **`git push`** or **`vercel --prod`** without explicit founder instruction.
- “Calculator” positioning alone—preserve **operating layer** and traceability narrative.

---

## Safe Improvements

- Accessibility (focus states, contrast, landmarks, reduced motion).
- Performance (image optimization, font subsetting, bundle analysis).
- Content refinements that stay truthful.
- Additional **static** routes that reinforce SEO and credibility.
- Tests for any new calculation or API logic.

---

## Risky Improvements

- Broad dependency upgrades without running `pnpm build` and manual smoke tests.
- Removing the roadmap / illustrative labels from the dashboard preview without replacing product truth elsewhere.
- Adding **framer-motion** everywhere—increases bundle cost; use sparingly if at all.
- Storing PII from early access without a data policy and secure storage.

---

## Build Rules

- **Install:** `pnpm install`
- **Develop:** `pnpm dev`
- **Production check:** `pnpm build`
- **Lint:** `pnpm lint`
- **Manual deploy (human only unless told otherwise):**

  ```bash
  cd /Users/joshuadavis/startups/trajectoryos
  pnpm install
  pnpm build
  vercel --prod
  ```

- Do not commit `node_modules`, `.next`, or environment files with secrets.
