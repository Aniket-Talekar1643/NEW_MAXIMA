import { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutLeadership } from "@/sections/about/AboutLeadership";
import { AboutWhoWeAre } from "@/sections/about/AboutWhoWeAre";
import { AboutSkills } from "@/sections/about/AboutSkills";

export const metadata: Metadata = {
  title: "Trusted IT Outsourcing Agency Pune | Maxima Business Solutions",
  description: "Learn how Maxima, a trusted IT outsourcing agency in Pune, drives digital transformation. Our expert team delivers scalable software excellence.",
  keywords: ["Trusted IT Outsourcing Agency Pune", "Digital Transformation Company Pune", "Software Engineering Expertise", "IT Partner India"],
  openGraph: {
    title: "Trusted IT Outsourcing Agency & Digital Transformation Partner",
    description: "Driving innovation & growth as a leading IT outsourcing agency in Pune.",
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
