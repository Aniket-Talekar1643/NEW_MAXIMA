import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { ServicesOverview } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Industries } from "@/sections/Industries";
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
