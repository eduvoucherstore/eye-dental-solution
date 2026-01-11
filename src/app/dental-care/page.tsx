"use client";

import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";

export default function DentalCarePage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* --- HERO SECTION (Clean) --- */}
            <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white border-b border-slate-200">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold tracking-widest text-slate-900 uppercase">
                                <span className="text-blue-600">🦷</span> Cloudify Dental
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-none">
                                Precision Tools for <br />
                                <span className="text-blue-600">Dental Professionals.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Master your practice efficiency. From charting to billing, experience a workflow that feels as precise as your clinical work.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

                        {/* Image */}
                        <div className="relative perspective-1000">
                            {/* Decorative Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tl from-blue-100/60 to-cyan-100/60 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full aspect-[4/3] rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-[6px] border-white transform -rotate-1 hover:rotate-0 transition-all duration-700 ease-out group">
                                <Image
                                    src="/dental-care-dashboard.png"
                                    alt="Dental Dashboard"
                                    fill
                                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating Badge (Top Left) */}
                            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow hidden md:flex z-20">
                                <div className="bg-orange-50 p-3 rounded-xl text-orange-500 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Patient Rating</p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-900 font-bold text-lg">4.9/5</span>
                                        <span className="text-slate-400 text-xs">(850+ reviews)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge (Bottom Right) */}
                            <div className="absolute -bottom-6 -right-2 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex z-20">
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
            <Section className="bg-slate-50 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">The Workflow</h2>
                        <h3 className="text-4xl font-bold text-slate-900">Seamless Patient Journey</h3>
                    </div>

                    <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200 before:border-l before:border-dashed before:border-slate-300">
                        {/* 1. Appointment */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">1</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Check-in</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Scheduling & Reception</h4>
                                <p className="text-slate-600 text-sm">Automated recall system brings patients back. Smart scheduling fills your chair.</p>
                            </div>
                        </div>

                        {/* 2. Clinical */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">2</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Treatment</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Charting & EHR</h4>
                                <p className="text-slate-600 text-sm">Detailed 3D teeth charting, treatment planning, and medical history in one view.</p>
                            </div>
                        </div>

                        {/* 3. Imaging */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">3</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Diagnostics</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Imaging Integration</h4>
                                <p className="text-slate-600 text-sm">Store X-rays and intraoral images directly in the patient file.</p>
                            </div>
                        </div>

                        {/* 4. Operations */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-700 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">4</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Back Office</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Inventory Management</h4>
                                <p className="text-slate-600 text-sm">Track composites, burs, and supplies with automated re-ordering.</p>
                            </div>
                        </div>

                        {/* 5. Billing */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-bold">5</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Checkout</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Billing & Claims</h4>
                                <p className="text-slate-600 text-sm">Generate invoices, process insurance, and get paid faster.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- PRICING SECTION (Clean) --- */}
            <Section id="pricing" className="bg-white py-24 border-t border-slate-200">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Practice Plans</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Scalable solutions for clinics of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* STARTER */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900">Starter Practice</h3>
                            <p className="text-slate-500 text-sm mt-1 mb-6">Solo dentists & small clinics</p>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-slate-900">GHS 250</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {["Patient records & history", "Appointment scheduling", "Treatment plans", "Basic billing", "SMS reminders", "1–3 staff accounts"].map((feat, i) => (
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
                            <h3 className="text-lg font-bold text-slate-900">Standard Practice</h3>
                            <p className="text-slate-500 text-sm mt-1 mb-6">Growing clinics</p>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-slate-900">GHS 350</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {["Everything in Starter", "1–10 staff accounts", "Dedicated account manager", "Priority support", "AI-powered tools", "Secure cloud hosting"].map((feat, i) => (
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
                                {["Unlimited users", "Multi-branch mgmt", "Advanced workflows", "Inventory & consumables", "Insurance integrations", "White-label & API"].map((feat, i) => (
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

            {/* Built for Ghana Strip */}
            <div className="bg-red-600 text-white py-3 text-center">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center gap-2">
                    <span className="font-bold uppercase tracking-widest text-xs">Built for Dentists in Ghana</span>
                    <span className="text-lg">🇬🇭</span>
                </div>
            </div>

            {/* --- CTA SECTION --- */}
            <Section className="bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to upgrade your practice?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of dental professionals who trust Cloudify.</p>
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
