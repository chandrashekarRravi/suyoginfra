import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "../breadcrumb-schema"

export const metadata: Metadata = {
  title: "Construction & Interior Services in Bengaluru",
  description:
    "Explore our comprehensive construction and interior services in Bengaluru including civil construction, residential & commercial interiors, turnkey projects, landscaping, architectural planning, and renovation services.",
  keywords: [
    "construction services Bengaluru",
    "interior design Bangalore",
    "civil construction Karnataka",
    "turnkey projects Rajajinagar",
    "landscaping services Peenya",
    "residential interiors",
    "commercial interiors",
  ],
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema("/services", "Services")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}


