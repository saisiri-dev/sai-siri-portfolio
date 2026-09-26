export default function SectionHeading({ index, title, note }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      {index && (
        <span className="font-mono text-xs text-signal2 shrink-0">{index}</span>
      )}
      <div>
        <h2 className="font-display text-3xl sm:text-4xl text-ink">{title}</h2>
        {note && <p className="mt-2 text-slate max-w-prose">{note}</p>}
      </div>
    </div>
  );
}
