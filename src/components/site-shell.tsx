import Link from "next/link";
import { ArrowUpRight, Map, MessageCircle, Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold text-ink outline-none transition focus-visible:ring-2 focus-visible:ring-forest"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-ink/10 bg-paper text-forest shadow-soft transition group-hover:-rotate-3">
            <Map size={16} aria-hidden="true" />
          </span>
          <span>
            meghadevaraj.com
            <span className="ml-2 hidden font-serif text-xs italic text-muted md:inline">
              living portfolio
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-ink/10 bg-paper/80 p-1 text-sm text-muted shadow-soft sm:flex"
        >
          {[
            ["Map", "/"],
            ["Projects", "/projects/add-to-gcal"],
            ["Prompts", "/prompts"],
            ["About", "/about"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 outline-none transition hover:bg-cream hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink px-3 py-2 text-sm font-medium text-cream shadow-soft outline-none transition hover:-translate-y-0.5 hover:bg-forest focus-visible:ring-2 focus-visible:ring-forest"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span className="hidden sm:inline">Connect</span>
          <Sparkles size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      {children}
      <footer className="border-t border-ink/10 px-5 py-8 text-center text-xs text-muted sm:px-8">
        Built as a map first, resume second.
        <ArrowUpRight className="ml-1 inline" size={12} aria-hidden="true" />
      </footer>
    </div>
  );
}
