"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { AnimatedHero } from "@/components/layout/AnimatedHero";
import { ScrollingLogos } from "@/components/ui/ScrollingLogos";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: Hero Section */}
      <AnimatedHero />

      {/* SECTION 2: Why Choose Us / Benefits (Moved from bottom) */}
      <Section className="bg-slate-50/50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 inline-block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">
              Built for Modern Healthcare
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Everything you need to run a successful practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Built for African Healthcare",
                icon: "🌍",
                desc: "Workflows tailored specifically for African healthcare regulations and needs.",
                image: "/african_healthcare_bg.png"
              },
              {
                title: "Cloud-based & Secure",
                icon: "🔒",
                desc: "Bank-grade encryption keeps your patient data safe and accessible anywhere.",
                image: "/cloud_security_bg.png"
              },
              {
                title: "Works on Desktop, Tablet, Mobile",
                icon: "📱",
                desc: "Access your practice management system from any device.",
                image: "/multi_device_bg.png"
              },
              {
                title: "Easy Onboarding",
                icon: "🚀",
                desc: "Get your clinic up and running in days, not months. Simple migration.",
                image: "/easy_onboarding_bg.png"
              },
              {
                title: "Local Support",
                icon: "🇬🇭",
                desc: "Dedicated support team based in Ghana, available when you need them.",
                image: "/local_support_bg.png"
              },
              {
                title: "AI Powered",
                icon: "✨",
                desc: "Leverage modern AI for diagnostics, inventory prediction, and alerts.",
                image: "/ai_healthcare_bg.png"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors duration-300 group-hover:bg-black/60" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl mb-4 border border-white/20 shadow-lg">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: Eye Care Service Section */}
      <Section className="bg-white relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10"
        >
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

              {/* Feature Highlights */}
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
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Sales & Billing</h4>
                    <p className="text-xs text-slate-500">Seamless payments</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
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
        </motion.div>
      </Section>

      {/* SECTION 4: Dental Care Service Section */}
      <Section className="bg-slate-50/80 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
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

              {/* Feature Highlights */}
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
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Billing & Claims</h4>
                    <p className="text-xs text-slate-500">Automated insurance</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
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
        </motion.div>
      </Section>

      {/* SECTION 5: Care Tools That Are Innovative - Matching Inspiration */}
      <Section className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
                Care Tools That Are Innovative
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Feel free to customize this paragraph to better fit your brand messaging, values, and specific offerings. Ensure that the language you use.
              </p>

              {/* Features with Checkmarks */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Healthcare Facility",
                    desc: "We're committed to leveraging the latest innovations in medical technology."
                  },
                  {
                    title: "Medical Devices",
                    desc: "Our patients with the highest standard of care. Our state-of-the-art facility is equipped."
                  },
                  {
                    title: "Advanced Technologies",
                    desc: "From advanced imaging technology such as MRI and CT scanners to precision surgical tools."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 px-8 rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Right: Image or Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/positive.webp"
                  alt="Innovative Healthcare Tools"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: How It Works - Step by Step */}
      <Section className="bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 inline-block">Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Setting up your practice management system is quick and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign Up & Register",
                desc: "Create your account and register your clinic in minutes. No credit card required.",
                icon: "📝"
              },
              {
                step: "2",
                title: "Configure Your Practice",
                desc: "Set up your staff, services, and workflows tailored to your practice needs.",
                icon: "⚙️"
              },
              {
                step: "3",
                title: "Start Managing Patients",
                desc: "Begin scheduling appointments, managing records, and running your practice efficiently.",
                icon: "🚀"
              },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                {idx !== 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -ml-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 7: Work With a Variety of People / Trusted Professionals - Matching Inspiration */}
      <Section className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Work With a Variety of People
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              We're a 100% remote team spread all across the world. Join us! Ensure that the language you use.
            </p>
          </div>

          {/* Professional Profiles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Dr. Sarah Mensah", specialty: "Ophthalmology", image: "/portrait-woman-working-healthcare-system-as-pediatrician.webp" },
              { name: "Dr. Kwame Asante", specialty: "Optometry", image: "/positive.webp" },
              { name: "Dr. Ama Osei", specialty: "Dentistry", image: "/portrait-african-american-nurse-using-laptop-white-desk.webp" },
              { name: "Dr. Kofi Adjei", specialty: "Oral Surgery", image: "/positive.webp" },
            ].map((profile, i) => (
              <div key={i} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{profile.name}</h4>
                <p className="text-sm text-slate-600">{profile.specialty}</p>
              </div>
            ))}
          </div>

          <div className="text-center" />
        </div>
      </Section>



      {/* SECTION 9: Social Proof */}
      <div className="bg-slate-900 text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl text-left">
            <span className="inline-flex items-center bg-red-600/90 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              USED BY
            </span>
            <p className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">30+ centers</p>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-medium tracking-wide uppercase">
              TRUSTED BY MEDICAL CENTERS ACROSS THE REGION
            </p>
            <div className="mt-6 flex items-center">
              <span className="h-px w-24 bg-slate-700/80" />
            </div>
          </div>
        </div>
        
        {/* Horizontal Scrolling Logos */}
        <ScrollingLogos />
      </div>

      {/* SECTION 10: Final CTA */}


      <Footer />
    </div>
  );
}
