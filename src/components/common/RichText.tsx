import type { PostBlock } from "@/types/content";

export function RichText({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-pretty text-[17px] leading-[1.85] text-navy/85">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-2xl font-semibold tracking-tight text-navy">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-lg font-semibold tracking-tight text-navy">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-3 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-navy/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i} className="relative rounded-2xl border-l-4 border-primary bg-soft/60 px-6 py-5">
                <p className="text-lg font-medium italic leading-relaxed text-navy">&ldquo;{block.text}&rdquo;</p>
                {block.cite && <cite className="mt-2 block text-sm font-semibold not-italic text-primary">{block.cite}</cite>}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}