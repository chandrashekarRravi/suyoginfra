"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Residential", "Commercial", "Interiors", "Ongoing"]

const projects = [
  {
    id: 1,
    title: "Luxury Villa Complex",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A collection of 12 premium villas with modern amenities and sustainable features.",
    details: {
      scope: "Complete construction and interior execution",
      timeline: "18 months",
      budget: "₹15-20 Cr",
      technologies: "Green building, Smart home automation",
    },
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "A state-of-the-art office space designed for collaboration and productivity.",
    details: {
      scope: "Turnkey project including interiors",
      timeline: "24 months",
      budget: "₹25-30 Cr",
      technologies: "Energy-efficient systems, Modular construction",
    },
  },
  {
    id: 3,
    title: "Boutique Hotel Renovation",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete renovation and interior redesign of a heritage property.",
    details: {
      scope: "Structural retrofitting and interior redesign",
      timeline: "12 months",
      budget: "₹8-10 Cr",
      technologies: "Heritage conservation, Modern amenities integration",
    },
  },
  {
    id: 4,
    title: "Premium Apartment Interiors",
    category: "Interiors",
    image: "/placeholder.svg?height=600&width=800",
    description: "Luxury interior design for a high-end residential complex.",
    details: {
      scope: "Interior design and execution for 24 apartments",
      timeline: "8 months",
      budget: "₹4-6 Cr",
      technologies: "Custom millwork, Imported materials",
    },
  },
  {
    id: 5,
    title: "Tech Park Development",
    category: "Ongoing",
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern tech park with collaborative spaces and advanced infrastructure.",
    details: {
      scope: "Complete construction from foundation to finish",
      timeline: "36 months (in progress)",
      budget: "₹50-60 Cr",
      technologies: "Modular construction, Smart building systems",
    },
  },
  {
    id: 6,
    title: "Residential Tower",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A 20-story residential tower with premium amenities and smart features.",
    details: {
      scope: "Complete construction and common area interiors",
      timeline: "30 months",
      budget: "₹35-40 Cr",
      technologies: "Precast technology, Renewable energy systems",
    },
  },
]

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={cn(
              "rounded-full px-6",
              activeCategory === category
                ? "bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white"
                : "border-2 hover:border-tata-blue hover:text-tata-blue",
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-900"
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image?.replace("?height=600&width=800", "") || "/placeholder.svg"}
                alt={`${project.title} - ${project.category} project`}
                fill
                loading="lazy"
                quality={80}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-tata-blue px-3 py-1 text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-montserrat text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>

              {selectedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800"
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Scope:</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.scope}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Timeline:</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.timeline}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Budget Range:</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.budget}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Technologies:</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.technologies}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-4 text-sm font-medium text-tata-blue hover:text-tata-blue/80">
                {selectedProject === project.id ? "View less" : "View details"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
