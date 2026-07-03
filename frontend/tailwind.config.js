/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FDFBF7',
        creamAlt: '#F4EBE1',
        forest: '#1A362D',
        forestSoft: '#234a3e',
        terracotta: '#A45D44',
        moss: '#4A5D56',
        border: 'rgba(26, 54, 45, 0.15)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#1A362D',
          foreground: '#FDFBF7'
        },
        secondary: {
          DEFAULT: '#F4EBE1',
          foreground: '#1A362D'
        },
        muted: {
          DEFAULT: '#F4EBE1',
          foreground: '#4A5D56'
        },
        accent: {
          DEFAULT: '#A45D44',
          foreground: '#FDFBF7'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'rgba(26, 54, 45, 0.2)',
        ring: '#1A362D',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
