"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

interface FragranceCollectionProps {
  products: Product[];
}

export default function FragranceCollection({ products }: FragranceCollectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "men" | "women">("all");

  const filteredProducts = products.filter((product) => {
    if (activeTab === "all") return true;
    if (activeTab === "men") return product.subtitle.toLowerCase().includes("men");
    if (activeTab === "women") return product.subtitle.toLowerCase().includes("women");
    return true;
  });

  return (
    <div className="flex flex-col items-center">
      {/* Category Tabs */}
      <div className="flex gap-8 mb-16 border-b border-muted-gray/10 pb-4 w-full justify-center max-w-lg">
        <button
          onClick={() => setActiveTab("all")}
          className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-4 -mb-[17px] border-b cursor-pointer ${activeTab === "all"
            ? "text-champagne-gold border-champagne-gold font-semibold"
            : "text-muted-gray border-transparent hover:text-ivory"
            }`}
        >
          Tất Cả
        </button>
        <button
          onClick={() => setActiveTab("men")}
          className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-4 -mb-[17px] border-b cursor-pointer ${activeTab === "men"
            ? "text-champagne-gold border-champagne-gold font-semibold"
            : "text-muted-gray border-transparent hover:text-ivory"
            }`}
        >
          Male ({products.filter(p => p.subtitle.toLowerCase().includes("men")).length})
        </button>
        <button
          onClick={() => setActiveTab("women")}
          className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-4 -mb-[17px] border-b cursor-pointer ${activeTab === "women"
            ? "text-champagne-gold border-champagne-gold font-semibold"
            : "text-muted-gray border-transparent hover:text-ivory"
            }`}
        >
          Female ({products.filter(p => p.subtitle.toLowerCase().includes("women")).length})
        </button>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center text-muted-gray text-sm tracking-wider font-light">
          Không có sản phẩm nào thuộc danh mục này.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal
              key={`${product.slug}-${activeTab}`}
              delay={idx * 100}
              direction="up"
              distance={25}
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
