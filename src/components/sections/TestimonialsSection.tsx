import { testimonials } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Reveal } from "@/components/animation/Reveal";

export function TestimonialsSection() {
  return (
    <section className="section-pad" aria-label="Client testimonials">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          eyebrow="Client voices"
          title={<span id="testimonials-heading">Trusted by teams across India</span>}
          description="From airports and defence labs to hospitals and hotels — here's what our clients say."
        />
        <Reveal direction="up" delay={0.1}>
          <Carousel
            labelledBy="testimonials-heading"
            autoplay
            pauseOnHover
            className="mx-auto max-w-3xl"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="mx-1" />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}