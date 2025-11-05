"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePageNavigation } from "@/hooks/use-page-navigation"

const categories = ["All", "Residential", "Commercial", "Interiors", "Landscap", "Ongoing"]

const projects = [
  {
    id: 1,
    title: "Luxury Villa Complex",
    category: "Interiors",
    location: "Whitefield, Bangalore",
    year: "2022",
    image: "interior/IP1.png?height=600&width=800",
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
    category: "Interiors",
    location: "Electronic City, Bangalore",
    year: "2021",
    image: "interior/IP2.png?height=600&width=800",
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
    category: "Interiors",
    location: "MG Road, Bangalore",
    year: "2020",
    image: "interior/IP3.png?height=600&width=800",
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
    location: "Indiranagar, Bangalore",
    year: "2022",
    image: "interior/IP4.png?height=600&width=800",
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
    category: "Interiors",
    location: "Outer Ring Road, Bangalore",
    year: "2023-Present",
    image: "interior/IP5.png?height=600&width=800",
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
    category: "Interiors",
    location: "Hebbal, Bangalore",
    year: "2021",
    image: "interior/IP6.png?height=600&width=800",
    description: "A 20-story residential tower with premium amenities and smart features.",
    details: {
      scope: "Complete construction and common area interiors",
      timeline: "30 months",
      budget: "₹35-40 Cr",
      technologies: "Precast technology, Renewable energy systems",
    },
  },
  {
    id: 7,
    title: "Shopping Mall",
    category: "Interiors",
    location: "Koramangala, Bangalore",
    year: "2019",
    image: "interior/IP7.png?height=600&width=800",
    description: "A multi-level shopping mall with entertainment zones and food courts.",
    details: {
      scope: "Complete construction and interior execution",
      timeline: "36 months",
      budget: "₹45-50 Cr",
      technologies: "Large span structures, Energy-efficient HVAC",
    },
  },
  {
    id: 8,
    title: "Luxury Penthouse Interiors",
    category: "Interiors",
    location: "UB City, Bangalore",
    year: "2022",
    image: "interior/IP8.png?height=600&width=800",
    description: "Bespoke interior design for a high-end penthouse with panoramic city views.",
    details: {
      scope: "Complete interior design and execution",
      timeline: "6 months",
      budget: "₹2-3 Cr",
      technologies: "Smart home integration, Custom furniture",
    },
  },
  {
    id: 9,
    title: "Mixed-Use Development",
    category: "Interiors",
    location: "Yelahanka, Bangalore",
    year: "2023-Present",
    image: "interior/IP9.png?height=600&width=800",
    description: "A mixed-use development with residential, commercial, and retail spaces.",
    details: {
      scope: "Master planning and phased construction",
      timeline: "48 months (in progress)",
      budget: "₹70-80 Cr",
      technologies: "Sustainable design, Modular construction",
    },
  },
  
  {
    id: 10,
    title: "Mixed-Use Development",
    category: "Interiors",
    location: "Yelahanka, Bangalore",
    year: "2023-Present",
    image: "interior/IP10.png?height=600&width=800",
    description: "A mixed-use development with residential, commercial, and retail spaces.",
    details: {
      scope: "Master planning and phased construction",
      timeline: "48 months (in progress)",
      budget: "₹70-80 Cr",
      technologies: "Sustainable design, Modular construction",
    },
  },
  
  {
    id: 11,
    title: "Mixed-Use Development",
    category: "Landscap",
    location: "Yelahanka, Bangalore",
    year: "2023-Present",
    image: "/placeholder.svg?height=600&width=800",
    description: "A mixed-use development with residential, commercial, and retail spaces.",
    details: {
      scope: "Master planning and phased construction",
      timeline: "48 months (in progress)",
      budget: "₹70-80 Cr",
      technologies: "Sustainable design, Modular construction",
    },
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const { isPageLoaded, animationKey } = usePageNavigation()

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24" key={animationKey}>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gray-50 py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-montserrat text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-tata-blue">Projects</span>
            </h1>
            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our portfolio of exceptional construction and interior projects across Bangalore and beyond.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  className={cn(
                    "rounded-full px-6",
                    activeCategory === category
                      ? "bg-tata-blue hover:bg-tata-blue/90"
                      : "hover:border-tata-blue hover:text-tata-blue",
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-tata-blue px-3 py-1 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montserrat text-xl font-semibold">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-tata-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
              >
                <button
                  className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
                  onClick={() => setSelectedProject(null)}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <div>
                      <div className="mb-6 h-80 overflow-hidden rounded-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <h2 className="font-montserrat text-3xl font-semibold">{project.title}</h2>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span>{project.location}</span>
                        <span className="mx-2">•</span>
                        <span>{project.year}</span>
                        <span className="mx-2">•</span>
                        <span className="rounded-full bg-tata-blue/10 px-3 py-1 text-xs font-medium text-tata-blue">
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-6 text-gray-600">{project.description}</p>

                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h3 className="font-montserrat text-lg font-semibold">Project Scope</h3>
                          <p className="mt-2 text-gray-600">{project.details.scope}</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h3 className="font-montserrat text-lg font-semibold">Timeline</h3>
                          <p className="mt-2 text-gray-600">{project.details.timeline}</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h3 className="font-montserrat text-lg font-semibold">Budget Range</h3>
                          <p className="mt-2 text-gray-600">{project.details.budget}</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                          <h3 className="font-montserrat text-lg font-semibold">Technologies Used</h3>
                          <p className="mt-2 text-gray-600">{project.details.technologies}</p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-center">
                        <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                          <span className="font-montserrat">Request Similar Project</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </div>
          )}

          {/* Pagination */}
          {/*{filteredProjects.length > 0 && (
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full bg-tata-blue text-white hover:bg-tata-blue/90">
                  1
                </Button>
                <Button variant="outline" className="rounded-full hover:bg-tata-blue hover:text-white">
                  2
                </Button>
                <Button variant="outline" className="rounded-full hover:bg-tata-blue hover:text-white">
                  3
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}*/}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-tata-blue py-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's discuss how we can bring your vision to life with our expertise and dedication.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-tata-blue"
              >
                <span className="font-montserrat">Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
