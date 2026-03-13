import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights & Software Industry Blog | Maxima Solutions",
  description: "Read our Tech Insights & Software Industry Blog for the latest on MERN stack, AI development, and digital growth strategies from our Pune experts.",
  keywords: ["Tech Insights & Software Industry Blog", "MERN Stack Tutorials Pune", "Latest Web Trends India", "Software Engineering Blogs"],
  openGraph: {
    title: "Tech Insights & Software Development Blog | Maxima",
    description: "Stay up-to-date with industry insights and tech trends from our expert developers in Pune.",
    url: "https://maximabusiness.com/blogs",
  }
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
