import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

// Links are only rendered once a real URL is set in src/data/portfolio.js.
// This keeps unfinished placeholder text off the live site.
function isRealUrl(url) {
  return Boolean(url) && !url.startsWith("GITHUB_") && !url.startsWith("PROJECT_");
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-16 sm:py-20 rule">
      <SectionHeading
        index="projects"
        title="Projects"
        note="A mix of applied software development and an academic product-design project."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-line p-6 flex flex-col bg-white/40"
          >
            <p className="font-mono text-xs text-signal2">{project.category}</p>
            <h3 className="mt-2 font-display text-2xl text-ink">{project.name}</h3>
            <p className="mt-3 text-slate leading-relaxed">{project.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate leading-relaxed">
              {project.points.map((p, i) => (
                <li key={i} className="pl-4 border-l border-line">{p}</li>
              ))}
            </ul>

            {project.tech?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line px-2.5 py-1 text-xs font-mono text-slate"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {(isRealUrl(project.githubUrl) || isRealUrl(project.demoUrl)) && (
              <div className="mt-6 flex gap-3">
                {isRealUrl(project.githubUrl) && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper transition-colors"
                  >
                    GitHub
                  </a>
                )}

                {isRealUrl(project.demoUrl) && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 transition-opacity"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}