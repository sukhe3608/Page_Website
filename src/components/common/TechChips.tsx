export function TechChips({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-navy/80 shadow-soft transition-colors duration-300 hover:border-primary/40 hover:text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}