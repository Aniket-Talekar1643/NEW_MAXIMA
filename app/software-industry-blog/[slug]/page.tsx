import React from 'react';
import { blogs } from '@/constants/blogs';
import BlogClientPage from './BlogClientPage';

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogClientPage slug={slug} />;
}
