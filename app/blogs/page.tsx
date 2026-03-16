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

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block leading-tight">OUR BLOGS</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 !leading-tight tracking-tight">
              Insights, Trends & <span className="text-primary relative inline-block">Updates</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                
                <div className="p-6 md:p-8">
                  <time className="text-xs text-text-secondary">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blogs/${blog.slug}`} className="hover:text-primary">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {blog.excerpt || "Read the full article to discover insights from our expert team at Maxima Business Solutions."}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline group-hover:text-primary/80 transition-colors mt-4"
                  >
                    Read Article
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
