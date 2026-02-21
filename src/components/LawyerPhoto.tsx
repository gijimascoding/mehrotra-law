"use client";

import { useState } from "react";
import Image from "next/image";

export function LawyerPhoto() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative rounded-sm overflow-hidden aspect-[3/4] bg-navy">
      {!hasError && (
        <Image
          src="/images/yash-mehrotra.jpg"
          alt="Yash Mehrotra, Founder & Principal Lawyer at Mehrotra Law"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          onError={() => setHasError(true)}
        />
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-serif font-bold text-white/20">YM</span>
        </div>
      )}
    </div>
  );
}
