'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/layout/SectionHeader';

export const ServicesDelivery = () => {
    return (
        <section className="py-24 bg-muted/20 border-y border-border/50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <SectionHeader 
                    title={<>Agile & Scalable <span className="text-primary">Service Delivery</span></>}
                    subtitle="At Maxima Business Solutions, we deliver agile & scalable service delivery. Being a dependable software development company in Pune, our approach helps businesses scale efficiently and adapt quickly to changing market needs while maintaining quality and transparency at every stage."
                    label="OUR SERVICES"
                    centered={true}
                />

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        "Agile Service",
                        "Scalable Architecture",
                        "Transparent Process"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border/50 flex items-center gap-4 group hover:border-primary transition-colors shadow-sm hover:shadow-md"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="text-primary" size={24} />
                            </div>
                            <h4>{item}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
