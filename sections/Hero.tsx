"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useMousePosition } from '@/hooks/useMousePosition';

const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`inline-flex flex-wrap ${className}`}
        >
            {characters.map((char, index) => (
                <motion.span
                    variants={childVariants}
                    key={index}
                    className={char === " " ? "mr-[0.25em]" : ""}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

const FloatingKeywords = () => {
    const [mounted, setMounted] = React.useState(false);
    const keywords = ['MERN', 'DEVELOPMENT', 'AI', 'SEO', 'CLOUD', 'SECURITY', 'UI/UX', 'SEO', 'MOBILE'];

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            {keywords.map((word, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, "-100%"],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    className="absolute text-xs font-mono tracking-widest text-primary whitespace-nowrap"
                >
                    {word}
                </motion.div>
            ))}
        </div>
    );
};

export const Hero = () => {
    const { x, y } = useMousePosition();
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(mouseY, [0, 1000], [5, -5]);
    const rotateY = useTransform(mouseX, [0, 1500], [-5, 5]);

    const illustrationX = useTransform(mouseX, [0, 1500], [15, -15]);
    const illustrationY = useTransform(mouseY, [0, 1000], [15, -15]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-glow">
            {/* Mouse Follower Glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`,
                }}
            />
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            {/* Tech Floating Elements */}
            <FloatingKeywords />

            {/* Binary Stream Effect */}
            <div className="absolute top-0 right-10 bottom-0 w-20 pointer-events-none opacity-5 flex flex-col items-center justify-around text-xs font-mono text-primary select-none overflow-hidden">
                {["10101", "01110", "11001", "00111", "10011", "01101", "11010", "00101", "10110", "01011", "11100", "00011", "10001", "01110", "11000", "00110", "10100", "01001", "11011", "00100"].map((bin, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, 40, 0], opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 3 + i % 5, repeat: Infinity }}
                    >
                        {bin}
                    </motion.div>
                ))}
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-deep/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 glass">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold text-primary tracking-widest uppercase">PUNE'S TOP IT AGENCY</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.1] tracking-tight mb-6 flex flex-col">
                            <TextReveal text="Leading Software" />
                            <span className="text-primary truncate h-[1.2em]">
                                <TextReveal text="Development Company" />
                            </span>
                            <span className="flex flex-wrap items-center">
                                <TextReveal text="in " />
                                <span className="text-gradient ml-2">
                                    <TextReveal text="Pune" />
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg leading-relaxed min-h-[4rem] sm:min-h-[3.5rem] flex flex-col justify-center">
                            <span>
                                We are a top-rated software development company in Pune, specializing in{" "}
                                <span className="relative inline-block overflow-hidden h-7 sm:h-8 align-middle">
                                    <motion.span
                                        key="animated-text"
                                        animate={{ y: [0, -28, -56, -84, 0] }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            times: [0, 0.25, 0.5, 0.75, 1]
                                        }}
                                        className="flex flex-col text-foreground font-bold"
                                    >
                                        <span className="h-7 sm:h-8">MERN stack development</span>
                                        <span className="h-7 sm:h-8 text-primary">Mobile app development</span>
                                        <span className="h-7 sm:h-8">SaaS Product Solutions</span>
                                        <span className="h-7 sm:h-8 text-primary-accent">AI-Driven Applications</span>
                                    </motion.span>
                                </span>
                                , digital marketing, and transformation.
                            </span>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <MagneticButton>
                                <Link 
                                    href="/contact"
                                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary-gradient text-white font-bold text-base sm:text-lg shadow-xl shadow-primary/20 transition-all hover:shadow-primary/40 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 w-full sm:w-auto"
                                >
                                    <span>Contact Us</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </MagneticButton>
                            <MagneticButton strength={20}>
                                <Link 
                                    href="/software-development-services-pune"
                                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-border text-foreground font-bold text-base sm:text-lg bg-muted/40 backdrop-blur-sm transition-all hover:bg-muted/60 hover:scale-105 active:scale-95 flex items-center justify-center w-full sm:w-auto"
                                >
                                    Explore Services
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ x: illustrationX, y: illustrationY, rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Tech Illustration Enhanced */}
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            {/* Spinning Orbits */}
                            <div className="absolute w-[90%] h-[90%] border border-primary/20 rounded-full animate-spin-slow" />
                            <div className="absolute w-[70%] h-[70%] border-t border-b border-primary/30 rounded-full animate-reverse-spin-slow" />
                            <div className="absolute w-[50%] h-[50%] border-l border-r border-primary/40 rounded-full animate-spin-slow" style={{ animationDuration: '4s' }} />

                            {/* Rotating Operators Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full"
                            >
                                {['</>', '{}', '&&', '[]', '=>'].map((sym, i) => {
                                    const angle = (i * 72) * (Math.PI / 180);
                                    const x = Math.cos(angle) * 160;
                                    const y = Math.sin(angle) * 160;

                                    return (
                                        <motion.div
                                            key={i}
                                            style={{
                                                position: 'absolute',
                                                left: '50%',
                                                top: '50%',
                                                x,
                                                y,
                                            }}
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                            className="text-primary/40 font-mono font-bold text-xl -translate-x-1/2 -translate-y-1/2"
                                        >
                                            {sym}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Central Core */}
                            <div className="relative w-40 h-40 bg-primary/20 rounded-3xl rotate-45 flex items-center justify-center overflow-hidden glass shadow-2xl shadow-primary/40 animate-pulse">
                                {/* Moving scan line */}
                                <motion.div
                                    animate={{ y: [-160, 160] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm -rotate-45"
                                />
                                <div className="rotate-[-45deg] flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-xl mb-2 overflow-hidden border border-primary/30">
                                        <video
                                            src="/Untitled design.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono text-foreground/60 uppercase group-hover:text-primary transition-colors">
                                        Software Development Company in Pune
                                    </span>
                                </div>
                            </div>

                            {/* Data Node 1 */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 glass-card p-4 rounded-2xl border border-primary/30"
                            >
                                <div className="flex gap-1 mb-2">
                                    <div className="w-4 h-1 bg-primary rounded" />
                                    <div className="w-2 h-1 bg-primary/30 rounded" />
                                </div>
                                <div className="text-[10px] font-mono text-primary">TRANSFORM_DATA(src)</div>
                            </motion.div>

                            {/* Data Node 2 */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-10 glass-card p-4 rounded-2xl border border-primary/30"
                            >
                                <div className="text-[10px] font-mono text-foreground/50">MERN Stack Deployment</div>
                                <div className="w-full h-1 bg-primary/20 mt-2 rounded overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
