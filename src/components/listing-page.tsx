import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ClusterId } from "@/content/portfolio";
import { getClusterItems } from "@/content/portfolio";
import { StatusBadge } from "@/components/status-badge";

export function ListingPage({
  cluster,
  eyebrow,
  title,
  intro,
}: {
  cluster: ClusterId;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  const items = getClusterItems(cluster);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{intro}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.slug}
              href={item.route}
              className="group rounded-xl border border-ink/10 bg-paper p-5 shadow-soft outline-none transition hover:-translate-y-0.5 hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-forest/20 bg-forest/10 text-forest">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <StatusBadge status={item.status} />
              </div>
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {item.oneLiner}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest">
                Open
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
