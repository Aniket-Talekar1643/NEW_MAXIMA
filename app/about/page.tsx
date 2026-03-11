import { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutLeadership } from "@/sections/about/AboutLeadership";
import { AboutWhoWeAre } from "@/sections/about/AboutWhoWeAre";
import { AboutSkills } from "@/sections/about/AboutSkills";

export const metadata: Metadata = {
  title: "About Us | Top Web Development Company in Pune - Maxima",
  description: "Learn about Maxima Business Solutions, Pune's premier web development and digital transformation agency. Discover our vision, leadership, and expertise.",
  keywords: ["Web Development Company in Pune", "IT Agency Pune", "Maxima Business Solutions Team", "Digital Agency India"],
  openGraph: {
    title: "About Maxima Business Solutions",
    description: "Driving innovation & growth as a leading IT solutions company in Pune.",
    url: "https://maximabusiness.com/about",
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <AboutHero />
      <AboutLeadership />
      <AboutWhoWeAre />
      <AboutSkills />
    </main>
  );
}
