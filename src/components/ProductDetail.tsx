"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "./Button";

interface ProductDetailProps {
  product: any; // Allow either static Product or Sanity fetched product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("notes");

  const name = product.name || "";
  const subtitle = product.subtitle || "";
  const price = product.price || product.priceText || "";
  const description = product.description || "";
  const mood = product.mood || "";
  const shopeeUrl = product.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = product.tiktokUrl || "https://www.tiktok.com/";
  
  const topNotes = product.topNotes || [];
  const heartNotes = product.heartNotes || [];
  const baseNotes = product.baseNotes || [];

  // Parse sizes (Sanity array of strings vs static string delimited by slash)
  const sizes: string[] = Array.isArray(product.sizes)
    ? product.sizes
    : (product.size ? product.size.split("/").map((s: string) => s.trim()) : ["15ml", "50ml", "100ml"]);

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "50ml");

  // Resolve main image
  let mainImgUrl = "/images/product-placeholder.png";
  if (typeof product.image === "string" && product.image) {
    mainImgUrl = product.image;
  } else if (product.mainImage) {
    try {
      mainImgUrl = urlFor(product.mainImage).url();
    } catch (e) {
      console.warn("Failed to generate main image url:", e);
    }
  }

  // Resolve gallery
  let galleryUrls: string[] = [];
  if (Array.isArray(product.gallery)) {
    galleryUrls = product.gallery.map((img: any) => {
      if (typeof img === "string") return img;
      try {
        return urlFor(img).url();
      } catch (e) {
        return "/images/product-placeholder.png";
      }
    });
  }

  if (galleryUrls.length === 0) {
    galleryUrls = [mainImgUrl];
  }

  const toggleAccordion = (section: string) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  const nameParts = name.split(" ");
  const lastWord = nameParts.length > 0 ? nameParts[nameParts.length - 1] : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* Left Column: Image Gallery */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="relative w-full aspect-square bg-[#0d0d0d] border border-muted-gray/10 overflow-hidden">
          {/* Large display mockup placeholder background text */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-gray/5 font-serif text-[12vw] select-none uppercase tracking-widest pointer-events-none">
            {lastWord}
          </div>
          {galleryUrls[activeImageIndex] && (
            <Image
              src={galleryUrls[activeImageIndex]}
              alt={name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain p-8 z-10 transition-all duration-500"
            />
          )}
        </div>

        {/* Gallery Thumbnails */}
        {galleryUrls.length > 1 && (
          <div className="flex gap-4">
            {galleryUrls.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-20 bg-[#0d0d0d] border transition-all duration-300 p-2 cursor-pointer ${
                  activeImageIndex === idx
                    ? "border-champagne-gold shadow-[0_0_10px_rgba(201,164,92,0.3)]"
                    : "border-muted-gray/10 hover:border-ivory/30"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Perfume details */}
      <div className="lg:col-span-5 flex flex-col">
        {/* Category Label */}
        {subtitle && (
          <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold">
            {subtitle}
          </span>
        )}

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] text-ivory mb-4 uppercase">
          {name}
        </h1>

        {/* Price */}
        {price && (
          <p className="font-serif text-xl tracking-[0.05em] text-ivory mb-8 border-b border-muted-gray/10 pb-6">
            {price}
          </p>
        )}

        {/* Poetic description */}
        {description && (
          <p className="font-sans text-xs md:text-sm text-ivory/80 tracking-widest font-light leading-relaxed mb-8">
            {description}
          </p>
        )}

        {/* Size Selection */}
        {sizes.length > 0 && (
          <div className="mb-8">
            <span className="font-sans text-[0.65rem] tracking-[0.2em] text-muted-gray uppercase block mb-3">
              Select Size
            </span>
            <div className="flex gap-4">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`font-sans text-xs tracking-widest py-3 px-6 border transition-all duration-300 uppercase cursor-pointer ${
                    selectedSize === sz
                      ? "border-champagne-gold text-champagne-gold bg-champagne-gold/5"
                      : "border-muted-gray/20 text-muted-gray hover:border-ivory hover:text-ivory"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Marketplace Direct Buy Options */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-sans text-xs uppercase tracking-[0.2em] text-ivory border border-ivory hover:bg-ivory hover:text-primary-black py-4 transition-all duration-300 font-medium"
            aria-label={`Shop ${name} on Shopee Store`}
          >
            Shop on Shopee
          </a>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-sans text-xs uppercase tracking-[0.2em] text-primary-black bg-champagne-gold border border-champagne-gold hover:bg-transparent hover:text-champagne-gold py-4 transition-all duration-300 font-semibold"
            aria-label={`Shop ${name} on TikTok Shop Channel`}
          >
            Shop on TikTok
          </a>
        </div>

        {/* Collapsible Accordion Sections */}
        <div className="border-t border-muted-gray/10">
          {/* Section 1: Fragrance Pyramid / Notes */}
          {(topNotes.length > 0 || heartNotes.length > 0 || baseNotes.length > 0) && (
            <div className="border-b border-muted-gray/10">
              <button
                onClick={() => toggleAccordion("notes")}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                aria-expanded={activeAccordion === "notes"}
              >
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ivory">
                  Fragrance Notes
                </span>
                <span className="text-champagne-gold text-lg">
                  {activeAccordion === "notes" ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeAccordion === "notes" ? "max-h-[300px] pb-6" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {topNotes.length > 0 && (
                    <div>
                      <span className="font-sans text-[0.55rem] tracking-[0.25em] text-champagne-gold uppercase block mb-2 font-medium">
                        Top Notes
                      </span>
                      <ul className="text-[0.7rem] text-muted-gray tracking-wider space-y-1">
                        {topNotes.map((n: string) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {heartNotes.length > 0 && (
                    <div>
                      <span className="font-sans text-[0.55rem] tracking-[0.25em] text-champagne-gold uppercase block mb-2 font-medium">
                        Heart Notes
                      </span>
                      <ul className="text-[0.7rem] text-muted-gray tracking-wider space-y-1">
                        {heartNotes.map((n: string) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {baseNotes.length > 0 && (
                    <div>
                      <span className="font-sans text-[0.55rem] tracking-[0.25em] text-champagne-gold uppercase block mb-2 font-medium">
                        Base Notes
                      </span>
                      <ul className="text-[0.7rem] text-muted-gray tracking-wider space-y-1">
                        {baseNotes.map((n: string) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Mood & Occasion */}
          {mood && (
            <div className="border-b border-muted-gray/10">
              <button
                onClick={() => toggleAccordion("mood")}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                aria-expanded={activeAccordion === "mood"}
              >
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ivory">
                  Mood & Impression
                </span>
                <span className="text-champagne-gold text-lg">
                  {activeAccordion === "mood" ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeAccordion === "mood" ? "max-h-[150px] pb-6" : "max-h-0"
                }`}
              >
                <p className="font-sans text-xs text-muted-gray tracking-wider leading-relaxed pt-2">
                  This fragrance embodies a <span className="text-ivory font-medium">{mood}</span> profile, carefully formulated to respond to body chemistry and project a long-lasting magnetic aura.
                </p>
              </div>
            </div>
          )}

          {/* Section 3: Ritual / How to Apply */}
          <div className="border-b border-muted-gray/10">
            <button
              onClick={() => toggleAccordion("ritual")}
              className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer"
              aria-expanded={activeAccordion === "ritual"}
            >
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ivory">
                Application Ritual
              </span>
              <span className="text-champagne-gold text-lg">
                {activeAccordion === "ritual" ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeAccordion === "ritual" ? "max-h-[150px] pb-6" : "max-h-0"
              }`}
            >
              <p className="font-sans text-xs text-muted-gray tracking-wider leading-relaxed pt-2">
                Mist onto pulse points—wrists, inner elbows, neck, and behind ears—to let the warmth of your skin naturally diffuse the notes. Avoid rubbing, as this can break down the complex top notes of the fragrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
