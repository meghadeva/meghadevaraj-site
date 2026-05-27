import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = {
  title: "About",
  description: "About Megha Devaraj and this living portfolio map.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-2 text-sm font-medium text-muted shadow-soft outline-none transition hover:-translate-y-0.5 hover:text-ink focus-visible:ring-2 focus-visible:ring-forest"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to map
        </Link>

        <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-lift sm:p-8">
          <div className="mb-6 grid size-14 place-items-center rounded-2xl border border-coral/25 bg-coral/10 text-coral-dark">
            <Sparkles size={24} aria-hidden="true" />
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            A living map of what I’m building, learning, and trying.
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            This V1 is a polished scaffold for MeghaDevaraj.com: part portfolio,
            part project archive, part prompt trail. It is designed to grow as
            projects get demos, screenshots, writeups, and real links.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            The placeholder pages are intentional. They keep the map complete
            while leaving room for the details that should be added carefully:
            photos, timelines, safe work notes, and the small human stories
            behind each artifact.
          </p>

          <a
            href="mailto:hello@meghadevaraj.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream outline-none transition hover:bg-forest focus-visible:ring-2 focus-visible:ring-forest"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
              alt=""
              className="size-4"
            />
            Email placeholder
          </a>
        </div>
      </main>
    </PageFrame>
  );
}
