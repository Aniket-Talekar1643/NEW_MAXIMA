import { PortfolioHero } from "@/sections/portfolio/PortfolioHero";
import { PortfolioList } from "@/sections/portfolio/PortfolioList";

export const metadata = {
    title: "Portfolio | Maxima Business Solutions",
    description: "Explore our recent software projects and successful client collaborations.",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <PortfolioHero />
            <PortfolioList />
        </main>
    );
}
