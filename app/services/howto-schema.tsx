// HowTo schema for Services page - "Our Process" section
export const howToProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Suyog Infra Solutions Executes Construction and Interior Projects",
  description:
    "A clear and structured process to deliver construction and interior projects with precision and excellence, from initial consultation to final handover.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Consultation",
      text: "We start with a detailed discussion to understand your needs, vision and budget.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/services#consultation`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Planning & Design",
      text: "Our team creates clear plans and designs that match your requirements and preferences.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/services#planning`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execution",
      text: "We execute the plans with precision and follow strict quality and safety standards.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/services#execution`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Handover",
      text: "We deliver the completed project with full documentation and a detailed walkthrough.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"}/services#handover`,
    },
  ],
  totalTime: "P12M", // Estimated 12 months for typical residential project
  tool: [
    {
      "@type": "HowToTool",
      name: "Construction Equipment",
    },
    {
      "@type": "HowToTool",
      name: "Design Software",
    },
    {
      "@type": "HowToTool",
      name: "Quality Control Systems",
    },
  ],
  supply: [
    {
      "@type": "HowToSupply",
      name: "Construction Materials",
    },
    {
      "@type": "HowToSupply",
      name: "Interior Materials",
    },
  ],
}

