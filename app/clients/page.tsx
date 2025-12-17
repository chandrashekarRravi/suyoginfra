"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Quote } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
// Import logos directly from the app/clients folder
import BION from "../clients/BION.png"
import Blusmart from "../clients/blusmart.png"
import Bosch from "../clients/Bosch.png"
import CloudExtel from "../clients/cloudextel.png"
import ExponentPower from "../clients/exponentpower.png"
import Hillrock from "../clients/hillrockNPS.png"
import Ibis from "../clients/ibis.png"
import ParkPlus from "../clients/park+.png"
import RVUni from "../clients/RVUni.png"
import Statiq from "../clients/statiq.png"
import SunMobility from "../clients/sunmobility.png"
import Velociti from "../clients/velociti.png"

const testimonials = [
   {
    id: 1,
    name: "Rajath N",
    position: "Co-founder - Velociti",
    image: "/rajath.jpg?height=200&width=200",
    content:
      "Suyog is one of the best teams I have come across. Full on energy. They have successfully delivered a landscape project for us and they were able to match our expectations. Now I have given the second project of interiors and I'm quite confident that they will meet the expectations this time as well.",
    rating: 5,
  },
  {
    id: 2,
    name: "Pavan Sir",
    position: "Designation - VP Sales Marketing and CRM.",
    image: "/pavan.png?height=200&width=200",
    content:
      "We appreciate Suyog for the excellent landscape execution carried out at our IRA by the Banks – Sales Office. The work was executed with great attention to detail, quality materials, and a clear understanding of the design intent. The landscaping has significantly enhanced the overall aesthetics of the sales office, creating a welcoming and premium environment for our clients. Timelines were adhered to, coordination was smooth, and the site was well managed throughout the execution. Overall, a commendable job and a reliable partner for quality landscape works. Highly recommended",
    rating: 5,
  },
  {
    id: 3,
    name: "Principal Architect",
    position: "At MMR Universeal ventures pvt ltd",
    image: "/Principal Architect.jpeg?height=200&width=200",
    content:
      "The most effective and hardworking team and professionals ever met, from basic specifications of materials to the hardest new technology in material, they have all the inputs and justifications, extremely impressed by executed works and found a good association for future projects.",
    rating: 4,
  },
]

const actualClients = [
  { id: "logo-1", description: "Bion", image: BION.src || BION, className: "h-12 w-auto" },
  { id: "logo-2", description: "Ibis Hotels", image: Ibis.src || Ibis, className: "h-12 w-auto" },
  { id: "logo-3", description: "Blusmart", image: Blusmart.src || Blusmart, className: "h-12 w-auto" },
  { id: "logo-4", description: "CloudExtel", image: CloudExtel.src || CloudExtel, className: "h-12 w-auto" },
  { id: "logo-5", description: "Exponent Power", image: ExponentPower.src || ExponentPower, className: "h-12 w-auto" },
  { id: "logo-6", description: "HillRock", image: Hillrock.src || Hillrock, className: "h-12 w-auto" },
  { id: "logo-7", description: "Park+", image: ParkPlus.src || ParkPlus, className: "h-12 w-auto" },
  { id: "logo-8", description: "RV University", image: RVUni.src || RVUni, className: "h-12 w-auto" },
  { id: "logo-9", description: "Statiq", image: Statiq.src || Statiq, className: "h-12 w-auto" },
  { id: "logo-10", description: "Sun Mobility", image: SunMobility.src || SunMobility, className: "h-12 w-auto" },
  { id: "logo-11", description: "Bosch", image: Bosch.src || Bosch, className: "h-12 w-auto" },
  { id: "logo-12", description: "Velociti", image: Velociti.src || Velociti, className: "h-12 w-auto" },
]

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gray-50 py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-montserrat text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-tata-blue">Clients</span>
            </h1>
            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We've had the privilege of working with leading organizations and individuals across various sectors.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Testimonials */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="relative mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -left-8 -top-8 h-16 w-16 text-tata-blue/20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Quote className="h-full w-full" />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -right-8 h-16 w-16 rotate-180 text-tata-blue/20"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 180 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Quote className="h-full w-full" />
            </motion.div>

            {/* Testimonial slider */}
            <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center md:flex-row md:items-start md:space-x-8"
                >
                  <motion.div
                    className="mb-6 flex-shrink-0 md:mb-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <div>
                    <motion.div
                      className="mb-4 flex"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                          )}
                        />
                      ))}
                    </motion.div>
                    <motion.p
                      className="mb-6 text-lg italic text-gray-600"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <h4 className="font-montserrat text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <motion.div
                className="mt-8 flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-tata-blue hover:bg-tata-blue hover:text-white"
                >
                  <ArrowRight className="h-5 w-5 rotate-180" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-tata-blue hover:bg-tata-blue hover:text-white"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* Testimonial indicators */}
            <motion.div
              className="mt-6 flex justify-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    currentIndex === index ? "bg-tata-blue w-6" : "bg-gray-300",
                  )}
                  onClick={() => setCurrentIndex(index)}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* All Testimonials */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            More Success Stories
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-lg bg-white p-6 shadow-md"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="mb-4 flex"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                      )}
                    />
                  ))}
                </motion.div>
                <motion.p
                  className="mb-6 text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  "{testimonial.content}"
                </motion.p>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Logos */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Trusted Clients
          </motion.h2>
          {/*<p className="mb-12 text-center text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with leading organizations across industries.
          </p>*/}

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {actualClients.map((client, index) => (
              <motion.div
                key={client.id}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img
                  src={typeof client.image === 'string' ? client.image : client.image.src}
                  alt={client.description}
                  className={`${client.className} transition-all duration-300 hover:opacity-80`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-tata-blue py-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Our Growing List of Satisfied Clients
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contact us today to discuss how we can help bring your construction and interior vision to life.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
