import SectionHeading from "../components/SectionHeading.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="about" title="About" />
      <div className="max-w-prose space-y-5 text-slate leading-relaxed">
        {about.map((para, i) => (
          <p key={i} className={i === 0 ? "text-ink" : ""}>{para}</p>
        ))}
      </div>
    </section>
  );
}
