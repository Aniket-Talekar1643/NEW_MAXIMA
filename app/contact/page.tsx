"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [submitError, setSubmitError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setSubmitError(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            reset();
        } catch (err) {
            console.error(err);
            setSubmitError("Failed to send message. Please try again later.");
        }
    };

    return (
        <main className="pt-24 min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <SectionWrapper className="pb-12">
                <FadeIn>
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Hire Dedicated <span className="text-primary">Software Developers in Pune</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Looking to hire dedicated software developers in Pune? We&apos;d love to hear from you. 
                        Our team of experts is ready to help you navigate your digital transformation journey.
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper className="pt-0 pb-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <FadeIn delay={0.1}>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Our Headquarters</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Pune, Maharashtra, India<br />
                                            Prime Tech Hub, Undri
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            General Enquiries: +91 88569 49454<br />
                                            Sales: +91 88569 49454
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            info@maximabs.com<br />
                                            careers@maximabs.com
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Mon - Fri: 10:00 AM - 7:00 PM<br />
                                            Sat - Sun: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Social Links would go here */}
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={0.2} direction="left">
                        <div className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-10 transition-transform group-hover:scale-110" />
                            
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                            {isSubmitSuccessful && (
                                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg">
                                    Thank you for your message! We will get back to you within 24 hours.
                                </div>
                            )}

                            {submitError && (
                                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg">
                                    {submitError}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                                    <input
                                        {...register("name")}
                                        className="w-full bg-background border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                                    <input
                                        {...register("email")}
                                        className="w-full bg-background border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                                    <input
                                        {...register("subject")}
                                        className="w-full bg-background border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors"
                                        placeholder="Project Discussion"
                                    />
                                    {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className="w-full bg-background border border-border px-4 py-3 rounded-xl outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                                </div>

                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting} 
                                    className="w-full py-6 rounded-xl font-bold group"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>}
                                </Button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>
        </main>
    );
}
