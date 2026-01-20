import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eye Care Software | Optical Practice Management System",
    description: "The #1 Eye Care Software for optical clinics and ophthalmologists. Manage patient records, prescriptions, eyewear inventory, and billing with our cloud-based solution.",
    keywords: [
        "eye care software",
        "eye care solution",
        "AI powered optical software",
        "smart eye care solution",
        "comprehensive eye clinic management",
        "digital optometry solution",
        "AI diagnostic tools",
        "optical practice management",
        "optometry software",
        "ophthalmology emr",
        "optical shop POS",
        "inventory management for opticals",
        "vision clinic software",
        "optical billing software",
        "eye clinic appointment scheduling"
    ],
    alternates: {
        canonical: "/eye-care",
    },
    openGraph: {
        title: "Eye Care Software | Cloudify",
        description: "The #1 Eye Care Software for optical clinics. Manage patients, inventory, and billing.",
        url: "/eye-care",
        type: "website",
        images: [
            {
                url: "/eye-care-dashboard.png",
                width: 1200,
                height: 630,
                alt: "Cloudify Eye Care Dashboard",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Eye Care Software | Cloudify",
        description: "The #1 Eye Care Software for optical clinics. Manage patients, inventory, and billing.",
        images: ["/eye-care-dashboard.png"],
    },
};

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
    heart: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
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
    tag: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 7h.01M3 11l8-8h6l4 4v6l-8 8L3 11z" />
        </svg>
    ),
    users: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
} as const;

const eyeCareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cloudify Eye Care Software",
    url: "https://www.cloudifycare.com/eye-care",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Eye care software for optical clinics. Manage patients, inventory, scheduling, and billing with Cloudify.",
    brand: {
        "@type": "Organization",
        name: "Cloudify",
        url: "https://www.cloudifycare.com",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "120",
        bestRating: "5",
        worstRating: "1"
    },
    offers: {
        "@type": "Offer",
        price: "250",
        priceCurrency: "GHS",
        priceValidUntil: "2025-12-31",
        url: "https://www.cloudifycare.com/eye-care#pricing"
    }
};

export default function EyeCarePage() {
    const eyeCareSignupUrl = process.env.NEXT_PUBLIC_EYECARE_SIGNUP_URL ?? "/contact";

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eyeCareSchema) }}
            />
            <Navbar />

            {/* --- HERO SECTION --- */}
            <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100 uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Cloudify Eye Care
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight text-slate-900 leading-tight">
                                Eye Care <br />
                                <span className="text-blue-600">Software</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Our software takes the hassle out of managing your practice. From scheduling to billing, we've got you covered. Discover the difference for yourself.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 text-base font-medium shadow-lg shadow-blue-500/20 rounded-full w-full sm:w-auto">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="#pricing" className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 text-base rounded-full w-full sm:w-auto">
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

            {/* --- PRICING SECTION (Clean) --- */}
            <Section id="pricing" className="bg-slate-50/50 py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4 tracking-tight">
                            Simple Plans for Growth
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                            Choose the package that fits your clinic. No hidden fees.
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
                                        <h3 className="text-xl font-heading font-bold text-slate-900">Starter Clinic</h3>
                                        <p className="text-slate-500 text-sm">For small clinics & startups</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-slate-900">GHS 250</span>
                                    <span className="text-slate-500 text-base">/mo</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Best for</p>
                                    <p className="text-slate-600 text-sm">Solo practitioners and small teams.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Patient Registration", icon: pricingIcons.badge },
                                    { label: "Basic EMR & Vitals", icon: pricingIcons.heart },
                                    { label: "Appointment Scheduling", icon: pricingIcons.calendar },
                                    { label: "Inventory Mgmt", icon: pricingIcons.inventory },
                                    { label: "Billing & Invoicing", icon: pricingIcons.billing },
                                    { label: "1-3 User Accounts", icon: pricingIcons.users },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={eyeCareSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth variant="outline" className="border-slate-300 hover:text-blue-600 px-8 text-base font-medium rounded-full">
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
                                        <h3 className="text-xl font-heading font-bold text-slate-900">Standard Clinic</h3>
                                        <p className="text-slate-500 text-sm">For growing practices</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-slate-900">GHS 350</span>
                                    <span className="text-slate-500 text-base">/mo</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Best for</p>
                                    <p className="text-slate-600 text-sm">Multi-doctor clinics scaling fast.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Everything in Starter", icon: pricingIcons.badge },
                                    { label: "Advanced EMR Workflows", icon: pricingIcons.sliders },
                                    { label: "1-10 User Accounts", icon: pricingIcons.users },
                                    { label: "Dedicated Manager", icon: pricingIcons.support },
                                    { label: "Priority Support", icon: pricingIcons.support },
                                    { label: "AI Tools", icon: pricingIcons.sparkles },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={eyeCareSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white px-8 text-base font-medium shadow-lg shadow-blue-500/20 rounded-full">
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
                                    <p className="text-slate-600 text-sm">Large groups with complex workflows.</p>
                                </div>
                                <div className="h-px bg-slate-200" />
                            </div>
                            <ul className="space-y-3 mt-6 mb-8 flex-1">
                                {[
                                    { label: "Unlimited Users", icon: pricingIcons.users },
                                    { label: "Multi-branch Analytics", icon: pricingIcons.chart },
                                    { label: "Advanced Automation", icon: pricingIcons.sparkles },
                                    { label: "Custom Integrations", icon: pricingIcons.puzzle },
                                    { label: "White-labeling", icon: pricingIcons.tag },
                                    { label: "SLA Support", icon: pricingIcons.lock },
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-500 shrink-0">
                                            {feat.icon}
                                        </span>
                                        {feat.label}
                                    </li>
                                ))}
                            </ul>
                            <Link href={eyeCareSignupUrl} target="_blank" rel="noreferrer">
                                <Button fullWidth variant="outline" className="border-slate-300 hover:bg-white hover:text-blue-600 px-8 text-base font-medium rounded-full">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- BENEFITS GRID (From Flyer) --- */}
            <Section className="bg-white py-24">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            Benefits
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                            Everything You Need
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                            Comprehensive features designed to streamline your eye care practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1. Sales, Invoices & Payments */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Sales, Invoices & Payments</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Streamlined billing and payment processing.</p>
                            </div>
                        </div>

                        {/* 2. Appointment & Birthday Alerts */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Appointment & Birthday Alerts</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Automated reminders for appointments and special occasions.</p>
                            </div>
                        </div>

                        {/* 3. Remote Bill Collection */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Remote Bill Collection</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Collect payments remotely with ease.</p>
                            </div>
                        </div>

                        {/* 4. Doctor-Patient Consult */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Doctor-Patient Consult</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Facilitate seamless consultations between doctors and patients.</p>
                            </div>
                        </div>

                        {/* 5. Reports & Expenses */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Reports & Expenses</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Comprehensive financial reporting and expense tracking.</p>
                            </div>
                        </div>

                        {/* 6. Inventory Management */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Inventory Management</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Track and manage your clinic's inventory efficiently.</p>
                            </div>
                        </div>

                        {/* 7. Image Vault */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Image Vault</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Secure storage for patient scans and retinal images.</p>
                            </div>
                        </div>

                        {/* 8. AI Assist */}
                        <div className="group relative h-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-slate-800">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/5 transition-colors duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="w-12 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">AI Assist</h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">Intelligent assistance for diagnostics and decision-making.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <Section className="relative py-24 overflow-hidden">
                <Image
                    src="/eye-surgery.png"
                    alt="Eye Care Professional"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 z-0"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <span className="inline-flex items-center text-white font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white leading-tight">
                        Ready to upgrade your practice?
                    </h2>
                    <p className="text-slate-300 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of eye care professionals who trust Cloudify to power their daily operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="!bg-white hover:!bg-blue-50 !text-blue-900 border-none shadow-lg shadow-white/10 w-full sm:w-auto px-8 h-14 text-lg font-bold">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            <Footer />
        </div>
    );
}
