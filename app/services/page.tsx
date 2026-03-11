import { Metadata } from "next";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesProcess } from "@/sections/services/ServicesProcess";
import { TechStack } from "@/sections/TechStack";
import { ServicesDivider } from "@/sections/services/ServicesDivider";
import { ServicesGrid } from "@/sections/services/ServicesGrid";
import { ServicesDelivery } from "@/sections/services/ServicesDelivery";
import { ServicesCTA } from "@/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "MERN Stack & Digital Transformation Services | Maxima Business Solutions",
  description: "Comprehensive IT solutions in Pune. We specialize in MERN stack development, digital marketing, AI integration, and cloud architecture for modern businesses.",
  keywords: ["MERN Stack Development Company Pune", "Digital Transformation Services", "IT Solutions Company", "Mobile App Development", "SEO Services Pune"],
  openGraph: {
    title: "MERN Stack & Digital Transformation Services",
    description: "Explore our comprehensive IT solutions in Pune. We deliver scalable web, mobile, and digital marketing services.",
    url: "https://maximabusiness.com/services",
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ServicesHero />
      <ServicesProcess />
      <TechStack />
      <ServicesDivider />
      <ServicesGrid />
      <ServicesDelivery />
      <ServicesCTA />
    </main>
  );
}
