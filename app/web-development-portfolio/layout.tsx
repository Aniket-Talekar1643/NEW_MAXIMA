import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Maxima Business Solutions Pune",
  description: "Browse our portfolio of successful digital transformation projects, custom MERN stack web applications, and mobile apps built by our expert team in Pune.",
  keywords: ["Web Development Portfolio", "MERN Stack Projects", "IT Agency Case Studies Pune", "Software Development Portfolio"],
  openGraph: {
    title: "Portfolio | Maxima Business Solutions",
    description: "See how we've helped businesses grow with innovative web and mobile solutions.",
    url: "https://maximabusiness.com/web-development-portfolio",
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
