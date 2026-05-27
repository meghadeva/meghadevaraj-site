import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MousePointerClick,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Moves Tutorial Demo",
  description: "Tutorial-style standalone page for the Moves interactive demo.",
};

const steps = [
  {
    title: "Float an idea",
    body: "Start with a low-pressure plan, like a game night, walk, concert, or weekend coffee.",
    icon: Sparkles,
  },
  {
    title: "Invite the right circle",
    body: "Choose the friend group that fits the vibe without turning the idea into a formal event.",
    icon: UsersRound,
  },
  {
    title: "Collect interest",
    body: "Friends can signal yes, maybe, or pass so the plan gets momentum only when people actually want it.",
    icon: MousePointerClick,
  },
  {
    title: "Make the move",
    body: "Once enough people are interested, Moves helps the group turn the float into a real plan.",
    icon: CheckCircle2,
  },
];

export default function MovesTutorialPage() {
  return (
    <main className="min-h-screen bg-[#ebe5dc] px-5 py-8 text-[#1c1a17] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/moves-interactive"
          className="inline-flex items-center gap-2 rounded-full border border-[#1c1a17]/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#1c1a17] shadow-sm outline-none transition hover:text-[#534ab7] focus-visible:ring-2 focus-visible:ring-[#7c6ff7]"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          moves demo hub
        </Link>

        <section className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#534ab7]">
            tutorial demo
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold tracking-tight sm:text-7xl">
            how a float becomes a plan
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a4540]">
            Moves is built around the soft beginning of social planning: the part
            where someone has an idea, but nobody wants to over-coordinate yet.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-[#1c1a17]/10 bg-white/80 p-5 shadow-[0_16px_45px_rgb(28_26_23_/_0.08)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-[#eeedff] text-[#534ab7]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[#8a857a]">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6f695f]">
                  {step.body}
                </p>
              </article>
            );
          })}
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/moves-demo/user-view.html"
            className="inline-flex items-center gap-2 rounded-full bg-[#1c1a17] px-5 py-3 text-sm font-semibold text-white outline-none transition hover:bg-[#534ab7] focus-visible:ring-2 focus-visible:ring-[#7c6ff7]"
          >
            Open user view
            <MousePointerClick size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/moves-interactive"
            className="inline-flex items-center gap-2 rounded-full border border-[#1c1a17]/10 bg-white/80 px-5 py-3 text-sm font-semibold text-[#1c1a17] outline-none transition hover:text-[#534ab7] focus-visible:ring-2 focus-visible:ring-[#7c6ff7]"
          >
            Back to hub
          </Link>
        </div>
      </div>
    </main>
  );
}
