"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Eye Care", href: "/eye-care" },
        { name: "Dental Care", href: "/dental-care" },
    ];

    const isActive = (path: string) => {
        if (path === "/" && pathname !== "/") return false;
        return pathname.startsWith(path);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 shadow-[0_12px_24px_-24px_rgba(15,23,42,0.6)]"}`}>
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/2cloudy.png"
                            alt="Cloudify Care"
                            width={160}
                            height={40}
                            className="object-contain h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                                    ? "text-slate-900 font-bold"
                                    : "text-slate-500 hover:text-blue-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 shadow-md">Get Started</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Same as before but styled */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 p-2 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.href)
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-600 hover:bg-gray-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button fullWidth>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
