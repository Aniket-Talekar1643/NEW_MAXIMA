'use client';

import { motion } from 'framer-motion';
import {
    Code2,
    Layout,
    Smartphone,
    Palette,
    Cloud,
    TrendingUp
} from 'lucide-react';

const services = [
    { icon: Code2, title: "Software Development", desc: "Tailor-made unique business level software solutions built to match your processes precisely." },
    { icon: Layout, title: "Web Applications", desc: "Modern scalable web applications designed to enhance user experience and performance." },
    { icon: Smartphone, title: "Mobile Apps", desc: "Flexible mobile development for Android and iOS platforms." },
    { icon: Palette, title: "UI/UX Design", desc: "User-first interfaces and experiences designed to improve engagement." },
    { icon: Cloud, title: "Cloud Solutions", desc: "Secure cloud deployment, hosting, and infrastructure management." },
    { icon: TrendingUp, title: "Digital Marketing", desc: "Strategic digital marketing solutions including SEO, advertising, and branding." }
];

const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export const ServicesGrid = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        OUR SERVICES
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight"
                    >
                        Need someone to{" "}
                        <span className="relative inline-block text-primary">
                            <span className="relative z-10">fuel</span>
                            <motion.span
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="absolute bottom-1 left-0 h-3 bg-primary/20 -z-10 -rotate-2"
                            />
                        </span>{" "}
                        your idea?
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 20 }
                            }}
                            className="bg-card/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <motion.div
                                className="w-20 h-20 rounded-[1.5rem] bg-background border border-border/50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-lg relative z-10"
                            >
                                <service.icon className="text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300" size={36} />
                            </motion.div>

                            <h3 className="text-xl font-bold mb-4 text-foreground relative z-10">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed relative z-10">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
