import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/types/content";
import { Artwork } from "@/components/common/Artwork";
import { Badge } from "@/components/ui/Badge";

export function BlogCard({ post, index, className }: { post: Post; index: number; className?: string }) {
  const pattern = index % 3 === 0 ? "flow" : index % 3 === 1 ? "bars" : "map";

  return (
    <Link
      to={`/insights/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${className ?? ""}`}
    >
      <Artwork tint={post.tint} pattern={pattern} className="h-44">
        <div className="flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="border-white/30 bg-white/15 text-white">
              {post.category}
            </Badge>
            <span className="text-xs font-medium text-white/75">{post.date}</span>
          </div>
        </div>
      </Artwork>
      <div className="flex flex-col gap-2.5 p-5">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="font-medium text-navy">{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-[17px] font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-primary">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-2 text-[13px] font-semibold text-primary">
          Read article
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}