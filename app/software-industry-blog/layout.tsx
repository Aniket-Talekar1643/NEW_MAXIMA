import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Industry Blog & Tech Trends | Maxima Business Solutions",
  description: "Read the latest insights, tech trends, and software industry updates from the expert engineering team at Maxima Business Solutions, Pune.",
  keywords: ["Software Industry Blog", "Tech Trends Pune", "Web Development Tips", "Software Engineering Insights"],
  alternates: {
    canonical: "/software-industry-blog",
  },
  openGraph: {
    title: "Software Industry Blog & Tech Trends | Maxima",
    description: "Insights, Trends & Updates from Maxima Business Solutions.",
    url: "https://maximabusinesssolutions.com/software-industry-blog",
  }
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
