import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "../breadcrumb-schema"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of construction and interior projects in Bengaluru and Rajajinagar. View our residential, commercial, and turnkey infrastructure projects showcasing our expertise and quality.",
  keywords: [
    "construction projects Bengaluru",
    "interior projects Bangalore",
    "residential projects Rajajinagar",
    "commercial projects Karnataka",
  ],
  alternates: {
    canonical: "/projects",
  },
}

const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Construction and Interior Projects Portfolio",
  description:
    "Portfolio of construction and interior projects in Bengaluru and Rajajinagar showcasing residential, commercial, and turnkey infrastructure projects.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/projects`,
  inLanguage: "en-IN",
  about: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema("/projects", "Projects")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }}
      />
      {children}
    </>
  )
}


