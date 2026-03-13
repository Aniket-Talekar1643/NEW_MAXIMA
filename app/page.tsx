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
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/sections/FAQ").then(mod => mod.FAQ));
const Testimonials = dynamic(() => import("@/sections/Testimonials").then(mod => mod.Testimonials));
const GlobalOfficesSection = dynamic(() => import("@/sections/GlobalOfficesSection"));
const BlogsPreview = dynamic(() => import("@/sections/Blogs").then(mod => mod.BlogsPreview));
const LeadGen = dynamic(() => import("@/sections/LeadGen").then(mod => mod.LeadGen));

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
      <Testimonials />
      <GlobalOfficesSection />
      <LeadGen />
    </>
  );
}
