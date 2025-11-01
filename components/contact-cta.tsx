"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Check } from "lucide-react"

export default function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  return (
    <section id="contact" className="relative overflow-hidden bg-gray-50 py-24 scroll-mt-24 dark:bg-gray-900/50">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#0076C0_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900 sm:p-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let's Discuss Your Project
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Ready to transform your space? Contact us today to schedule a consultation with our expert team.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-montserrat text-lg font-medium">Phone</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">+91 80 2345 6789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-montserrat text-lg font-medium">Email</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">info@suyoginfra.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tata-blue/10 text-tata-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-montserrat text-lg font-medium">Office</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">First floor, Kushal Garden Arcade, Bus stop, F23 & 24, near Systems, KIADB Housing Complex, Peenya, Bengaluru, Karnataka 560058</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
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
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                <h3 className="font-montserrat text-xl font-semibold">Send us a message</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="mt-4 font-montserrat text-xl font-medium">Message Sent!</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
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
                          placeholder="+91 98765 43210"
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
      </div>
    </section>
  )
}
