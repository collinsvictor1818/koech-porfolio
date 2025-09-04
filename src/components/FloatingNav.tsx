"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface NavigationItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface FloatingNavProps {
  logo?: string
  navigationItems?: NavigationItem[]
  className?: string
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  logo = "Portfolio",
  navigationItems = [
    { label: "Home", href: "#home", icon: <Home size={16} /> },
    { label: "About", href: "#about", icon: <User size={16} /> },
    { label: "Projects", href: "#projects", icon: <Code size={16} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={16} /> }
  ],
  className = ""
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionChange = () => {
      const sections = navigationItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [navigationItems])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
      >
        <motion.div
          animate={{
            backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
            backgroundColor: isScrolled 
              ? "rgba(0, 0, 0, 0.8)" 
              : "rgba(0, 0, 0, 0.6)"
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between px-6 py-3 rounded-full border border-white/10 shadow-2xl backdrop-blur-md bg-black/60 min-w-[320px] max-w-4xl"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="text-white font-bold text-lg tracking-tight hover:text-primary transition-colors duration-200"
            >
              {logo}
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-black/95 backdrop-blur-xl border-white/10 text-white"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-xl font-bold mb-6 text-center">
                    {logo}
                  </div>
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "bg-white/10 text-white border border-white/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.icon}
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}

export default FloatingNav
