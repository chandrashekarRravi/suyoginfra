// Service schema for Services page
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Construction & Interior Services in Bengaluru",
  description:
    "Comprehensive construction and interior services in Bengaluru including civil construction, residential & commercial interiors, turnkey projects, landscaping, architectural planning, and renovation services.",
  url: `${baseUrl}/services`,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Suyog Infra Solutions",
    url: baseUrl,
  },
  about: {
    "@type": "LocalBusiness",
    name: "Suyog Infra Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Civil Construction",
        description:
          "We handle all aspects of civil construction, from foundation work to structural engineering. We ensure strong structures and follow all safety standards.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "ConstructionService",
        offers: {
          "@type": "Offer",
          description: "Residential buildings, commercial spaces, industrial structures, institutional buildings, and infrastructure projects",
        },
      },
      {
        "@type": "Service",
        name: "Residential & Commercial Interiors",
        description:
          "We design and build living and working spaces that balance style and function. We offer space planning, material selection, custom furniture, lighting design and final styling.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "InteriorDesignService",
        offers: {
          "@type": "Offer",
          description:
            "Residential interior design, office and commercial space interiors, retail and hospitality interiors, custom furniture design, and renovation services",
        },
      },
      {
        "@type": "Service",
        name: "Turnkey Execution",
        description:
          "We offer end-to-end project execution with a single point of contact. This approach removes coordination challenges. We manage the entire process from design and procurement to construction and final handover.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "ConstructionService",
        offers: {
          "@type": "Offer",
          description:
            "Comprehensive project management, design and engineering services, material procurement, construction execution, and testing and commissioning",
        },
      },
      {
        "@type": "Service",
        name: "Landscaping Works",
        description:
          "We design and build outdoor spaces that are both functional and visually appealing. Our work enhances property value and supports the environment.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "LandscapingService",
        offers: {
          "@type": "Offer",
          description:
            "Garden design and installation, irrigation systems, hardscaping, sustainable landscaping, and outdoor lighting",
        },
      },
      {
        "@type": "Service",
        name: "Architectural Planning",
        description:
          "We provide architectural planning services that turn your ideas into clear designs. We handle conceptual design, space planning, 3D visualization, regulatory approvals and detailed construction documents.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "ArchitecturalService",
        offers: {
          "@type": "Offer",
          description:
            "Conceptual design and master planning, space planning and optimization, 3D visualization and rendering, regulatory compliance, and detailed construction documentation",
        },
      },
      {
        "@type": "Service",
        name: "Renovation & Retrofits",
        description:
          "We transform outdated spaces into modern and functional environments. We handle structural repairs, space changes, system upgrades and visual improvements.",
        provider: {
          "@type": "LocalBusiness",
          name: "Suyog Infra Solutions",
        },
        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },
        serviceType: "RenovationService",
        offers: {
          "@type": "Offer",
          description:
            "Structural repairs and reinforcements, space reconfiguration, systems upgrades, aesthetic enhancements, and heritage building restoration",
        },
      },
    ],
  },
}

