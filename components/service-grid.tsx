"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Home, Layers, Paintbrush, PenTool, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Civil Construction",
    description: "End-to-end construction services for residential and commercial projects with precision engineering.",
    icon: Building2,
    details:
      "Our civil construction services encompass everything from foundation work to structural engineering, ensuring durability and compliance with all safety standards. We handle projects of all scales with the same level of dedication and expertise.",
    slug: "civil",
  },
  {
    title: "Residential & Commercial Interiors",
    description: "Transforming spaces with innovative design solutions tailored to your lifestyle and brand identity.",
    icon: Home,
    details:
      "We create living and working environments that perfectly balance aesthetics and functionality. Our interior solutions include space planning, material selection, custom furniture, lighting design, and final styling.",
    slug: "interior",
  },
  {
    title: "Turnkey Execution",
    description: "Comprehensive project management from concept to completion with single-point accountability.",
    icon: Layers,
    details:
      "Our turnkey solutions provide end-to-end project execution with a single point of contact, eliminating coordination hassles. We handle everything from design and procurement to construction and handover.",
    slug: "turnkey",
  },
  {
    title: "FRP/Fiber Works",
    description: "Specialized fiber-reinforced polymer solutions for durability and aesthetic enhancement.",
    icon: Paintbrush,
    details:
      "Our FRP expertise includes custom moldings, decorative elements, structural reinforcements, and waterproofing solutions. We use advanced materials and techniques to create lightweight yet durable components.",
    slug: "frp",
  },
  {
    title: "Architectural Planning",
    description: "Innovative design solutions that optimize space utilization and enhance functionality.",
    icon: PenTool,
    details:
      "Our architectural planning services include conceptual design, space planning, 3D visualization, regulatory compliance, and detailed construction documentation to bring your vision to life.",
    slug: "planning",
  },
  {
    title: "Renovation & Retrofits",
    description: "Breathing new life into existing structures while preserving their character and integrity.",
    icon: Wrench,
    details:
      "We specialize in transforming outdated spaces into modern, functional environments. Our renovation services include structural repairs, space reconfiguration, systems upgrades, and aesthetic enhancements.",
    slug: "renovation",
  },
]

export default function ServiceGrid() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-montserrat text-xl font-semibold tracking-tight">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {expandedService === index ? service.details : service.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setExpandedService(expandedService === index ? null : index)}
              className="text-sm font-medium text-tata-blue hover:text-tata-blue/80"
            >
              {expandedService === index ? "Show less" : "Read more"}
            </button>
            <Link href={`/services#${service.slug}`}>
              <div className="btn-learn-more">Learn more</div>
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full border border-tata-blue/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute -right-1 -top-1 h-12 w-12 rounded-full border border-tata-blue/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </motion.div>
      ))}
    </div>
  )
}
