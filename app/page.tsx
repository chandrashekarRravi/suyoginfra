import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import ServiceGrid from "@/components/service-grid"
import WhySuyog from "@/components/why-suyog"
import ProjectShowcase from "@/components/project-showcase"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"
import ClientLogos from "@/components/client-logos"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid-background h-full w-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />

        <section className="container mx-auto px-4 py-24">
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Our Comprehensive Services
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              From concept to completion, we deliver excellence at every stage of your construction and interior needs.
            </p>
          </div>
          <ServiceGrid />
          <div className="mt-16 flex justify-center">
            <Link href="/services">
              <Button
                variant="outline"
                className="group border-2 border-tata-blue px-8 py-6 text-tata-blue hover:bg-tata-blue hover:text-white"
              >
                <span className="font-montserrat">Explore All Services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        <WhySuyog />

        {/* <section id="projects" className="bg-gray-50 py-24 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                Explore our portfolio of exceptional construction and interior projects across Bangalore and beyond.
              </p>
            </div>
            <ProjectShowcase />
            <div className="mt-16 flex justify-center">
              <Link href="/projects">
                <Button className="group bg-tata-blue px-8 py-6 text-white hover:bg-tata-blue/90 hover:text-white">
                  <span className="font-montserrat">View All Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section> */}

        <Testimonials />

        <section className="py-20">
          <div className="container mx-auto px-4">
            {/*<div className="mb-12 flex flex-col items-center text-center">
              <h2 className="font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl">Our Trusted Clients</h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                We've had the privilege of working with leading organizations across industries.
              </p>
            </div>*/}
            <ClientLogos />
          </div>
        </section>

        <ContactCTA />
      </div>
    </div>
  )
}
