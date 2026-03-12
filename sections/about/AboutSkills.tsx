'use client';

import { motion } from 'framer-motion';

const SkillBar = ({ label, percentage, delay }: { label: string; percentage: number; delay: number }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-end">
            <span className="text-sm font-bold tracking-widest uppercase">{label}</span>
            <span className="text-primary font-mono font-bold">{percentage}%</span>
        </div>
        <div className="h-3 w-full bg-muted rounded-full overflow-hidden border border-border/50 p-0.5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeOut", delay }}
                className="h-full bg-primary rounded-full relative"
            >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
            </motion.div>
        </div>
    </div>
);

export const AboutSkills = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Skills</span>
                        <h2 className="text-2xl md:text-4xl font-bold mb-8 !leading-tight">Striving for <span className="text-primary">Excellence</span></h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            As a leading web development company in Pune, we never settle for just “good.”
                            We constantly strive for excellence and improvement in all we do. That’s our promise.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {[
                                { title: "Innovative", desc: "Always pushing boundaries" },
                                { title: "Reliable", desc: "Delivering on our promises" },
                                { title: "Experienced", desc: "Decades of combined expertise" },
                                { title: "Client-Focused", desc: "Your success is our priority" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex flex-col border-l-2 border-primary/30 pl-4"
                                >
                                    <span className="font-bold text-foreground">{item.title}</span>
                                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 bg-card border border-border/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Core Competencies</h3>
                        </div>

                        <SkillBar label="Full Stack Development" percentage={100} delay={0.2} />
                        <SkillBar label="UI Design / UX" percentage={90} delay={0.4} />
                        <SkillBar label="ERP Consultants" percentage={100} delay={0.6} />
                        <SkillBar label="Cyber Security Solutions" percentage={100} delay={0.8} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
