'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutLeadership = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
                    <h2 className="text-3xl md:text-5xl font-bold !leading-tight">Guided by <span className="text-primary">Visionaries</span></h2>
                </motion.div>

                <div className="space-y-32">
                    {/* Profile 1: Rajesh Sivapalan */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Director</span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Mr. Rajesh Sivapalan</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                23 years of experience in the IT domain, Rajesh is a digital transformation enthusiast.
                                Rajesh spent the last one and half decades assisting clients with their digital transformation journey—from
                                a humble website designing to social media marketing, sophisticated mobile applications,
                                ERP Solutions, SAP Implementation, Cyber Security, Lead Gen Google / FB Ads and much more.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                    <div className="text-2xl font-bold text-primary mb-1">23+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</div>
                                </div>
                                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Digital Trans.</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative aspect-[3/4] max-w-sm mx-auto lg:ml-auto"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-6 scale-105 transition-transform hover:rotate-12 duration-500" />
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-border/50 bg-card shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <img
                                    src="/About/sivapalan-sir.png"
                                    alt="Rajesh Sivapalan"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Profile 2: Brig Ajit Kapoor */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative aspect-[3/4] max-w-sm mx-auto lg:mr-auto order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] -rotate-6 scale-105 transition-transform hover:-rotate-12 duration-500" />
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-border/50 bg-card shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <img
                                    src="/About/ajit.png"
                                    alt="Brig Ajit Kapoor"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Director – Strategy And Planning</span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Brig Ajit Kapoor (Retd)</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                34 years of experience in defence. A decorated Gunner Officer, who possesses precisely the
                                experience and expertise needed to pinpoint and understand the needs of the opportunities
                                or challenges in Defence Acquisition.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                He has a deep vision of first-hand knowledge combined with sophisticated analytical skills
                                and strategic insights to help firms increase certainty around vital Defence business
                                decisions. His approach to projects are pragmatic and open-minded, and he has a natural
                                urge to excel against tight timeframes.
                            </p>
                            <div className="flex gap-4 mt-6">
                                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                    <div className="text-2xl font-bold text-primary mb-1">34+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Def.</div>
                                </div>
                                <div className="p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                    <div className="text-2xl font-bold text-primary mb-1">Top</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Strategy</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
