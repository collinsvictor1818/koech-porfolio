# 🌓 Dark/Light Theme System

## Overview
The portfolio now supports a proper dark/light theme system with environment-variable-based color customization.

## 🎨 Theme Colors

### Environment Variables
- `VITE_PRIMARY_BG_COLOR` - Primary background color (dark theme)
- `VITE_ACCENT_COLOR` - Accent color (same for both themes)

### Dark Theme
- Background: Dark blue (`#010936`)
- Text: White/light gray
- Accent: Orange (`#ff4940`)
- Squares: Dark background with subtle borders

### Light Theme  
- Background: White (`#ffffff`)
- Text: Dark gray/black
- Accent: Orange (`#ff4940`) 
- Squares: Light background with subtle borders

## 🚀 Usage

### Theme Toggle
Click the sun/moon icon in the navigation to switch between themes.

### Custom Colors
Edit `.env.local`:
```env
VITE_PRIMARY_BG_COLOR=#your-dark-color
VITE_ACCENT_COLOR=#your-accent-color
```

### CSS Classes
- `.bg-theme-primary` - Theme background
- `.text-theme-primary` - Theme text
- `.text-accent` - Accent color
- `.bg-accent` - Accent background

## 🔧 Components

### ThemeProvider
Wraps the app and provides theme context.

### ThemeToggle
Button component for switching themes.

### useTheme Hook
Access current theme and toggle function.

## 📱 Features
- ✅ Persistent theme selection (localStorage)
- ✅ Smooth transitions
- ✅ Environment-based customization
- ✅ Animated squares adapt to theme
- ✅ All components theme-aware
