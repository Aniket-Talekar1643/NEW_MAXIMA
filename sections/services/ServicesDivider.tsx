'use client';

export const ServicesDivider = () => {
    return (
        <div className="py-16 bg-primary/5 border-b border-border/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
                <p className="text-lg md:text-2xl font-bold text-muted-foreground tracking-wider uppercase max-w-4xl mx-auto leading-loose">
                    Solving complex world problems with our next generation solutions <span className="text-primary">powered with the help of the latest technologies.</span>
                </p>
            </div>
        </div>
    );
};
