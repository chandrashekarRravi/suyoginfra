"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
    name: "Priya Mehta",
    position: "Director, Mehta Enterprises",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "We've worked with Suyog Infra on multiple projects over the past decade. Their consistent quality, innovative solutions, and professional approach make them our go-to construction partner. They truly understand our requirements and deliver beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Reddy",
    position: "Owner, Reddy Residences",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The renovation of our heritage property was a complex project requiring specialized skills. Suyog Infra not only preserved the historical elements but also seamlessly integrated modern amenities. Their attention to detail and craftsmanship is unmatched.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ananya Desai",
    position: "Architect, AD Associates",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "As an architect, I value construction partners who understand design intent and execute with precision. Suyog Infra consistently delivers on both fronts. Their technical expertise and collaborative approach make them an ideal partner for complex architectural projects.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-br from-tata-blue/5 to-gray-50 py-24 dark:from-tata-blue/10 dark:to-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Hear from the clients who have experienced our commitment to excellence.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute -left-8 -top-8 h-16 w-16 text-tata-blue/20">
            <Quote className="h-full w-full" />
          </div>
          <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-180 text-tata-blue/20">
            <Quote className="h-full w-full" />
          </div>

          {/* Testimonial slider */}
          <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center md:flex-row md:items-start md:space-x-8"
              >
                <div className="mb-6 flex-shrink-0 md:mb-0">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                        )}
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-lg italic text-gray-600 dark:text-gray-400">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="font-montserrat text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-tata-blue hover:bg-tata-blue hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-tata-blue hover:bg-tata-blue hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  currentIndex === index ? "bg-tata-blue w-6" : "bg-gray-300 dark:bg-gray-700",
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
