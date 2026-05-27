import clsx from "clsx";
import type { PortfolioStatus } from "@/content/portfolio";

const statusStyles: Record<PortfolioStatus, string> = {
  Live: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "In Progress": "border-blue-200 bg-blue-50 text-blue-800",
  Demo: "border-amber-200 bg-amber-50 text-amber-800",
  Concept: "border-coral/25 bg-coral/10 text-coral-dark",
  Placeholder: "border-stone-200 bg-stone-100 text-stone-600",
};

export function StatusBadge({
  status,
  compact = false,
}: {
  status: PortfolioStatus;
  compact?: boolean;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border font-medium",
        compact
          ? "px-2 py-0.5 text-[11px] leading-4"
          : "px-2 py-0.5 text-[11px] leading-5",
        statusStyles[status],
      )}
    >
      {status}
    </span>
  );
}
