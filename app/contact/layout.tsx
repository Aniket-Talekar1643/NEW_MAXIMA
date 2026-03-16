import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Software Developers in Pune | Contact Maxima",
  description: "Want to hire software developers in Pune? Contact Maxima Business Solutions today for custom app development.",
  keywords: ["Hire Software Developers in Pune", "Expert Developers India", "Contact IT Company Pune", "Hire MERN Stack Developers"],
  openGraph: {
    title: "Hire Software Developers in Pune | Maxima Solutions",
    description: "Get in touch with Maxima Business Solutions to hire expert software engineers.",
    url: "https://maximabusiness.com/contact",
  }
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
