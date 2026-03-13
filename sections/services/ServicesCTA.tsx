'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const ServicesCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[4rem] bg-primary/5 border border-primary/20 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
                    <div className="relative z-10">
                        <h2 className="mb-8">Ready to <span className="text-primary">transform</span> your business?</h2>
                        <p className="mb-12 max-w-2xl mx-auto">
                            Let's build something extraordinary together. Our team of experts is ready to bring your vision to life.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-colors"
                            >
                                Start Your Project
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
