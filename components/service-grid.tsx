"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Home, Layers, PenTool, Trees, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Civil Construction",
    description: "We provide end-to-end construction services for residential and commercial projects with precision.",
    icon: Building2,
    details:
      "We handle civil construction from foundation to structure. We ensure strength, durability and full safety compliance. We manage projects of all sizes with equal care and expertise.",
    slug: "civil",
  },
  {
    title: "Residential & Commercial Interiors",
    description: "We transform spaces with innovative designs tailored to your lifestyle and brand.",
    icon: Home,
    details:
      "We design living and working spaces that balance beauty and function. Our services include space planning, material selection, custom furniture, lighting and final styling.",
    slug: "interior",
  },
  {
    title: "Turnkey Execution",
    description: "We manage projects from concept to completion with single-point responsibility.",
    icon: Layers,
    details:
      "We deliver complete project execution with a single point of contact. We manage design, procurement, construction and final handover.",
    slug: "turnkey",
  },
  {
    title: "Landscaping Works",
    description: "We create beautiful and functional outdoor spaces with complete landscaping solutions.",
    icon: Trees,
    details:
      "We design and build outdoor spaces that add beauty and value. Our services include garden design, irrigation, hardscaping and sustainable landscaping.",
    slug: "landscaping",
  },
  {
    title: "Architectural Planning",
    description: "We design smart layouts that optimize space and improve functionality.",
    icon: PenTool,
    details:
      "We turn ideas into build-ready designs. Our services include concept design, space planning, 3D views, approvals and detailed drawings.",
    slug: "planning",
  },
  {
    title: "Renovation & Retrofits",
    description: "We upgrade existing structures while preserving their character and strength.",
    icon: Wrench,
    details:
      "We transform outdated spaces into modern, functional environments. We handle repairs, space changes, system upgrades and visual improvements.",
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
              <div className="text-sm font-medium text-tata-blue hover:text-tata-blue/80">Learn more</div>
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
