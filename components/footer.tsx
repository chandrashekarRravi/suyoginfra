"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/news" },
  ],
  services: [
    { name: "Civil Construction", href: "/services#civil" },
    { name: "Interior Execution", href: "/services#interior" },
    { name: "Turnkey Projects", href: "/services#turnkey" },
    { name: "Architectural Planning", href: "/services#planning" },
  ],
  resources: [
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/clients" },
    { name: "FAQ", href: "/faq" },
    { name: "Downloads", href: "/resources" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Facebook", href: "http://facebook.com/suyoginfrasolutions", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/suyog_infra_solutions/", icon: Instagram },
    { name: "Twitter", href: "https://x.com/InfraSuyog3071", icon: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/suyog-infra-solutions", icon: Linkedin },
  ],
}

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="font-montserrat text-2xl font-bold tracking-tight uppercase">SUYOG INFRA</h2>
            <div className="mt-4 text-gray-400">
              {/* <p>Blooming Co-Working Spaces Rajajinagar</p> */}
              <p className="mt-1">First floor, Kushal Garden Arcade, Bus stop,</p>
              <p className="mt-1">F23 & 24, near Systems, KIADB Housing Complex,</p>
              <p className="mt-1">Peenya, Bengaluru, Karnataka 560058</p>
              <p className="mt-4">+91-6363293112</p>
              <p className="mt-1">info@suyoginfrasolutions.com</p>
            </div>
          </motion.div>

          {/* Right section (services) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-gray-300">Services</h3>
            <div className="mt-4 grid grid-cols-2 gap-y-3 gap-x-8 text-gray-400">
              <ul className="space-y-3">
                <li><Link href="/services#construction" className="transition-colors hover:text-tata-blue">Construction</Link></li>
                <li><Link href="/services#ev" className="transition-colors hover:text-tata-blue">EV Charging Stations</Link></li>
                <li><Link href="/services#retrofit" className="transition-colors hover:text-tata-blue">Retrofitting & Repairs</Link></li>
                <li><Link href="/services#automation" className="transition-colors hover:text-tata-blue">Automation</Link></li>
                <li><Link href="/services#fire" className="transition-colors hover:text-tata-blue">Fire and Safety</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link href="/services#landscaping" className="transition-colors hover:text-tata-blue">Landscaping</Link></li>
                <li><Link href="/services#interiors" className="transition-colors hover:text-tata-blue">Interiors Designing</Link></li>
                <li><Link href="/services#asset" className="transition-colors hover:text-tata-blue">Asset Management</Link></li>
                <li><Link href="/services#telecom" className="transition-colors hover:text-tata-blue">Telecom</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-6">
              {navigation.social.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="text-gray-400"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>

            {/* Contact + Brochure */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="group flex items-center text-sm text-gray-400 transition-colors hover:text-white" href="/contact">
                <span>Contact Us</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="text-gray-600">|</span>
              {/* <Link className="text-sm text-gray-400 transition-colors hover:text-white" href="/brochure">
                Download Brochure
              </Link> */}
            </motion.div>

            {/* Footer note */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Suyog Infra Solutions. All rights reserved. |{" "}
              <a
                href="https://www.avaio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                AVAIO Ads Matrix
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
