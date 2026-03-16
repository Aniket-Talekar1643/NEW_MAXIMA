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

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
                    <div className="max-w-2xl">
                        <FadeIn>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Insights</span>
                            <h2 className=" text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
                                Latest from our <span className="text-gradient">Tech Insights & Software Industry Blog</span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p>
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <FadeIn key={blog.slug} delay={index * 0.1}>
                            <Link href={`/blogs/${blog.slug}`} className="block group">
                                <motion.article
                                    whileHover={{ y: -4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/9] relative overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={`${blog.title} - Maxima Software Development Blog`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {blog.date}
                                            </span>
                                        </div>

                                        <h3 className="line-clamp-2 mb-3">
                                            {blog.title}
                                        </h3>

                                        <p className="text-sm line-clamp-3 flex-grow">
                                            {blog.excerpt || "Read the full article to discover insights from our expert team at Maxima Business Solutions."}
                                        </p>

                                        <div className="mt-5 pt-4 border-t border-border flex items-center text-sm font-semibold text-primary">
                                            Read Article
                                            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
