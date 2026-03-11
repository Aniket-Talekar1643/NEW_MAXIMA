'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 !leading-tight tracking-tight">
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
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <Link
                                href={`/blogs/${blog.slug}`}
                                key={blog.title}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card rounded-[3rem] overflow-hidden group border border-white/5 flex flex-col h-full cursor-pointer hover:border-primary/20 transition-all"
                                >
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${blog.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                        <div className="absolute bottom-6 left-8 py-2 px-4 glass text-xs font-bold rounded-full text-white">
                                            {blog.category}
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <span className="text-white/60 text-sm mb-4 block font-medium">{blog.date}</span>
                                        <h3 className="text-2xl font-bold mb-8 group-hover:text-primary transition-colors !leading-tight line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between group/btn">
                                            <span className="text-white font-bold group-hover/btn:text-primary transition-colors">Read More</span>
                                            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary transition-all">
                                                <ChevronRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            {/* <Footer /> */}
        </main>
    );
}
