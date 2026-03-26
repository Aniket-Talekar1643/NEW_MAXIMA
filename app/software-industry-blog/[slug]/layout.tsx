import { Metadata } from 'next';
import { blogs } from '@/constants/blogs';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const p = await params;
    const blog = blogs.find(b => b.slug === p.slug);
    
    if (!blog) {
        return {
            title: 'Blog Not Found | Maxima Business Solutions'
        };
    }

    return {
        title: `${blog.title} | Maxima Business Solutions`,
        description: blog.excerpt || `Read the full article ${blog.title} at Maxima Business Solutions.`,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image],
            type: 'article',
            url: `https://maximabusinesssolutions.com/software-industry-blog/${p.slug}`,
        },
        alternates: {
            canonical: `/software-industry-blog/${p.slug}`,
        }
    };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
