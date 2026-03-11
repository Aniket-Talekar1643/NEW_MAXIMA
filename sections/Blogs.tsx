"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { blogs } from '@/constants/blogs';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar } from 'lucide-react';
import { FadeIn, SectionWrapper } from '@/components/layout/SectionWrapper';

export const BlogsPreview = () => {
    return (
        <SectionWrapper id="blogs" className="bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
                    <div className="max-w-2xl">
                        <FadeIn>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Insights</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
                                Latest from the <span className="text-gradient">Blog</span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                                Stay ahead of the curve with our expert analysis on MERN stack, AI integration, and digital growth strategies.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2} direction="left">
                        <Link
                            href="/blogs"
                            className="group flex items-center gap-2 text-primary font-bold hover:underline underline-offset-8 transition-all text-sm sm:text-base"
                        >
                            View all articles <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-8">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <FadeIn key={blog.slug} delay={index * 0.1}>
                            <Link href={`/blogs/${blog.slug}`} className="block group">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="relative h-[450px] sm:h-[500px] rounded-[2.5rem] overflow-hidden isolate shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                                        {/* Top Section / Category */}
                                        <div className="absolute top-6 left-6 flex items-center gap-3">
                                            <div className="py-1.5 px-4 bg-primary/20 backdrop-blur-md text-[10px] font-bold rounded-full text-primary border border-primary/30 uppercase tracking-[0.2em] shadow-lg">
                                                {blog.category}
                                            </div>
                                            <span className="text-white/70 text-[10px] sm:text-xs font-mono uppercase tracking-widest">{blog.date}</span>
                                        </div>

                                        {/* Floating Content Box */}
                                        <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white !leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            <div className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
                                                <p className="text-white/70 text-sm mb-6 line-clamp-2 leading-relaxed">
                                                    {blog.excerpt}
                                                </p>

                                                <div className="flex items-center gap-3 text-primary">
                                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Read Article</span>
                                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Borders */}
                                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/5 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </motion.div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
