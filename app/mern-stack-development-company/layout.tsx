import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Tech Stack | React, Node.js, Next.js Development Company",
  description: "Maxima Business Solutions leverages modern technologies including MERN Stack, Python, AWS, and Next.js to build scalable, high-performance applications.",
  keywords: ["MERN Stack Developers Pune", "React.js Agency", "Node.js Development Services", "Next.js Development Company"],
  openGraph: {
    title: "Our Technologies | Maxima Business Solutions",
    description: "Discover the cutting-edge tools and frameworks we use to deliver exceptional digital products.",
    url: "https://maximabusiness.com/mern-stack-development-company",
  }
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
