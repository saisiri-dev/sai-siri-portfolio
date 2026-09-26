import SectionHeading from "../components/SectionHeading.jsx";
import { certifications } from "../data/portfolio.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading index="certifications" title="Certifications" />
      <div className="grid sm:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-lg border border-line p-5 bg-white/40">
            <p className="text-ink leading-snug">{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
