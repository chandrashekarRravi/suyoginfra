"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Timeline } from "@/components/ui/timeline"
import { motion } from "framer-motion"
import { usePageNavigation } from "@/hooks/use-page-navigation"

export default function AboutPage() {
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
              About <span className="text-tata-blue">Suyog Infra</span>
            </h1>
            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over two decades of excellence in the construction industry, we've built a reputation for quality,
              reliability, and innovation in every project we undertake.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-montserrat text-3xl font-semibold tracking-tight">Our Story</h2>
              <motion.p
                className="mt-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Suyog Infra Solutions began as a small construction firm with a big vision - to transform the urban landscape of Bangalore with quality construction and innovative design.
              </motion.p>
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Over the years, we've grown from a team of 5 dedicated professionals to a workforce of over 200 skilled engineers, architects, designers, and construction experts. Our journey has been marked by continuous learning, adaptation to new technologies, and an unwavering commitment to excellence.
              </motion.p>
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Today, we stand as one of Bangalore's premier construction and interior execution companies, with a portfolio spanning residential complexes, commercial spaces, hospitality projects, and institutional buildings.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Suyog Infra office building"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-2 border-tata-blue/20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our work, from planning and design to execution and delivery.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies, materials, and methods to deliver innovative solutions that exceed expectations.",
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to environmentally responsible construction practices and sustainable design principles.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-4 font-montserrat text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rajesh Suyog",
                position: "Founder & CEO",
                bio: "With over 30 years of experience in the construction industry, Rajesh leads the company with vision and expertise.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Sharma",
                position: "Chief Operating Officer",
                bio: "Priya oversees all operations, ensuring projects are delivered on time, within budget, and to the highest standards.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Vikram Mehta",
                position: "Chief Architect",
                bio: "Vikram brings creative vision and technical expertise to every project, leading our design team with innovation.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-64 w-full object-cover object-center"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                />
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  <h3 className="font-montserrat text-xl font-semibold">{member.name}</h3>
                  <p className="mb-4 text-tata-blue">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <motion.div
            className="relative mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Timeline
              data={[
                {
                  title: "Telecom & Fiber Optic Projects",
                  year: "2019",
                  content: (
                    <div>
                      <p className="mb-4 text-sm text-gray-600">
                        Suyog Infra Solutions began its journey with turnkey telecom and optical fiber projects, establishing a strong foundation in infrastructure execution.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Integrating Technology",
                  year: "2020",
                  content: (
                    <div>
                      <p className="mb-4 text-sm text-gray-600">
                        Expanded into RFID and boom barrier–based smart parking systems, AV integration, and networking solutions for corporate and institutional clients.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Green and Smart Solutions",
                  year: "2022",
                  content: (
                    <div>
                      <p className="mb-4 text-sm text-gray-600">
                        Ventured into the EV charging infrastructure segment, contributing to India’s green mobility movement while strengthening expertise in landscape and irrigation automation.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Building Trust Across Sectors & Interiors",
                  year: "2024",
                  content: (
                    <div>
                      <p className="mb-4 text-sm text-gray-600">
                        Delivered large-scale commercial, residential, interior, and landscape development projects, becoming a trusted partner for comprehensive infrastructure solutions.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Sustainable Buildings & Future Growth",
                  year: "2025",
                  content: (
                    <div>
                      <p className="mb-4 text-sm text-gray-600">
                        Focused on sustainable and technology-driven infrastructure, promoting eco-friendly designs, smart construction practices, and long-term value creation.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </motion.div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss how we can bring your vision to life with our expertise and dedication.
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
