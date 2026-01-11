"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";

export default function EyeCarePage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white border-b border-slate-200">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Cloudify Eye Care
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                                Integrated Software for <br />
                                <span className="text-blue-600">Modern Optometry.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Streamline your clinic's entire workflow. From patient registration to billing and inventory, managing your eye care practice has never been simpler.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base font-medium shadow-sm">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="#pricing">
                                    <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 h-12 text-base bg-transparent">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-2xl lg:max-w-none relative perspective-1000">
                            {/* Decorative Blob Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/60 to-purple-100/60 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image Container (Asymmetric & Stunnning) */}
                            <div className="relative rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition-all duration-700 ease-out group">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/eye-care-dashboard.png"
                                        alt="Eye Care Dashboard"
                                        fill
                                        className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Floating Badge 1 (Active Patients) */}
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow hidden md:flex">
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Active Patients</p>
                                    <p className="text-slate-900 font-bold text-xl">2.4k+</p>
                                </div>
                            </div>

                            {/* Floating Badge 2 (Efficiency) */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex z-20">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Clinic Efficiency</p>
                                    <p className="text-slate-900 font-bold text-xl">+140%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FEATURES GRID (Clean) --- */}
            <Section className="bg-slate-50 py-24">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Practice Management</h2>
                        <p className="text-slate-600 text-lg">Everything you need to run an efficient, patient-focused optical clinic.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">

                        {/* 1. Feature: AI Assist (Highlighted - Blue) */}
                        <div className="lg:col-span-2 lg:row-span-2 bg-blue-600 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 text-white border border-white/20">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">AI Diagnostic Assist</h3>
                                <p className="text-blue-100 leading-relaxed text-lg">
                                    Our intelligent system analyzes patient history and exam data to suggest potential diagnoses, serving as a reliable second opinion.
                                </p>
                            </div>

                            {/* "Analysis" Widget */}
                            <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">Analysis Complete</span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-white/80 mb-2">
                                    <span>Confidence Score</span>
                                    <span>98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-blue-900/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-400 w-[98%]" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Sales */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Sales & Payments</h3>
                            <p className="text-slate-500 text-sm">Seamless invoicing and revenue tracking.</p>
                        </div>

                        {/* 3. Alerts */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Reminders</h3>
                            <p className="text-slate-500 text-sm">Automated SMS for appointments & birthdays.</p>
                        </div>

                        {/* 4. Remote Consult (Returned to White to prioritize AI Card as primary) */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-6">
                            <div className="shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Remote Consultation</h3>
                                <p className="text-slate-600 text-sm max-w-sm">Connect with patients digitally. Review scans, advise on treatments, and manage prescriptions remotely.</p>
                            </div>
                        </div>

                        {/* 5. Inventory */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Inventory</h3>
                            <p className="text-slate-500 text-sm">Track frames, lenses, and stock levels.</p>
                        </div>

                        {/* 6. Image Vault */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Image Vault</h3>
                            <p className="text-slate-500 text-sm">Secure storage for scans & retinal images.</p>
                        </div>

                    </div>
                </div>
            </Section>

            {/* --- PRICING SECTION (Clean) --- */}
            <Section id="pricing" className="bg-white py-24 border-t border-slate-200">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Transparent Pricing</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Simple Plans for Growth</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the package that fits your clinic. No hidden fees.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* STARTER */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900">Starter Clinic</h3>
                            <p className="text-slate-500 text-sm mt-1 mb-6">For small clinics & startups</p>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-slate-900">GHS 250</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {["Patient Registration", "Basic EMR & Vitals", "Appointment Scheduling", "Inventory Mgmt", "Billing & Invoicing", "1-3 User Accounts"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button fullWidth variant="outline" className="border-slate-300 hover:border-blue-600 hover:text-blue-600">Get Started</Button>
                        </div>

                        {/* STANDARD */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-lg font-bold text-slate-900">Standard Clinic</h3>
                            <p className="text-slate-500 text-sm mt-1 mb-6">For growing practices</p>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-slate-900">GHS 350</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {["Everything in Starter", "Advanced EMR Workflows", "1-10 User Accounts", "Dedicated Manager", "Priority Support", "AI Tools"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                        <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white">Get Standard</Button>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
                            <p className="text-slate-500 text-sm mt-1 mb-6">Hospitals & Chains</p>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-slate-900">Custom</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {["Unlimited Users", "Multi-branch Analytics", "Advanced Automation", "Custom Integrations", "White-labeling", "SLA Support"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Button fullWidth variant="outline" className="border-slate-300 hover:bg-white">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <Section className="bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to upgrade your practice?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of eye care professionals who trust Cloudify.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8">Start Free Trial</Button>
                        <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-white">Contact Support</Button>
                    </div>
                </div>
            </Section>

            <Footer />
        </div>
    );
}
