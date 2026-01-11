"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <Section className="pt-32 bg-surface">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">Get In Touch</h1>
                    <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                        Ready to transform your practice? Contact our team in Ghana for a demo or support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-2xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                                        📞
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Phone</p>
                                        <a href="tel:+233546640723" className="block text-foreground-muted hover:text-primary transition-colors">+233 (0) 546 640 723</a>
                                        <a href="tel:+233547271244" className="block text-foreground-muted hover:text-primary transition-colors">+233 (0) 547 271 244</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Email</p>
                                        <a href="mailto:info@cloudifycare.com" className="block text-foreground-muted hover:text-primary transition-colors">info@cloudifycare.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                                        📍
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Location</p>
                                        <p className="text-foreground-muted">Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark p-8 rounded-2xl text-white">
                            <h3 className="text-xl font-bold mb-4">Why choose us?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">✓ Built specifically for Ghana</li>
                                <li className="flex items-center gap-2">✓ 24/7 Local Support</li>
                                <li className="flex items-center gap-2">✓ Secure Cloud Storage</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+233..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none" placeholder="I'm interested in..." />
                            </div>

                            <Button size="lg" fullWidth>Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}
