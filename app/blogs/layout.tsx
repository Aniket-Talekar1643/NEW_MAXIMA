import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Tech Blog | SEO Company in Pune - Maxima",
  description: "Read the latest insights on MERN stack development, digital marketing trends, and AI technology from Maxima Business Solutions, Pune's top IT experts.",
  keywords: ["Tech Blog Pune", "SEO Company in Pune Insights", "MERN Stack Tutorials", "Digital Marketing Trends India"],
  openGraph: {
    title: "Insights & Tech Blog | Maxima Business Solutions",
    description: "Stay up-to-date with industry insights and tech trends from our expert developers.",
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
