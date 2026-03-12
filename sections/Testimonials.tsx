"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rohan Desai",
        role: "CEO, TechFlow India",
        content: "Maxima transformed our legacy system into a state-of-the-art MERN application. Their engineers are top-notch and delivery was completely flawless.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Marketing Director, GlobalReach",
        content: "The SEO and digital strategy implemented by Maxima resulted in a 300% increase in qualified leads within 6 months. Exceptional team to work with.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        role: "Founder, QuickCommerce",
        content: "Our Headless Shopify build is insanely fast. Maxima understands core web vitals and e-commerce conversion better than anyone else in Pune.",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <SectionWrapper id="testimonials" className="bg-muted/30 text-foreground overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                <FadeIn>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-4">
                        Client <span className="text-primary">Success Stories</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Don&apos;t just take our word for it. Here is what global leaders are saying about partnering with Maxima Business Solutions.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {testimonials.map((testimonial, i) => (
                    <FadeIn key={i} delay={0.1 * i} direction="up" className="h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-background border border-border p-6 sm:p-8 rounded-2xl h-full flex flex-col relative shadow-sm"
                        >
                            <div className="text-5xl text-primary/20 absolute top-4 left-6 font-serif">&ldquo;</div>
                            <div className="flex gap-1 mb-4 sm:mb-6 relative z-10">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground flex-1 mb-6 sm:mb-8 relative z-10 text-balance leading-relaxed text-sm sm:text-base">
                                {testimonial.content}
                            </p>
                            <div className="mt-auto flex items-center gap-3 sm:gap-4 relative z-10">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs sm:text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>
        </SectionWrapper>
    );
};
