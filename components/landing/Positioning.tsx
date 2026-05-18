import { Orbit } from "lucide-react";

export function Positioning() {
  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">
              Positioning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Not a calculator.
              <span className="block text-slate-400">A mission computation operating layer.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              Spreadsheets splinter knowledge. Scripts are opaque. Simulators are deep but slow to
              compose. TrajectoryOS is the layer where mission intent, physics, assumptions, and
              outputs stay connected—so your team can defend every number.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" aria-hidden />
            <div className="relative space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 text-cyan-300">
                  <Orbit className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">From question to defended answer</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Model trades, run solver-backed workflows, compare scenarios, and export
                    technical narratives—without losing the thread between intent and validation.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                  Linked assumption registry across budgets and analyses
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                  Mission-grade outputs suitable for design reviews and proposals
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  Built for teams where errors are unacceptable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
