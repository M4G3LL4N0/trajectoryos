"use client";

import { Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950 px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-600/15 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bring TrajectoryOS into your next mission cycle.
            </h2>
            <p className="mt-4 text-slate-400">
              We are onboarding a small set of design partners across space, robotics, and advanced
              engineering. Tell us what you are flying or building—we will follow up personally.
            </p>

            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
              action="#"
              method="post"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Work email"
                  className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/80 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none ring-cyan-500/40 transition focus:border-cyan-500/40 focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Request access
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500">
              No spam. Early access is limited while we harden the computation core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
