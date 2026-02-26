import React from 'react';

export const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What types of infrastructure projects does Suyog Infra undertake?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We execute a wide range of infrastructure projects, including luxury residential villas, multi-story commercial corporate headquarters, mixed-use developments, and specialized smart-building tech parks."
            }
        },
        {
            "@type": "Question",
            "name": "Does Suyog Infra provide turnkey interior design services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer complete turnkey interior design and execution services. This includes structural modifications, custom millwork, sustainable material sourcing, and smart home automation for residential and commercial spaces."
            }
        },
        {
            "@type": "Question",
            "name": "What locations in Bangalore do you serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We proudly serve major commercial and residential hubs across Bangalore, including Whitefield, Electronic City, Yelahanka, Koramangala, and Indiranagar."
            }
        },
        {
            "@type": "Question",
            "name": "What is the typical timeline for building a commercial complex with Suyog Infra?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline for a commercial complex typically ranges from 18 to 36 months, depending on the project's scale, master planning requirements, and zoning approvals."
            }
        }
    ]
};

export default function FAQSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our construction, interior, and turnkey project execution services.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto divide-y divide-gray-200">
                    {faqSchemaData.mainEntity.map((faq, index) => (
                        <div key={index} className="py-6">
                            <h3 className="font-montserrat text-xl font-medium text-gray-900">
                                {faq.name}
                            </h3>
                            <p className="mt-3 text-base text-gray-600">
                                {faq.acceptedAnswer.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Inject JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
                />
            </div>
        </section>
    );
}
