import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { colorThemes, colorUtils } from '@/lib/colors'

interface ColorThemePickerProps {
  className?: string
}

export const ColorThemePicker: React.FC<ColorThemePickerProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('default')

  const applyTheme = (themeName: string) => {
    const theme = colorThemes[themeName as keyof typeof colorThemes]
    if (!theme) return

    // Generate CSS variables for the selected theme
    const cssVariables = colorUtils.generateCSSVariables(theme.colors)
    
    // Update the CSS variables
    const styleId = 'portfolio-colors'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }
    
    styleElement.textContent = `
      :root {
        ${cssVariables}
      }
    `
    
    setCurrentTheme(themeName)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Theme Picker Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-glass rounded-full border border-glass backdrop-blur-sm hover:border-primary-custom transition-all duration-300"
      >
        <Palette className="w-5 h-5 text-primary-custom" />
      </motion.button>

      {/* Theme Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full right-0 mt-2 p-4 bg-glass rounded-2xl border border-glass backdrop-blur-xl shadow-2xl z-50 min-w-[200px]"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-3">Color Themes</h3>
          <div className="space-y-2">
            {Object.entries(colorThemes).map(([key, theme]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => applyTheme(key)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  currentTheme === key
                    ? 'bg-primary-custom/20 border border-primary-custom/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white/20"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <span className="text-sm text-text-primary font-medium">
                    {theme.name}
                  </span>
                </div>
                {currentTheme === key && (
                  <Check className="w-4 h-4 text-primary-custom" />
                )}
              </motion.button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-xs text-text-muted">
              Customize colors via environment variables
            </p>
          </div>
        </motion.div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ColorThemePicker
