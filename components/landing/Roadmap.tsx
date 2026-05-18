const phases = [
  {
    phase: "Now → MVP",
    items: [
      "MVP calculators for orbital, mass, power, thermal, and comms budgets",
      "Workspace primitives: assumptions, units, and versioned inputs",
    ],
    tone: "border-cyan-500/30 bg-cyan-500/5",
  },
  {
    phase: "Next",
    items: [
      "AI-guided mission brief generation grounded in workspace state",
      "Scenario comparison and sensitivity analysis across saved variants",
    ],
    tone: "border-violet-500/25 bg-violet-500/5",
  },
  {
    phase: "Scale",
    items: [
      "Python/API export for integration with existing engineering stacks",
      "Enterprise traceability, permissions, and private deployment options",
    ],
    tone: "border-emerald-500/25 bg-emerald-500/5",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">
            Roadmap
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Shipping in layers—each one earns the next.
          </h2>
          <p className="mt-4 text-slate-400">
            Public roadmap items describe direction, not delivery dates. Execution order may shift
            with design partners.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`rounded-2xl border ${p.tone} p-6 backdrop-blur-sm`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{p.phase}</h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
