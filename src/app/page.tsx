import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import ProductGrid from "@/components/ProductGrid";
import EditorialSection from "@/components/EditorialSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { products as fallbackProducts } from "@/data/products";
import { client } from "@/sanity/lib/client";
import { homepageQuery, allProductsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  let homepageData: any = null;
  let productsData: any[] = [];
  let settingsData: any = null;

  try {
    // Parallel fetching
    const [home, prods, settings] = await Promise.all([
      client.fetch(homepageQuery),
      client.fetch(allProductsQuery),
      client.fetch(siteSettingsQuery),
    ]);
    homepageData = home;
    productsData = prods || [];
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch homepage data from Sanity, using static fallback:", error);
  }

  // 1. Resolve site settings
  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  // 2. Resolve featured products
  let featuredProducts = productsData.filter((p) => p.isFeatured);
  if (featuredProducts.length === 0) {
    featuredProducts = productsData.slice(0, 4);
  }
  // Fallback to static products if sanity is not configured or empty
  if (featuredProducts.length === 0) {
    featuredProducts = fallbackProducts.slice(0, 4);
  }

  // 3. Resolve Editorial Brand Story Section
  const aboutTitle = homepageData?.aboutTitle || "INSPIRED BY LEGENDS, MADE FOR ICONS";
  const aboutText = homepageData?.aboutText || "Velixir transforms ancient myths into modern scent rituals. Each fragrance is created as a symbol — a presence, a memory, an aura. Designed to make your essence unforgettable.";
  let aboutImageUrl = "/images/story.jpg";
  if (homepageData?.aboutImage) {
    try {
      aboutImageUrl = urlFor(homepageData.aboutImage).url();
    } catch (e) {
      console.warn("Failed to resolve aboutImage:", e);
    }
  }

  // 4. Resolve Campaign Section
  const campaignTitle = homepageData?.collectionBannerTitle || "CRAFTED TO PERFECTION";
  const campaignText = homepageData?.collectionBannerSubtitle || "An invitation to discover elegance through scent. An experience that begins the moment the noble notes touch your pulse.";
  let campaignImageUrl = "/images/campaign.jpg";
  if (homepageData?.collectionBannerImage) {
    try {
      campaignImageUrl = urlFor(homepageData.collectionBannerImage).url();
    } catch (e) {
      console.warn("Failed to resolve campaign image:", e);
    }
  }

  return (
    <>
      <AnnouncementBar />
      <Header transparent={true} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />
      
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <HeroVideo 
          heroTitle={homepageData?.heroTitle}
          heroSubtitle={homepageData?.heroSubtitle}
          heroVideo={homepageData?.heroVideo}
          heroPoster={homepageData?.heroPoster}
          heroPrimaryCTA={homepageData?.heroPrimaryCTA}
          heroSecondaryCTA={homepageData?.heroSecondaryCTA || { text: "Shop on Shopee", link: shopeeUrl }}
        />

        {/* Product Collection Grid Section */}
        <section className="py-24 md:py-32 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal direction="up" distance={30} className="text-center mb-16 md:mb-20">
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold block">
                The Collection
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-[0.1em] text-ivory mb-4 uppercase">
                EVERY MYTH HAS ITS SCENT
              </h2>
              <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light max-w-xl mx-auto leading-relaxed">
                Discover fragrances shaped by legends, crafted for modern icons.
              </p>
            </ScrollReveal>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>

        {/* Editorial Brand Story Section */}
        <EditorialSection
          title={aboutTitle}
          description={aboutText}
          image={aboutImageUrl}
          ctaText="Discover Our Story"
          ctaLink="/story"
          imageRight={false}
        />

        {/* Full-width Campaign Image Section */}
        <EditorialSection
          title={campaignTitle}
          description={campaignText}
          image={campaignImageUrl}
          fullWidth={true}
        />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Catalogue and Call-to-action Section */}
        <section className="py-24 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 text-center relative overflow-hidden">
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.05)_0%,rgba(5,5,5,1)_70%)] pointer-events-none" />
          <ScrollReveal direction="up" distance={30} className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-4 uppercase font-semibold block">
              The Catalogue
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              EXPLORE THE VELIXIR CATALOGUE
            </h2>
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed mb-10 max-w-md mx-auto">
              Discover the full fragrance universe of Velixir. Download our editorial booklet or view details online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button href="/fragrances" variant="outline" className="border-ivory/20 hover:border-ivory">
                View Catalogue
              </Button>
              <Button href={shopeeUrl} variant="gold" external className="text-primary-black font-semibold">
                Shop on Shopee
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
