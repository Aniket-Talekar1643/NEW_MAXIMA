"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "@/hooks/media-query";

const technologies = [
    {
        category: "Frontend",
        description: "Crafting beautiful, responsive user interfaces with modern frameworks and pixel-perfect precision.",
        tools: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion"]
    },
    {
        category: "Backend",
        description: "Building robust, scalable server architectures and secure APIs to power your business logic.",
        tools: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"]
    },
    {
        category: "Database",
        description: "Optimizing data storage and retrieval with the most reliable modern database systems.",
        tools: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"]
    },
    {
        category: "CMS & Cloud",
        description: "Seamlessly deploying and managing your application on world-class cloud infrastructure.",
        tools: ["WordPress", "AWS", "Vercel", "Docker", "Sanity"]
    },
];

const cardVariants1: Variants = {
    offscreen: {
        x: -1500,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 1.5,
        },
    },
};

const cardVariants2: Variants = {
    offscreen: {
        x: 1500,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 1.5,
        },
    },
};

export const TechStack = () => {
    const isSmall = useMediaQuery("(max-width: 1024px)");

    return (
        <SectionWrapper id="tech-stack" className="bg-primary/[0.04] border-y border-border/40 py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mb-16">
                <div className="max-w-3xl">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Modern <span className="text-primary">Tech Stack</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg text-muted-foreground">
                            We leverage completely modern, enterprise-grade technologies to build fast, secure, and highly scalable applications that outpace the competition.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
                {/* Row 1: Frontend & Backend */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: isSmall ? 0.1 : 0.3 }}
                    className="w-full"
                >
                    <motion.div className="flex flex-wrap md:flex-nowrap gap-6 px-6 md:px-12 lg:px-16" variants={cardVariants1}>
                        {[technologies[0], technologies[1]].map((tech, i) => (
                            <TechCard key={tech.category} tech={tech} isSmall={isSmall} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Row 2: Database & Cloud */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: isSmall ? 0.1 : 0.3 }}
                    className="w-full"
                >
                    <motion.div className="flex flex-wrap md:flex-nowrap justify-end gap-6 px-6 md:px-12 lg:px-16" variants={cardVariants2}>
                        {[technologies[2], technologies[3]].map((tech, i) => (
                            <TechCard key={tech.category} tech={tech} isSmall={isSmall} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

const TechCard = ({ tech, isSmall }: { tech: typeof technologies[0]; isSmall: boolean }) => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: { scale: 1, y: 0 },
                hover: {
                    scale: 1.02,
                    y: -5,
                    border: "1px solid hsl(var(--primary)/0.5)",
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                }
            }}
            className="bg-card/80 backdrop-blur-md border border-border p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group w-full md:w-[450px] min-h-[280px] flex flex-col justify-between"
        >
            <motion.div
                variants={{
                    rest: { opacity: 0, scale: 0.5 },
                    hover: { opacity: 1, scale: 2 }
                }}
                className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 transition-colors group-hover:bg-primary/10"
            />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <motion.div
                        variants={{
                            rest: { scale: 1, backgroundColor: "hsl(var(--primary)/0.6)" },
                            hover: { scale: 1.5, backgroundColor: "hsl(var(--primary))" }
                        }}
                        className="w-3 h-3 rounded-full"
                    />
                    {tech.category}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors">
                    {tech.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {tech.tools.map((tool, index) => (
                        <motion.span
                            key={tool}
                            variants={{
                                rest: { y: isSmall ? 0 : 10, opacity: isSmall ? 1 : 0 },
                                hover: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 },
                                },
                            }}
                            className="px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-[10px] uppercase tracking-wider font-bold border border-border/50 group-hover:border-primary/20 backdrop-blur-sm shadow-sm"
                        >
                            {tool}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Premium Glass Reveal */}
            <motion.div
                variants={{
                    rest: { opacity: 0, x: "-100%" },
                    hover: { opacity: 1, x: "100%", transition: { duration: 1, ease: "easeInOut" } }
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -skew-x-12"
            />
        </motion.div>
    );
};
