"use client";

import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

interface PolicyTabsProps {
  policies: Array<{
    title: string;
    slug: string;
    content: any;
    type: "privacy" | "shipping" | "returns" | "general" | string;
  }>;
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed mb-6">
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-lg md:text-2xl font-light tracking-[0.05em] text-ivory mt-10 mb-4 uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-base md:text-lg font-light tracking-[0.05em] text-ivory mt-8 mb-3 uppercase">
        {children}
      </h3>
    ),
  },
};

export default function PolicyTabs({ policies }: PolicyTabsProps) {
  // Sort policies so they always appear in a predictable order
  const order = ["privacy", "shipping", "returns", "general"];
  const sortedPolicies = [...policies].sort((a, b) => {
    return order.indexOf(a.type) - order.indexOf(b.type);
  });

  const [activeTab, setActiveTab] = useState(sortedPolicies[0]?.type || "privacy");
  const activePolicy = sortedPolicies.find((p) => p.type === activeTab);

  const getTabLabel = (type: string) => {
    switch (type) {
      case "privacy":
        return "Privacy Policy";
      case "shipping":
        return "Shipping Policy";
      case "returns":
        return "Returns & Exchanges";
      case "general":
        return "Terms of Service";
      default:
        return "Information";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* Tabs navigation */}
      <div className="lg:col-span-4 flex flex-col gap-2 border-l border-muted-gray/10 pl-6 lg:sticky lg:top-36">
        <span className="font-sans text-[0.55rem] tracking-[0.3em] text-champagne-gold mb-4 uppercase font-semibold block">
          Document Navigation
        </span>
        {sortedPolicies.map((p) => (
          <button
            key={p.type}
            onClick={() => setActiveTab(p.type)}
            className={`text-left font-sans text-xs uppercase tracking-[0.2em] py-3.5 transition-all duration-350 cursor-pointer ${
              activeTab === p.type
                ? "text-champagne-gold font-semibold translate-x-2"
                : "text-muted-gray hover:text-ivory hover:translate-x-1"
            }`}
          >
            {getTabLabel(p.type)}
          </button>
        ))}
      </div>

      {/* Active content panel */}
      <div className="lg:col-span-8 bg-[#090909] border border-muted-gray/10 p-8 md:p-12 min-h-[400px]">
        {activePolicy ? (
          <div>
            <span className="font-sans text-[0.55rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold block">
              Atelier Guideline
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.05em] text-ivory mb-8 uppercase">
              {activePolicy.title}
            </h2>
            <div className="prose prose-invert max-w-none">
              {Array.isArray(activePolicy.content) ? (
                <PortableText value={activePolicy.content} components={portableTextComponents} />
              ) : (
                /* Fallback text rendering if plain text string */
                <p className="font-sans text-xs md:text-sm text-ivory/70 tracking-widest font-light leading-relaxed whitespace-pre-line">
                  {activePolicy.content}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-muted-gray text-sm tracking-wider font-light">
            Không tìm thấy thông tin chính sách này.
          </div>
        )}
      </div>
    </div>
  );
}
