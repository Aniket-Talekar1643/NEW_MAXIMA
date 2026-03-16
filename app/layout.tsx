import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { Toaster } from "sonner";
import { Preloader } from "@/components/Preloader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
        <Preloader />
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
          <Toaster position="top-right" richColors />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
