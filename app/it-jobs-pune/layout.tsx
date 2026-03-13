import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Top IT Company in Pune - Maxima",
  description: "Looking for IT jobs in Pune? Join Maxima Business Solutions! We are hiring MERN stack developers, digital marketers, UI/UX designers, and more.",
  keywords: ["IT Jobs Pune", "MERN Stack Developer Jobs Pune", "Digital Marketing Careers", "Software Engineer Openings Pune"],
  openGraph: {
    title: "Careers at Maxima Business Solutions",
    description: "Build your future with Pune's fastest-growing digital agency.",
    url: "https://maximabusiness.com/it-jobs-pune",
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
