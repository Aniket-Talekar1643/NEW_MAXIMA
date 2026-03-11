'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newsletter } from '@/components/Newsletter';
import { blogs } from '@/constants/blogs';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, ChevronRight, Twitter, Linkedin, Facebook, Link2, Check, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [copied, setCopied] = React.useState(false);

    // Safety check for blog existence
    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h1 className="text-4xl font-bold">Blog not found</h1>
                    <button
                        onClick={() => router.push('/blogs')}
                        className="bg-primary px-8 py-4 rounded-full text-white font-bold"
                    >
                        Back to Blogs
                    </button>
                </div>
            </main>
        );
    }

    // Recommended blogs (excluding current)
    const recommended = blogs.filter(b => b.slug !== blog.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-20 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-primary font-bold mb-8 sm:mb-12 hover:gap-3 transition-all group text-sm sm:text-base"
                        >
                            <ArrowLeft size={18} />
                            <span>Back to Insights</span>
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-white/5 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                <Tag size={12} />
                                {blog.category}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm font-medium">
                                <Calendar size={14} />
                                {blog.date}
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 !leading-tight tracking-tight">
                            {blog.title}
                        </h1>

                        <div className="aspect-[16/9] sm:aspect-[21/9] rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16 sm:pb-24 md:pb-32 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-6 sm:space-y-10"
                        >
                            {blog.content?.map((paragraph, i) => (
                                <p key={i} className="text-base sm:text-lg md:text-xl text-muted-foreground leading-[1.8] font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {/* Quote Highlight */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="my-10 sm:my-16 p-6 sm:p-10 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] glass border-l-4 border-primary"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                                &ldquo;The intersection of innovation and human-centric design is where digital success truly happens.&rdquo;
                            </p>
                        </motion.div>

                        {/* Author/Share Info */}
                        <div className="pt-10 sm:pt-16 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 sm:gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary/20 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-lg">M</div>
                                </div>
                                <div>
                                    <p className="text-white font-bold">Team Maxima</p>
                                    <p className="text-muted-foreground text-sm">Tech & Innovation Experts</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Share2 size={20} />
                                    <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest">Share:</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    {[
                                        { icon: <Twitter size={18} />, label: 'Twitter', onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank') },
                                        { icon: <Linkedin size={18} />, label: 'LinkedIn', onClick: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank') },
                                        { icon: <Facebook size={18} />, label: 'Facebook', onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank') },
                                    ].map((social) => (
                                        <motion.button
                                            key={social.label}
                                            whileHover={{ scale: 1.1, translateY: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={social.onClick}
                                            className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                                            title={`Share on ${social.label}`}
                                        >
                                            {social.icon}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.1, translateY: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                navigator.clipboard.writeText(window.location.href);
                                                setCopied(true);
                                                setTimeout(() => setCopied(false), 2000);
                                            }
                                        }}
                                        className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors relative"
                                        title="Copy Link"
                                    >
                                        {copied ? <Check size={18} className="text-green-500" /> : <Link2 size={18} />}
                                        {copied && (
                                            <motion.span
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold py-1 px-2 rounded-md whitespace-nowrap"
                                            >
                                                Copied!
                                            </motion.span>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Insights Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white/5 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">More <span className="text-primary">Insights</span></h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {recommended.map((post) => (
                            <Link href={`/blogs/${post.slug}`} key={post.slug}>
                                <div className="glass-card rounded-[2.5rem] overflow-hidden group border border-white/5 h-full flex flex-col cursor-pointer transition-all hover:border-primary/20">
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-4 block">{post.category}</span>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-6">
                                            {post.title}
                                        </h4>
                                        <div className="mt-auto flex items-center justify-between text-white/50 group/btn">
                                            <span className="text-sm">Read Post</span>
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
