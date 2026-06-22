import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product, idx) => (
        <ScrollReveal key={product.slug} delay={idx * 120} direction="up" distance={30}>
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
}
