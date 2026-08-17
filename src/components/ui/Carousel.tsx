import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { prefersReducedMotion } from "@/utils/env";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  controls?: boolean;
  dots?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  labelledBy?: string;
}

/** Scroll-snap carousel with swipe support, keyboard navigation and optional autoplay. */
export function Carousel({
  children,
  className,
  controls = true,
  dots = true,
  autoplay = false,
  autoplayInterval = 6000,
  pauseOnHover = true,
  labelledBy,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = children.length;

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(total - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [total]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    if (!autoplay || paused) return;
    if (total <= 1) return;
    const t = setInterval(() => goTo((index + 1) % total), autoplayInterval);
    return () => clearInterval(t);
  }, [autoplay, paused, index, total, goTo, autoplayInterval]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  return (
    <div
      className={cn("group/carousel relative", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={labelledBy ? undefined : "Carousel"}
      aria-labelledby={labelledBy}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        role="group"
        aria-roledescription="slides"
        className="flex snap-x snap-mandatory scroll-smooth overflow-x-auto scrollbar-none outline-none"
      >
        {children.map((child, i) => (
          <div key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${total}`} className="w-full shrink-0 snap-center">
            {child}
          </div>
        ))}
      </div>

      {controls && total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-soft transition-all duration-300 hover:border-primary/40 hover:text-primary disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === total - 1}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-soft transition-all duration-300 hover:border-primary/40 hover:text-primary disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {dots && total > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Slide indicators">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === i ? "w-8 bg-primary" : "w-2 bg-line hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}