import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { KeyboardWrapper } from "@/components/KeyboardWrapper";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maximabusiness.com"),
  title: "Maxima Business Solutions | Top Software Development Company in Pune",
  description: "Maxima Business Solutions is a premier software development company in Pune. Expertise in MERN stack, mobile apps, digital transformation, and SEO solutions.",
  keywords: ["Software Development Company in Pune", "Web Development Company in Pune", "MERN Stack Development Pune", "Digital Transformation Company Pune", "Custom Software Solutions Pune", "IT Services Pune"],
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
    "telephone": "+91-8856949454",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/maxima-business-solutions",
    "https://twitter.com/maximabusiness",
    "https://facebook.com/maximabusiness"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maxima Business Solutions",
  "image": "https://maximabusiness.com/LOGO/mbs-logo-1.png",
  "url": "https://maximabusiness.com",
  "telephone": "+91-8856949454",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Undri",
    "addressLocality": "Pune",
    "postalCode": "411060",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5913,
    "longitude": 73.7389
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <KeyboardWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
