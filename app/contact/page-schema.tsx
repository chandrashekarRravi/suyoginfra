// FAQPage structured data for Contact page
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We mainly serve Bangalore and nearby areas. We also handle projects across Karnataka and other parts of South India based on the project scope and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do you estimate project costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We estimate costs by reviewing your requirements, site conditions, materials, labor and timeline. We provide a clear and transparent cost breakdown to help you make informed decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical project timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines depend on the scope and complexity. Residential projects usually take 12 to 18 months. Commercial projects may take 18 to 36 months. We share a detailed timeline during the initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer warranties on your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a 5-year structural warranty and a 1-year warranty on all other work. You can request extended warranties for specific components.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with my architect or designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we often collaborate with external architects and designers. Our team turns design visions into reality while keeping the original concept intact.",
      },
    },
  ],
}

