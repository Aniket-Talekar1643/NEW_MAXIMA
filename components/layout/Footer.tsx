import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Footer = () => {
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
                        <h1 className="text-sm leading-relaxed">
                            A leading software development company in Pune providing custom software solutions, MERN stack development, digital marketing, and IT outsourcing services.
                        </h1>
                        <div className="flex gap-3 mt-1">
                            {[
                                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/maximabusinesssolutions/" },
                                { Icon: Twitter, label: "Twitter", href: "https://x.com/maximabusiness" },
                                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maximabusinesssolutions?igsh=MTYyc3BqYjVibXJ5Yg==" },
                                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/maxima-business-solutions" },
                            ].map(({ Icon, label, href }) => (
                                <Link 
                                    key={label} 
                                    href={href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
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
                                { href: "/", label: "Home" },
                                { href: "/it-outsourcing-agency-pune", label: "About Us" },
                                { href: "/software-development-services-pune", label: "Services" },
                                { href: "/web-development-portfolio", label: "Portfolio" },
                                { href: "/software-industry-blog", label: "Blogs" },
                                { href: "/contact", label: "Contact Us" },
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
                                { href: "/software-development-services-pune#web-dev", label: "Web & Mobile App Dev" },
                                { href: "/software-development-services-pune#mern", label: "MERN Stack Dev" },
                                { href: "/software-development-services-pune#ecommerce", label: "E-commerce Solutions" },
                                { href: "/software-development-services-pune#marketing", label: "Digital Marketing" },
                                { href: "/software-development-services-pune#cms", label: "WordPress Headless CMS" },
                                { href: "/software-development-services-pune#design", label: "UI/UX Design" },
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
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-muted-foreground leading-relaxed text-sm">
                                    Undri,<br />
                                    Vignharta Apartment, Pune 411060
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="text-muted-foreground text-sm">+91 9657480645</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="text-muted-foreground text-sm">info@maximabusinesssolutions.com</span>
                            </li>
                        </ul>

                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm font-medium text-foreground">Subscribe to our newsletter</p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email address for newsletter"
                                    className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                                <Button type="submit" size="sm" className="shrink-0 text-xs sm:text-sm">Go</Button>
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
