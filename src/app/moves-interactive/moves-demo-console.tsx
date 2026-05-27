"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpenCheck,
  MessageSquareText,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

const feedbackFormUrl = "https://forms.gle/vujYbviemCR4UEgb8";

const demos = {
  overview: {
    title: "Overview",
    eyebrow: "guided product walkthrough",
    src: "/moves-demo/tutorial.html?embedded=1",
    icon: Sparkles,
  },
  tutorial: {
    title: "Tutorial",
    eyebrow: "interactive walkthrough",
    src: "/moves-demo/tutorial-placeholder.html?embedded=1",
    icon: BookOpenCheck,
  },
  user: {
    title: "User view (demo)",
    eyebrow: "floating app prototype",
    src: "/moves-demo/user-view.html?embedded=1",
    icon: MousePointerClick,
  },
} as const;

type DemoKey = keyof typeof demos;

export function MovesDemoConsole() {
  const [activeDemo, setActiveDemo] = useState<DemoKey>("overview");
  const active = demos[activeDemo];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const handleDemoMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.data?.type === "moves-demo:set-tab" && event.data?.tab === "user") {
        setActiveDemo("user");
      }
    };

    window.addEventListener("message", handleDemoMessage);
    return () => window.removeEventListener("message", handleDemoMessage);
  }, []);

  return (
    <main className="min-h-screen bg-[#ece6dc] text-[#1c1a17]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <header className="rounded-[22px] border border-[#1c1a17]/10 bg-[#fffaf1] p-3 shadow-[0_18px_50px_rgba(62,50,35,0.10)] sm:p-4">
          <div className="grid gap-3">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#7c6ff7]/20 bg-[#eeedff] px-3 py-1 text-sm font-semibold text-[#534ab7]">
                <span aria-hidden="true">🌊</span>
                demo
              </div>

              <h1
                aria-label="moves"
                className="font-serif text-4xl font-semibold tracking-[-0.045em] sm:text-6xl"
              >
                mo
                <span className="-ml-1 inline-block -rotate-6 font-serif italic text-[#7c6ff7] sm:-ml-1.5">
                  v
                </span>
                es <span className="ml-4 tracking-normal" aria-hidden="true">🌊</span>
              </h1>
            </div>

            <div
              className="grid overflow-hidden rounded-2xl border border-[#1c1a17]/10 bg-[#ebe5dc] p-1 sm:grid-cols-4 lg:w-[680px]"
              role="tablist"
              aria-label="Moves demo views"
            >
              {(Object.keys(demos) as DemoKey[]).map((key) => {
                const demo = demos[key];
                const Icon = demo.icon;
                const isActive = key === activeDemo;

                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    onClick={() => setActiveDemo(key)}
                    aria-selected={isActive}
                    className={`group flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-[#7c6ff7] ${
                      isActive
                        ? "bg-[#1c1a17] text-white shadow-[0_10px_24px_rgba(28,26,23,0.18)]"
                        : "text-[#5f584f] hover:bg-white/70 hover:text-[#1c1a17]"
                    }`}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span>{demo.title}</span>
                  </button>
                );
              })}

              <a
                href={feedbackFormUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#176c4d] outline-none transition hover:bg-[#e0f7ee] focus-visible:ring-2 focus-visible:ring-[#7c6ff7]"
              >
                <MessageSquareText size={17} aria-hidden="true" />
                <span>Feedback</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <section className="min-w-0 rounded-[24px] border border-[#1c1a17]/10 bg-[#fffaf1] p-2 shadow-[0_22px_65px_rgba(62,50,35,0.13)]">
          <div className="mb-2 flex items-center justify-between gap-3 px-2 pt-1 text-[#1c1a17]">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#eeedff] text-[#534ab7]">
                <ActiveIcon size={17} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-base font-semibold">{active.title}</h2>
                <p className="truncate text-xs text-[#6f695f]">{active.eyebrow}</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-[#1c1a17]/10 bg-white px-3 py-1 text-xs font-semibold text-[#6f695f] sm:inline-flex">
              embedded
            </span>
          </div>

          <div className="h-[560px] overflow-hidden rounded-[20px] border border-[#1c1a17]/10 bg-[#e8e4dd] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)] lg:h-[calc(100vh-190px)] lg:min-h-[520px]">
            <iframe
              key={active.src}
              src={active.src}
              title={`Moves ${active.title} demo`}
              className="h-full w-full border-0"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
