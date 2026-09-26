import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="education" title="Education" />
      <ol className="space-y-8">
        {education.map((ed) => (
          <li key={ed.school} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-6">
            <p className="font-mono text-xs text-signal2">{ed.period}</p>
            <div>
              <p className="text-ink font-medium">{ed.school}</p>
              <p className="text-slate">{ed.program}</p>
              <p className="text-sm text-slate mt-1">{ed.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
