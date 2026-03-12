'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const ServicesDelivery = () => {
    return (
        <section className="py-24 bg-muted/20 border-y border-border/50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">OUR SERVICES</span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 !leading-tight">Agile & Scalable <span className="text-primary">Service Delivery</span></h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Maxima Business Solutions, we deliver agile & scalable service delivery. Being a dependable software
                        development company in Pune, our approach helps businesses scale efficiently and adapt quickly to
                        changing market needs while maintaining quality and transparency at every stage.
                    </p>
                </div>

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
                            <h4 className="text-xl font-bold text-foreground">{item}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
