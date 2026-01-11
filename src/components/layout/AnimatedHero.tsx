"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const content = {
    eye: {
        title: "Eye Care",
        titleSuffix: "Made Easy!",
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content - Left */}
                <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
                    <div className="relative min-h-[180px]">
                        <h1
                            key={activeTab}
                            className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight animate-fade-in-up"
                        >
                            {activeTab === 'eye' ? (
                                <>Eye Care <br /><span className="text-blue-600">Made Easy!</span></>
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
                        <Link href={data.link}>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/20"
                            >
                                Explore {activeTab === 'eye' ? "Eye Care" : "Dental Care"}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-blue-200 text-blue-600 hover:bg-blue-50"
                            >
                                Book a Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Statistics removed per user request */}
                </div>

                {/* Image Content - Right (Clean Software Showcase) */}
                <div className="flex-1 relative w-full max-w-2xl lg:max-w-none flex items-center justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Full Image */}
                        <Image
                            key={activeTab}
                            src={data.image}
                            alt={activeTab === 'eye' ? "Eye Care Software" : "Dental Care Software"}
                            fill
                            className="object-cover animate-fade-in"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
                </div>

            </div>
        </section>
    );
};
