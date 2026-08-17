import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/content";
import { Artwork, tintStyles } from "@/components/common/Artwork";
import { Badge } from "@/components/ui/Badge";
import { Tilt3D } from "@/components/animation/Tilt3D";

export function ProductCard({ product, index, className }: { product: Product; index: number; className?: string }) {
  const tint = (["blue", "navy", "violet", "teal"] as const)[index % 4];

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group grid overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift md:grid-cols-2 ${className ?? ""}`}
    >
      <Tilt3D maxTilt={8} scale={1.03} className="min-h-52 md:min-h-full">
        <Artwork tint={tint} pattern={index % 2 === 0 ? "bars" : "flow"} className="h-full min-h-52 md:min-h-full">
          <div className="flex h-full flex-col justify-between p-6">
            <Badge variant="outline" className="w-fit border-white/30 bg-white/15 text-white">
              {product.category}
            </Badge>
            <div className="flex items-center gap-6">
              {product.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-2xl font-bold">{m.value}</span>
                  <span className="text-xs text-white/70">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Artwork>
      </Tilt3D>
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-navy transition-colors duration-300 group-hover:text-primary">{product.name}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
        </div>
        <p className={`text-[13.5px] font-semibold ${tintStyles[tint].text}`}>{product.tagline}</p>
        <p className="text-[14.5px] leading-relaxed text-muted">{product.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {product.features.slice(0, 3).map((f) => (
            <span key={f} className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium text-muted">
              {f}
            </span>
          ))}
          <span className="px-1 py-1 text-xs font-semibold text-primary">+{product.features.length - 3} more</span>
        </div>
      </div>
    </Link>
  );
}