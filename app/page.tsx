import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { ServicesOverview } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Industries } from "@/sections/Industries";
import { FAQ } from "@/sections/FAQ";
import { Testimonials } from "@/sections/Testimonials";
import GlobalOfficesSection from "@/sections/GlobalOfficesSection";
import { BlogsPreview } from "@/sections/Blogs";
import { LeadGen } from "@/sections/LeadGen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company in Pune | Custom Software Solutions India",
  description: "Maxima Business Solutions: The premier software development company in Pune. Delivering high-performance custom software solutions, MERN stack, and digital products.",
  keywords: ["Software Development Company in Pune", "Custom Software Solutions India", "Best IT Agency Pune", "MBS Software Services"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <Process />
      <Industries />
      <FAQ />
      <BlogsPreview />
      {/* <Testimonials /> */}
      <GlobalOfficesSection />
      <LeadGen />
    </>
  );
}
