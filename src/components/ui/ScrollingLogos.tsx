"use client";

import Image from "next/image";
import { BRAND_LOGOS } from "@/constants/brandLogos";

export const ScrollingLogos = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div className="flex animate-scroll gap-16 items-center">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 w-40 h-24 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand logo ${index + 1}`}
              fill
              className="object-contain p-2"
              sizes="160px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
