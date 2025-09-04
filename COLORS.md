# 🎨 Color Customization

## Quick Start
1. Copy `env.example` to `.env.local`
2. Edit colors in `.env.local`
3. Restart dev server

## Pre-built Themes
- `cp env.blue .env.local` - Blue theme
- `cp env.green .env.local` - Green theme  
- `cp env.purple .env.local` - Purple theme

## Key Variables
- `VITE_PRIMARY_COLOR` - Main brand color
- `VITE_BACKGROUND_COLOR` - Background color
- `VITE_TEXT_PRIMARY` - Text color
- `VITE_GLASS_BG` - Glass effect background

## Usage in Components
```tsx
import { useColors } from '@/hooks/useColors'

function MyComponent() {
  const colors = useColors()
  return <div style={{ color: colors.primary }}>Content</div>
}
```

## CSS Classes
- `.bg-primary-custom` - Primary background
- `.text-primary-custom` - Primary text
- `.border-primary-custom` - Primary border
