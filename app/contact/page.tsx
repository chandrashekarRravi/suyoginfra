"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Phone, Mail, MapPin, Check, ChevronDown, ChevronUp } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { usePageNavigation } from "@/hooks/use-page-navigation"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const consultation = searchParams.get("consultation")
  const { isPageLoaded, animationKey } = usePageNavigation()

  useEffect(() => {
    // If consultation parameter is present, scroll to the form
    if (consultation === "true") {
      const formElement = document.getElementById("contact-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [consultation])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="pt-24" key={animationKey}>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-montserrat text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Contact <span className="text-tata-blue">Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Get in touch with our team to discuss your project or learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-montserrat text-3xl font-semibold tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-gray-600">
                We are here to answer your questions about our services. Reach out to us and we will respond as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-montserrat text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 98868 54676</p>
                    <p className="text-gray-600">+91 63632 93112‬</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-montserrat text-lg font-medium">Email</h3>
                    <p className="mt-1 text-gray-600">info@suyoginfra.com</p>
                    <p className="text-gray-600">sales@suyoginfra.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-montserrat text-lg font-medium">Office</h3>
                    <p className="mt-1 text-gray-600">
                      First floor, Kushal Garden Arcade, Bus stop, F23 & 24, near Systems, KIADB Housing Complex, Peenya,
                      <br />
                      Bangalore - 560058, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-montserrat text-xl font-medium">Office Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="contact-form"
            >
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-montserrat text-xl font-semibold">Send us a message</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="mt-4 font-montserrat text-xl font-medium">Message Sent!</h4>
                    <p className="mt-2 text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 63632 93112‬"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-tata-blue py-6 text-white hover:bg-tata-blue/90 hover:text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1129843286094!2d77.51710107359013!3d13.028476413631704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d34750c0e5d%3A0x57308ab291673518!2sSuyog%20Infra%20Solutions!5e0!3m2!1sen!2sin!4v1761978868813!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Suyog Infra Solutions Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-montserrat text-3xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "What areas do you serve?",
                answer:
                  "We mainly serve Bangalore and nearby areas. We also handle projects across Karnataka and other parts of South India based on the project scope and requirements.",
              },
              {
                question: "How do you estimate project costs?",
                answer:
                  "We estimate costs by reviewing your requirements, site conditions, materials, labor and timeline. We provide a clear and transparent cost breakdown to help you make informed decisions.",
              },
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines depend on the scope and complexity. Residential projects usually take 12 to 18 months. Commercial projects may take 18 to 36 months. We share a detailed timeline during the initial consultation.",
              },
              {
                question: "Do you offer warranties on your work?",
                answer:
                  "Yes, we provide a 5-year structural warranty and a 1-year warranty on all other work. You can request extended warranties for specific components.",
              },
              {
                question: "Can you work with my architect or designer?",
                answer:
                  "Yes, we often collaborate with external architects and designers. Our team turns design visions into reality while keeping the original concept intact.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tata-blue focus:ring-inset"
                >
                  <h3 className="font-montserrat text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-tata-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
