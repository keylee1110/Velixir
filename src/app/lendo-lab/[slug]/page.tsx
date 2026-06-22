import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { articleBySlugQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Fallback items in case Sanity has no data
const fallbackArticles: Record<string, any> = {
  "architecture-of-russian-bear": {
    title: "The Architecture of Russian Bear",
    excerpt: "An in-depth look at how we combined Siberian pine needle with rich black leather tar.",
    coverImage: "/images/story.jpg",
    publishedAt: "2026-06-15T00:00:00Z",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Inspired by the untamed Siberian wilderness, Russian Bear is a bold, powerful blend of dewy pine needle, smoky birch tar, and rich black leather. Made for the modern man who commands presence and leaves a trail of courage." }],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Olfactory Formula" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "We began by extracting the essence of dewy pine needles from Siberian pines. We then introduced a deep, smoky birch tar note reminiscent of Russian birch wood, balanced by the animalic complexity of rich black leather. The result is magnetic, deep, and unapologetically bold." }],
      },
    ],
    relatedProducts: [],
  },
  "parisian-dawn-french-roaster": {
    title: "Parisian Dawn: Scenting French Roaster",
    excerpt: "Exploring the gourmand complexity of freshly roasted espresso beans and dark cocoa.",
    coverImage: "/images/campaign.jpg",
    publishedAt: "2026-05-20T00:00:00Z",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "French Roaster captures the warm, sophisticated atmosphere of a Parisian cafe at dawn. A complex, intoxicating blend of freshly roasted coffee, dark cocoa, and creamy vanilla." }],
      },
    ],
    relatedProducts: [],
  },
};

export async function generateStaticParams() {
  try {
    const articles = await client.fetch(groq`*[_type == "lendoLabArticle" && isPublished == true] { "slug": slug.current }`);
    if (articles && articles.length > 0) {
      return articles.map((a: any) => ({
        slug: a.slug,
      }));
    }
  } catch (error) {
    console.warn("Failed to generate Lendo-Lab static params, using fallbacks:", error);
  }

  return Object.keys(fallbackArticles).map((key) => ({
    slug: key,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  let article: any = null;

  try {
    article = await client.fetch(articleBySlugQuery, { slug });
  } catch (e) {
    console.warn("Metadata error in Lendo-Lab:", e);
  }

  if (!article) {
    article = fallbackArticles[slug];
  }

  if (!article) {
    return {
      title: "Article Not Found | Velixir Parfums",
    };
  }

  return {
    title: `${article.title} | Lendo-Lab`,
    description: article.excerpt || "Explore the design and scent inspiration in Velixir's Lendo-Lab journal.",
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed mb-6">
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.05em] text-ivory mt-10 mb-6 uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-lg md:text-xl font-light tracking-[0.05em] text-ivory mt-8 mb-4 uppercase">
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

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  let article: any = null;
  let settingsData: any = null;

  try {
    const [art, settings] = await Promise.all([
      client.fetch(articleBySlugQuery, { slug }),
      client.fetch(siteSettingsQuery),
    ]);
    article = art;
    settingsData = settings;
  } catch (error) {
    console.warn("Failed to fetch Lendo-Lab details, using fallback:", error);
  }

  if (!article) {
    article = fallbackArticles[slug];
  }

  if (!article) {
    notFound();
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";

  // Image helpers
  let coverUrl = "/images/campaign.jpg";
  if (typeof article.coverImage === "string") {
    coverUrl = article.coverImage;
  } else if (article.coverImage) {
    try {
      coverUrl = urlFor(article.coverImage).url();
    } catch (e) {
      console.warn("Failed to parse cover image url:", e);
    }
  }

  const pubDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <AnnouncementBar />
      <Header forceSolid={true} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-32 pb-24 bg-primary-black overflow-hidden">
        <article className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex gap-2 items-center text-[0.6rem] tracking-[0.2em] font-sans text-muted-gray uppercase mb-8">
            <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
            <span>/</span>
            <Link href="/lendo-lab" className="hover:text-ivory transition-colors">Lendo-Lab</Link>
            <span>/</span>
            <span className="text-champagne-gold truncate max-w-[200px]">{article.title}</span>
          </div>

          <ScrollReveal direction="up" distance={30}>
            {/* Meta */}
            <span className="font-sans text-[0.6rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold block">
              {pubDate || "Journal Entry"}
            </span>
            {/* Title */}
            <h1 className="font-serif text-3xl md:text-5xl font-light tracking-[0.05em] text-ivory mb-8 uppercase leading-tight">
              {article.title}
            </h1>
          </ScrollReveal>

          {/* Large cover image */}
          <ScrollReveal direction="up" delay={150} distance={30} className="relative w-full aspect-[21/9] bg-[#0c0c0c] border border-muted-gray/10 mb-12 overflow-hidden">
            <Image
              src={coverUrl}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 border border-champagne-gold/15 m-3 pointer-events-none" />
          </ScrollReveal>

          {/* Article Rich Content */}
          <ScrollReveal direction="up" delay={250} distance={35} className="prose prose-invert max-w-none border-b border-muted-gray/10 pb-16">
            <PortableText value={article.content} components={portableTextComponents} />
          </ScrollReveal>

          {/* Related Products Section */}
          {article.relatedProducts && article.relatedProducts.length > 0 && (
            <section className="pt-16">
              <ScrollReveal direction="up" distance={30} className="text-center mb-12">
                <span className="font-sans text-[0.55rem] tracking-[0.3em] text-champagne-gold mb-2 uppercase font-semibold block">
                  Scent Profile
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.1em] text-ivory uppercase">
                  RELATED FRAGRANCES
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {article.relatedProducts.map((prod: any) => (
                  <ProductCard key={prod.slug} product={prod} />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
