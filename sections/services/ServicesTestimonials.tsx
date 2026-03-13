'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/layout/SectionHeader';

const testimonials = [
    { name: "VB Bakkar", role: "Client", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et diam eros. Praesent euismod nisi vel enim interdum egestas." },
    { name: "Snehal S", role: "Client", content: "Exceptional service and timely delivery. They really understood our business goals and translated them into a great product." },
    { name: "Rajesh K", role: "Client", content: "The best tech partner we've had in years. Their attention to detail and proactive approach made all the difference." }
];

export const ServicesTestimonials = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <SectionHeader 
                    title={<>See what our <span className="text-primary">clients say</span></>}
                    label="CLIENT TESTIMONIALS"
                    centered={true}
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-10 rounded-[3rem] border border-border/50 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-primary mb-6">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.851h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="flex-grow italic mb-10">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary/40" />
                                <div>
                                    <h4 className="text-foreground">{testimonial.name}</h4>
                                    <span className="text-sm text-primary tracking-wide uppercase font-semibold">Client</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
