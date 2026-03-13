'use client';

import { SectionHeader } from '@/components/layout/SectionHeader';

export const ServicesProcess = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <SectionHeader 
                    title="Grow Globally With MERN Stack"
                    subtitle="As a leading global software development company based in Pune, offering web development, MERN Stack and digital marketing services that help startups, businesses, and organizations achieve lasting success. With our expertise in SEO, apps, web apps, branding, and digital marketing solutions, we deliver results that matter."
                    label="OUR PROCESS"
                    centered={true}
                />
            </div>
        </section>
    );
};
