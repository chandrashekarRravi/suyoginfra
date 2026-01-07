import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "../breadcrumb-schema"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Suyog Infra Solutions. Contact us for construction, interior design, and infrastructure project consultations in Bengaluru and Rajajinagar. We're here to help bring your vision to life.",
  keywords: [
    "contact Suyog Infra",
    "construction consultation Bengaluru",
    "interior design consultation Bangalore",
    "construction company contact Rajajinagar",
  ],
  alternates: {
    canonical: "/contact",
  },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Suyog Infra Solutions",
  description:
    "Get in touch with Suyog Infra Solutions for construction, interior design, and infrastructure project consultations in Bengaluru and Rajajinagar.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/contact`,
  inLanguage: "en-IN",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "First floor, Kushal Garden Arcade, Bus stop, F23 & 24, near Systems, KIADB Housing Complex, Peenya",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560058",
      addressCountry: "IN",
    },
    telephone: "+91-6363293112",
    email: "info@suyoginfrasolutions.com",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0285",
      longitude: "77.5171",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema("/contact", "Contact")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  )
}


