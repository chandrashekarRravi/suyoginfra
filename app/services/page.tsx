"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePageNavigation } from "@/hooks/use-page-navigation"

export default function ServicesPage() {
  const { isPageLoaded, animationKey } = usePageNavigation()

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
              Our <span className="text-tata-blue">Services</span>
            </h1>
            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We deliver comprehensive construction and interior solutions tailored to your needs with excellence and precision
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {/* Civil Construction */}
            <motion.div
              id="civil"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-sm font-medium text-tata-blue">01</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">Civil Construction</h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We handle all aspects of civil construction, from foundation work to structural engineering. We ensure strong structures and follow all safety standards. We manage projects of all sizes with the same level of care and expertise.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    "Residential buildings and complexes",
                    "Commercial spaces and office buildings",
                    "Industrial structures and warehouses",
                    "Institutional buildings",
                    "Infrastructure projects",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/civil.png?height=400&width=800"
                  alt="Civil Construction"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Interior Execution */}
            <motion.div
              id="interior"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="order-2 md:order-1 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/comertial.png?height=600&width=800"
                  alt="Interior Execution"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -top-4 -right-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-sm font-medium text-tata-blue">02</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">
                  Residential & Commercial Interiors
                </h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  We design and build living and working spaces that balance style and function. We offer space planning, material selection, custom furniture, lighting design, and final styling.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    "Residential interior design and execution",
                    "Office and commercial space interiors",
                    "Retail and hospitality interiors",
                    "Custom furniture design and manufacturing",
                    "Renovation and refurbishment",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Turnkey Execution */}
            <motion.div
              id="turnkey"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-sm font-medium text-tata-blue">03</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">Turnkey Execution</h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We offer end-to-end project execution with a single point of contact. This approach removes coordination challenges. We manage the entire process from design and procurement to construction and final handover.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    "Comprehensive project management",
                    "Design and engineering services",
                    "Material procurement and quality control",
                    "Construction and interior execution",
                    "Testing, commissioning, and handover",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/turnkey.png?height=600&width=800"
                  alt="Turnkey Execution"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Landscaping Works */}
            <motion.div
              id="landscape"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="order-2 md:order-1 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/landscap.png?height=600&width=800"
                  alt="Landscaping Works"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -top-4 -right-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-sm font-medium text-tata-blue">04</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">Landscaping Works</h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  We design and build outdoor spaces that are both functional and visually appealing. Our work enhances property value and supports the environment. We create sustainable landscapes that blend with their surroundings.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    "Garden design and installation",
                    "Irrigation systems and water management",
                    "Hardscaping and patio construction",
                    "Sustainable and eco-friendly landscaping",
                    "Outdoor lighting and feature elements",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Architectural Planning */}
            <motion.div
              id="planning"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-sm font-medium text-tata-blue">05</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">Architectural Planning</h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We provide architectural planning services that turn your ideas into clear designs. We handle conceptual design, space planning, 3D visualization, regulatory approvals, and detailed construction documents.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    "Conceptual design and master planning",
                    "Space planning and optimization",
                    "3D visualization and rendering",
                    "Regulatory compliance and approvals",
                    "Detailed construction documentation",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/architecture.jpg?height=600&width=800"
                  alt="Architectural Planning"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Renovation & Retrofits */}
            <motion.div
              id="renovetion retrofits"
              className="scroll-mt-24 grid gap-12 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="order-2 md:order-1 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/Renovation & Retrofits.png?height=600&width=800"
                  alt="Renovation & Retrofits"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -top-4 -right-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-sm font-medium text-tata-blue">06</span>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight">Renovation & Retrofits</h2>
                <motion.p
                  className="mt-6 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  We transform outdated spaces into modern and functional environments. We handle structural repairs, space changes, system upgrades, and visual improvements.
                </motion.p>
                <motion.ul
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    "Structural repairs and reinforcements",
                    "Space reconfiguration and optimization",
                    "Systems upgrades (electrical, plumbing, HVAC)",
                    "Aesthetic enhancements and modernization",
                    "Heritage building restoration",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    >
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-tata-blue" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Link href="/contact">
                    <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
                      <span className="font-montserrat">Discuss Your Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat text-3xl font-semibold tracking-tight">Our Process</h2>
            <motion.p
              className="mt-4 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We follow a clear and structured process to deliver every project with precision and excellence.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start with a detailed discussion to understand your needs, vision, and budget.",
              },
              {
                step: "02",
                title: "Planning & Design",
                description:
                  "Our team creates clear plans and designs that match your requirements and preferences.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We execute the plans with precision and follow strict quality and safety standards.",
              },
              {
                step: "04",
                title: "Handover",
                description:
                  "We deliver the completed project with full documentation and a detailed walkthrough.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tata-blue text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  <span className="font-montserrat text-lg font-bold">{process.step}</span>
                </motion.div>
                <h3 className="mb-4 font-montserrat text-xl font-semibold">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-tata-blue py-16 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss your project and see how we can bring your vision to life.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-tata-blue"
              >
                <span className="font-montserrat">Get in Touch</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
