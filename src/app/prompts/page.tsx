import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Library } from "lucide-react";
import { PageFrame } from "@/components/site-shell";
import { promptCards } from "@/content/portfolio";

export const metadata = {
  title: "Prompt Library",
  description:
    "Prompt trails and build notes behind Megha Devaraj's projects and experiments.",
};

export default function PromptsPage() {
  return (
    <PageFrame>
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-2 text-sm font-medium text-muted shadow-soft outline-none transition hover:-translate-y-0.5 hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to map
        </Link>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              Prompt library
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              Prompts are part of the artifact.
            </h1>
          </div>
          <p className="text-base leading-8 text-muted">
            For many of these projects, I’m sharing not just the code, but the
            prompts used to build them. The goal is to show the creative process
            behind the product and make it easier for someone else to remix,
            rebuild, or improve the idea themselves.
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {promptCards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-ink/10 bg-paper p-5 shadow-soft"
            >
              <div className="mb-5 grid size-11 place-items-center rounded-xl border border-forest/20 bg-forest/10 text-forest">
                <Library size={20} aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral-dark">
                {card.project}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ink">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{card.note}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-2 text-sm font-medium text-ink outline-none transition hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
              >
                Prompt link placeholder
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-forest/20 bg-forest/10 p-5">
          <h2 className="text-xl font-semibold text-ink">Build it yourself</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            Future prompt cards can include the exact prompt, what it generated,
            what needed human judgment, and the next prompt worth trying.
          </p>
        </section>
      </main>
    </PageFrame>
  );
}
