/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#eeeafb',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#0d9488', // Map 400 to EduLift Teal for secondary actions/accents (e.g. Check icons)
          500: '#6366f1',
          600: '#4f46e5', // Map 600 to EduLift Indigo for primary buttons/brand highlights!
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81', // Deep Indigo
          950: '#1e1b4b', // Deepest Brand Navy
        },
        edulift: {
          navy: '#1E1B4B',
          darkslate: '#0F172A',
          indigo: '#4F46E5',
          teal: '#0D9488',
          mutedteal: '#115E59',
          mint: '#F0FDF4',
          gold: '#D97706',
          mutedgold: '#B45309',
          softgold: '#FEF3C7',
          canvas: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
