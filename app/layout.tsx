import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"),
  title: {
    default: "Suyog Infra Solutions | Premier Civil Construction & Interior Execution",
    template: "%s | Suyog Infra Solutions",
  },
  description:
    "Suyog Infra Solutions - Premier construction company in Bengaluru & Rajajinagar. Expert in civil construction, residential & commercial interiors, turnkey projects, and landscaping services. Over 20 years of excellence.",
  keywords: [
    "construction company Bengaluru",
    "interior design Bangalore",
    "civil construction Rajajinagar",
    "turnkey projects Karnataka",
    "landscaping services Peenya",
    "residential interiors",
    "commercial interiors",
    "infrastructure projects Bangalore",
  ],
  authors: [{ name: "Suyog Infra Solutions" }],
  creator: "Suyog Infra Solutions",
  publisher: "Suyog Infra Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Suyog Infra Solutions",
    title: "Suyog Infra Solutions | Premier Civil Construction & Interior Execution",
    description:
      "Suyog Infra Solutions - Premier construction company in Bengaluru & Rajajinagar. Expert in civil construction, residential & commercial interiors, turnkey projects, and landscaping services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suyog Infra Solutions | Premier Civil Construction & Interior Execution",
    description:
      "Suyog Infra Solutions - Premier construction company in Bengaluru & Rajajinagar. Expert in civil construction, residential & commercial interiors, turnkey projects, and landscaping services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes here when available
  },
}

// LocalBusiness structured data with enhanced signals
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor", "InteriorDesigner"],
  name: "Suyog Infra Solutions",
  alternateName: "Suyog Infra",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/suyog.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/suyog.png`,
  description:
    "Suyog Infra Solutions is a leading construction company in Bengaluru and Rajajinagar, delivering quality civil construction, residential and commercial interior execution, turnkey infrastructure projects, and landscaping services. Over 20 years of excellence.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First floor, Kushal Garden Arcade, Bus stop, F23 & 24, near Systems, KIADB Housing Complex, Peenya",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560058",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0285",
    longitude: "77.5171",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bengaluru",
      alternateName: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    {
      "@type": "City",
      name: "Rajajinagar",
      addressLocality: "Rajajinagar",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    {
      "@type": "Place",
      name: "Peenya",
      addressLocality: "Peenya",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    {
      "@type": "State",
      name: "Karnataka",
      addressCountry: "IN",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction and Interior Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Civil Construction",
          description: "Residential buildings, commercial spaces, industrial structures, institutional buildings, and infrastructure projects",
          serviceType: "ConstructionService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Interiors",
          description: "Residential interior design and execution services",
          serviceType: "InteriorDesignService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Interiors",
          description: "Office and commercial space interior design and execution",
          serviceType: "InteriorDesignService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Turnkey Execution",
          description: "End-to-end project execution from design to completion",
          serviceType: "ConstructionService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping Works",
          description: "Garden design, irrigation systems, hardscaping, and outdoor space transformation",
          serviceType: "LandscapingService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Planning",
          description: "Conceptual design, space planning, 3D visualization, and regulatory approvals",
          serviceType: "ArchitecturalService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovation & Retrofits",
          description: "Structural repairs, space reconfiguration, systems upgrades, and modernization",
          serviceType: "RenovationService",
          areaServed: {
            "@type": "City",
            name: "Bengaluru",
          },
        },
      },
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-6363293112",
      contactType: "Customer Service",
      email: "info@suyoginfrasolutions.com",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9886854676",
      contactType: "Sales",
      email: "sales@suyoginfrasolutions.com",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  ],
  sameAs: [
    "http://facebook.com/suyoginfrasolutions",
    "https://www.instagram.com/suyog_infra_solutions/",
    "https://x.com/InfraSuyog3071",
    "https://www.linkedin.com/company/suyog-infra-solutions",
  ],
  foundingDate: "2000",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
