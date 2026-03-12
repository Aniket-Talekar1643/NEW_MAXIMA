"use client"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Footer = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Subscribed successfully!");
                setEmail("");
            } else {
                toast.error(data.error || "Failed to subscribe");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer className="bg-background/95 backdrop-blur-md text-muted-foreground pt-14 sm:pt-16 pb-6 sm:pb-8 border-t border-border/10">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">

                    {/* Company Info — full width on mobile */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <Image
                                src="/LOGO/mbs-logo-1.png"
                                alt="Maxima Business Solutions Logo"
                                width={200}
                                height={52}
                                className="h-10 md:h-12 w-auto object-contain dark:brightness-[0.9] dark:contrast-125 brightness-100 contrast-100 transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Cutting-edge digital IT solutions company in Pune providing MERN stack development, digital marketing, cloud services, and more.
                        </p>
                        <div className="flex gap-3 mt-1">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Linkedin, label: "LinkedIn" },
                            ].map(({ Icon, label }) => (
                                <Link key={label} href="#" className="hover:text-primary transition-colors">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-sm">Company</h3>
                        <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                            {[
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Services" },
                                { href: "/portfolio", label: "Portfolio" },
                                { href: "/blogs", label: "Blogs" },
                                { href: "/contact", label: "Contact" },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <Link href={href} className="hover:text-primary transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-sm">Services</h3>
                        <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                            {[
                                { href: "/services#web-dev", label: "Web & Mobile App Dev" },
                                { href: "/services#mern", label: "MERN Stack Dev" },
                                { href: "/services#ecommerce", label: "E-commerce Solutions" },
                                { href: "/services#marketing", label: "Digital Marketing" },
                                { href: "/services#cms", label: "WordPress Headless CMS" },
                                { href: "/services#design", label: "UI/UX Design" },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <Link href={href} className="hover:text-primary transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter — full width on mobile */}
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-sm">Get in Touch</h3>
                        <ul className="flex flex-col gap-3 text-xs sm:text-sm mb-5">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                                <span>hello@maximabusiness.com</span>
                            </li>
                        </ul>

                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm font-medium text-foreground">Subscribe to our newsletter</p>
                            <form className="flex gap-2" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    aria-label="Email address for newsletter"
                                    className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                                    required
                                    disabled={isLoading}
                                />
                                <Button type="submit" size="sm" className="shrink-0 text-xs sm:text-sm" disabled={isLoading}>
                                    {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Go"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Maxima Business Solutions. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
