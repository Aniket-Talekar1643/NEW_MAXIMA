"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Laptop, Code2, ShoppingCart, TrendingUp, Layers, PenTool } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        title: "Custom Web & Mobile App",
        description: "High-performance native and cross-platform mobile apps alongside responsive web applications built for scale.",
        icon: <Laptop className="w-6 h-6" />,
        href: "/services#web-mobile",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "MERN & MEAN Stack",
        description: "Full-stack enterprise applications utilizing MongoDB, Express, React/Angular, and Node.js.",
        icon: <Code2 className="w-6 h-6" />,
        href: "/services#mern",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
    {
        title: "E-commerce Solutions",
        description: "Scalable online stores with seamless payment integrations, inventory management, and fast checkouts.",
        icon: <ShoppingCart className="w-6 h-6" />,
        href: "/services#ecommerce",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "SEO & Digital Marketing",
        description: "Data-driven marketing strategies, advanced AI SEO, and campaign management to generate high-quality leads.",
        icon: <TrendingUp className="w-6 h-6" />,
        href: "/services#marketing",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
    {
        title: "WordPress Headless CMS",
        description: "Lightning-fast content delivery using modern JavaScript frameworks combined with WordPress backend.",
        icon: <Layers className="w-6 h-6" />,
        href: "/services#cms",
        color: "bg-primary/10 text-primary border-primary/20",
    },
    {
        title: "UI/UX Design",
        description: "User-centric SaaS interfaces and engaging experiences designed in Figma for maximum conversion.",
        icon: <PenTool className="w-6 h-6" />,
        href: "/services#design",
        color: "bg-primary-accent/10 text-primary-accent border-primary-accent/20",
    },
];

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
                        href="/services"
                        className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center"
                    >
                        Explore all services &rarr;
                    </Link>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                {services.map((service, index) => (
                    <FadeIn key={service.title} delay={0.1 * index}>
                        <motion.div
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                                rest: { scale: 1, rotateY: 0, rotateX: 0, y: 0 },
                                hover: {
                                    scale: 1.03,
                                    rotateY: index % 2 === 0 ? 2 : -2,
                                    rotateX: 2,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }
                            }}
                            className="bg-card text-card-foreground border border-border p-8 rounded-3xl h-full flex flex-col group relative overflow-hidden shadow-sm"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                variants={{
                                    rest: { scale: 1, opacity: 0.5 },
                                    hover: { scale: 1.5, opacity: 1 }
                                }}
                                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"
                            />
                            <motion.div
                                variants={{
                                    rest: { y: 0, rotate: 0 },
                                    hover: { y: -5, rotate: 5 }
                                }}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${service.color}`}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground flex-1 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="text-sm font-semibold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors mt-auto w-fit"
                            >
                                Learn more
                                <motion.span
                                    variants={{
                                        rest: { x: 0 },
                                        hover: { x: 5 }
                                    }}
                                >&rarr;</motion.span>
                            </Link>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
};
