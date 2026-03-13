"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ClipboardCheck, Palette, Code, Ship } from 'lucide-react';

const steps = [
    {
        step: 'Step 1',
        title: 'Planning & Strategy',
        desc: 'Based on the requirements, we create a roadmap with timelines, choose the right technology stack, and define milestones for smooth execution.',
        icon: ClipboardCheck,
    },
    {
        step: 'Step 2',
        title: 'UI/UX Design',
        desc: 'Our designers craft intuitive wireframes and stunning mockups focused on user experience and seamless navigation.',
        icon: Palette,
    },
    {
        step: 'Step 3',
        title: 'Development',
        desc: 'Using modern tech stacks like MERN, we build scalable and secure solutions with periodic updates and testing.',
        icon: Code,
    },
    {
        step: 'Step 4',
        title: 'Deployment & Support',
        desc: 'We ensure a smooth launch followed by comprehensive support and maintenance to keep your business running smoothly.',
        icon: Ship,
    }
];

export const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-32 relative overflow-hidden bg-muted/30" ref={containerRef}>
            {/* Decorative background glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-deep/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                    >
                        Workflow
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-6 !leading-tight"
                    >
                        The Exceptional <br />
                        <span className="text-gradient">Craftsmen of Digital</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Centered Scroll Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/10 -translate-x-1/2 hidden md:block" />

                    <svg className="absolute left-1/2 top-0 bottom-0 w-2 h-full -translate-x-1/2 hidden md:block" preserveAspectRatio="none">
                        <motion.line
                            x1="4" y1="0" x2="4" y2="100%"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            className="text-primary"
                            style={{ pathLength }}
                        />
                    </svg>

                    {/* Glowing Scroll Head */}
                    <motion.div
                        className="absolute left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)] -translate-x-1/2 hidden md:block z-20"
                        style={{
                            top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </motion.div>

                    <div className="space-y-24 md:space-y-40">
                        {steps.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.title} className="relative flex items-center justify-between group">
                                    {/* Step Card */}
                                    <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1' : 'md:order-2 ml-auto'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true, margin: "-10%" }}
                                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="relative group mt-8 md:mt-0"
                                        >
                                            {/* Final Icon Position: "Outside" the card */}
                                            <div className={`absolute -top-8 ${isEven ? 'md:-left-10' : 'md:-right-10'} left-1/2 -translate-x-1/2 md:translate-x-0 w-20 h-20 rounded-3xl bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center text-white z-20 transition-all group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-primary/60 border-4 border-background`}>
                                                <item.icon size={40} />
                                            </div>

                                            {/* Card Content with Inner Overflow for patterns */}
                                            <div className="glass-card p-10 md:p-12 rounded-[2.5rem] relative border-r-4 border-r-primary group-hover:bg-primary/5 transition-all overflow-hidden h-full">
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px] -z-10 group-hover:scale-125 transition-transform duration-500" />
                                                
                                                <div className="mb-8 flex items-center justify-between">
                                                    <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase font-black">{item.step}</span>
                                                    <div className="w-12 h-1 bg-primary/20 rounded-full" />
                                                </div>

                                                <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed text-lg">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Central Node Circle */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-30">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            className="w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] bg-background relative"
                                        >
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                            {/* Rotating ring */}
                                            <div className="absolute inset-0 rounded-full border border-primary/20 border-t-primary animate-spin" />
                                        </motion.div>

                                        {/* Horizontal connector line */}
                                        <motion.div
                                            initial={{ width: 0, opacity: 0 }}
                                            whileInView={{ width: '80px', opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className={`absolute top-1/2 h-[2px] bg-gradient-to-r from-primary to-transparent ${isEven ? 'left-12' : 'right-12 rotate-180'}`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
