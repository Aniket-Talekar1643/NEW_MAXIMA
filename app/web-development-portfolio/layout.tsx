import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Maxima Business Solutions Pune",
  description: "Browse our portfolio of successful digital transformation projects, custom MERN stack web applications, and mobile apps built by our expert team in Pune.",
  keywords: ["Software Tech Success Stories", "IT Case Studies Pune", "Digital Product Showcases", "Tech Project Portfolio"],
  alternates: {
    canonical: "/web-development-portfolio",
  },
  openGraph: {
    title: "Portfolio | Maxima Business Solutions",
    description: "See how we've helped businesses grow with innovative web and mobile solutions.",
    url: "https://maximabusinesssolutions.com/web-development-portfolio",
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
