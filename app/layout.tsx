import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { KeyboardWrapper } from "@/components/KeyboardWrapper";
import { Toaster } from "sonner";

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
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
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
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
