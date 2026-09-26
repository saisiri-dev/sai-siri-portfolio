import SectionHeading from "../components/SectionHeading.jsx";
import { research } from "../data/portfolio.js";

export default function Research() {
  return (
    <section id="research" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="research" title="Research" />

      <div className="rounded-lg border border-line p-6 bg-white/40 max-w-3xl">
        <p className="font-mono text-xs text-signal2">
          {research.authorship}
        </p>

        <h3 className="mt-2 font-display text-2xl text-ink leading-snug">
          {research.title}
        </h3>

        <p className="mt-2 text-sm text-slate">
          Published in {research.publication}
        </p>

        {research.doi && (
          <a
            href={research.doi}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center text-sm font-semibold text-signal2 underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            DOI: 10.58257/IJPREMS54213 ↗
          </a>
        )}

        <p className="mt-4 text-slate leading-relaxed">
          {research.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {research.areas.map((a) => (
            <span
              key={a}
              className="rounded-md border border-line px-2.5 py-1 text-xs font-mono text-slate"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
