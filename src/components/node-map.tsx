"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CalendarPlus,
  Code2,
  Copy,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Trophy,
  UserRound,
  X,
} from "lucide-react";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import {
  clusters,
  getClusterItems,
  promptCards,
  type ClusterId,
  type PortfolioItem,
} from "@/content/portfolio";
import { StatusBadge } from "@/components/status-badge";

const clusterTheme: Record<
  string,
  {
    title: string;
    border: string;
    soft: string;
    text: string;
    line: string;
    dot: string;
  }
> = {
  green: {
    title: "text-forest",
    border: "border-forest/30",
    soft: "bg-forest/8",
    text: "text-forest",
    line: "text-forest/45",
    dot: "bg-forest",
  },
  blue: {
    title: "text-blue-dark",
    border: "border-blue/45",
    soft: "bg-blue/12",
    text: "text-blue-dark",
    line: "text-blue-dark/42",
    dot: "bg-blue-dark",
  },
  gold: {
    title: "text-[#a87b25]",
    border: "border-[#c7a96a]/45",
    soft: "bg-[#f7e7bb]/45",
    text: "text-[#a87b25]",
    line: "text-[#a87b25]/45",
    dot: "bg-[#a87b25]",
  },
  purple: {
    title: "text-[#6150a6]",
    border: "border-[#8b7ad4]/35",
    soft: "bg-[#e7e0ff]/45",
    text: "text-[#6150a6]",
    line: "text-[#6150a6]/42",
    dot: "bg-[#6150a6]",
  },
  teal: {
    title: "text-[#2f8580]",
    border: "border-[#68b7b2]/40",
    soft: "bg-[#dff3f0]/55",
    text: "text-[#2f8580]",
    line: "text-[#2f8580]/45",
    dot: "bg-[#2f8580]",
  },
};

const clusterIcons: Record<ClusterId, typeof CalendarPlus> = {
  "try-it": CalendarPlus,
  demos: Code2,
  education: GraduationCap,
  work: BriefcaseBusiness,
  hobbies: Trophy,
  ai: Bot,
};

const itemMarks: Record<
  string,
  | { kind: "image"; src: string; label: string; bg?: string }
  | { kind: "text"; text: string; label: string; bg: string; fg: string }
> = {
  "add-to-gcal": {
    kind: "text",
    text: "G",
    label: "Google Calendar inspired mark",
    bg: "bg-[#e7f0df]",
    fg: "text-forest",
  },
  caseprepper: {
    kind: "text",
    text: "✦",
    label: "CasePrepper mark",
    bg: "bg-[#edf4ff]",
    fg: "text-blue-dark",
  },
  moves: {
    kind: "text",
    text: "↟",
    label: "Moves mark",
    bg: "bg-[#eef6e9]",
    fg: "text-forest",
  },
  callyourbesties: {
    kind: "text",
    text: "☎",
    label: "Call Your Besties mark",
    bg: "bg-[#fff0df]",
    fg: "text-coral-dark",
  },
  float: {
    kind: "text",
    text: "≈",
    label: "Float mark",
    bg: "bg-[#e8f2fb]",
    fg: "text-blue-dark",
  },
  e2e: {
    kind: "text",
    text: "🤖",
    label: "E2E mark",
    bg: "bg-[#e8f2fb]",
    fg: "text-blue-dark",
  },
  "notre-dame": {
    kind: "image",
    src: "https://logo.clearbit.com/nd.edu",
    label: "Notre Dame logo",
    bg: "bg-[#f7f1df]",
  },
  stanford: {
    kind: "image",
    src: "https://logo.clearbit.com/stanford.edu",
    label: "Stanford logo",
    bg: "bg-[#f7f1df]",
  },
  wharton: {
    kind: "image",
    src: "https://logo.clearbit.com/wharton.upenn.edu",
    label: "Wharton logo",
    bg: "bg-[#f7f1df]",
  },
  kindi: {
    kind: "text",
    text: "K",
    label: "KINDI mark",
    bg: "bg-[#edf4e8]",
    fg: "text-forest",
  },
  "microsoft-internship": {
    kind: "image",
    src: "https://logo.clearbit.com/microsoft.com",
    label: "Microsoft logo",
    bg: "bg-white",
  },
  "microsoft-postgrad": {
    kind: "image",
    src: "https://logo.clearbit.com/microsoft.com",
    label: "Microsoft logo",
    bg: "bg-white",
  },
  tennis: {
    kind: "text",
    text: "●",
    label: "Tennis mark",
    bg: "bg-[#e6f5bb]",
    fg: "text-[#8dbc27]",
  },
  lagree: {
    kind: "text",
    text: "⌁",
    label: "Lagree mark",
    bg: "bg-[#e7e0ff]",
    fg: "text-[#6150a6]",
  },
  "ai-certification": {
    kind: "text",
    text: "AI",
    label: "AI certification mark",
    bg: "bg-[#dff3f0]",
    fg: "text-[#2f8580]",
  },
  "notary-certification": {
    kind: "text",
    text: "N",
    label: "Notary certification mark",
    bg: "bg-[#fff0df]",
    fg: "text-coral-dark",
  },
  "prompt-library": {
    kind: "text",
    text: "⌘",
    label: "Prompt Library mark",
    bg: "bg-[#dff3f0]",
    fg: "text-[#2f8580]",
  },
  "ai-life-coach": {
    kind: "text",
    text: "☼",
    label: "AI Life Coach mark",
    bg: "bg-[#e8f2fb]",
    fg: "text-blue-dark",
  },
  moo: {
    kind: "text",
    text: "M",
    label: "Moo mark",
    bg: "bg-[#fff0df]",
    fg: "text-coral-dark",
  },
};

function ItemMark({ item }: { item: PortfolioItem }) {
  const mark = itemMarks[item.slug];
  const Icon = item.icon;

  if (!mark) {
    return (
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-ink/10 bg-cream text-forest">
        <Icon size={17} aria-hidden="true" />
      </span>
    );
  }

  if (mark.kind === "image") {
    return (
      <span
        className={clsx(
          "grid size-9 shrink-0 place-items-center overflow-hidden rounded-md border border-ink/10 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]",
          mark.bg,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark.src} alt="" className="max-h-full max-w-full object-contain" />
        <span className="sr-only">{mark.label}</span>
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "grid size-9 shrink-0 place-items-center rounded-md border border-ink/10 font-serif text-lg font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]",
        mark.bg,
        mark.fg,
      )}
      aria-label={mark.label}
    >
      {mark.text}
    </span>
  );
}

function NodeButton({
  item,
  onSelect,
}: {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      whileHover={reduceMotion ? undefined : { y: -1, scale: 1.006 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      className="group flex w-full items-center gap-3 rounded-lg border border-ink/8 bg-paper/85 px-3 py-2.5 text-left shadow-[0_5px_16px_rgba(51,47,39,0.045)] outline-none transition hover:border-forest/25 hover:bg-white hover:shadow-soft focus-visible:ring-2 focus-visible:ring-forest"
    >
      <ItemMark item={item} />
      <span className="min-w-0 flex-1 truncate text-[15px] font-semibold text-ink">
        {item.title}
      </span>
      <StatusBadge status={item.status} compact />
      <ExternalLink
        size={15}
        className="shrink-0 text-muted opacity-55 transition group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.button>
  );
}

function ClusterCard({
  id,
  title,
  accent,
  position,
  onSelect,
}: {
  id: ClusterId;
  title: string;
  accent: string;
  position: string;
  onSelect: (item: PortfolioItem) => void;
}) {
  const items = getClusterItems(id);
  const theme = clusterTheme[accent] ?? clusterTheme.green;
  const Icon = clusterIcons[id];
  const side = position.includes("col-start-1") ? "right" : "left";

  return (
    <section
      className={clsx(
        "cluster-card relative z-10 rounded-lg border bg-paper/82 p-2.5 shadow-soft backdrop-blur sm:p-3",
        theme.border,
        position,
      )}
      aria-labelledby={`${id}-title`}
    >
      <span
        className={clsx(
          "absolute top-1/2 hidden size-3 -translate-y-1/2 rounded-full border-2 border-paper lg:block",
          side === "right" ? "-right-1.5" : "-left-1.5",
          theme.dot,
        )}
        aria-hidden="true"
      />
      <div className="mb-2 flex items-center gap-2 px-1">
        <Icon size={20} className={theme.title} aria-hidden="true" />
        <h2
          id={`${id}-title`}
          className={clsx(
            "font-serif text-2xl font-semibold tracking-tight",
            theme.title,
          )}
        >
          {title}
        </h2>
      </div>

      <div className="grid gap-2">
        {items.map((item) => (
          <NodeButton key={item.slug} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

function ItemModal({
  item,
  onClose,
}: {
  item: PortfolioItem | null;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/28 px-4 py-6 backdrop-blur-sm"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="node-dialog-title"
            className="paper-grain max-h-[88vh] w-full max-w-2xl overflow-auto rounded-2xl border border-ink/10 bg-paper p-5 shadow-lift sm:p-6"
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {item ? <ItemMark item={item} /> : null}
                <div>
                  <StatusBadge status={item.status} />
                  <h2
                    id="node-dialog-title"
                    className="mt-2 font-serif text-4xl font-semibold tracking-tight text-ink"
                  >
                    {item.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-cream text-muted outline-none transition hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
                aria-label="Close"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>

            <p className="text-lg leading-8 text-ink">{item.oneLiner}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {item.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.sections.slice(0, 2).map((section) => (
                <section
                  key={section.heading}
                  className="rounded-lg border border-ink/10 bg-cream/70 p-4"
                >
                  <h3 className="text-sm font-semibold text-ink">
                    {section.heading}
                  </h3>
                  <p className="mt-2 line-clamp-4 text-sm leading-6 text-muted">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={item.route}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream outline-none transition hover:bg-forest focus-visible:ring-2 focus-visible:ring-forest"
              >
                Open full page
                <ExternalLink size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/prompts"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-2 text-sm font-medium text-ink outline-none transition hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
              >
                Prompt trail
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M 31.5% 18% C 38% 18%, 35% 35%, 43% 35%" fill="none" stroke="#4f7a5e" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
      <path d="M 31.5% 47% C 38% 47%, 35% 50%, 43% 50%" fill="none" stroke="#3e76ad" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
      <path d="M 31.5% 77% C 38% 77%, 35% 65%, 43% 65%" fill="none" stroke="#6d5bb5" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
      <path d="M 68.5% 18% C 62% 18%, 65% 35%, 57% 35%" fill="none" stroke="#b48a33" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
      <path d="M 68.5% 47% C 62% 47%, 65% 50%, 57% 50%" fill="none" stroke="#4f7a5e" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
      <path d="M 68.5% 77% C 62% 77%, 65% 65%, 57% 65%" fill="none" stroke="#2f8580" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

export function NodeMap() {
  const reduceMotion = useReducedMotion();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const orderedClusters = useMemo(
    () =>
      [
        "try-it",
        "demos",
        "hobbies",
        "education",
        "work",
        "ai",
      ].map((id) => clusters.find((cluster) => cluster.id === id)!),
    [],
  );

  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:pb-20 lg:pt-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative grid gap-x-24 gap-y-8 lg:grid-cols-[minmax(280px,1fr)_minmax(340px,0.9fr)_minmax(280px,1fr)] lg:grid-rows-[auto_auto_auto]"
        >
          <ConnectorLines />

          {orderedClusters.map((cluster) => (
            <ClusterCard
              key={cluster.id}
              {...cluster}
              onSelect={setSelectedItem}
            />
          ))}

          <section className="paper-grain relative z-20 rounded-xl border border-ink/10 bg-paper/95 p-7 text-center shadow-lift backdrop-blur lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center">
            <div className="mx-auto mb-5 grid size-28 place-items-center rounded-full border border-forest/10 bg-forest/10 font-serif text-4xl font-semibold text-forest shadow-soft">
              MD
            </div>
            <h1 className="sr-only">Megha Devaraj</h1>
            <p className="mt-4 text-lg font-medium leading-7 text-forest">
              Hi, I&apos;m Megha.
            </p>
            <div className="mx-auto my-5 h-px w-36 bg-ink/10" />
            <p className="mx-auto max-w-md text-sm leading-7 text-muted">
              I like building things, hosting things, organizing things, and
              occasionally overthinking things until they become product ideas.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
              This is where I&apos;m collecting the tools and experiments I&apos;m
              working on — AI workflows, friendship nudges, calendar shortcuts,
              case prep practice, and other tiny systems for making life feel a
              little less chaotic.
            </p>
            <button
              type="button"
              onClick={() => {
                const promptItem = getClusterItems("ai").find(
                  (item) => item.slug === "prompt-library",
                );
                if (promptItem) setSelectedItem(promptItem);
              }}
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-md border border-ink/10 bg-cream px-4 py-2 text-sm font-medium text-muted shadow-soft outline-none transition hover:border-forest/25 hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span className="size-2.5 rounded-full bg-forest" />
              Open to new ideas
            </button>
          </section>
        </motion.div>

        <section className="mt-10 grid gap-5 border-t border-ink/10 pt-8 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Prompts are part of the artifact
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              A few prompts that shape how I think, build, and ship.
            </p>
            <Link
              href="/prompts"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper px-4 py-2 text-sm font-medium text-ink shadow-soft outline-none transition hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
            >
              View all prompts
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {promptCards.map((card, index) => {
              const icons = [Copy, UserRound, Sparkles];
              const Icon = icons[index] ?? Copy;
              const tints = [
                "bg-forest/10 text-forest",
                "bg-blue/18 text-blue-dark",
                "bg-[#f7e7bb]/55 text-[#b48a33]",
              ];

              return (
                <Link
                  key={card.title}
                  href="/prompts"
                  className="rounded-lg border border-ink/10 bg-paper/90 p-4 shadow-soft outline-none transition hover:-translate-y-0.5 hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                      className={clsx(
                        "grid size-12 place-items-center rounded-lg",
                        tints[index],
                      )}
                    >
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <Copy size={16} className="text-muted/60" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.note}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </section>

      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
}
