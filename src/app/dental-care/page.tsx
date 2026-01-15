"use client";

import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pricingIcons = {
    badge: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    billing: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    ),
    calendar: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    chart: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3v18m4-14v14m4-10v10M7 7v14M3 11v10h18" />
        </svg>
    ),
    cloud: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 014-4h1a5 5 0 0110 0h1a3 3 0 010 6H7a4 4 0 01-4-4z" />
        </svg>
    ),
    inventory: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
    ),
    lock: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6V4m0 2a4 4 0 014 4v1h2a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h2v-1a4 4 0 014-4z" />
        </svg>
    ),
    puzzle: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3a2 2 0 012 2v1h1a2 2 0 012 2v2h-1a2 2 0 000 4h1v2a2 2 0 01-2 2h-1v1a2 2 0 01-4 0v-1H9a2 2 0 01-2-2v-2h1a2 2 0 000-4H7V8a2 2 0 012-2h1V5a2 2 0 012-2z" />
        </svg>
    ),
    sliders: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 6h10M3 18h6M13 6h8M9 18h12M9 6v6m0 6v-6" />
        </svg>
    ),
    sparkles: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3l1.5 3L9 7.5 6.5 9 5 12 3.5 9 1 7.5 3.5 6 5 3zm13 5l1.5 3L22 12.5 19.5 14 18 17 16.5 14 14 12.5 16.5 11 18 8zm-6 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
        </svg>
    ),
    support: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18 10a6 6 0 10-12 0v4a2 2 0 002 2h2m4 0h2a2 2 0 002-2v-4zM9 16v1a3 3 0 003 3h1" />
        </svg>
    ),
    users: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
} as const;

export default function DentalCarePage() {
    const dentalSignupUrl = process.env.NEXT_PUBLIC_DENTAL_SIGNUP_URL ?? "/contact";

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* --- HERO SECTION (Clean) --- */}
            <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100 uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Cloudify Dental
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight text-slate-900 leading-tight">
                                Precision Tools for <br />
                                <span className="text-blue-600">Dental Professionals.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Master your practice efficiency. From charting to billing, experience a workflow that feels as precise as your clinical work.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-10 text-base font-medium shadow-lg shadow-blue-500/20 rounded-full w-full sm:w-auto">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="#pricing" className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 h-10 text-base rounded-full w-full sm:w-auto">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-2xl lg:max-w-none relative perspective-1000">
                            {/* Decorative Blob Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/60 to-cyan-100/60 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image Container (Asymmetric & Stunning) */}
                            <div className="relative rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition-all duration-700 ease-out group">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/dental-care-dashboard.png"
                                        alt="Dental Dashboard"
                                        fill
                                        className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Floating Badge 1 (Patient Rating) */}
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow hidden md:flex">
                                <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Patient Rating</p>
                                    <p className="text-slate-900 font-bold text-xl">4.9/5</p>
                                </div>
                            </div>

                            {/* Floating Badge 2 (Efficiency) */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex z-20">
                                <div className="bg-cyan-100 p-3 rounded-full text-cyan-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Avg Wait Time</p>
                                    <p className="text-slate-900 font-bold text-xl">&lt; 5 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- WORKFLOW TIELINE (Clean/Unified) --- */}
            <Section className="bg-slate-50/50 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">The Workflow</h2>
                        <h3 className="text-4xl font-bold text-slate-900">Seamless Patient Journey</h3>
                    </div>

                    <div className="relative space-y-16">
                        {/* Animated Vertical Line */}
                        <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 border-l border-dashed border-slate-300"></div>
                        
                        {/* Animated Progress Line */}
                        <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 animate-journey-flow origin-top"></div>
                        
                        {/* 1. Appointment */}
                        <motion.div 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold relative"
                                initial={{ scale: 0, rotate: -180, x: -50 }}
                                whileInView={{ scale: 1, rotate: 0, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.15 }}
                            >
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-blue-600"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <span className="relative z-10">1</span>
                            </motion.div>
                            <motion.div 
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Check-in</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Scheduling & Reception</h4>
                                <p className="text-slate-600 text-sm">Automated recall system brings patients back. Smart scheduling fills your chair.</p>
                            </motion.div>
                        </motion.div>

                        {/* 2. Clinical */}
                        <motion.div 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold relative"
                                initial={{ scale: 0, rotate: 180, x: 50 }}
                                whileInView={{ scale: 1, rotate: 0, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.15 }}
                            >
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-slate-700"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                />
                                <span className="relative z-10">2</span>
                            </motion.div>
                            <motion.div 
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Treatment</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Charting & EHR</h4>
                                <p className="text-slate-600 text-sm">Detailed 3D teeth charting, treatment planning, and medical history in one view.</p>
                            </motion.div>
                        </motion.div>

                        {/* 3. Imaging */}
                        <motion.div 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold relative"
                                initial={{ scale: 0, rotate: -180, x: -50 }}
                                whileInView={{ scale: 1, rotate: 0, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.15 }}
                            >
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-blue-600"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />
                                <span className="relative z-10">3</span>
                            </motion.div>
                            <motion.div 
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Diagnostics</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Imaging Integration</h4>
                                <p className="text-slate-600 text-sm">Store X-rays and intraoral images directly in the patient file.</p>
                            </motion.div>
                        </motion.div>

                        {/* 4. Operations */}
                        <motion.div 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold relative"
                                initial={{ scale: 0, rotate: 180, x: 50 }}
                                whileInView={{ scale: 1, rotate: 0, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.15 }}
                            >
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-slate-700"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                                />
                                <span className="relative z-10">4</span>
                            </motion.div>
                            <motion.div 
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Back Office</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Inventory Management</h4>
                                <p className="text-slate-600 text-sm">Track composites, burs, and supplies with automated re-ordering.</p>
                            </motion.div>
                        </motion.div>

                        {/* 5. Billing */}
                        <motion.div 
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold relative"
                                initial={{ scale: 0, rotate: -180, x: -50 }}
                                whileInView={{ scale: 1, rotate: 0, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.15 }}
                            >
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-blue-600"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                                />
                                <span className="relative z-10">5</span>
                            </motion.div>
                            <motion.div 
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Checkout</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Billing & Claims</h4>
                                <p className="text-slate-600 text-sm">Generate invoices, process insurance, and get paid faster.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* --- PRICING SECTION (Clean) --- */}
            <Section id="pricing" className="bg-white py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                            Practice Plans
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                            Scalable solutions for clinics of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* STARTER */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6V4m0 2a4 4 0 014 4v1h2a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h2v-1a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Starter</p>
                                        <h3 className="text-xl font-heading font-bold text-slate-900">Starter Practice</h3>
                                        <p className="text-slate-500 text-sm">Solo dentists & small clinics</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-slate-900">GHS 250</span>
                                    <span className="text-slate-500 text-base">/mo</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Best for</p>
                                    <p className="text-slate-600 text-sm">Independent practices starting out.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Patient records & history", icon: pricingIcons.badge },
                                    { label: "Appointment scheduling", icon: pricingIcons.calendar },
                                    { label: "Treatment plans", icon: pricingIcons.sliders },
                                    { label: "Basic billing", icon: pricingIcons.billing },
                                    { label: "SMS reminders", icon: pricingIcons.support },
                                    { label: "1–3 staff accounts", icon: pricingIcons.users },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={dentalSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth variant="outline" className="border-slate-300 hover:text-blue-600 px-8 h-10 text-base font-medium rounded-full">
                                    Signup
                                </Button>
                            </Link>
                        </div>

                        {/* STANDARD */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wider">POPULAR</div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6V4m0 2a4 4 0 014 4v1h2a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h2v-1a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Standard</p>
                                        <h3 className="text-xl font-heading font-bold text-slate-900">Standard Practice</h3>
                                        <p className="text-slate-500 text-sm">Growing clinics</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-slate-900">GHS 350</span>
                                    <span className="text-slate-500 text-base">/mo</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Best for</p>
                                    <p className="text-slate-600 text-sm">Practices with multiple chairs.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Everything in Starter", icon: pricingIcons.badge },
                                    { label: "1–10 staff accounts", icon: pricingIcons.users },
                                    { label: "Dedicated account manager", icon: pricingIcons.support },
                                    { label: "Priority support", icon: pricingIcons.support },
                                    { label: "AI-powered tools", icon: pricingIcons.sparkles },
                                    { label: "Secure cloud hosting", icon: pricingIcons.cloud },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={dentalSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-10 text-base font-medium shadow-lg shadow-blue-500/20 rounded-full">
                                    Signup
                                </Button>
                            </Link>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 8h16M6 4h12a2 2 0 012 2v14H4V6a2 2 0 012-2zM9 12h6m-6 4h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Enterprise</p>
                                        <h3 className="text-xl font-heading font-bold text-slate-900">Enterprise</h3>
                                        <p className="text-slate-500 text-sm">Hospitals & Chains</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-slate-900">Custom</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Best for</p>
                                    <p className="text-slate-600 text-sm">Large networks and hospital groups.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Unlimited users", icon: pricingIcons.users },
                                    { label: "Multi-branch mgmt", icon: pricingIcons.chart },
                                    { label: "Advanced workflows", icon: pricingIcons.sliders },
                                    { label: "Inventory & consumables", icon: pricingIcons.inventory },
                                    { label: "Insurance integrations", icon: pricingIcons.lock },
                                    { label: "White-label & API", icon: pricingIcons.puzzle },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-500 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={dentalSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth variant="outline" className="border-slate-300 hover:bg-white hover:text-blue-600 px-8 h-10 text-base font-medium rounded-full">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- PRODUCT FEATURES GRID --- */}
            <Section className="bg-slate-50/50 py-24">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Product Features
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                            Everything You Need
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                            Comprehensive features designed to streamline your dental practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Patient Registration & Records */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Patient Registration & Records</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Comprehensive patient management with complete medical history and records.</p>
                            </div>
                        </div>

                        {/* 2. Dental Charting & Treatment Planning */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Dental Charting & Treatment Planning</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Advanced 3D charting and detailed treatment planning for precise care.</p>
                            </div>
                        </div>

                        {/* 3. Appointment Scheduling */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Appointment Scheduling</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Smart scheduling system with automated reminders and recall management.</p>
                            </div>
                        </div>

                        {/* 4. Billing & Insurance Claims */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Billing & Insurance Claims</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Streamlined billing with automated insurance claims processing.</p>
                            </div>
                        </div>

                        {/* 5. Inventory Management */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Inventory Management</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Track dental supplies, equipment, and consumables efficiently.</p>
                            </div>
                        </div>

                        {/* 6. Reports & Analytics */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Reports & Analytics</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Comprehensive reporting and analytics for practice insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Built for Ghana Strip */}
            <div className="bg-red-600 text-white py-3 text-center">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center gap-2">
                    <span className="font-bold uppercase tracking-widest text-xs">Built for Dentists in Ghana</span>
                    <span className="text-lg">🇬🇭</span>
                </div>
            </div>

            {/* --- CTA SECTION --- */}
            <Section className="bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center text-blue-400 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30">
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 tracking-tight">
                        Ready to upgrade your practice?
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of dental professionals who trust Cloudify.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 rounded-full w-full sm:w-auto">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            <Footer />
        </div>
    );
}
