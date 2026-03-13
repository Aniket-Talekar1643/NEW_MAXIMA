import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire Dedicated Software Developers in Pune | Contact Maxima",
    description: "Looking to hire dedicated software developers in Pune? Contact Maxima Business Solutions today for expert IT consultation and custom software builds.",
    keywords: ["Hire Dedicated Software Developers Pune", "Contact IT Specialists Pune", "Get IT Consultation", "Software Development Inquiry"],
  openGraph: {
    title: "Contact Maxima Business Solutions | Hire Experts in Pune",
    description: "Start your digital transformation journey today. Let's discuss your next project with Pune's top IT team.",
    url: "https://maximabusiness.com/hire-software-developers-pune",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
