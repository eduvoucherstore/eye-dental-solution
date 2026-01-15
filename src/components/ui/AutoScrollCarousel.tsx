"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoScrollCarouselProps {
    children: React.ReactNode[];
    autoPlayInterval?: number;
}

export const AutoScrollCarousel = ({
    children,
    autoPlayInterval = 3000,
}: AutoScrollCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % children.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [children.length, autoPlayInterval]);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-[400px] w-full">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full"
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {children.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-600 w-6" : "bg-blue-200"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
