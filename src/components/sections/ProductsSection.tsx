import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/cards/ProductCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function ProductsSection() {
  return (
    <section className="section-pad" aria-labelledby="products-heading">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our products"
          title={<span id="products-heading">Products your teams will actually use</span>}
          description="Built from our own client work, our product suite automates operations, surfaces answers and keeps teams secure."
        />
        <RevealGroup className="flex flex-col gap-8" stagger={0.1}>
          {products.map((product, i) => (
            <RevealItem key={product.slug}>
              <ProductCard product={product} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal direction="up" className="flex justify-center">
          <Link
            to="/products"
            className="group flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}