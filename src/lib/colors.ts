// Theme configuration utility for dark/light theme system

export type Theme = 'dark' | 'light'

export interface ThemeColors {
  // Background colors
  bgPrimary: string
  bgSecondary: string
  
  // Text colors
  textPrimary: string
  textSecondary: string
  textMuted: string
  
  // Accent color (same for both themes)
  accent: string
  
  // Glass effects
  glassBg: string
  glassBorder: string
  
  // Squares background
  squaresBg: string
  squaresBorder: string
  squaresHover: string
  
  // Border colors
  border: string
  borderLight: string
}

export interface ColorConfig {
  primaryBgColor: string
  accentColor: string
  dark: ThemeColors
  light: ThemeColors
}

// Default colors (fallback)
const defaultColors: ColorConfig = {
  primaryBgColor: '#010936',
  accentColor: '#ff4940',
  dark: {
    bgPrimary: '#010936',
    bgSecondary: '#003a63',
    textPrimary: '#ffffff',
    textSecondary: '#e2e8f0',
    textMuted: '#94a3b8',
    accent: '#ff4940',
    glassBg: 'rgba(255, 255, 255, 0.1)',
    glassBorder: 'rgba(255, 255, 255, 0.2)',
    squaresBg: '#060606',
    squaresBorder: '#666666',
    squaresHover: '#444444',
    border: '#334155',
    borderLight: '#475569'
  },
  light: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f8fafc',
    textPrimary: '#0f172a',
    textSecondary: '#1e293b',
    textMuted: '#334155',
    accent: '#ff4940',
    glassBg: 'rgba(0, 0, 0, 0.05)',
    glassBorder: 'rgba(0, 0, 0, 0.1)',
    squaresBg: '#f1f5f9',
    squaresBorder: '#64748b',
    squaresHover: '#cbd5e1',
    border: '#e2e8f0',
    borderLight: '#cbd5e1'
  }
}

// Load colors from environment variables
export const colors: ColorConfig = {
  primaryBgColor: import.meta.env.VITE_PRIMARY_BG_COLOR || defaultColors.primaryBgColor,
  accentColor: import.meta.env.VITE_ACCENT_COLOR || defaultColors.accentColor,
  dark: {
    bgPrimary: import.meta.env.VITE_PRIMARY_BG_COLOR || defaultColors.dark.bgPrimary,
    bgSecondary: import.meta.env.VITE_DARK_BG_SECONDARY || defaultColors.dark.bgSecondary,
    textPrimary: import.meta.env.VITE_DARK_TEXT_PRIMARY || defaultColors.dark.textPrimary,
    textSecondary: import.meta.env.VITE_DARK_TEXT_SECONDARY || defaultColors.dark.textSecondary,
    textMuted: import.meta.env.VITE_DARK_TEXT_MUTED || defaultColors.dark.textMuted,
    accent: import.meta.env.VITE_ACCENT_COLOR || defaultColors.dark.accent,
    glassBg: import.meta.env.VITE_GLASS_DARK_BG || defaultColors.dark.glassBg,
    glassBorder: import.meta.env.VITE_GLASS_DARK_BORDER || defaultColors.dark.glassBorder,
    squaresBg: import.meta.env.VITE_SQUARES_DARK_BG || defaultColors.dark.squaresBg,
    squaresBorder: import.meta.env.VITE_SQUARES_DARK_BORDER || defaultColors.dark.squaresBorder,
    squaresHover: import.meta.env.VITE_SQUARES_DARK_HOVER || defaultColors.dark.squaresHover,
    border: import.meta.env.VITE_DARK_BORDER || defaultColors.dark.border,
    borderLight: import.meta.env.VITE_DARK_BORDER_LIGHT || defaultColors.dark.borderLight
  },
  light: {
    bgPrimary: import.meta.env.VITE_LIGHT_BG_PRIMARY || defaultColors.light.bgPrimary,
    bgSecondary: import.meta.env.VITE_LIGHT_BG_SECONDARY || defaultColors.light.bgSecondary,
    textPrimary: import.meta.env.VITE_LIGHT_TEXT_PRIMARY || defaultColors.light.textPrimary,
    textSecondary: import.meta.env.VITE_LIGHT_TEXT_SECONDARY || defaultColors.light.textSecondary,
    textMuted: import.meta.env.VITE_LIGHT_TEXT_MUTED || defaultColors.light.textMuted,
    accent: import.meta.env.VITE_ACCENT_COLOR || defaultColors.light.accent,
    glassBg: import.meta.env.VITE_GLASS_LIGHT_BG || defaultColors.light.glassBg,
    glassBorder: import.meta.env.VITE_GLASS_LIGHT_BORDER || defaultColors.light.glassBorder,
    squaresBg: import.meta.env.VITE_SQUARES_LIGHT_BG || defaultColors.light.squaresBg,
    squaresBorder: import.meta.env.VITE_SQUARES_LIGHT_BORDER || defaultColors.light.squaresBorder,
    squaresHover: import.meta.env.VITE_SQUARES_LIGHT_HOVER || defaultColors.light.squaresHover,
    border: import.meta.env.VITE_LIGHT_BORDER || defaultColors.light.border,
    borderLight: import.meta.env.VITE_LIGHT_BORDER_LIGHT || defaultColors.light.borderLight
  }
}

// Utility functions for color manipulation
export const colorUtils = {
  // Convert hex to RGB
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  },

  // Convert RGB to hex
  rgbToHex: (r: number, g: number, b: number): string => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  },

  // Add opacity to hex color
  hexWithOpacity: (hex: string, opacity: number): string => {
    const rgb = colorUtils.hexToRgb(hex)
    if (!rgb) return hex
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
  },

  // Generate CSS custom properties for a specific theme
  generateThemeCSSVariables: (themeColors: ThemeColors): string => {
    return `
      --color-bg-primary: ${themeColors.bgPrimary};
      --color-bg-secondary: ${themeColors.bgSecondary};
      --color-text-primary: ${themeColors.textPrimary};
      --color-text-secondary: ${themeColors.textSecondary};
      --color-text-muted: ${themeColors.textMuted};
      --color-accent: ${themeColors.accent};
      --color-glass-bg: ${themeColors.glassBg};
      --color-glass-border: ${themeColors.glassBorder};
      --color-squares-bg: ${themeColors.squaresBg};
      --color-squares-border: ${themeColors.squaresBorder};
      --color-squares-hover: ${themeColors.squaresHover};
      --color-border: ${themeColors.border};
      --color-border-light: ${themeColors.borderLight};
    `
  },

  // Generate CSS custom properties for both themes
  generateAllThemeCSSVariables: (colorConfig: ColorConfig): string => {
    return `
      :root {
        --color-primary-bg: ${colorConfig.primaryBgColor};
        --color-accent: ${colorConfig.accentColor};
      }
      
      .dark {
        ${colorUtils.generateThemeCSSVariables(colorConfig.dark)}
      }
      
      .light {
        ${colorUtils.generateThemeCSSVariables(colorConfig.light)}
      }
    `
  }
}

// Theme management utilities
export const themeUtils = {
  // Get current theme from localStorage or default to 'dark'
  getCurrentTheme: (): Theme => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('portfolio-theme') as Theme) || 'dark'
  },

  // Set theme in localStorage and update document class
  setTheme: (theme: Theme): void => {
    if (typeof window === 'undefined') return
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.className = theme
  },

  // Toggle between dark and light theme
  toggleTheme: (): Theme => {
    const currentTheme = themeUtils.getCurrentTheme()
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    themeUtils.setTheme(newTheme)
    return newTheme
  },

  // Initialize theme on app load
  initializeTheme: (): void => {
    if (typeof window === 'undefined') return
    const theme = themeUtils.getCurrentTheme()
    themeUtils.setTheme(theme)
  }
}

export default colors
