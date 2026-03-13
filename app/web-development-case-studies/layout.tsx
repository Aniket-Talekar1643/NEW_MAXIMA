import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | Maxima Business Solutions",
  description: "Read our case studies to see how we've helped businesses in Pune and globally achieve digital transformation and build successful web and mobile applications.",
  keywords: ["Web Development Case Studies", "Digital Transformation Success", "IT Agency Results Pune", "SaaS Development Case Study"],
  openGraph: {
    title: "Case Studies | Maxima Business Solutions",
    description: "Real results. Real growth. Explore our technology success stories.",
    url: "https://maximabusiness.com/web-development-case-studies",
  }
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
