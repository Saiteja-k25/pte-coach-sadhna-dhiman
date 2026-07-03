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
        // Palette anchored to the LinkedIn banner
        sand: '#EFE3D2',
        ivory: '#FBF5EC',
        tan: '#D9C4A5',
        ink: '#1B1712',
        inkSoft: '#5A4E3F',
        mocha: '#8B6F4E',
        plum: '#5E2F3D',
        border: 'rgba(27, 23, 18, 0.15)',
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
          DEFAULT: '#1B1712',
          foreground: '#FBF5EC'
        },
        secondary: {
          DEFAULT: '#D9C4A5',
          foreground: '#1B1712'
        },
        muted: {
          DEFAULT: '#D9C4A5',
          foreground: '#5A4E3F'
        },
        accent: {
          DEFAULT: '#8B6F4E',
          foreground: '#FBF5EC'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'rgba(27, 23, 18, 0.2)',
        ring: '#1B1712',
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
        'accordion-down': 'accordion-down 0.35s cubic-bezier(0.7, 0, 0.15, 1)',
        'accordion-up': 'accordion-up 0.35s cubic-bezier(0.7, 0, 0.15, 1)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
