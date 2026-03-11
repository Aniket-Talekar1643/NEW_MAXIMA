"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Building2, Landmark, GraduationCap, HeartPulse, Stethoscope, ShoppingBag, Truck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
    { name: "Healthcare & MedTech", icon: <HeartPulse className="w-8 h-8" /> },
    { name: "Finance & Fintech", icon: <Landmark className="w-8 h-8" /> },
    { name: "E-Commerce & Retail", icon: <ShoppingBag className="w-8 h-8" /> },
    { name: "Education & EdTech", icon: <GraduationCap className="w-8 h-8" /> },
    { name: "Logistics & Supply", icon: <Truck className="w-8 h-8" /> },
    { name: "Real Estate", icon: <Building2 className="w-8 h-8" /> },
];

export const Industries = () => {
    return (
        <SectionWrapper id="industries" className="bg-background">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Industries We <span className="text-primary">Serve</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-lg text-muted-foreground">
                        We deliver tailored digital solutions that meet the specific regulatory and operational demands of diverse global industries.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                {industries.map((ind, i) => (
                    <FadeIn key={ind.name} delay={0.1 * i} direction="up">
                        <motion.div
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                                rest: { scale: 1, y: 0 },
                                hover: {
                                    scale: 1.05,
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300 }
                                }
                            }}
                            className="flex flex-col items-center justify-center p-6 sm:p-8 bg-card border border-border rounded-[2rem] sm:rounded-3xl hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-colors group cursor-default h-full text-center relative overflow-hidden"
                        >
                            <motion.div
                                variants={{
                                    rest: { y: 0, scale: 1 },
                                    hover: { y: -8, scale: 1.2 }
                                }}
                                className="text-muted-foreground group-hover:text-primary transition-colors mb-5"
                            >
                                {ind.icon}
                            </motion.div>
                            <h3 className="font-semibold text-foreground relative z-10">{ind.name}</h3>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
};
