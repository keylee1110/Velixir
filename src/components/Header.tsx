"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  transparent?: boolean;
  shopeeUrl?: string;
  tiktokUrl?: string;
}

export default function Header({ 
  transparent = false,
  shopeeUrl = "https://shopee.vn/",
  tiktokUrl = "https://www.tiktok.com/"
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header transparency background state
      if (transparent) {
        if (currentScrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true);
      }

      // Smart show/hide navbar behavior
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide
          setIsVisible(false);
        } else {
          // Scrolling up - show
          setIsVisible(true);
        }
      } else {
        // At the top - always show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, transparent]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fragrances", href: "/fragrances" },
    { name: "Story", href: "/story" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = (href: string) => {
    const base = "font-sans text-[0.7rem] uppercase tracking-[0.2em] font-medium link-underline pb-1 transition-colors duration-300 ";
    const isHome = href === "/";
    const isActive = isHome ? pathname === "/" : pathname.startsWith(href);
    return base + (isActive ? "text-champagne-gold after:scale-x-100" : "text-ivory/80 hover:text-ivory");
  };

  const isHeaderTransparent = transparent && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b ${
          isHeaderTransparent
            ? "bg-transparent border-transparent py-7 mt-[37px]"
            : "bg-primary-black/95 border-muted-gray/10 py-4 shadow-lg backdrop-blur-md mt-0"
        }`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-ivory transition-transform duration-300"></span>
            <span className="w-6 h-0.5 bg-ivory transition-transform duration-300"></span>
          </button>

          {/* Left Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Centered Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <Link href="/" className="group block">
              <span className="font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-ivory group-hover:text-champagne-gold transition-colors duration-500">
                VELIXIR
              </span>
              <span className="block text-[0.45rem] tracking-[0.5em] text-champagne-gold/80 font-sans uppercase -mt-1 pl-1 transition-colors duration-500 group-hover:text-ivory">
                PARFUMS
              </span>
            </Link>
          </div>

          {/* Right Navigation & Socials */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block font-sans text-[0.65rem] tracking-[0.2em] text-ivory/80 hover:text-primary-black hover:bg-ivory border border-ivory/20 hover:border-ivory py-2 px-4 transition-all duration-350 uppercase font-medium"
              aria-label="Shop Velixir on Shopee"
            >
              Shopee
            </a>
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block font-sans text-[0.65rem] tracking-[0.2em] text-primary-black bg-champagne-gold border border-champagne-gold py-2 px-4 hover:bg-transparent hover:text-champagne-gold transition-all duration-350 uppercase font-semibold"
              aria-label="Shop Velixir on TikTok Shop"
            >
              TikTok Shop
            </a>

            {/* Marketplace small buttons for smaller desktop viewports */}
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.65rem] tracking-[0.1em] text-ivory/80 hover:text-ivory uppercase"
                aria-label="Shopee"
              >
                Shopee
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.65rem] tracking-[0.1em] text-champagne-gold hover:text-ivory uppercase"
                aria-label="TikTok Shop"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-primary-black transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 md:p-12">
          {/* Drawer Top */}
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl tracking-[0.2em] text-ivory">VELIXIR</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-ivory"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col space-y-6 md:space-y-8 my-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl md:text-4xl text-ivory hover:text-champagne-gold transition-colors duration-300 font-light tracking-[0.05em]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer Buttons */}
          <div className="flex flex-col space-y-4">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center font-sans text-xs uppercase tracking-[0.2em] text-ivory border border-ivory/20 py-4 transition-all duration-300 hover:border-ivory"
              aria-label="Shop on Shopee"
            >
              Shop on Shopee
            </a>
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center font-sans text-xs uppercase tracking-[0.2em] text-primary-black bg-champagne-gold py-4 transition-all duration-300 hover:bg-transparent hover:text-champagne-gold border border-champagne-gold"
              aria-label="Shop on TikTok Shop"
            >
              Shop on TikTok Shop
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
