'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        name: 'TrendyThreads',
        desc: 'Developed Trendy Threads, a fashion e-commerce platform with advanced admin management, smooth customer shopping experience, and integrated payments.',
        image: '/portfolio/trendy-threads.webp'
    },
    {
        name: 'Nikitas Curry Corner',
        desc: 'Developed a modern website for Nikita’s Curry Corner with seamless online ordering, simple menu management, and real-time delivery tracking.',
        image: '/portfolio/nikitas-curry-corner.webp'
    },
    {
        name: 'Shred-n-Shape',
        desc: 'Developed Shred-n-Shape using the MERN stack, featuring customized workouts, nutrition tracking, and visual progress insights in a responsive interface.',
        image: '/portfolio/shred-n-shape.webp'
    },
    {
        name: 'UrbanAxis',
        desc: 'Developed the UrbanAxis website using Next.js, delivering high speed, strong SEO optimization, and a modern responsive interface for showcasing services.',
        image: '/portfolio/urban-axis.webp'
    },
    {
        name: 'Everwin PT',
        desc: 'Developed a responsive static website for Everwinpt presenting products and services with clear information and a clean browsing experience.',
        image: '/portfolio/everwin-pt.webp'
    },
    {
        name: 'Sachniti',
        desc: 'Developed the Sachniti website on WordPress with easy content management, SEO-friendly structure, and flexible contact forms.',
        image: '/portfolio/sachniti.webp'
    },
    {
        name: 'Intignus Biotech',
        desc: 'A biotechnology company website designed to present research, innovation, and corporate identity professionally.',
        image: '/portfolio/intignus-biotech.webp'
    },
    {
        name: 'Snumero',
        desc: 'A technology-driven website designed to highlight digital solutions and services with modern visuals and user-friendly navigation.',
        image: '/portfolio/snumero.webp'
    },
    {
        name: 'R3 Contractor',
        desc: 'A construction services website built to present projects, expertise, and company capabilities with clarity.',
        image: '/portfolio/r3contructor.webp'
    },
    {
        name: 'Train2Gain',
        desc: 'Developed Train2Gain, a comprehensive fitness platform offering personalized training plans and real-time performance tracking.',
        image: '/portfolio/train2gain.webp'
    }
];

const LaptopMockup = ({ image }: { image: string }) => (
    <div className="relative w-full max-w-[600px] mx-auto perspective-1000 group">
        {/* Screen */}
        <div className="relative bg-black rounded-t-xl border-[8px] border-zinc-800 dark:border-[#21262d] aspect-[16/10] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-x-2">
            <img src={image} alt={`Software Tech Success Story - ${image}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Base */}
        <div className="relative h-4 bg-zinc-700 dark:bg-[#30363d] rounded-b-xl shadow-xl w-[105%] -left-[2.5%] transition-transform duration-500 group-hover:-translate-y-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-zinc-900 dark:bg-[#161b22] rounded-b-lg" />
        </div>

        {/* Reflection */}
        <div className="absolute -bottom-8 left-[5%] right-[5%] h-8 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

export const PortfolioList = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 !leading-tight">Our Web Development Portfolio</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Explore our software tech success stories and successful <br className="hidden md:block" /> client collaborations that drive digital transformation.
                    </p>
                    <div className="w-24 h-1 bg-primary text-transparent mx-auto rounded-full bg-gradient-to-r from-primary to-primary/20" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="space-y-40 md:space-y-64 pb-20">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 1, type: "spring", stiffness: 50, damping: 20 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 relative`}
                            >
                                {/* Left Side: Content */}
                                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-primary text-xs font-bold tracking-widest uppercase shadow-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        Featured Project
                                    </motion.div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground !leading-tight tracking-tight">
                                        {project.name}
                                    </h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                                        {['ReactJs', 'NextJs', 'Tailwind', 'NodeJs', 'ExpressJs','MongoDB'].map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.1) }}
                                                className="text-xs font-bold text-foreground bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/5 px-4 py-2 rounded-full transition-colors cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Mockup */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="relative z-10"
                                    >
                                        <LaptopMockup image={project.image} />
                                    </motion.div>

                                    {/* Decorative Glows */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
                                    <div className="absolute -inset-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
