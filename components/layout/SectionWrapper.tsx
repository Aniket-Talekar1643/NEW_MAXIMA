"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const SectionWrapper = ({
    children,
    id,
    className,
    ...props
}: SectionWrapperProps) => {
    return (
        <section id={id} className={cn("py-20 md:py-28 relative", className)} {...props}>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, ...directions[direction] },
                show: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { type: "spring", stiffness: 50, delay, duration: 0.8 },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
