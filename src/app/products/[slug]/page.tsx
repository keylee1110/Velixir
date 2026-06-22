import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { products as fallbackProducts } from "@/data/products";
import { client } from "@/sanity/lib/client";
import { productBySlugQuery, allProductsQuery, siteSettingsQuery } from "@/sanity/lib/queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const productsList = await client.fetch(allProductsQuery);
    if (productsList && productsList.length > 0) {
      return productsList.map((p: any) => ({
        slug: typeof p.slug === "string" ? p.slug : p.slug?.current || "",
      }));
    }
  } catch (error) {
    console.warn("Failed to generate static params from Sanity, using fallback:", error);
  }

  return fallbackProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  let product: any = null;

  try {
    product = await client.fetch(productBySlugQuery, { slug });
  } catch (error) {
    console.warn("Metadata fetch error, checking fallback:", error);
  }

  if (!product) {
    product = fallbackProducts.find((p) => p.slug === slug);
  }

  if (!product) {
    return {
      title: "Product Not Found | Velixir Parfums",
    };
  }

  return {
    title: `${product.name} | Velixir Parfums`,
    description: product.description || `Discover ${product.name}, a Velixir Eau De Parfum inspired by mythology and crafted for modern icons.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  let product: any = null;
  let allProducts: any[] = [];
  let settingsData: any = null;

  try {
    const [prod, prods, settings] = await Promise.all([
      client.fetch(productBySlugQuery, { slug }),
      client.fetch(allProductsQuery),
      client.fetch(siteSettingsQuery),
    ]);
    product = prod;
    allProducts = prods || [];
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch product page data, checking fallback:", error);
  }

  // Fallback to static products if not found in Sanity
  if (!product) {
    product = fallbackProducts.find((p) => p.slug === slug);
  }

  if (!product) {
    notFound();
  }

  const currentSlug = typeof product.slug === "string" ? product.slug : product.slug?.current || "";

  // Get other products to show as recommendations
  let otherProducts = allProducts.filter((p) => {
    const pSlug = typeof p.slug === "string" ? p.slug : p.slug?.current || "";
    return pSlug !== currentSlug;
  }).slice(0, 3);

  if (otherProducts.length === 0) {
    otherProducts = fallbackProducts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  return (
    <>
      <AnnouncementBar />
      <Header forceSolid={true} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-32 pb-24 bg-primary-black overflow-hidden">
        {/* Main Product Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-32">
          {/* Breadcrumbs */}
          <div className="flex gap-2 items-center text-[0.6rem] tracking-[0.2em] font-sans text-muted-gray uppercase mb-8">
            <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fragrances" className="hover:text-ivory transition-colors">Fragrances</Link>
            <span>/</span>
            <span className="text-champagne-gold">{product.name}</span>
          </div>

          <ScrollReveal direction="up" distance={30}>
            <ProductDetail product={product} />
          </ScrollReveal>
        </section>

        {/* Similar / Other Products Grid */}
        <section className="px-6 md:px-12 border-t border-muted-gray/10 pt-24 max-w-7xl mx-auto">
          <ScrollReveal direction="up" distance={30} className="text-center mb-16">
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold block">
              Discover More
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.1em] text-ivory uppercase">
              OTHERS IN THE COLLECTION
            </h2>
          </ScrollReveal>
          <ProductGrid products={otherProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}
