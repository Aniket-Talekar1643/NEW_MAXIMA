"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";

const faqs = [
    {
        question: "What services does Maxima Business Solutions provide?",
        answer: "We offer a comprehensive range of digital IT solutions, including MERN stack development, custom software engineering, cloud transformation (AWS/Azure), digital marketing, and enterprise-grade SEO strategies."
    },
    {
        question: "How long does a typical project take to complete?",
        answer: "Project timelines vary depending on complexity. A standard business website might take 4-6 weeks, while complex enterprise applications can take 3-6 months. We prioritize agile delivery to provide value as early as possible."
    },
    {
        question: "What is your development process?",
        answer: "We follow a 4-step Discovery, Design, Development, and Deployment process. This includes thorough requirement gathering, rapid prototyping, iterative development with regular feedback, and comprehensive post-launch support."
    },
    {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Yes, we provide ongoing support, regular security updates, and performance optimization services to ensure your digital solutions continue to run smoothly and scale as your business grows."
    },
    {
        question: "Which industries do you specialize in?",
        answer: "We have extensive experience working with Finance, Healthcare, Real Estate, E-commerce, and EdTech sectors, helping them undergo seamless digital transformations."
    },
    {
        question: "How can I get a customized quote for my project?",
        answer: "You can click the 'Get Started' or 'Start Your Project' buttons anywhere on the site, or fill out the contact form. We'll schedule a discovery call to understand your needs and provide a detailed proposal."
    }
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <SectionWrapper id="faq" className="bg-muted/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            <HelpCircle className="w-4 h-4" />
                            <span>Common Questions</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Find answers to the most common queries about our services and process.
                        </p>
                    </FadeIn>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div
                                className={`border rounded-2xl transition-all duration-300 ${activeIndex === i
                                    ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                                    : "bg-card/50 border-border/50 hover:border-primary/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-foreground pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === i ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                                        }`}>
                                        {activeIndex === i ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                <div className="pt-2 border-t border-border/50">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
