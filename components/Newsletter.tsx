"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const Newsletter = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden text-center">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                        >
                            Newsletter
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 !leading-tight"
                        >
                            Stay in the <span className="text-gradient">Tech Loop</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-text-secondary mb-6 sm:mb-10 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
                        >
                            Subscribe to our monthly newsletter for the latest tech news, market insights, and exclusive business growth tips.
                        </motion.p>
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-background/50 border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                            />
                            <Button className="rounded-full px-8 sm:px-10 h-12 sm:h-14 font-bold shadow-xl shadow-primary/20 text-sm sm:text-base shrink-0">
                                Subscribe <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                            </Button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
