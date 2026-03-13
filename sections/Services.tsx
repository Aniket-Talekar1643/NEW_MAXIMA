"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Laptop, Code2, ShoppingCart, TrendingUp, Layers, PenTool } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const services = [
    {
        title: "Custom Web & Mobile App",
        description: "High-performance native and cross-platform mobile apps alongside responsive web applications built for scale.",
        icon: <Laptop className="w-6 h-6" />,
        href: "/software-development-services-pune#web-mobile",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "MERN & MEAN Stack",
        description: "Full-stack enterprise applications utilizing MongoDB, Express, React/Angular, and Node.js.",
        icon: <Code2 className="w-6 h-6" />,
        href: "/software-development-services-pune#mern",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
    {
        title: "E-commerce Solutions",
        description: "Scalable online stores with seamless payment integrations, inventory management, and fast checkouts.",
        icon: <ShoppingCart className="w-6 h-6" />,
        href: "/software-development-services-pune#ecommerce",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "SEO & Digital Marketing",
        description: "Data-driven marketing strategies, advanced AI SEO, and campaign management to generate high-quality leads.",
        icon: <TrendingUp className="w-6 h-6" />,
        href: "/software-development-services-pune#marketing",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
    {
        title: "WordPress Headless CMS",
        description: "Lightning-fast content delivery using modern JavaScript frameworks combined with WordPress backend.",
        icon: <Layers className="w-6 h-6" />,
        href: "/software-development-services-pune#cms",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "UI/UX Design",
        description: "User-centric SaaS interfaces and engaging experiences designed in Figma for maximum conversion.",
        icon: <PenTool className="w-6 h-6" />,
        href: "/software-development-services-pune#design",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x - 0.5);
        mouseY.set(y - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <FadeIn delay={0.1 * index}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="bg-card text-card-foreground border border-border p-8 rounded-3xl h-full flex flex-col group relative overflow-hidden shadow-sm transition-colors hover:border-primary/50"
            >
                {/* Spotlight Gradient */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useTransform(
                            [springX, springY],
                            ([x, y]: any[]) => `radial-gradient(600px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(var(--primary-rgb), 0.15), transparent 80%)`
                        ),
                    }}
                />

                <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"
                />
                <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${service.color} group-hover:scale-110 transition-transform`}
                >
                    {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground flex-1 mb-6 text-sm leading-relaxed">
                    {service.description}
                </p>
                <Link
                    href={service.href}
                    className="text-sm font-semibold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors mt-auto w-fit"
                >
                    Learn more
                    <motion.span
                        className="group-hover:translate-x-1 transition-transform"
                    >&rarr;</motion.span>
                </Link>
            </motion.div>
        </FadeIn>
    );
};

export const ServicesOverview = () => {
    return (
        <SectionWrapper id="services" className="bg-background">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Comprehensive <span className="text-primary">IT Services</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg text-muted-foreground">
                            We provide end-to-end digital expertise. From strategic design to complex engineering, our solutions drive measurable business growth.
                        </p>
                    </FadeIn>
                </div>
                <FadeIn delay={0.2} direction="left">
                    <Link
                        href="/software-development-services-pune"
                        className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center"
                    >
                        Explore all services &rarr;
                    </Link>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};
