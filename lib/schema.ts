export const organizationSchema = {
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

export const localBusinessSchema = {
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
