import { personal } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="home" className="section-pad pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-start">
        <div>
          <p className="font-mono text-sm text-signal">{personal.role} · {personal.tagline}</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink">
            {personal.name}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-slate leading-relaxed">
            B.Tech Computer Science student with a foundation in Java, Python, JavaScript,
            SQL, and web development. I build software through internships, personal
            projects, and coursework, and I'm looking for an entry-level Software Engineer
            role to keep growing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-ink px-5 py-2.5 text-sm text-paper hover:bg-signal transition-colors"
            >
              View projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-ink px-5 py-2.5 text-sm hover:bg-ink hover:text-paper transition-colors"
            >
              View GitHub
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-2.5 text-sm text-slate hover:border-ink hover:text-ink transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-white/40 p-6 font-mono text-sm">
          <p className="text-signal2"># contact.info</p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-slate">location</dt>
              <dd className="text-ink">{personal.location}</dd>
            </div>
            <div>
              <dt className="text-slate">email</dt>
              <dd>
                <a href={`mailto:${personal.email}`} className="text-ink hover:text-signal break-all">
                  {personal.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate">phone</dt>
              <dd className="text-ink">{personal.phone}</dd>
            </div>
            <div>
              <dt className="text-slate">linkedin</dt>
              <dd>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-signal break-all">
                  {personal.linkedinDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate">github</dt>
              <dd>
                <a href={personal.github} target="_blank" rel="noreferrer" className="text-ink hover:text-signal break-all">
                  {personal.githubDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
