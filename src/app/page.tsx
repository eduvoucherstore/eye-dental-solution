"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { AnimatedHero } from "@/components/layout/AnimatedHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Animated Hero (Strict Blue/Sky) */}
      <AnimatedHero />

      {/* 2. Platform Overview (Split Cards with Images) */}
      {/* 2. Platform Overview - Redesigned Feature Sections */}

      {/* Eye Care Section - Clean White with Soft Blue Vibe */}
      <Section className="bg-white border-b border-slate-50 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                👁️ Cloudify Eye Care
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                Eye Care <br /><span className="text-blue-600">Made Easy!</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Our software takes the hassle out of managing your practice. From scheduling to billing, we've got you covered. Discover the difference for yourself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Featured Highlight Card */}
                <div className="md:col-span-2 bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group flex items-center gap-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 text-white border border-white/20">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-lg font-bold mb-1">AI Diagnostic Assist</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">Smart analysis to support clinical decisions.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Sales & Billing</h4>
                    <p className="text-xs text-slate-500">Seamless payments</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Doctor Consult</h4>
                    <p className="text-xs text-slate-500">Remote & In-person</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/eye-care">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 px-8 rounded-full h-12">
                    Discover Eye Care
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src="/eye-care-dashboard.png"
                alt="Eye Care Software Dashboard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge - Glassmorphism */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-white/50 animate-fade-in flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">AI</div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-600">$$</div>
                </div>
                <span className="text-xs font-bold text-slate-700">Practice Optimized</span>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Dental Care Section - Soft Surface Color */}
      {/* Dental Care Section - Rich Surface Vibe */}
      <Section className="bg-slate-50/80 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

            {/* Image Content */}
            <div className="flex-1 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src="/dental-care-dashboard.png"
                alt="Dental Care Software Dashboard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 z-20 bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-white/50 animate-fade-in animation-delay-300 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg text-white shadow-md">
                  🦷
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 leading-none">Smart</div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-0.5">Practice Flow</div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                🦷 Cloudify Dental Care
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                Dental Care <br /><span className="text-blue-600">Software</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Enhance your dental care service with our comprehensive workflow solution covering patient record storage, dental charting, scheduling and billing in a user-friendly way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Featured Highlight Card */}
                <div className="md:col-span-2 bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group flex items-center gap-5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 text-white border border-white/20">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-lg font-bold mb-1">Smart Clinical Charting</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">Efficient 3D charting & health records.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Billing & Claims</h4>
                    <p className="text-xs text-slate-500">Automated insurance</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Inventory Mgmt</h4>
                    <p className="text-xs text-slate-500">Stock & Supply tracking</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/dental-care">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 px-8 rounded-full h-12">
                    Explore Dental Solutions
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 3. Why Cloudify (Grid) */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">Built for Modern Healthcare</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Built for African Healthcare", icon: "🌍", desc: "Workflows tailored specifically for African healthcare regulations and needs." },
              { title: "Cloud-based & Secure", icon: "🔒", desc: "Bank-grade encryption keeps your patient data safe and accessible anywhere." },
              { title: "Works on Desktop, Tablet, Mobile", icon: "📱", desc: "Access your practice management system from any device." },
              { title: "Easy Onboarding", icon: "🚀", desc: "Get your clinic up and running in days, not months. Simple migration." },
              { title: "Local Support", icon: "🇬🇭", desc: "Dedicated support team based in Ghana, available when you need them." },
              { title: "AI Powered", icon: "✨", desc: "Leverage modern AI for diagnostics, inventory prediction, and alerts." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Social Proof */}
      <div className="py-12 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold">USED BY</span>
            <span className="text-2xl font-bold">30+ centers</span>
          </div>
          <p className="text-slate-400 font-medium mb-8">TRUSTED BY MEDICAL CENTERS ACROSS THE REGION</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold">MedicCare</span>
            <span className="text-2xl font-bold">VisionPlus</span>
            <span className="text-2xl font-bold">DentalArts</span>
            <span className="text-2xl font-bold">AccraHealth</span>
            <span className="text-2xl font-bold">EuroCare</span>
          </div>
        </div>
      </div>

      {/* 5. CTA Band */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        {/* Soft overlay effects - no heavy gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700/20"></div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to modernize your clinic?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join the growing network of providers using Cloudify to deliver better care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl border-none">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-200 text-white hover:bg-blue-700/50 hover:border-blue-300">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
