"use client";

import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";

export const LeadGen = () => {
    return (
        <SectionWrapper id="contact-cta" className="bg-muted/20 py-16 sm:py-20 md:py-24">
            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-sm">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-48 sm:w-[300px] md:w-[400px] h-48 sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 sm:w-[300px] md:w-[400px] h-48 sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div>
                        <FadeIn>
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                                Ready to transform your <span className="text-primary">Digital Presence?</span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 text-balance">
                                Book a free 30-minute consultation with our technology experts. We&apos;ll analyze your current setup and provide a roadmap for digital growth.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <Button size="lg" asChild className="rounded-full shadow-lg h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto">
                                <Link href="/contact">
                                    Schedule Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                                </Link>
                            </Button>
                        </FadeIn>

                        <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-xs sm:text-sm">Call Us Directly</p>
                                    <p className="text-foreground text-sm sm:text-base font-semibold">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-xs sm:text-sm">Email Us</p>
                                    <p className="text-foreground text-sm sm:text-base font-semibold">hello@maximabusiness.com</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2} direction="left" className="lg:justify-self-end w-full max-w-md">
                        <div className="bg-background border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl shadow-primary/5">
                            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Get your Free Proposal</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-background border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">Work Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-background border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label htmlFor="service" className="text-xs sm:text-sm font-medium text-foreground">Interested In</label>
                                    <select
                                        id="service"
                                        className="w-full bg-background border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none"
                                    >
                                        <option>Web Development</option>
                                        <option>Mobile App</option>
                                        <option>Digital Marketing</option>
                                        <option>UI/UX Design</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <Button type="submit" size="lg" className="w-full mt-2 text-sm sm:text-base">
                                    Request Proposal
                                </Button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
