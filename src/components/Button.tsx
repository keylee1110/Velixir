import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "gold";
  className?: string;
  disabled?: boolean;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  disabled = false,
  external = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 transition-all duration-300 ease-in-out focus:outline-none";

  const variants = {
    primary:
      "bg-primary-black text-ivory border border-muted-gray/30 hover:border-ivory hover:bg-ivory hover:text-primary-black",
    secondary:
      "bg-ivory text-primary-black border border-ivory hover:bg-transparent hover:text-ivory",
    outline:
      "bg-transparent text-ivory border border-ivory hover:bg-ivory hover:text-primary-black",
    gold:
      "bg-champagne-gold text-primary-black border border-champagne-gold hover:bg-transparent hover:text-champagne-gold",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClassName} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
