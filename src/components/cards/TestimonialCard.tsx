import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <figure className={`flex h-full flex-col gap-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8 ${className ?? ""}`}>
      <div className="flex items-center gap-1" role="img" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-warning text-warning" : "text-line"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="text-[15px] leading-relaxed text-navy/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white"
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-navy">{testimonial.name}</span>
          <span className="text-[13px] text-muted">
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}