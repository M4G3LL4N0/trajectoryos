import Link from "next/link";
import { Orbit, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)] transition group-hover:border-cyan-400/40">
            <Orbit className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Trajectory<span className="text-cyan-400/90">OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#how" className="transition hover:text-white">
            How it works
          </a>
          <a href="#use-cases" className="transition hover:text-white">
            Use cases
          </a>
          <a href="#roadmap" className="transition hover:text-white">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-100 sm:inline-flex"
          >
            Request access
          </a>
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200">
                <Menu className="h-5 w-5" aria-hidden />
              </span>
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
              <a
                href="#product"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Product
              </a>
              <a
                href="#how"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                How it works
              </a>
              <a
                href="#use-cases"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Use cases
              </a>
              <a
                href="#roadmap"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                Roadmap
              </a>
              <a
                href="#cta"
                className="mt-1 block rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-center text-sm font-medium text-cyan-100"
              >
                Request access
              </a>
              <p className="mt-2 px-1 text-[10px] leading-relaxed text-slate-500">
                Roadmap and previews are planning artifacts — not certified for safety-critical operations.
              </p>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
