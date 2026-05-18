import { Box, LineChart, PenLine, Search } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Capture mission intent",
    desc: "Frame the question, constraints, and success criteria—before the spreadsheet sprawl begins.",
    icon: Search,
  },
  {
    step: "02",
    title: "Model assumptions & budgets",
    desc: "Wire orbital, mass, power, thermal, and comms logic with explicit links between inputs and outputs.",
    icon: Box,
  },
  {
    step: "03",
    title: "Run trades & scenarios",
    desc: "Compare architectures, insertion options, and degraded modes with deltas you can explain.",
    icon: LineChart,
  },
  {
    step: "04",
    title: "Ship the technical brief",
    desc: "Generate a decision-ready narrative grounded in the calculations your team already validated.",
    icon: PenLine,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A disciplined path from ambiguity to evidence.
          </h2>
          <p className="mt-4 text-slate-400">
            TrajectoryOS is built for teams that cannot afford silent errors or untraceable numbers.
          </p>
        </div>

        <ol className="relative mx-auto mt-16 max-w-4xl space-y-10">
          <div
            className="absolute left-[1.125rem] top-6 bottom-6 hidden w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-violet-500/30 sm:block"
            aria-hidden
          />
          {steps.map((s) => (
            <li key={s.step} className="relative flex gap-6 sm:gap-8">
              <div className="flex shrink-0 flex-col items-center sm:w-10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950 text-xs font-mono font-semibold text-cyan-300">
                  {s.step}
                </span>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:flex sm:gap-6 sm:p-8">
                <span className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-emerald-300 sm:mb-0">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
