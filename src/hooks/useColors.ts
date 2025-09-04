import { useEffect } from 'react'
import { colors, colorUtils } from '@/lib/colors'

export const useColors = () => {
  useEffect(() => {
    // Generate CSS variables for both themes
    const cssVariables = colorUtils.generateAllThemeCSSVariables(colors)
    
    // Create a style element to inject the variables
    const styleId = 'portfolio-colors'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }
    
    // Update the CSS variables
    styleElement.textContent = cssVariables
    
    // Cleanup function
    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [])

  return colors
}

export default useColors
