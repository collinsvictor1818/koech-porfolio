import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme, colors, colorUtils, themeUtils } from '@/lib/colors'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  currentColors: typeof colors.dark
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark')

  // Initialize theme on mount
  useEffect(() => {
    themeUtils.initializeTheme()
    setThemeState(themeUtils.getCurrentTheme())
  }, [])

  // Update CSS variables when theme changes
  useEffect(() => {
    const currentThemeColors = theme === 'dark' ? colors.dark : colors.light
    const cssVariables = colorUtils.generateThemeCSSVariables(currentThemeColors)
    
    // Create or update style element
    const styleId = 'portfolio-theme-colors'
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
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    themeUtils.setTheme(newTheme)
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = themeUtils.toggleTheme()
    setThemeState(newTheme)
  }

  const currentColors = theme === 'dark' ? colors.dark : colors.light

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    currentColors
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
