"use client";

import { Film, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

export function VideoDialog({
  buttonLabel = "Watch Demo",
  orientation = "landscape",
  title,
  src,
}: {
  buttonLabel?: string;
  orientation?: "landscape" | "portrait";
  title: string;
  src: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const isPortrait = orientation === "portrait";

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm font-medium text-ink shadow-soft outline-none transition hover:-translate-y-0.5 hover:border-forest/25 focus-visible:ring-2 focus-visible:ring-forest"
      >
        <Film size={14} aria-hidden="true" />
        {buttonLabel}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-ink/36 px-4 py-6 backdrop-blur-sm"
          onMouseDown={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={
              isPortrait
                ? "max-h-[calc(100vh-2rem)] w-[min(520px,calc(100vw-2rem))] overflow-auto rounded-[1.75rem] border border-coral/20 bg-paper p-7 shadow-lift sm:p-8"
                : "w-full max-w-2xl rounded-2xl border border-coral/20 bg-paper p-3 shadow-lift sm:p-4"
            }
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                {isPortrait ? (
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-[#9f4f61]">
                    Demo
                  </span>
                ) : null}
                <h2
                  id={titleId}
                  className={
                    isPortrait
                      ? "max-w-[360px] text-4xl font-black leading-none text-ink"
                      : "truncate text-base font-semibold text-ink"
                  }
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={
                  isPortrait
                    ? "grid size-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-cream text-3xl leading-none text-muted outline-none transition hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
                    : "grid size-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-cream text-muted outline-none transition hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
                }
                aria-label="Close demo video"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
            <div
              className={
                isPortrait
                  ? "mx-auto mt-6 aspect-[9/16] max-h-[min(72vh,650px)] w-[min(330px,100%)] overflow-hidden rounded-[2.125rem] border-[14px] border-[#191719] bg-black"
                  : "aspect-video overflow-hidden rounded-lg border border-ink/10 bg-ink"
              }
            >
              <iframe
                className="h-full w-full"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
