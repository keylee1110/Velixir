import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { client } from "@/sanity/lib/client";
import { founderStoryQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "Our Story | Velixir Parfums",
  description: "Explore the mythology, craftsmanship, and legacy of Velixir Parfums.",
};

// Custom PortableText style rendering
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed mb-6">
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-2xl md:text-4xl font-light tracking-[0.05em] text-ivory mb-6 uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-lg md:text-xl font-light tracking-[0.05em] text-ivory mb-4 uppercase">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l border-champagne-gold pl-6 italic text-champagne-gold/90 my-8 font-serif text-base tracking-wide leading-relaxed">
        {children}
      </blockquote>
    ),
  },
};

export default async function StoryPage() {
  let storyData: any = null;
  let settingsData: any = null;

  try {
    const [story, settings] = await Promise.all([
      client.fetch(founderStoryQuery),
      client.fetch(siteSettingsQuery),
    ]);
    storyData = story;
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch founder story, using static fallback:", error);
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  // Image helpers
  const getStoryImage = (index: number, fallback: string) => {
    if (storyData?.images && storyData.images[index]) {
      try {
        return urlFor(storyData.images[index]).url();
      } catch (e) {
        console.warn("Failed to parse story image at index " + index, e);
      }
    }
    return fallback;
  };

  return (
    <>
      <AnnouncementBar />
      <Header transparent={false} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-24 bg-primary-black overflow-hidden">
        {/* Intro Story Hero */}
        <section className="py-20 md:py-28 px-6 md:px-12 text-center border-b border-muted-gray/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.03)_0%,rgba(5,5,5,1)_80%)] pointer-events-none" />
          <ScrollReveal direction="up" distance={30} className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-4 uppercase font-semibold block">
              {storyData ? "The Legend" : "The Legend"}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              {storyData?.title || "MYTHS REBORN"}
            </h1>
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed max-w-xl">
              {storyData?.subtitle || "Velixir was born from a desire to reconcile the sacred grandeur of ancient mythology with the sharp elegance of modern luxury. We craft scents not as mere accessories, but as rituals of identity and aura."}
            </p>
          </ScrollReveal>
        </section>

        {/* Story Section 1: Content rendering */}
        {storyData && storyData.content ? (
          <section className="py-20 md:py-28 px-6 md:px-12 border-b border-muted-gray/10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal direction="up" distance={35}>
                <div className="prose prose-invert max-w-none">
                  <PortableText value={storyData.content} components={portableTextComponents} />
                </div>
              </ScrollReveal>

              {storyData.quote && (
                <ScrollReveal direction="up" distance={30} className="text-center my-16 bg-[#090909] border border-muted-gray/10 p-8 md:p-12 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-black px-4 font-serif text-champagne-gold text-2xl select-none">
                    &ldquo;
                  </div>
                  <p className="font-serif text-lg md:text-xl italic text-champagne-gold/90 font-light tracking-[0.05em] leading-relaxed max-w-2xl mx-auto">
                    {storyData.quote}
                  </p>
                </ScrollReveal>
              )}

              {/* Show images gallery if present */}
              {storyData.images && storyData.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {storyData.images.map((img: any, idx: number) => {
                    let imgUrl = "";
                    try {
                      imgUrl = urlFor(img).url();
                    } catch (e) {
                      return null;
                    }
                    return (
                      <ScrollReveal key={idx} direction="up" delay={idx * 100} distance={30} className="relative aspect-[4/3] bg-soft-black border border-muted-gray/15">
                        <Image
                          src={imgUrl}
                          alt={`Editorial story gallery ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-70"
                        />
                        <div className="absolute inset-0 border border-champagne-gold/20 m-3 pointer-events-none" />
                      </ScrollReveal>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        ) : (
          /* Fallback static layout if no Sanity content is found */
          <>
            {/* Story Section 1: The Inspiration */}
            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-muted-gray/10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Left: Text */}
                <ScrollReveal direction="right" distance={45} className="flex flex-col items-start">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold">
                    Inception
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl font-light tracking-[0.05em] text-ivory mb-6 uppercase">
                    THE MYTHOLOGICAL INSPIRATION
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed mb-6">
                    Every civilization has told tales of power, beauty, and freedom that touched the infinite. These attributes exist as raw archetypes in our collective memory.
                  </p>
                  <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed">
                    At Velixir, we translate these archetypes into sensory experiences. The bold strength of Russian Bear, the Parisian sophistication of French Roaster, the soaring freedom of American Eagle, the majestic heritage of Dutch Lion, and the ethereal grace of Swan. We invite you to wear these legends, embodying their spirit in your daily life.
                  </p>
                </ScrollReveal>
                {/* Right: Mock Editorial Image */}
                <ScrollReveal direction="left" delay={150} distance={45} className="relative aspect-[4/3] bg-soft-black border border-muted-gray/15">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-gray/5 font-serif text-3xl uppercase tracking-widest select-none">
                    Ancient Ruins
                  </div>
                  <Image
                    src="/images/story.jpg"
                    alt="Ancient Greek inspiration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 border border-champagne-gold/20 m-3 pointer-events-none" />
                </ScrollReveal>
              </div>
            </section>

            {/* Story Section 2: Craftsmanship */}
            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-muted-gray/10 bg-[#090909]">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Left: Mock Editorial Image (reversed layout) */}
                <ScrollReveal direction="left" distance={45} className="relative aspect-[4/3] bg-primary-black border border-muted-gray/15 md:order-2">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-gray/5 font-serif text-3xl uppercase tracking-widest select-none">
                    Fragrance Formulation
                  </div>
                  <Image
                    src="/images/campaign.jpg"
                    alt="Luxury perfume crafting"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 border border-champagne-gold/20 m-3 pointer-events-none" />
                </ScrollReveal>
                {/* Right: Text */}
                <ScrollReveal direction="right" delay={150} distance={45} className="flex flex-col items-start md:order-1">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold">
                    Scent Craft
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl font-light tracking-[0.05em] text-ivory mb-6 uppercase">
                    NOBLE RAW MATERIALS
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed mb-6">
                    A fragrance is only as rich as the ingredients from which it is derived. We source rare ingredients from across the globe: Atlas cedarwood, Royal Turkish rose, crisp Italian bergamot, and rich Tuscan orris.
                  </p>
                  <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed">
                    Our master perfumers refine these raw components through precise extraction and maturation. Each flacon is hand-finished and placed within a bespoke presentation case, assuring that the ritual of Velixir is premium from the first touch to the final spray.
                  </p>
                </ScrollReveal>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
