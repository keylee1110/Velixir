"use client";

import React, { useState } from "react";
import Button from "./Button";
import { urlFor } from "@/sanity/lib/image";

interface HeroVideoProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroVideo?: string;
  heroPoster?: any;
  heroPrimaryCTA?: { text?: string; link?: string };
  heroSecondaryCTA?: { text?: string; link?: string };
}

export default function HeroVideo({
  heroTitle = "Redefining Luxury",
  heroSubtitle = "VELIXIR PARFUMS",
  heroVideo = "/video/video%20draft%20hero%20section.mp4",
  heroPoster,
  heroPrimaryCTA = { text: "Discover Collection", link: "/fragrances" },
  heroSecondaryCTA = { text: "Shop on Shopee", link: "https://shopee.vn/" },
}: HeroVideoProps) {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const posterUrl = heroPoster ? urlFor(heroPoster).url() : undefined;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary-black flex items-center justify-center">
      {/* Dark Luxury Aura Fallback Background (always rendered as the base) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.12)_0%,rgba(5,5,5,1)_80%)] z-0" />

      {/* Decorative Golden Stardust Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,5,5,0.4),rgba(5,5,5,0.4))] z-10 pointer-events-none" />

      {/* Hero Video Element */}
      {!videoError && heroVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          poster={posterUrl}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-60"
        >
          <source src={heroVideo} type="video/mp4" onError={handleVideoError} />
        </video>
      )}

      {/* Custom Vignette/Overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-primary-black/80 z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle / Category */}
        <span className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-champagne-gold mb-4 animate-fade-in font-medium block">
          {heroSubtitle}
        </span>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] text-ivory mb-6 leading-tight animate-fade-in [animation-delay:0.2s]">
          {heroTitle}
        </h1>

        {/* Short copy */}
        <p className="font-sans text-sm md:text-base text-ivory/70 tracking-widest font-light mb-12 max-w-lg leading-relaxed animate-fade-in [animation-delay:0.4s]">
          Myths reborn through scent. Crafted for modern icons who dare to leave an unforgettable trace.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md animate-fade-in [animation-delay:0.6s]">
          {heroPrimaryCTA?.link && (
            <Button
              href={heroPrimaryCTA.link}
              variant="outline"
              className="w-full sm:w-auto border-ivory/40 hover:border-ivory"
            >
              {heroPrimaryCTA.text || "Discover Collection"}
            </Button>
          )}
          {heroSecondaryCTA?.link && (
            <Button
              href={heroSecondaryCTA.link}
              variant="gold"
              external
              className="w-full sm:w-auto text-primary-black font-semibold"
            >
              {heroSecondaryCTA.text || "Shop on Shopee"}
            </Button>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="font-sans text-[0.55rem] uppercase tracking-[0.4em] text-ivory/40">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-ivory/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-champagne-gold/60 to-champagne-gold animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
