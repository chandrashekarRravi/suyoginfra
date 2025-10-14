"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (mobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('button[aria-controls="mobile-menu"]')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Function to check if the current link is active
  const isActive = (path: string) => pathname === path

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 py-3 shadow-md backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-sm bg-tata-blue"></div>
            <span className="font-montserrat text-xl font-semibold tracking-tight">
              Suyog Infra
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-montserrat text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-tata-blue border-b-2 border-tata-blue pb-1"
                  : "text-gray-700 hover:text-tata-blue dark:text-gray-300 dark:hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact button */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/contact">
            <Button className="bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-tata-blue focus:outline-none focus:ring-2 focus:ring-tata-blue focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full z-50 bg-white shadow-lg border-t border-gray-200 mobile-menu-transition dark:bg-gray-900 dark:border-gray-700 md:hidden",
          mobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible",
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "mobile-nav-link block rounded-md px-3 py-3 font-montserrat text-base font-medium transition-colors",
                isActive(item.href)
                  ? "text-tata-blue bg-gray-100 dark:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100 hover:text-tata-blue dark:text-gray-300 dark:hover:bg-gray-800",
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full bg-tata-blue text-white hover:bg-tata-blue/90 hover:text-white min-h-[44px]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
