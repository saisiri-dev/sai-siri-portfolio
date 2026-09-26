import { useState } from "react";
import { nav, personal } from "../data/portfolio.js";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="section-pad flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-mono text-sm tracking-tight text-ink hover:text-signal transition-colors"
          onClick={() => setOpen(false)}
        >
          SAI SIRI KUDARAVALLI
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            className="ml-2 rounded-md border border-ink px-3 py-1.5 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Download resume
          </a>
        </nav>

        <button
          className="lg:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-paper section-pad py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base text-slate hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md border border-ink px-3 py-2 text-center text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}
