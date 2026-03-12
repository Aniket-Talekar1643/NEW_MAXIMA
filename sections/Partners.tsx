"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/media-query";
import { SectionWrapper, FadeIn } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Using random placeholder images for partner logos
const azure = "https://picsum.photos/id/1/100/50?grayscale";
const adobe = "https://picsum.photos/id/2/100/50?grayscale";
const automation = "https://picsum.photos/id/3/100/50?grayscale";
const bitbucket = "https://picsum.photos/id/4/100/50?grayscale";
const conga = "https://picsum.photos/id/5/100/50?grayscale";
const sap = "https://picsum.photos/id/6/100/50?grayscale";
const aws = "https://picsum.photos/id/7/100/50?grayscale";
const automation8 = "https://picsum.photos/id/8/100/50?grayscale";
const callidus = "https://picsum.photos/id/9/100/50?grayscale";
const salesforce = "https://picsum.photos/id/10/100/50?grayscale";
const docusign = "https://picsum.photos/id/11/100/50?grayscale";
const boomi = "https://picsum.photos/id/12/100/50?grayscale";
const copado = "https://picsum.photos/id/13/100/50?grayscale";
const confluence = "https://picsum.photos/id/14/100/50?grayscale";
const mulesoft = "https://picsum.photos/id/15/100/50?grayscale";
const automation16 = "https://picsum.photos/id/16/100/50?grayscale";
const salesforce17 = "https://picsum.photos/id/17/100/50?grayscale";

const cardVariants1: Variants = {
    offscreen: {
        x: -100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        },
    },
};

export const Partners = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const isSmall = useMediaQuery("(max-width: 768px)");

    const boxClasses = "w-[120px] h-[100px] md:w-[150px] md:h-[120px] bg-card border border-border rounded-xl flex items-center justify-center p-4 mb-4 shadow-sm hover:border-primary/50 transition-colors";

    return (
        <SectionWrapper id="partners" className="bg-background overflow-hidden py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-[500px] md:h-[600px] border-y border-border/50 py-12">
                {/* Left Side: Text Content */}
                <motion.div
                    className="lg:pr-12 relative z-10 bg-background/80 backdrop-blur-sm p-4 rounded-xl h-fit"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={cardVariants1}>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                            Our partners &amp; <br />
                            <span className="text-primary">strategic alliances</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            Maxima has partnered with the most innovative enterprise software
                            companies to provide you with tailored, data-driven solutions that
                            simplify, enable, and empower you to solve your biggest business
                            challenges.
                        </p>
                        <Button size="lg" className="rounded-full shadow-lg">
                            View our partners
                            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Animated Marquee Columns */}
                <motion.div
                    className="relative max-h-[500px] md:max-h-[600px] overflow-hidden rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    ref={ref}
                >
                    {/* Top/Bottom gradient masks for smooth fade out */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-4 md:gap-6 justify-center lg:justify-end -rotate-6 scale-110 md:scale-100">
                        {/* Column 1 */}
                        <motion.div
                            className="flex flex-col pt-12"
                            initial={{ y: -500 }}
                            animate={isInView ? { y: [-500, 0, -500] } : {}}
                            transition={{
                                duration: 35,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[azure, adobe, automation, bitbucket, conga, sap, azure, adobe, automation].map((src, i) => (
                                <div key={i} className={boxClasses}>
                                    <Image src={src} alt="Partner Logo" width={97} height={102} className="opacity-70 dark:invert" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Column 2 (Middle) - Moves opposite direction */}
                        <motion.div
                            className="flex flex-col"
                            initial={{ y: 0 }}
                            animate={isInView ? { y: [0, -500, 0] } : {}}
                            transition={{
                                duration: 40,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[aws, automation8, callidus, salesforce, docusign, salesforce17, aws, automation8, callidus].map((src, i) => (
                                <div key={i} className={boxClasses}>
                                    <Image src={src} alt="Partner Logo" width={97} height={102} className="opacity-70 dark:invert" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div
                            className="flex flex-col pt-24"
                            initial={{ y: -500 }}
                            animate={isInView ? { y: [-500, 0, -500] } : {}}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[boomi, copado, confluence, mulesoft, automation16, boomi, copado, confluence, mulesoft].map((src, i) => (
                                <div key={i} className={boxClasses}>
                                    <Image src={src} alt="Partner Logo" width={97} height={102} className="opacity-70 dark:invert" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
