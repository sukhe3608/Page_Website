import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function InsightsSection() {
  const featured = posts.slice(0, 3);

  return (
    <section className="section-pad bg-white" aria-labelledby="insights-heading">
      <div className="container-x flex flex-col gap-14">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title={<span id="insights-heading">Ideas worth reading</span>}
            description="Practical thinking on technology, design and business — written by the people doing the work."
          />
          <Reveal direction="up" delay={0.1}>
            <Link
              to="/insights"
              className="group flex shrink-0 items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              View all insights
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {featured.map((post, i) => (
            <RevealItem key={post.slug} className="h-full">
              <BlogCard post={post} index={i} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}