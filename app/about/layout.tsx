import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "../breadcrumb-schema"

export const metadata: Metadata = {
  title: "About Suyog Infra - Leading Construction Company in Bengaluru",
  description:
    "Learn about Suyog Infra Solutions - a leading construction company in Bengaluru with over two decades of experience in civil construction, interior execution, turnkey infrastructure projects, and landscaping.",
  keywords: [
    "about Suyog Infra",
    "construction company Bengaluru",
    "interior specialists Bangalore",
    "turnkey projects Karnataka",
    "landscaping experts Rajajinagar",
  ],
  alternates: {
    canonical: "/about",
  },
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Suyog Infra - Leading Construction Company in Bengaluru",
  description:
    "Learn about Suyog Infra Solutions - a leading construction company in Bengaluru with over two decades of experience in civil construction, interior execution, turnkey infrastructure projects, and landscaping.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/about`,
  inLanguage: "en-IN",
  about: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
    foundingDate: "2000",
    description:
      "Construction company in Bengaluru specializing in civil construction, interior execution, turnkey projects, and landscaping services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "200",
    },
    foundingLocation: {
      "@type": "Place",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  // AEO signals for entity understanding
  publisher: {
    "@type": "Organization",
    name: "Suyog Infra Solutions",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema("/about", "About Us")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  )
}


