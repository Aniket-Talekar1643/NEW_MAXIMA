"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FadeIn, SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        reset();
    };

    return (
        <SectionWrapper className="pt-32 min-h-screen">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind or need expert IT consultation? Reach out to our team of specialists today.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <FadeIn delay={0.2} direction="right">
                    <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-sm">
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Our Headquarters</h3>
                                    <p className="text-muted-foreground">
                                        123 Tech Park, Phase 2, Hinjewadi<br />
                                        Pune, Maharashtra 411057<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-muted-foreground">+91 20 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-muted-foreground">hello@maximabusiness.com</p>
                                    <p className="text-muted-foreground">support@maximabusiness.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                                    <p className="text-muted-foreground">Weekend: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Contact Form */}
                <FadeIn delay={0.3} direction="left">
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                        {isSubmitSuccessful && (
                            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg">
                                Thank you for your message! We will get back to you within 24 hours.
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                                <input
                                    {...register("name")}
                                    id="name"
                                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Work Email *</label>
                                <input
                                    {...register("email")}
                                    id="email"
                                    type="email"
                                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    placeholder="john@company.com"
                                />
                                {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">Company Name (Optional)</label>
                                <input
                                    {...register("company")}
                                    id="company"
                                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    placeholder="Acme Corp"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Your Message *</label>
                                <textarea
                                    {...register("message")}
                                    id="message"
                                    rows={5}
                                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none"
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
}
