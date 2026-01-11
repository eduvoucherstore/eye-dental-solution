import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                                <Image
                                    src="/2cloudy.png"
                                    alt="Cloudify Care"
                                    width={160}
                                    height={40}
                                    className="object-contain h-8 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Comprehensive practice management tailored for African healthcare. Secure, reliable, and easy to use.
                        </p>
                        <div className="pt-2">
                            <div className="flex gap-4">
                                {/* Social Icons - SVGs */}
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.001zm0-2c-2.703 0-3.037.012-4.12.06-1.1.05-1.85.234-2.52.494a6.902 6.902 0 00-2.51 1.63 6.902 6.902 0 00-1.63 2.51c-.26.67-.444 1.42-.494 2.52C.987 8.356 1 8.665 1 11.516v.468c0 2.85.013 3.16.06 4.25.05 1.1.234 1.85.494 2.52a6.902 6.902 0 001.63 2.51 6.902 6.902 0 002.51 1.63c.67.26 1.42.444 2.52.494 1.09.049 1.399.06 4.25.06h.468c2.85 0 3.16-.013 4.25-.06 1.1-.05 1.85-.234 2.52-.494a6.902 6.902 0 002.51-1.63 6.902 6.902 0 001.63-2.51c.26-.67.444-1.42.494-2.52.049-1.09.06-1.399.06-4.25v-.468c0-2.85-.013-3.16-.06-4.25-.05-1.1-.234-1.85-.494-2.52a6.902 6.902 0 00-1.63-2.51 6.902 6.902 0 00-2.51-1.63c-.67-.26-1.42-.444-2.52-.494C15.356.987 15.047 1 12.196 1h-.468zM12.315 5.895a5.817 5.817 0 100 11.634 5.817 5.817 0 000-11.634zm0 9.634a3.817 3.817 0 110-7.634 3.817 3.817 0 010 7.634zm5.152-8.586a1.332 1.332 0 110 2.664 1.332 1.332 0 010-2.664z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-1">
                        <h4 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                            <span>Solutions</span>
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/eye-care" className="text-slate-400 hover:text-blue-400 font-medium transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Eye Care Software
                                </Link>
                            </li>
                            <li>
                                <Link href="/dental-care" className="text-slate-400 hover:text-blue-400 font-medium transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Dental Care Software
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-slate-400 hover:text-blue-400 font-medium transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Pricing Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h4 className="font-heading font-bold text-white text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-blue-400 font-medium transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-blue-400 font-medium transition-colors">Contact Support</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-400 hover:text-blue-400 font-medium transition-colors">Blog & Updates</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - Better styled */}
                    <div className="lg:col-span-1">
                        <h4 className="font-heading font-bold text-white text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-slate-400">
                                <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Accra, Ghana<br />West Africa</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:+233546640723" className="group-hover:text-white transition-colors">+233 (0) 546 640 723</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:+233547271244" className="group-hover:text-white transition-colors">+233 (0) 547 271 244</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:info@cloudifycare.com" className="group-hover:text-white transition-colors">info@cloudifycare.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Cloudify Care. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
