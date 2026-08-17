import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

/**
 * Shared layout for legal pages: intro, sticky on-this-page nav, numbered sections and a contact block.
 */
export function LegalLayout({
  intro,
  sections,
  lastUpdated,
  contact,
}: {
  intro: string;
  sections: LegalSection[];
  lastUpdated: string;
  contact: ReactNode;
}) {
  return (
    <div className="container-x grid gap-10 pb-20 pt-16 lg:grid-cols-[250px_1fr] lg:gap-14">
      <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">On this page</p>
          <ol className="flex flex-col gap-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="link-underline inline-block rounded px-2 py-1.5 text-[14px] font-medium text-navy/80 transition-colors duration-200 hover:text-primary"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article className={cn("flex min-w-0 flex-col gap-10")}>
        <p className="text-[15.5px] leading-[1.85] text-muted">{intro}</p>
        <p className="-mt-6 text-[13px] font-medium text-muted">Last updated: {lastUpdated}</p>
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className="scroll-mt-28" aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`} className="mb-4 text-xl font-semibold tracking-tight text-navy">
              <span className="mr-2 text-primary">{i + 1}.</span>
              {section.title}
            </h2>
            <div className="flex flex-col gap-4 text-[15px] leading-[1.85] text-navy/85">{section.body}</div>
          </section>
        ))}
        <div className="rounded-2xl border border-line bg-soft/50 p-6">{contact}</div>
      </article>
    </div>
  );
}