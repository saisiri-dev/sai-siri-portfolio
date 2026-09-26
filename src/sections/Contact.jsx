import { personal } from "../data/portfolio.js";

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-16 sm:py-24 rule">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">Let's talk</h2>
        <p className="mt-4 text-slate leading-relaxed">
          I'm looking for entry-level Software Engineer / Software Developer opportunities.
          Feel free to reach out — I usually reply within a day or two.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="rounded-md bg-ink px-5 py-2.5 text-sm text-paper hover:bg-signal transition-colors"
          >
            Email me
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink px-5 py-2.5 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 text-sm text-slate hover:border-ink hover:text-ink transition-colors"
          >
            GitHub
          </a>
        </div>

        <dl className="mt-10 grid sm:grid-cols-2 gap-4 font-mono text-sm">
          <div>
            <dt className="text-slate">phone</dt>
            <dd className="text-ink">{personal.phone}</dd>
          </div>
          <div>
            <dt className="text-slate">location</dt>
            <dd className="text-ink">{personal.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
