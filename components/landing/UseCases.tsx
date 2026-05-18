const cases = [
  {
    title: "Early spacecraft mission design",
    body: "Structure trades from first principles through integrated budgets—without losing rationale between reviews.",
  },
  {
    title: "Small satellite trade studies",
    body: "Compare bus options, payloads, and orbits with comms and power margins visible at every step.",
  },
  {
    title: "University aerospace labs",
    body: "Give student and research teams a serious workspace that still respects rigor and traceability.",
  },
  {
    title: "Proposal-stage technical validation",
    body: "Pressure-test claims before submission: assumptions surfaced, sensitivities flagged, numbers defensible.",
  },
  {
    title: "Robotics and autonomous systems planning",
    body: "Link power, thermal, and mission timeline logic for vehicles where the environment is the adversary.",
  },
  {
    title: "Defense and advanced engineering workflows",
    body: "Support classified-adjacent rigor with enterprise-ready traceability and deployment options on the roadmap.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            Use cases
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for teams operating at the edge of complexity.
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {cases.map((c) => (
            <li
              key={c.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition hover:border-emerald-500/20"
            >
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
