import { Metadata } from "next";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesProcess } from "@/sections/services/ServicesProcess";
import { TechStack } from "@/sections/TechStack";
import { ServicesDivider } from "@/sections/services/ServicesDivider";
import { ServicesGrid } from "@/sections/services/ServicesGrid";
import { ServicesDelivery } from "@/sections/services/ServicesDelivery";
import { ServicesCTA } from "@/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Services Pune | Maxima Solutions",
  description: "Explore our specialized web and mobile app development services in Pune. From MERN stack to native mobile solutions, we build for scale.",
  keywords: ["Web & Mobile App Development Services Pune", "MERN Stack Experts India", "UI/UX Design Solutions", "Custom App Development"],
  openGraph: {
    title: "Web & Mobile App Development Services | Maxima Business Solutions",
    description: "Expert software services in Pune including web, mobile, and digital marketing.",
    url: "https://maximabusiness.com/services",
  },
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
