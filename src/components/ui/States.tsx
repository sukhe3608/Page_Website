import type { ReactNode } from "react";
import { Loader2, SearchX } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-soft">
          <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-muted">Loading…</p>
      </div>
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-lg bg-line/70", className)} aria-hidden="true" />;
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line bg-white px-6 py-14 text-center", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-navy">{title}</h3>
        {description && <p className="max-w-md text-sm text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again in a moment.",
  retryLabel = "Try again",
  onRetry,
  className,
}: {
  title?: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-4 rounded-2xl border border-line bg-white px-6 py-14 text-center", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-danger/10 text-danger">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-navy">{title}</h3>
        <p className="max-w-md text-sm text-muted">{description}</p>
      </div>
      {onRetry && <Button variant="outline" size="sm" onClick={onRetry}>{retryLabel}</Button>}
    </div>
  );
}