import SectionHeading from "../components/SectionHeading.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="experience" title="Experience" />
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-6">
            <div>
              <p className="font-mono text-xs text-signal2">{job.period}</p>
              <p className="mt-1 text-ink font-medium">{job.company}</p>
              <p className="text-sm text-slate">{job.location}</p>
            </div>
            <div>
              <h3 className="text-lg text-ink">{job.role}</h3>
              <ul className="mt-3 space-y-2 text-slate leading-relaxed">
                {job.points.map((p, i) => (
                  <li key={i} className="pl-4 border-l border-line">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
