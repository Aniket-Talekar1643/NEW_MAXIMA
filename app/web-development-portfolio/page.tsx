import { PortfolioHero } from "@/sections/portfolio/PortfolioHero";
import { PortfolioList } from "@/sections/portfolio/PortfolioList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Tech Success Stories & Case Studies | Maxima Solutions",
  description: "Browse our software tech success stories and project case studies. See how we help clients in Pune and globally achieve digital excellence.",
  keywords: ["Software Tech Success Stories", "IT Case Studies Pune", "Digital Product Showcases", "Tech Project Portfolio"],
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <PortfolioHero />
            <PortfolioList />
        </main>
    );
}
