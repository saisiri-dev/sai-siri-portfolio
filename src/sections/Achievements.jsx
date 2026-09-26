import SectionHeading from "../components/SectionHeading.jsx";
import { achievements } from "../data/portfolio.js";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="achievements" title="Achievements" />
      <ul className="space-y-5">
        {achievements.map((a, i) => (
          <li key={a.title} className="flex gap-4">
            <span
              className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${
                i === 0 ? "bg-amber" : "bg-signal2"
              }`}
            />
            <div>
              <p className={i === 0 ? "text-ink font-medium" : "text-ink"}>{a.title}</p>
              <p className="text-slate text-sm mt-0.5">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
