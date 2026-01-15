"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const content = {
    eye: {
        title: "Eye Care",
        titleSuffix: "Software",
        subtitle: "Our software takes the hassle out of managing your practice. From scheduling to billing, we've got you covered. Discover the difference for yourself.",
        image: "/eye-care-dashboard.png",
        link: "/eye-care",
    },
    dental: {
        title: "Dental Care",
        titleSuffix: "Software",
        subtitle: "Enhance your dental care service with our comprehensive workflow solution covering patient record storage, dental charting, scheduling and billing in a user-friendly way.",
        image: "/dental-care-dashboard.png",
        link: "/dental-care",
    }
};

export const AnimatedHero = () => {
    const [activeTab, setActiveTab] = useState<"eye" | "dental">("eye");
    const data = content[activeTab];

    // Auto-switch effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(prev => prev === "eye" ? "dental" : "eye");
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">

                {/* Text Content - Left */}
                <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
                    <div className="relative min-h-[180px]">
                        <h1
                            key={activeTab}
                            className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight animate-fade-in-up"
                        >
                            {activeTab === 'eye' ? (
                                <>Eye Care <br /><span className="text-blue-600">Software</span></>
                            ) : (
                                <>Dental Care <br /><span className="text-blue-600">Software</span></>
                            )}
                        </h1>
                    </div>

                    <p
                        key={`subtitle-${activeTab}`}
                        className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in"
                    >
                        {data.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href={data.link} className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base font-medium shadow-lg shadow-blue-500/20 rounded-full w-full sm:w-auto"
                            >
                                Explore {activeTab === 'eye' ? "Eye Care" : "Dental Care"}
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 h-12 text-base font-medium rounded-full w-full sm:w-auto"
                            >
                                Book a Demo
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image Content - Right (Robust CSS Mask) */}
                <div className="flex-1 relative w-full max-w-[420px] lg:max-w-none aspect-square lg:aspect-auto h-auto lg:h-[650px] flex items-center justify-center mt-6 lg:mt-0 px-4">

                    {/* Decorative Background Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none">
                        <div className={`absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-40 animate-blob transition-colors duration-1000 ${activeTab === 'eye' ? 'bg-blue-200' : 'bg-teal-200'}`}></div>
                        <div className={`absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000 transition-colors duration-1000 ${activeTab === 'eye' ? 'bg-cyan-200' : 'bg-blue-200'}`}></div>
                    </div>

                    {/* The Main Image with CSS Mask */}
                    <div className="relative w-full max-w-[500px] aspect-square transition-transform duration-700 hover:scale-[1.02]">
                        <div
                            className="absolute inset-0 w-full h-full drop-shadow-2xl z-10"
                            style={{
                                maskImage: 'url("/diagonal-mask.svg")',
                                maskSize: 'contain',
                                maskPosition: 'center',
                                maskRepeat: 'no-repeat',
                                WebkitMaskImage: 'url("/diagonal-mask.svg")',
                                WebkitMaskSize: 'contain',
                                WebkitMaskPosition: 'center',
                                WebkitMaskRepeat: 'no-repeat'
                            }}
                        >
                            <Image
                                key={activeTab}
                                src={activeTab === 'eye' ? "/eye-surgery.png" : "/dental-surgery.png"}
                                alt="Surgery Team"
                                fill
                                className="object-cover object-center brightness-105 animate-fade-in"
                                sizes="(max-width: 768px) 100vw, 600px"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
