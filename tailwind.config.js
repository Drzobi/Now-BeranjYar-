/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paddy: {
          50: '#f2fbf4',
          100: '#e1f6e6',
          200: '#c5ebd1',
          300: '#99d9b0',
          400: '#64be87',
          500: '#3fa366',
          600: '#2e844f',
          700: '#266941',
          800: '#225436',
          900: '#1e452e',
        },
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
