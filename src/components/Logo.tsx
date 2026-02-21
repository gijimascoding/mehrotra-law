"use client";

import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`} aria-label="Mehrotra Law — Home">
      <span className="inline-flex items-center justify-center w-10 h-10 bg-navy text-white font-serif text-lg font-bold rounded-sm tracking-tight group-hover:bg-slate transition-colors duration-300">
        M
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-navy font-serif text-lg font-semibold tracking-wide">Mehrotra Law</span>
      </span>
    </Link>
  );
}

export function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
      <rect width="64" height="64" rx="4" fill="#0f1b2d" />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontFamily="Georgia, serif"
        fontSize="36"
        fontWeight="bold"
      >
        M
      </text>
    </svg>
  );
}
