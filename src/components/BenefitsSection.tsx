import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Authentic Velixir",
      description: "100% genuine formulation direct from the fragrance house, crafted with noble raw ingredients.",
      icon: (
        <svg className="w-8 h-8 text-champagne-gold stroke-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Certificate/Seal Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Marketplace Storefronts",
      description: "Secure, reliable, and convenient fulfillment via official Shopee and TikTok Shop channels.",
      icon: (
        <svg className="w-8 h-8 text-champagne-gold stroke-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Shopping Storefront Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Gift-Ready Box",
      description: "Each flacon arrives packaged in our signature luxury presentation box, perfect for gifting.",
      icon: (
        <svg className="w-8 h-8 text-champagne-gold stroke-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Gift Box Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h4M12 8H8m-5.074 4H21.074c.4 0 .741.28.818.673l1.5 7.5a.823.823 0 01-.818.994H1.426a.823.823 0 01-.818-.994l1.5-7.5c.077-.393.418-.673.818-.673z" />
        </svg>
      ),
    },
    {
      title: "Find Your Aura",
      description: "Explore our collection and discover the mythological scent profile that reflects your unique icon status.",
      icon: (
        <svg className="w-8 h-8 text-champagne-gold stroke-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Sparkles / Compass Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-primary-black px-6 md:px-12 border-b border-muted-gray/10 text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {benefits.map((benefit, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 150}
              direction="up"
              distance={25}
              className="flex flex-col items-center p-4"
            >
              <div className="mb-6 flex justify-center items-center w-16 h-16 rounded-full border border-champagne-gold/10 bg-soft-black">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-base tracking-[0.15em] text-ivory mb-3 uppercase font-medium">
                {benefit.title}
              </h3>
              <p className="font-sans text-xs text-muted-gray tracking-wide leading-relaxed max-w-[240px]">
                {benefit.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
