"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./SectionWrapper";

interface SectionHeaderProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    label?: string;
    centered?: boolean;
    className?: string;
    delay?: number;
}

export const SectionHeader = ({ 
    title, 
    subtitle, 
    label, 
    centered = true, 
    className = "",
    delay = 0 
}: SectionHeaderProps) => {
    return (
        <div className={`${centered ? "text-center mx-auto" : ""} max-w-4xl mb-16 ${className}`}>
            <FadeIn delay={delay}>
                {label && (
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        {label}
                    </span>
                )}
                <h2>{title}</h2>
                {subtitle && (
                    <div className={`mt-4 ${centered ? "mx-auto" : ""}`}>
                        {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
                    </div>
                )}
            </FadeIn>
        </div>
    );
};
