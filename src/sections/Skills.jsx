import SectionHeading from "../components/SectionHeading.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="skills" title="Skills" />
      <div className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.group} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-6 py-5">
            <p className="font-mono text-sm text-signal">{group.group}</p>
            <p className="text-ink leading-relaxed">
              {group.items.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
