"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import ThemeToggle from '@/components/ThemeToggle'

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

  // Center the nav bar using a flex container
  return (
    <div className="fixed top-2 sm:top-4 left-0 w-full flex justify-center z-50 pointer-events-none px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto ${className}`}
      >
        <motion.div
          animate={{
            backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-glass shadow-2xl backdrop-blur-md bg-glass min-w-fit"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center mr-4 sm:mr-8"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="flex items-center space-x-2 text-theme-primary font-bold text-base sm:text-lg tracking-tight hover:text-accent transition-colors duration-200"
            >
              {/* Circular Logo */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-theme-primary border-2 border-accent flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/koech.png" 
                  alt="Koech Logo" 
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <span>{logo}</span>
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
                className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-theme-primary"
                    : "text-theme-secondary hover:text-theme-primary"
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
                    className="absolute inset-0 bg-accent/10 rounded-full border border-accent/20"
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

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 ml-4 sm:ml-8">
            <ThemeToggle className="hidden md:block" />
            
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-theme-primary hover:bg-accent/10 p-1 sm:p-2"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] sm:w-[300px] bg-theme-primary/95 backdrop-blur-xl border-glass text-theme-primary"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-center space-x-2 text-lg sm:text-xl font-bold mb-6">
                    {/* Circular Logo */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-theme-primary border-2 border-accent flex items-center justify-center overflow-hidden">
                      <img 
                        src="/lovable-uploads/koech.png" 
                        alt="Koech Logo" 
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span>{logo}</span>
                  </div>
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "bg-accent/10 text-theme-primary border border-accent/20"
                          : "text-theme-secondary hover:text-theme-primary hover:bg-accent/5"
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
          </div>
        </motion.div>
      </motion.nav>
    </div>
  )
}

export default FloatingNav
