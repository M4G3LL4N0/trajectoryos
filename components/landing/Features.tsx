import {
  Bot,
  FileStack,
  GitCompare,
  Orbit,
  Sigma,
  Waypoints,
} from "lucide-react";

const features = [
  {
    title: "Trajectory analysis",
    desc: "Orbit-related workflows and delivery trades with clear inputs, constraints, and reproducible results.",
    icon: Orbit,
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Physics calculation layer",
    desc: "Structured physics and engineering budgets—mass, power, thermal, comms—with traceable lineage.",
    icon: Sigma,
    accent: "from-emerald-500/15 to-transparent",
  },
  {
    title: "AI mission co-pilot",
    desc: "Guided reasoning over your workspace: gap analysis, sensitivity prompts, and brief drafts you still own.",
    icon: Bot,
    accent: "from-violet-500/15 to-transparent",
  },
  {
    title: "Traceable decision logic",
    desc: "Assumptions, versions, and rationale surfaced where reviewers—and future you—will look for them.",
    icon: Waypoints,
    accent: "from-cyan-500/10 to-transparent",
  },
  {
    title: "Scenario comparison",
    desc: "Side-by-side mission and architecture variants with deltas explained, not buried in cells.",
    icon: GitCompare,
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Mission brief generation",
    desc: "Export decision-ready narratives aligned to the calculations and trades in your workspace.",
    icon: FileStack,
    accent: "from-violet-500/10 to-transparent",
  },
];

export function Features() {
  return (
    <section className="border-t border-white/5 bg-slate-950/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything connected. Nothing decorative.
          </h2>
          <p className="mt-4 text-slate-400">
            Six pillars of the TrajectoryOS surface—designed for engineering truth, not slide filler.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-500/25 hover:shadow-[0_0_40px_-20px_rgba(34,211,238,0.35)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 transition group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-cyan-300">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
