import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface ProductCardProps {
  product: any; // Allow either static Product or Sanity fetched product
}

export default function ProductCard({ product }: ProductCardProps) {
  const name = product.name || "";
  const slug = typeof product.slug === "string" ? product.slug : product.slug?.current || "";
  const subtitle = product.subtitle || "";
  const price = product.price || product.priceText || "";
  const notes = product.notes || [];
  const shopeeUrl = product.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = product.tiktokUrl || "https://www.tiktok.com/";

  // Image resolution helper
  let imageUrl = "/images/product-placeholder.png";
  if (typeof product.image === "string" && product.image) {
    imageUrl = product.image;
  } else if (product.mainImage) {
    try {
      imageUrl = urlFor(product.mainImage).url();
    } catch (e) {
      console.warn("Failed to generate image URL from Sanity:", e);
    }
  }

  const nameParts = name.split(" ");
  const lastWord = nameParts.length > 0 ? nameParts[nameParts.length - 1] : "";

  return (
    <div className="group flex flex-col bg-[#0b0b0b] border border-muted-gray/10 hover:border-champagne-gold/40 hover:shadow-[0_15px_35px_rgba(201,164,92,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out p-6 md:p-8 text-center relative overflow-hidden">
      {/* Product Image Link Container */}
      <Link href={`/products/${slug}`} className="block relative w-full aspect-square mb-6 overflow-hidden bg-[#070707] border border-muted-gray/5">
        {/* Placeholder label when actual image is missing */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-gray/5 font-serif text-5xl select-none tracking-widest uppercase transition-all duration-500 group-hover:text-champagne-gold/10">
          {lastWord}
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-108 z-10"
          />
        )}
        {/* Hover View Details overlay */}
        <div className="absolute inset-0 bg-primary-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
          <span className="font-sans text-[0.65rem] tracking-[0.25em] text-primary-black bg-ivory py-3.5 px-7 uppercase font-semibold transition-all duration-300 hover:bg-champagne-gold hover:text-primary-black">
            View Details
          </span>
        </div>
      </Link>

      {/* Product Metadata */}
      <div className="flex flex-col flex-grow items-center">
        <h3 className="font-serif text-lg tracking-[0.15em] text-ivory mb-2 uppercase font-light">
          <Link href={`/products/${slug}`} className="hover:text-champagne-gold transition-colors duration-300">
            {name}
          </Link>
        </h3>
        <p className="font-sans text-[0.65rem] tracking-[0.15em] text-champagne-gold/80 mb-3 uppercase font-medium">
          {subtitle}
        </p>
        {notes.length > 0 && (
          <p className="font-sans text-[0.7rem] text-muted-gray mb-4 max-w-[240px] truncate transition-colors duration-300 group-hover:text-ivory/60">
            {notes.join(" • ")}
          </p>
        )}
        <p className="font-serif text-sm tracking-[0.05em] text-ivory mb-6 font-light">
          {price}
        </p>
      </div>

      {/* Marketplace Action Links */}
      <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-muted-gray/10 z-10">
        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.65rem] tracking-[0.15em] text-ivory/80 hover:text-primary-black hover:bg-ivory border border-ivory/20 hover:border-ivory py-3 transition-all duration-300 uppercase font-medium hover:scale-102"
          aria-label={`Shop ${name} on Shopee`}
        >
          Shopee
        </a>
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.65rem] tracking-[0.15em] text-primary-black bg-champagne-gold hover:bg-transparent hover:text-champagne-gold border border-champagne-gold py-3 transition-all duration-300 uppercase font-semibold hover:scale-102"
          aria-label={`Shop ${name} on TikTok Shop`}
        >
          TikTok
        </a>
      </div>
    </div>
  );
}
