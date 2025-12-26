"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, CheckCircle } from "lucide-react"
import { useCountUp } from "@/hooks/use-count-up"
import { usePageNavigation } from "@/hooks/use-page-navigation"

const stats = [
  {
    icon: Clock,
    value: "7+",
    numericValue: 7,
    label: "Years Experience",
    description: "Two decades of excellence in construction industry",
  },
  {
    icon: Users,
    value: "300+",
    numericValue: 300,
    label: "Projects Delivered",
    description: "Successful completion of diverse construction projects",
  },
  {
    icon: CheckCircle,
    value: "95%",
    numericValue: 95,
    label: "Repeat Clients",
    description: "Our clients trust us with their future projects",
  },
  {
    icon: Award,
    value: "ISO",
    numericValue: null, // ISO doesn't have a numeric value
    label: "Certified",
    description: "Internationally recognized quality management systems",
  },
]

// Individual stat component to avoid hook issues
function StatCard({ stat, index, isPageLoaded }: { stat: typeof stats[0], index: number, isPageLoaded: boolean }) {
  const { count, elementRef } = useCountUp({
    end: stat.numericValue || 0,
    duration: 2000,
    startOnIntersect: false,
    delay: index * 200
  })

  const displayValue = stat.numericValue !== null
    ? `${count}${stat.value.replace(/^\d+/, '')}` // Replace the number part with animated count
    : stat.value

  return (
    <motion.div
      ref={elementRef}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tata-blue/10">
        <stat.icon className="h-8 w-8 text-tata-blue" />
      </div>
      <span className="font-montserrat text-3xl font-bold">{displayValue}</span>
      <h3 className="font-montserrat text-lg font-medium">{stat.label}</h3>
      <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
    </motion.div>
  )
}

export default function WhySuyog() {
  const { isPageLoaded, animationKey } = usePageNavigation()

  return (
    <section className="overflow-hidden py-24" key={animationKey}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className=" bg-gray-50 p-8 rounded-lg shadow-md mb-16">
            <h3 className="font-montserrat text-2xl font-semibold text-center">Our Philosophy</h3>
            <p className="mt-4 text-gray-600 text-center">
              <b>“We build beyond blueprints.”</b>
              At Suyog Infra Solutions, we go beyond plans. We understand your vision and bring it to life with precision, innovation and integrity.
            </p>
          </div>
          <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-center">
            Why Choose <span className="text-tata-blue">Suyog Infra</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center">
            For over two decades, we have built more than structures. We have built trust, excellence and lasting relationships with our clients.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const { count, elementRef } = useCountUp({
                end: stat.numericValue || 0,
                duration: 2000,
                startOnIntersect: false,  // Start counting immediately when page loads
                delay: index * 200  // Stagger the animation start times
              })

              const displayValue = stat.numericValue !== null
                ? `${count}${stat.value.replace(/^\d+/, '')}` // Replace the number part with animated count
                : stat.value

              return (
                <motion.div
                  key={index}
                  ref={elementRef}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tata-blue/10">
                    <stat.icon className="h-8 w-8 text-tata-blue" />
                  </div>
                  <span className="font-montserrat text-3xl font-bold">{displayValue}</span>
                  <h3 className="font-montserrat text-lg font-medium">{stat.label}</h3>
                  <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
