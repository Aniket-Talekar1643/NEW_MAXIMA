"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    suffix?: string;
}

export function Counter({
    value,
    direction = "up",
    className,
    suffix = "",
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return (
        <span className={className}>
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
}
