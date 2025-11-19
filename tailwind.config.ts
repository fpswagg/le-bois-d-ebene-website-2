import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        ebony: {
          50: "#f5f3f0",
          100: "#e8e4dd",
          200: "#d4cbbf",
          300: "#b8a998",
          400: "#9d8976",
          500: "#87705e",
          600: "#6b5848",
          700: "#5a493b",
          800: "#4c3e33",
          900: "#2d241d",
          950: "#1a1410",
        },
        gold: {
          50: "#fefbf3",
          100: "#fdf6e3",
          200: "#faebc4",
          300: "#f5d99b",
          400: "#efc166",
          500: "#e8a63f",
          600: "#d98a28",
          700: "#b56f21",
          800: "#925820",
          900: "#77491e",
        },
        ivory: {
          50: "#fefdfb",
          100: "#fdfbf7",
          200: "#fbf8ef",
          300: "#f8f4e7",
          400: "#f5f0df",
          500: "#f2ecd7",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 12px rgba(0, 0, 0, 0.15)",
        deep: "0 8px 24px rgba(0, 0, 0, 0.25)",
        gold: "0 4px 16px rgba(232, 166, 63, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

