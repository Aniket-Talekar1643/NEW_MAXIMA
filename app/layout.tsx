import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maximabusiness.com"),
  title: "Maxima Business Solutions | Top IT & Digital Transformation Company in Pune",
  description: "Maxima Business Solutions is a cutting-edge digital IT solutions company in Pune providing MERN stack development, digital marketing, and cloud services.",
  keywords: ["Web Development Company in Pune", "MERN Stack Development Company Pune", "Digital Transformation Company Pune", "IT Solutions Company Pune"],
  openGraph: {
    title: "Maxima Business Solutions | IT Services in Pune",
    description: "Scalable, innovative digital solutions helping modern businesses grow and succeed.",
    url: "https://maximabusiness.com",
    siteName: "Maxima Business",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxima Business Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxima Business Solutions | IT Services",
    description: "Cutting-edge digital IT solutions company in Pune providing modern web dev and digital marketing.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Maxima Business Solutions",
  "url": "https://maximabusiness.com",
  "logo": "https://maximabusiness.com/LOGO/mbs-logo-1.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210", // Placeholder, update with real phone
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/maxima-business-solutions",
    "https://twitter.com/maximabusiness"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maxima Business Solutions",
  "image": "https://maximabusiness.com/LOGO/mbs-logo-1.png",
  "url": "https://maximabusiness.com",
  "telephone": "+91-9876543210", // Placeholder
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "IT Park, Kharadi", // Placeholder
    "addressLocality": "Pune",
    "postalCode": "411014", // Placeholder
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5204,
    "longitude": 73.8567
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
