import React from "react";
import Image from "next/image";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

interface EditorialSectionProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  imageRight?: boolean;
  fullWidth?: boolean;
}

export default function EditorialSection({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  imageRight = false,
  fullWidth = false,
}: EditorialSectionProps) {
  if (fullWidth) {
    return (
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-primary-black">
        {/* Background Image */}
        <div className="absolute inset-0 bg-primary-black">
          <div className="absolute inset-0 flex items-center justify-center text-muted-gray/10 font-serif text-[10vw] uppercase select-none tracking-widest pointer-events-none z-0">
            VELIXIR
          </div>
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover opacity-50 z-10"
          />
        </div>
        {/* Overlay Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-primary-black/60 z-20" />

        {/* Content Overlay */}
        <ScrollReveal
          direction="up"
          distance={40}
          className="relative z-30 text-center px-6 max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-[0.1em] text-ivory mb-6 uppercase leading-tight">
            {title}
          </h2>
          <p className="font-sans text-sm md:text-base text-ivory/80 tracking-widest font-light mb-8 max-w-xl leading-relaxed">
            {description}
          </p>
          {ctaText && ctaLink && (
            <Button href={ctaLink} variant="outline" className="border-ivory/40 hover:border-ivory">
              {ctaText}
            </Button>
          )}
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image Column */}
        <ScrollReveal
          direction={imageRight ? "left" : "right"}
          distance={40}
          className={`relative w-full aspect-[4/5] bg-soft-black overflow-hidden ${imageRight ? "md:order-2" : ""}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-muted-gray/5 font-serif text-4xl select-none uppercase tracking-widest">
            Brand Story
          </div>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 transition-transform duration-700 hover:scale-102"
          />
          <div className="absolute inset-0 border border-champagne-gold/20 m-4 pointer-events-none" />
        </ScrollReveal>

        {/* Text Column */}
        <ScrollReveal
          direction={imageRight ? "right" : "left"}
          delay={150}
          distance={40}
          className={`flex flex-col items-start ${imageRight ? "md:order-1" : ""}`}
        >
          <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-4 uppercase font-semibold">
            The Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] text-ivory mb-8 leading-tight uppercase">
            {title}
          </h2>
          <p className="font-sans text-sm md:text-base text-ivory/70 tracking-widest font-light leading-relaxed mb-10 max-w-xl">
            {description}
          </p>
          {ctaText && ctaLink && (
            <Button href={ctaLink} variant="outline" className="border-ivory/20 hover:border-ivory">
              {ctaText}
            </Button>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
