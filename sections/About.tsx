"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CodeTerminal = () => {
    return (
        <div className="w-full h-full bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
            <div className="bg-[#161b22] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-white/40">maxima_solutions.tsx</div>
            </div>
            <div className="p-4 font-mono text-xs space-y-2 overflow-hidden">
                <div className="flex gap-2">
                    <span className="text-purple-400">import</span>
                    <span className="text-blue-300">React</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-300">'react'</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-yellow-300">BuildSuccess</span>
                    <span className="text-purple-400">=</span>
                    <span className="text-blue-300">()</span>
                    <span className="text-purple-400">=&gt;</span>
                    <span className="text-blue-300">{`{`}</span>
                </div>
                <div className="pl-4 flex gap-2">
                    <span className="text-purple-400">return</span>
                    <span className="text-gray-400">(</span>
                </div>
                <div className="pl-8 flex gap-2">
                    <span className="text-blue-300">{`<`}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-blue-300">{`>`}</span>
                    <span className="text-white">Growing...</span>
                    <span className="text-blue-300">{`</`}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-blue-300">{`>`}</span>
                </div>
                <div className="pl-4 text-gray-400">);</div>
                <div className="text-blue-300">{`}`}</div>

                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-primary mt-4"
                />
            </div>
        </div>
    );
};

const SystemDashboard = () => {
    return (
        <div className="w-full h-full glass-card rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-bold tracking-widest text-primary uppercase">System Healthy</div>
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
            <div className="space-y-4">
                {[
                    { label: 'Uptime', val: '99.9%' },
                    { label: 'Latency', val: '24ms' },
                    { label: 'Traffic', val: '1.2TB' }
                ].map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-[10px] text-white/60 mb-1">
                            <span>{item.label}</span>
                            <span>{item.val}</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: item.val }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-2">
                <div className="h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-[8px] text-text-secondary uppercase">Builds</span>
                    <span className="text-xs font-bold text-white">2.4k</span>
                </div>
                <div className="h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-[8px] text-text-secondary uppercase">Tests</span>
                    <span className="text-xs font-bold text-white">Passed</span>
                </div>
            </div>
        </div>
    );
};

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 !leading-tight">
                            MERN Stack Development, <br />
                            <span className="text-primary">Digital IT Solutions</span> <br />
                            Company in Pune.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We understand your business is unique and deserves personalized support.
                            As a trusted global IT solutions company based in Pune, we specialize in branding,
                            digital marketing, mobile and web app development, all tailored to drive your growth.
                        </p>
                        <Link href="/about">
                            <motion.button
                                whileHover={{ x: 10 }}
                                className="group flex items-center space-x-2 text-white font-bold text-lg"
                            >
                                <span>Read More</span>
                                <svg
                                    className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <div className="relative z-10 grid grid-cols-5 grid-rows-5 gap-2 sm:gap-4 aspect-square sm:aspect-[4/3]">
                            {/* Code Terminal - Main Element */}
                            <div className="col-span-4 row-span-4 z-20">
                                <CodeTerminal />
                            </div>

                            {/* System Dashboard - Floating Panel */}
                            <div className="col-start-2 sm:col-start-3 col-span-4 sm:col-span-3 row-start-3 row-span-3 z-30 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4">
                                <SystemDashboard />
                            </div>

                            {/* Decorative nodes - Hidden on smallest screens */}
                            <div className="col-start-1 row-start-5 hidden sm:flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center animate-spin-slow">
                                    <div className="w-2 h-0.5 bg-primary" />
                                </div>
                            </div>
                        </div>

                        {/* Offset decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-deep/20 rounded-full blur-3xl z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
