'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { projects } from '@/constants/portfolio';

const LaptopMockup = ({ image }: { image: string }) => (
    <div className="relative w-full max-w-[600px] mx-auto perspective-1000 group">
        {/* Screen */}
        <div className="relative bg-black rounded-t-xl border-[8px] border-zinc-800 dark:border-[#21262d] aspect-[16/10] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-x-2">
            <img src={image} alt="Project Screenshot" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Base */}
        <div className="relative h-4 bg-zinc-700 dark:bg-[#30363d] rounded-b-xl shadow-xl w-[105%] -left-[2.5%] transition-transform duration-500 group-hover:-translate-y-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-zinc-900 dark:bg-[#161b22] rounded-b-lg" />
        </div>

        {/* Reflection */}
        <div className="absolute -bottom-8 left-[5%] right-[5%] h-8 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

export const PortfolioList = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <SectionHeader 
                title={<>Our <span className="text-primary italic">Portfolio</span></>}
                subtitle="Explore our recent projects and successful client collaborations. We blend technology and talent to empower global organizations."
                label="Case Studies"
                centered={true}
            />

            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="space-y-40 md:space-y-64 pb-20">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 1, type: "spring", stiffness: 50, damping: 20 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 relative`}
                            >
                                {/* Left Side: Content */}
                                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-primary text-xs font-bold tracking-widest uppercase shadow-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        Featured Project
                                    </motion.div>
                                    <h3 className="tracking-tight uppercase italic">{project.name}</h3>
                                    <p className="max-w-xl mx-auto lg:mx-0">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                                        {['ReactJs', 'NextJs', 'Tailwind', 'Framer'].map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.1) }}
                                                className="text-xs font-bold text-foreground bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/5 px-4 py-2 rounded-full transition-colors cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Mockup */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="relative z-10"
                                    >
                                        <LaptopMockup image={project.image} />
                                    </motion.div>

                                    {/* Decorative Glows */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
                                    <div className="absolute -inset-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
