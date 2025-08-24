"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/about", label: "About" },
  {
    id: "specialties",
    href: "/specialties",
    label: "Specialties",
  },
  { id: "services", href: "/services", label: "Services" },
  { id: "faqs", href: "/faqs", label: "FAQS" },
  { id: "blog", href: "/blog", label: "Blog" },
  { id: "contact", href: "/contact", label: "Contact" },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => setIsOpen(false), [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  id={item.id}
                  href={item.href}
                  className={`transition-colors hover:text-gray-600 hover:cursor-pointer ${
                    pathname === item.href
                      ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-light text-gray-900 hover:text-gray-500 transition-colors"
            >
              COREMIND THERAPY
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <span>x</span> : <span>☰</span>}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 px-4">
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    id={item.id}
                    href={item.href}
                    className={`block w-full text-left transition-colors hover:text-gray-800 ${
                      pathname === item.href ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
