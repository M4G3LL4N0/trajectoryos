import {
  Activity,
  Cpu,
  GitBranch,
  Layers,
  Radio,
  Shield,
  ThermometerSun,
  Zap,
} from "lucide-react";

const tiles = [
  { label: "Orbital state", value: "LEO · 550 km", icon: Activity, tone: "text-cyan-300" },
  { label: "Δv budget", value: "2.41 km/s", icon: Layers, tone: "text-emerald-300/90" },
  { label: "Power margin", value: "+18%", icon: Zap, tone: "text-amber-200/90" },
  { label: "Thermal", value: "Safe band", icon: ThermometerSun, tone: "text-violet-300/90" },
  { label: "Comms", value: "6.2 dB margin", icon: Radio, tone: "text-cyan-200/80" },
  { label: "Trace", value: "Assumption-linked", icon: GitBranch, tone: "text-slate-300" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative border-y border-white/5 bg-slate-950/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
              Mission console
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              One workspace. Linked assumptions. Live mission posture.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Preview of the TrajectoryOS surface: budgets, solvers, and traceability in a single
            mission-grade layout—not a toy dashboard.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
          <div className="flex flex-col border-b border-white/10 lg:flex-row">
            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-5 py-4 lg:w-56 lg:flex-col lg:items-stretch lg:justify-start lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                <Cpu className="h-4 w-4 text-cyan-400/70" aria-hidden />
                Workspaces
              </div>
              <ul className="mt-0 flex gap-2 lg:mt-4 lg:flex-col lg:gap-1">
                {["Nominal", "Degraded comms", "High beta"].map((w, i) => (
                  <li key={w}>
                    <button
                      type="button"
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition lg:w-auto ${
                        i === 0
                          ? "bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-500/25"
                          : "text-slate-500 hover:bg-white/5 hover:text-slate-300"
                      }`}
                    >
                      {w}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-h-[320px] flex-1 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div>
                  <p className="text-xs text-slate-500">Active scenario</p>
                  <p className="text-sm font-medium text-white">LEO delivery · trade window A</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  <Shield className="h-3.5 w-3.5" aria-hidden />
                  Constraints satisfied
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tiles.map((t) => (
                  <div
                    key={t.label}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-500/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">{t.label}</span>
                      <t.icon className={`h-4 w-4 ${t.tone}`} aria-hidden />
                    </div>
                    <p className="mt-3 font-mono text-lg text-white">{t.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300/80">
                  AI co-pilot · draft
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Summarize sensitivity to launch insertion uncertainty; flag comms margin drivers;
                  propose two alternative mass trades with linked assumptions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 bg-black/20 px-5 py-3 text-xs text-slate-500">
            <span>Illustrative UI — product under active development</span>
            <span className="font-mono text-slate-600">v0 · internal preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}
