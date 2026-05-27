import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Film,
  Lightbulb,
} from "lucide-react";
import type { PortfolioItem } from "@/content/portfolio";
import { StatusBadge } from "@/components/status-badge";
import { VideoDialog } from "@/components/video-dialog";

export function DetailPage({ item }: { item: PortfolioItem }) {
  const Icon = item.icon;
  const visibleLinks = item.links?.filter((link) => link.href !== "#") ?? [];
  const videoDemo = item.demoBlocks?.find(
    (demo) => demo.type === "video" && demo.src,
  );
  const inlineDemos = item.demoBlocks?.filter((demo) => demo.type !== "video") ?? [];

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-2 text-sm font-medium text-muted shadow-soft outline-none transition hover:-translate-y-0.5 hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to map
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-xl border border-forest/20 bg-forest/10 text-forest">
              <Icon size={21} aria-hidden="true" />
            </span>
            <StatusBadge status={item.status} />
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-ink/82">
            {item.oneLiner}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            {item.description}
          </p>
        </div>

        {visibleLinks.length || videoDemo?.src ? (
          <aside className="flex flex-col gap-3 lg:items-stretch">
            {visibleLinks.map((link) => (
              <a
                key={`${link.type}-${link.label}`}
                href={link.href}
                target={link.type === "demo" ? "_blank" : undefined}
                rel={link.type === "demo" ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-coral/25 bg-coral/10 px-5 py-3 text-base font-semibold text-ink shadow-soft outline-none transition hover:-translate-y-0.5 hover:border-coral/40 hover:bg-coral/15 focus-visible:ring-2 focus-visible:ring-forest"
              >
                {link.label}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            {videoDemo?.src ? (
              <VideoDialog
                title={videoDemo.title}
                src={videoDemo.src}
                orientation={videoDemo.orientation}
              />
            ) : null}
          </aside>
        ) : null}
      </section>

      <section
        className={
          inlineDemos.length
            ? "mt-10 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]"
            : "mt-10"
        }
      >
        {inlineDemos.length ? (
          <div className="paper-grain rounded-xl border border-ink/10 bg-paper p-5 shadow-soft">
            <div className="mb-4 flex items-center gap-2">
              <Film size={17} className="text-forest" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-ink">Demo area</h2>
            </div>
            <div className="grid gap-3">
              {inlineDemos.map((demo) => (
                <div
                  key={demo.title}
                  className="rounded-lg border border-dashed border-ink/18 bg-cream/70 p-4"
                >
                  <div className="mb-4 flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-ink/10 bg-paper text-sm font-medium text-muted">
                    <Lightbulb size={22} className="text-coral-dark" />
                    <span>
                      {demo.type === "placeholder"
                        ? "Demo placeholder"
                        : `${demo.type} embed`}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-ink">
                    {demo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {demo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid gap-4">
          {item.sections.map((section) => (
            <section
              key={section.heading}
              className="paper-grain rounded-xl border border-ink/10 bg-paper p-5 shadow-soft"
            >
              <h2 className="text-lg font-semibold text-ink">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {section.body}
              </p>
            </section>
          ))}

          <section className="rounded-xl border border-forest/20 bg-forest/7 p-5">
            <h2 className="text-lg font-semibold text-ink">Prompt trail</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Prompts, build notes, and remix ideas will be linked here as the
              project gets fleshed out.
            </p>
            <Link
              href="/prompts"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream outline-none transition hover:bg-forest focus-visible:ring-2 focus-visible:ring-forest"
            >
              Open prompt library
              <ExternalLink size={14} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
