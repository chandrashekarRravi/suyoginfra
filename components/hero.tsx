"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Image background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <Image
          src="/home page.jpg"
          alt="Construction site with modern infrastructure"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto flex min-h-screen items-center px-4">
        <div className="max-w-3xl pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 font-montserrat text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gray-400">Building     Excellence for the Future</span> <br className="hidden sm:block" />

            </h1>
            <p className="mb-8 text-lg text-gray-200 sm:text-xl md:max-w-2xl text-shadow-sm font-medium">
              Suyog Infra Solutions provides expert civil construction, turnkey interiors, and sustainable infrastructure developments across Bangalore, with over 20 years of proven excellence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button className="group bg-tata-blue px-8 py-7 text-base text-white hover:bg-tata-blue/90 hover:text-white">
                  <span className="font-montserrat">Explore Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact?consultation=true">
                <Button
                  variant="outline"
                  className="group border-2 border-white bg-black/30 px-8 py-7 text-base text-white backdrop-blur-sm hover:bg-white hover:text-gray-900"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-montserrat">Book Consultation</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="mb-2 text-xs text-white">Scroll Down</span>
              <div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
