"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  children?: ReactNode;
  variant?: "eye" | "dental";
  className?: string;
}

export const ImageCard = ({ 
  src, 
  alt, 
  children, 
  variant = "eye",
  className = "" 
}: ImageCardProps) => {
  const colorClass = variant === "eye" 
    ? "bg-blue-50 border-blue-100" 
    : "bg-sky-50 border-sky-100";
  
  const overlayColor = variant === "eye"
    ? "bg-blue-100/40"
    : "bg-sky-100/40";

  return (
    <div className={`relative ${className}`}>
      {/* Capsule Overlay Shapes - Inspired by MediCare design */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large capsule behind */}
        <div className={`absolute -top-6 -right-6 w-32 h-20 ${colorClass} rounded-full opacity-60 blur-sm`}></div>
        <div className={`absolute -bottom-4 -left-4 w-24 h-16 ${colorClass} rounded-full opacity-50 blur-sm`}></div>
        
        {/* Medium capsules */}
        <div className={`absolute top-1/4 -left-8 w-20 h-12 ${colorClass} rounded-full opacity-40`}></div>
        <div className={`absolute bottom-1/4 -right-8 w-16 h-10 ${colorClass} rounded-full opacity-40`}></div>
        
        {/* Small decorative circles */}
        <div className={`absolute top-1/3 right-1/4 w-3 h-3 ${overlayColor} rounded-full`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-2 h-2 ${overlayColor} rounded-full`}></div>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
