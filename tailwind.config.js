/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          light: '#FFF2CC',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
        }
      },
    },

    extend: {},
  },
  plugins: [],
}

