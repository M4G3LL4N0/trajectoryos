import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-radial opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-200/90 sm:text-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" aria-hidden />
          <span>AI-native mission computation layer</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.06]">
          Mission-grade calculations for the frontier.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          TrajectoryOS helps aerospace, research, and engineering teams turn mission questions into
          validated calculations, trade studies, solver workflows, and decision-ready technical
          briefs.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-8px_rgba(34,211,238,0.65)] transition hover:bg-cyan-400"
          >
            Join early access
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            View mission console preview
          </a>
        </div>

        <dl className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { k: "Operating layer", v: "Intent → assumptions → math → traceable outputs" },
            { k: "Built for teams", v: "Space, robotics, aerospace R&D, and advanced engineering" },
            { k: "Decision-grade", v: "Scenarios, sensitivity, and brief-ready documentation" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
                {item.k}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
