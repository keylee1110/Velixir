"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  forceSolid?: boolean;
  shopeeUrl?: string;
  tiktokUrl?: string;
}

export default function Header({
  forceSolid = false,
  shopeeUrl = "https://shopee.vn/",
  tiktokUrl = "https://www.tiktok.com/",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initialize state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fragrances", href: "/fragrances" },
    { name: "Collection", href: "/fragrances#collection" },
    { name: "Founder Story", href: "/story" },
    { name: "Lendo-Lab", href: "/lendo-lab" },
    { name: "Policy", href: "/policy" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = (href: string) => {
    const base = "font-sans text-[0.65rem] uppercase tracking-[0.25em] font-medium link-underline pb-1 transition-colors duration-300 ";
    const isHome = href === "/";
    const isActive = isHome ? pathname === "/" : pathname.startsWith(href);
    return base + (isActive ? "text-champagne-gold after:scale-x-100" : "text-ivory/80 hover:text-ivory");
  };

  // The header should be solid black when:
  // - forceSolid is true
  // - user has scrolled down
  // - user is hovering over the header
  // - mobile menu drawer is open
  const isSolid = forceSolid || isScrolled || isHovered || isMobileMenuOpen;

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed left-0 w-full z-40 transition-all duration-350 ease-in-out border-b ${
          isSolid
            ? "bg-primary-black border-muted-gray/10 shadow-lg"
            : "bg-transparent border-transparent"
        } ${
          isScrolled ? "top-0 mt-0" : "top-0 mt-[37px]"
        }`}
      >
        {/* Desktop Header (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* ROW 1: Logo & Secondary Actions (~72px) */}
          <div className="flex items-center justify-between h-[72px] relative">
            {/* Left side actions: Language selector or search */}
            <div className="flex items-center space-x-6 text-muted-gray font-sans text-[0.65rem] tracking-[0.2em] font-medium">
              <button className="hover:text-ivory transition-colors cursor-pointer">VN</button>
              <span className="text-muted-gray/30">/</span>
              <button className="hover:text-ivory transition-colors cursor-pointer text-ivory/50">EN</button>
              <span className="w-[1px] h-3 bg-muted-gray/20"></span>
              <button className="hover:text-ivory transition-colors cursor-pointer flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-muted-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEARCH
              </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
              <Link href="/" className="group block">
                <span className="font-serif text-2xl lg:text-3xl font-light tracking-[0.3em] text-ivory group-hover:text-champagne-gold transition-colors duration-500">
                  VELIXIR
                </span>
                <span className="block text-[0.45rem] tracking-[0.5em] text-champagne-gold/80 font-sans uppercase -mt-1 pl-1 transition-colors duration-500 group-hover:text-ivory">
                  PARFUMS
                </span>
              </Link>
            </div>

            {/* Right side actions: Shop Links & Social */}
            <div className="flex items-center space-x-6 text-muted-gray font-sans text-[0.65rem] tracking-[0.2em] font-medium">
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 hover:text-champagne-gold transition-colors uppercase"
                aria-label="Shop Velixir on Shopee"
              >
                Shopee
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 hover:text-champagne-gold transition-colors uppercase font-semibold"
                aria-label="Shop Velixir on TikTok Shop"
              >
                TikTok Shop
              </a>
              <span className="w-[1px] h-3 bg-muted-gray/20"></span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors uppercase"
              >
                IG
              </a>
            </div>
          </div>

          {/* Thin subtle divider line between row 1 and row 2 (only when solid/hovered) */}
          <div
            className={`w-full h-[1px] bg-muted-gray/10 transition-opacity duration-350 ${
              isSolid ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* ROW 2: Navigation Links (~48px) */}
          <div className="flex items-center justify-center h-[48px]">
            <nav className="flex items-center space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden flex items-center justify-between h-[64px] px-6">
          {/* Menu Drawer toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none cursor-pointer"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-ivory"></span>
            <span className="w-6 h-0.5 bg-ivory"></span>
          </button>

          {/* Centered Brand Logo */}
          <Link href="/" className="text-center">
            <span className="font-serif text-lg tracking-[0.2em] text-ivory">VELIXIR</span>
          </Link>

          {/* Placeholder/Search Icon for mobile balance */}
          <button
            aria-label="Search"
            className="w-8 h-8 flex items-center justify-center text-ivory/80 focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-primary-black transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8">
          {/* Drawer Top */}
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl tracking-[0.2em] text-ivory">VELIXIR</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer"
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
          <nav className="flex flex-col space-y-6 my-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-ivory hover:text-champagne-gold transition-colors duration-300 font-light tracking-[0.05em] uppercase"
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
