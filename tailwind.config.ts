
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
      padding: "1.5rem",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#EDF2FC",
          200: "#D8E5F9",
          300: "#B4CBF2",
          400: "#6A9AE2",
          500: "#2C7BE5",
          600: "#1A68D1",
          700: "#1450A3",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "#00D27A",
          100: "#CCF6E4",
          200: "#85EBBC",
          300: "#33D896",
          400: "#00C974",
          500: "#00D27A",
          600: "#00AB62",
          700: "#00864A",
        },
        warning: {
          DEFAULT: "#F5803E",
          100: "#FEECDC",
          200: "#FCD5B5",
          300: "#FAB380",
          400: "#F79056",
          500: "#F5803E",
          600: "#DA662F",
          700: "#A03E15",
        },
        danger: {
          DEFAULT: "#E63757",
          100: "#FADBE2",
          200: "#F5A3B9",
          300: "#F06E8E",
          400: "#EB4771",
          500: "#E63757",
          600: "#CF2645",
          700: "#A11D35",
        },
        info: {
          DEFAULT: "#27BCFD",
          100: "#D3F1FF",
          200: "#A6E4FF",
          300: "#78D3FF",
          400: "#4BC2FE",
          500: "#27BCFD",
          600: "#09A1E3",
          700: "#0178AB",
        },
        "light-gray": {
          100: "#F9FAFD",
          200: "#F4F6FB",
          300: "#E3E6ED",
          400: "#D0D4DF",
          500: "#B5BCC9",
          600: "#9DA6BA",
          700: "#748194",
          800: "#5E6E82",
          900: "#344050",
          1000: "#232E3C",
          1100: "#0B1727",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      boxShadow: {
        'card': '0 7px 14px 0 rgba(59, 65, 94, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)',
        'notification': '0 0.5rem 1.5rem rgba(22, 28, 45, 0.1)'
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
        sans: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
