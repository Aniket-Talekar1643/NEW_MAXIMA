"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { scrollY } = useScroll();

    // Smooth values for navbar animations
    const navY = useTransform(scrollY, [0, 100], [20, 10]);
    const navPadding = useTransform(scrollY, [0, 100], ["12px", "8px"]);
    const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
    const navWidth = useTransform(scrollY, [0, 100], ["95%", "90%"]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            style={{
                y: navY,
                padding: navPadding,
                scale: navScale,
                width: navWidth,
            }}
            className={cn(
                "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full border border-slate-200",
                isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                    : "bg-white/80 backdrop-blur-md shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group relative z-10 p-1">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                    >
                        <Image
                            src="/LOGO/mbs-logo-1.png"
                            alt="Maxima Business Solutions Logo"
                            width={170}
                            height={45}
                            className="h-8 md:h-9 lg:h-11 w-auto object-contain dark:brightness-[0.9] dark:contrast-125 brightness-100 contrast-100"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Nav - Visible from MD (768px) upwards with compact styles */}
                <nav className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-md rounded-full px-1.5 py-1 md:px-2 md:py-1.5 border border-slate-200 relative">
                    {/* Liquid Hover Indicator */}
                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                layoutId="nav-indicator"
                                className="absolute h-[80%] top-[10%] bg-primary/10 rounded-full z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                    mass: 0.8
                                }}
                                style={{
                                    left: `calc(${(100 / navLinks.length) * hoveredIndex}% + 6px)`,
                                    width: `calc(${100 / navLinks.length}% - 12px)`,
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {navLinks.map((link, index) => (
                        <div
                            key={link.name}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative z-10"
                        >
                            <MagneticButton strength={8}>
                                <Link
                                    href={link.href}
                                    className="px-3 md:px-4 lg:px-6 py-1.5 text-[10px] md:text-[11px] lg:text-[13px] font-black text-slate-600 hover:text-slate-900 transition-all tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] uppercase block"
                                >
                                    {link.name}
                                </Link>
                            </MagneticButton>
                        </div>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2 lg:gap-4 relative z-10">
                    <ThemeToggle />
                    <MagneticButton strength={12}>
                        <Button asChild className="rounded-3xl px-8 h-10 bg-primary-gradient text-white border border-white/10 shadow-xl shadow-primary/20 hover:shadow-primary/40 group overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <Link href="/contact">
                                <span className="relative z-10 flex items-center font-bold text-sm tracking-wide">
                                    Let's Connect <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </Button>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Toggle - Visible below MD */}
                <div className="md:hidden flex items-center gap-2 relative z-10">
                    <ThemeToggle />
                    <button
                        className="text-slate-900 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 md:hidden bg-white backdrop-blur-2xl border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-6 mx-4"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-bold py-2 flex items-center justify-between group text-slate-900"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="group-hover:text-primary transition-colors">{link.name}</span>
                                        <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-6 border-t border-border"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full h-14 rounded-2xl bg-primary-gradient text-lg font-bold text-white">
                                        Let's Talk
                                    </Button>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
