import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export default async function Footer() {
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch (error) {
    console.warn("Failed to fetch site settings for Footer, using fallback.", error);
  }

  const shopee = settings?.shopeeUrl || "https://shopee.vn/";
  const tiktok = settings?.tiktokUrl || "https://www.tiktok.com/";
  const instagram = settings?.instagramUrl || "https://instagram.com";
  const facebook = settings?.facebookUrl || "https://facebook.com";
  const email = settings?.email || "contact@velixir.vn";
  const phone = settings?.phone || "+84 (0) 909 123 456";
  const address = settings?.address || "District 1, Ho Chi Minh City, Vietnam";
  const footerText = settings?.footerText || `© ${new Date().getFullYear()} VELIXIR PARFUMS. ALL RIGHTS RESERVED.`;

  const brandLinks = [
    { name: "Our Story", href: "/story" },
    { name: "Fragrances", href: "/fragrances" },
    { name: "Catalogue", href: "/fragrances" },
    { name: "Contact", href: "/contact" },
  ];

  const shopLinks = [
    { name: "Shopee Storefront", href: shopee },
    { name: "TikTok Channel", href: tiktok },
  ];

  const socialLinks = [
    { name: "Instagram", href: instagram },
    { name: "TikTok", href: tiktok },
    { name: "Facebook", href: facebook },
  ];

  return (
    <footer className="bg-primary-black text-ivory pt-20 pb-12 px-6 md:px-12 border-t border-muted-gray/10">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Signup (Visual-only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-muted-gray/10 items-center">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.1em] text-ivory mb-3 uppercase font-light">
              Join the Velixir Circle
            </h3>
            <p className="font-sans text-xs text-muted-gray tracking-wider leading-relaxed max-w-md">
              Subscribe to receive exclusive collection announcements, mythological stories, and private fragrance pre-orders.
            </p>
          </div>
          <div className="flex w-full max-w-md border-b border-ivory/30 pb-2 focus-within:border-champagne-gold transition-colors duration-300">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent border-none text-xs tracking-[0.2em] font-sans text-ivory w-full focus:outline-none placeholder-muted-gray/50 uppercase"
              aria-label="Newsletter email input"
            />
            <button
              className="font-sans text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-champagne-gold hover:text-ivory transition-colors duration-300 ml-4 focus:outline-none"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="group block mb-6">
              <span className="font-serif text-2xl tracking-[0.2em] text-ivory group-hover:text-champagne-gold transition-colors duration-300">
                VELIXIR
              </span>
              <span className="block text-[0.45rem] tracking-[0.5em] text-champagne-gold font-sans uppercase">
                PARFUMS
              </span>
            </Link>
            <p className="font-sans text-xs text-muted-gray tracking-wider leading-relaxed max-w-[200px]">
              Myths reborn through scent. Crafted for icons who dare to define their own legacy.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-champagne-gold font-semibold mb-6">
              Brand
            </h4>
            <ul className="space-y-4">
              {brandLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-xs text-muted-gray hover:text-ivory tracking-wider transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Storefront Links */}
          <div>
            <h4 className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-champagne-gold font-semibold mb-6">
              Shop
            </h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-muted-gray hover:text-ivory tracking-wider transition-colors duration-300"
                    aria-label={`Visit Velixir ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div>
            <h4 className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-champagne-gold font-semibold mb-6">
              Contact
            </h4>
            <address className="not-italic font-sans text-xs text-muted-gray tracking-wider space-y-4 mb-6 leading-relaxed">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Address: {address}</p>
            </address>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-muted-gray hover:text-champagne-gold transition-colors duration-300"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom area */}
        <div className="border-t border-muted-gray/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[0.65rem] tracking-[0.1em] text-muted-gray/50">
            {footerText}
          </p>
          <div className="flex space-x-6 text-[0.65rem] tracking-[0.1em] text-muted-gray/50">
            <Link href="/story" className="hover:text-muted-gray transition-colors duration-300">
              PRIVACY POLICY
            </Link>
            <Link href="/contact" className="hover:text-muted-gray transition-colors duration-300">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
