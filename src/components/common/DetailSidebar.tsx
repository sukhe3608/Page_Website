import { cn } from "@/utils/cn";

export interface DetailSection {
  id: string;
  label: string;
}

/** Sticky in-page navigation for detail pages. Collapsible on mobile. */
export function DetailSidebar({
  sections,
  title = "On this page",
  className,
}: {
  sections: DetailSection[];
  title?: string;
  className?: string;
}) {
  return (
    <nav aria-label="On this page" className={cn("lg:sticky lg:top-28", className)}>
      <details className="group rounded-2xl border border-line bg-white shadow-soft lg:hidden" open>
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-bold text-navy [&::-webkit-details-marker]:hidden">
          {title}
          <span className="text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
            +
          </span>
        </summary>
        <ul className="flex flex-col gap-1 border-t border-line p-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-lg px-3 py-2 text-[14px] font-medium text-muted transition-colors duration-200 hover:bg-soft hover:text-primary"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <div className="hidden rounded-2xl border border-line bg-white p-5 shadow-soft lg:block">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">{title}</p>
        <ul className="flex flex-col gap-0.5">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="link-underline inline-block rounded px-2 py-1.5 text-[14px] font-medium text-navy/80 transition-colors duration-200 hover:text-primary"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}