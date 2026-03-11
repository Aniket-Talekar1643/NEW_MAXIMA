import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Development Process | Maxima Business Solutions",
  description: "Learn about our agile software development lifecycle. Transparency, technical excellence, and timely delivery define our web and mobile app development process.",
  keywords: ["Agile Software Development Pune", "Web Development Process", "Mobile App Lifecycle", "IT Project Management"],
  openGraph: {
    title: "Our Process | Maxima Business Solutions",
    description: "How we build scalable software solutions from ideation to deployment.",
    url: "https://maximabusiness.com/process",
  }
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
