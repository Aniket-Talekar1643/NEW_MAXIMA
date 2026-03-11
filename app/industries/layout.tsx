import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | IT Solutions Company Pune",
  description: "Maxima Business Solutions delivers custom software, web development, and digital marketing tailored for healthcare, finance, retail, and manufacturing sectors.",
  keywords: ["Healthcare IT Solutions Pune", "E-commerce Web Development", "Fintech Software Development", "Real Estate Tech Solutions"],
  openGraph: {
    title: "Industries We Serve | Maxima Business",
    description: "Tailored IT & digital transformation services for diverse industries.",
    url: "https://maximabusiness.com/industries",
  }
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
