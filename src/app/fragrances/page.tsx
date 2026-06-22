import React from "react";
import { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import FragranceCollection from "@/components/FragranceCollection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { products as fallbackProducts } from "@/data/products";
import { client } from "@/sanity/lib/client";
import { allProductsQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Fragrances | Velixir Parfums",
  description: "Explore Velixir Eau De Parfum collections inspired by mythology and modern elegance.",
};

export default async function FragrancesPage() {
  let productsList = [];
  let settingsData: any = null;

  try {
    const [prods, settings] = await Promise.all([
      client.fetch(allProductsQuery),
      client.fetch(siteSettingsQuery)
    ]);
    productsList = prods || [];
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch products from Sanity, using fallback:", error);
  }

  if (productsList.length === 0) {
    productsList = fallbackProducts;
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  return (
    <>
      <AnnouncementBar />
      <Header transparent={false} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-24 overflow-hidden">
        {/* Page Hero/Header */}
        <section className="py-16 md:py-24 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 text-center relative">
          <ScrollReveal direction="up" distance={30} className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Breadcrumb style path */}
            <div className="flex gap-2 items-center text-[0.6rem] tracking-[0.2em] font-sans text-muted-gray uppercase mb-6">
              <a href="/" className="hover:text-ivory transition-colors">Home</a>
              <span>/</span>
              <span className="text-champagne-gold">Fragrances</span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              FRAGRANCES
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed max-w-xl">
              Discover Velixir fragrances inspired by legends, crafted for modern icons. Each scent is a narrative of strength, grace, flight, or mystery.
            </p>
          </ScrollReveal>
        </section>

        {/* Collection Grid */}
        <section className="py-20 bg-primary-black px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <FragranceCollection products={productsList} />
          </div>
        </section>

        {/* Short Brand Quote */}
        <section className="py-16 bg-[#090909] px-6 md:px-12 border-t border-b border-muted-gray/10 text-center">
          <ScrollReveal direction="up" distance={25} className="max-w-2xl mx-auto">
            <p className="font-serif text-lg md:text-xl italic text-champagne-gold/90 font-light tracking-[0.05em] leading-relaxed">
              &ldquo;Myths are not stories that never happened, but stories that happen outline and again in the human soul.&rdquo;
            </p>
            <p className="font-sans text-[0.65rem] tracking-[0.2em] text-muted-gray uppercase mt-4">
              — VELIXIR FRAGRANCE PHILOSOPHY
            </p>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
