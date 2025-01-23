import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#002B4D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF5C5C",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1a1a1a",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#FF5C5C",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/lovable-uploads/koech.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;