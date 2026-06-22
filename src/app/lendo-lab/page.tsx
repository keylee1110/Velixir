import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { client } from "@/sanity/lib/client";
import { allArticlesQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Lendo-Lab | Velixir Parfums",
  description: "Explore the inspiration and stories behind Velixir fragrance formulas.",
};

const fallbackArticles = [
  {
    title: "The Architecture of Russian Bear",
    slug: "architecture-of-russian-bear",
    excerpt: "An in-depth look at how we combined Siberian pine needle with rich black leather tar to create a scent that commands presence.",
    coverImage: "/images/story.jpg",
    publishedAt: "2026-06-15T00:00:00Z",
  },
  {
    title: "Parisian Dawn: Scenting French Roaster",
    slug: "parisian-dawn-french-roaster",
    excerpt: "Exploring the gourmand complexity of freshly roasted espresso beans and dark cocoa in the early hours of a French morning.",
    coverImage: "/images/campaign.jpg",
    publishedAt: "2026-05-20T00:00:00Z",
  },
];

export default async function LendoLabPage() {
  let articles = [];
  let settingsData: any = null;

  try {
    const [arts, settings] = await Promise.all([
      client.fetch(allArticlesQuery),
      client.fetch(siteSettingsQuery),
    ]);
    articles = arts || [];
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch Lendo-Lab articles, using fallback:", error);
  }

  if (articles.length === 0) {
    articles = fallbackArticles;
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  return (
    <>
      <AnnouncementBar />
      <Header transparent={false} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-24 bg-primary-black overflow-hidden">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 text-center relative">
          <ScrollReveal direction="up" distance={30} className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Breadcrumbs */}
            <div className="flex gap-2 items-center text-[0.6rem] tracking-[0.2em] font-sans text-muted-gray uppercase mb-6">
              <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
              <span>/</span>
              <span className="text-champagne-gold">Lendo-Lab</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              LENDO-LAB
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed max-w-xl">
              Delve into the stories, design philosophies, and artistic inspiration behind our fragrance formulas. Reimagining legend through scent.
            </p>
          </ScrollReveal>
        </section>

        {/* Articles Grid Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {articles.map((article: any, idx: number) => {
              const slug = typeof article.slug === "string" ? article.slug : article.slug?.current || "";
              
              // Handle image
              let coverUrl = "/images/campaign.jpg";
              if (typeof article.coverImage === "string") {
                coverUrl = article.coverImage;
              } else if (article.coverImage) {
                try {
                  coverUrl = urlFor(article.coverImage).url();
                } catch (e) {
                  console.warn("Failed to parse cover image for " + article.title, e);
                }
              }

              // Parse date
              const pubDate = article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "";

              return (
                <ScrollReveal
                  key={slug}
                  delay={idx * 100}
                  direction="up"
                  distance={30}
                  className="group flex flex-col bg-[#0b0b0b] border border-muted-gray/10 hover:border-champagne-gold/30 hover:shadow-[0_15px_30px_rgba(201,164,92,0.05)] transition-all duration-500 ease-out"
                >
                  <Link href={`/lendo-lab/${slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-[#070707]">
                    <Image
                      src={coverUrl}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                    />
                    {/* Golden accent line on hover */}
                    <div className="absolute inset-0 border border-champagne-gold/0 group-hover:border-champagne-gold/20 m-3 transition-all duration-500 pointer-events-none z-20" />
                  </Link>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-sans text-[0.55rem] tracking-[0.25em] text-champagne-gold uppercase block mb-3 font-semibold">
                      {pubDate || "Journal Entry"}
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-light tracking-[0.05em] text-ivory mb-4 group-hover:text-champagne-gold transition-colors duration-300 uppercase leading-snug">
                      <Link href={`/lendo-lab/${slug}`}>{article.title}</Link>
                    </h2>
                    <p className="font-sans text-xs text-muted-gray tracking-wider font-light leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/lendo-lab/${slug}`}
                        className="font-sans text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-ivory hover:text-champagne-gold transition-colors inline-flex items-center gap-2"
                      >
                        Read Inspiration
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
