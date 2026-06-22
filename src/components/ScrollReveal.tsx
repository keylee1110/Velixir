"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // in px
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1000, // slightly slower for a more luxurious feel
  direction = "up",
  distance = 30,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px", // Trigger when element is 40px inside viewport
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getDirectionStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translate3d(0, ${distance}px, 0)`;
        case "down":
          return `translate3d(0, -${distance}px, 0)`;
        case "left":
          return `translate3d(${distance}px, 0, 0)`;
        case "right":
          return `translate3d(-${distance}px, 0, 0)`;
        default:
          return "none";
      }
    }
    return "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getDirectionStyle(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
