import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "../breadcrumb-schema"

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Our trusted clients and partners. Suyog Infra Solutions has worked with leading organizations across industries in Bengaluru and Karnataka, delivering quality construction and infrastructure solutions.",
  keywords: [
    "Suyog Infra clients",
    "construction company clients Bengaluru",
    "infrastructure clients Bangalore",
  ],
  alternates: {
    canonical: "/clients",
  },
}

const clientsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Trusted Clients and Partners",
  description:
    "Suyog Infra Solutions has worked with leading organizations across industries in Bengaluru and Karnataka, delivering quality construction and infrastructure solutions.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/clients`,
  inLanguage: "en-IN",
  about: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
  },
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema("/clients", "Clients")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsPageSchema) }}
      />
      {children}
    </>
  )
}


