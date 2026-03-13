'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newsletter } from '@/components/Newsletter';
import { blogs } from '@/constants/blogs';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, ChevronRight, Twitter, Linkedin, Facebook, Link2, Check, Share2, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [copied, setCopied] = React.useState(false);

    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">Blog not found</h1>
                    <button
                        onClick={() => router.push('/blogs')}
                        className="bg-primary px-8 py-3 rounded-full text-white font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Back to Blogs
                    </button>
                </div>
            </main>
        );
    }

    const recommended = blogs.filter(b => b.slug !== blog.slug).slice(0, 3);
    const readTime = blog.content ? Math.ceil(blog.content.join(' ').split(' ').length / 200) : 5;

    const handleCopy = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <main className="min-h-screen bg-background">

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="pt-32 pb-0 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Back link */}
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                                <Tag size={11} />
                                {blog.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Calendar size={12} />
                                {blog.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock size={12} />
                                {readTime} min read
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                            {blog.title}
                        </h1>

                        {/* Excerpt */}
                        {blog.excerpt && (
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                                {blog.excerpt}
                            </p>
                        )}

                        {/* Author + Share */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border">
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm border border-primary/20">
                                    M
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Team Maxima</p>
                                    <p className="text-xs text-muted-foreground">Tech & Innovation Experts</p>
                                </div>
                            </div>

                            {/* Share */}
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground font-medium mr-1 flex items-center gap-1.5">
                                    <Share2 size={13} /> Share:
                                </span>
                                {[
                                    { icon: <Twitter size={15} />, label: 'Twitter', onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank') },
                                    { icon: <Linkedin size={15} />, label: 'LinkedIn', onClick: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank') },
                                    { icon: <Facebook size={15} />, label: 'Facebook', onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank') },
                                ].map((s) => (
                                    <motion.button
                                        key={s.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={s.onClick}
                                        title={`Share on ${s.label}`}
                                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                                    >
                                        {s.icon}
                                    </motion.button>
                                ))}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCopy}
                                    title="Copy Link"
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all relative"
                                >
                                    {copied ? <Check size={14} className="text-green-500" /> : <Link2 size={14} />}
                                    {copied && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap"
                                        >
                                            Copied!
                                        </motion.span>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Cover Image ──────────────────────────────────── */}
            <section className="py-8">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-border shadow-xl">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Article Body ─────────────────────────────────── */}
            <section className="pb-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-lg dark:prose-invert max-w-none"
                        >
                            {blog.content?.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-base md:text-lg text-foreground/80 leading-[1.9] mb-6 font-light"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {/* Pull Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="my-12 pl-6 border-l-4 border-primary space-y-2"
                        >
                            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed italic">
                                &ldquo;The intersection of innovation and human-centric design is where digital success truly happens.&rdquo;
                            </p>
                            <cite className="text-sm text-muted-foreground not-italic">— Team Maxima</cite>
                        </motion.blockquote>

                        {/* Tags + Bottom Share */}
                        <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6">
                            <div className="flex flex-wrap gap-2">
                                {['Technology', 'Innovation', 'Pune', blog.category].map(tag => (
                                    <span key={tag} className="text-xs text-muted-foreground bg-muted/50 border border-border px-3 py-1 rounded-full hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-all group"
                            >
                                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                                All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── More Articles ─────────────────────────────────  */}
            <section className="py-16 bg-muted/20 border-t border-border">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-xl md:text-2xl font-bold">More <span className="text-primary">Insights</span></h2>
                        <Link href="/blogs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 flex items-center gap-1 group">
                            View all <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {recommended.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/blogs/${post.slug}`} className="block group">
                                    <article className="flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                        <div className="aspect-[16/9] relative overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-muted-foreground">{post.date}</span>
                                            </div>
                                            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-3 flex-grow">
                                                {post.title}
                                            </h4>
                                            <div className="pt-3 border-t border-border flex items-center text-xs font-semibold text-primary">
                                                Read Article
                                                <ChevronRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
