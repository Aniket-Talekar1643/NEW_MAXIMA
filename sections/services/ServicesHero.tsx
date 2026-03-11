'use client';

import { motion } from 'framer-motion';

export const ServicesHero = () => {
    return (
        <section className="pt-40 pb-24 relative overflow-hidden flex items-center min-h-[60vh]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[60%] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Our Services
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 !leading-tight tracking-tight">
                        A Global Software Development <br className="hidden md:block" />Company Based in <span className="text-primary relative inline-block">
                            Pune
                            <motion.svg className="absolute -bottom-2 left-0 w-full text-primary" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <motion.path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                            </motion.svg>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        As a global software development company based in Pune, we provide solutions from consulting
                        to implementation that align with your goals and deliver measurable value.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
};
