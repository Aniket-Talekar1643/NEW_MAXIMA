import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Maxima Business Solutions Pune",
  description: "Get in touch with Maxima Business Solutions. Reach out to our expert team for web development, digital marketing, and IT consulting in Pune.",
  keywords: ["Contact IT Solutions Pune", "Web Development Agency Contact", "Maxima Business Solutions Contact", "IT Consulting Pune"],
  openGraph: {
    title: "Contact Maxima Business Solutions",
    description: "Start your digital transformation journey today. Let's discuss your next project.",
    url: "https://maximabusiness.com/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
