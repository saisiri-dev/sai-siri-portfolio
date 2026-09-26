import { personal } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-pad py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p className="font-mono text-xs">Built with React · Vite · Tailwind CSS</p>
      </div>
    </footer>
  );
}
