'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Newsletter } from '@/components/Newsletter';
import { ChevronRight } from 'lucide-react';
import { blogs } from '@/constants/blogs';
import Link from 'next/link';

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block leading-tight">OUR BLOGS</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-8 !leading-tight tracking-tight">
                            Insights, Trends & <span className="text-primary relative inline-block">
                                Updates
                                <motion.svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <motion.path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    />
                                </motion.svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                            Stay up-to-date with the latest industry insights, technology trends,
                            and success stories from Maxima Business Solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blogs Grid Section */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog, index) => (
                            <Link
                                href={`/blogs/${blog.slug}`}
                                key={blog.title}
                            >
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.07, duration: 0.5 }}
                                    className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/9] relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${blog.image})` }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{blog.date}</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-3">
                                            {blog.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                                            {blog.excerpt || "Read the full article to discover insights from our expert team at Maxima Business Solutions."}
                                        </p>

                                        <div className="mt-5 pt-4 border-t border-border flex items-center text-sm font-semibold text-primary">
                                            Read Article
                                            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
