import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { ServicesOverview } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Industries } from "@/sections/Industries";
import { FAQ } from "@/sections/FAQ";
import { Testimonials } from "@/sections/Testimonials";
import { BlogsPreview } from "@/sections/Blogs";
import { LeadGen } from "@/sections/LeadGen";

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
      <LeadGen />
    </>
  );
}
