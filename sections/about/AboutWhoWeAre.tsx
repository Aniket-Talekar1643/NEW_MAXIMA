'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutWhoWeAre = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-muted/30 border-y border-border/50">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="p-2 sm:p-4 rounded-[2.5rem] relative aspect-video bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl"
                    >
                        <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                            <iframe
                                className="w-full h-full border-0 absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                                src="https://www.youtube.com/embed/awPNUjWgVF0"
                                title="Who We Are"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Who We Are</span>
                        <h2 className="text-2xl md:text-4xl font-bold mb-8 !leading-tight">
                            Your Premier Web Development <br />
                            Company in <span className="text-primary relative inline-block">
                                Pune
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 -rotate-2" />
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Established in 2009, Maxima Business Solutions is a leading web development company in Pune,
                            crafting innovative digital solutions. We blend technology and talent to empower global
                            organizations with end-to-end digital products, helping them scale and gain a competitive edge.
                            We also create custom branding strategies for powerful audience impact.
                        </p>

                        <Link href="/contact" className="inline-block relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors" />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg"
                            >
                                <span>Get in Touch</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
