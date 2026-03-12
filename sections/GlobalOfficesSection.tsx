'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WorldMap from './WorldMap';

const stats = [
    { value: '1', label: 'Core Office' },
    { value: '40+', label: 'Countries Reached' },
    { value: '200+', label: 'Team Members' },
];

const GlobalOfficesSection: React.FC = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-24 lg:py-32 bg-background/50"
        >
            {/* Background subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 80% 50%, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
                }}
            />

            {/* Faint top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* ───── Left: Content ───── */}
                    <motion.div
                        className="w-full lg:w-[42%] flex-shrink-0 text-center lg:text-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-5 h-px bg-primary" />
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                                Global Offices
                            </span>
                            <span className="w-5 h-px bg-primary" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
                            Our global{' '}
                            <span className="text-primary">footprint</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                            Our strategic headquarters in Pune serves as the heartbeat of our operations, 
                            enabling us to deliver excellence to clients worldwide.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                                    <span className="text-xs text-text-secondary uppercase tracking-wider mt-1">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Office List Pills */}
                        <motion.div
                            className="flex flex-wrap justify-center lg:justify-start gap-2 mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {[
                                { city: 'Pune', flag: '🇮🇳' },
                            ].map((office) => (
                                <span
                                    key={office.city}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-text-secondary hover:border-primary hover:text-foreground transition-all duration-300"
                                >
                                    <span>{office.flag}</span>
                                    {office.city}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ───── Right: World Map ───── */}
                    <motion.div
                        className="w-full lg:w-[58%] relative"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    >
                        {/* Decorative glow behind map */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                        <WorldMap />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GlobalOfficesSection;
