import Link from "next/link";
import { Orbit } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/10 text-cyan-300">
              <Orbit className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-semibold text-white">
              Trajectory<span className="text-cyan-400/90">OS</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            TrajectoryOS is building an AI-native mission computation layer for teams where physics,
            risk, and time collide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#product" className="transition hover:text-white">
                  Positioning
                </a>
              </li>
              <li>
                <a href="#dashboard" className="transition hover:text-white">
                  Console preview
                </a>
              </li>
              <li>
                <a href="#roadmap" className="transition hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#cta" className="transition hover:text-white">
                  Early access
                </a>
              </li>
              <li>
                <span className="text-slate-600">Careers — soon</span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-slate-600">Privacy — forthcoming</span>
              </li>
              <li>
                <span className="text-slate-600">Terms — forthcoming</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 px-4 pt-8 text-center text-xs text-slate-600 sm:px-6 sm:text-left lg:px-8">
        © {year} TrajectoryOS. All rights reserved.
      </div>
    </footer>
  );
}
