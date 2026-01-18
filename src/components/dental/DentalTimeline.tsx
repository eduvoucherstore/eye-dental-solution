"use client";

import { motion } from "framer-motion";

export const DentalTimeline = () => {
    return (
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
    );
};
