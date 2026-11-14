/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./platforma/**/*.html",
    "./src/**/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        osi: {
          DEFAULT: '#3DA639',
          dark: '#2F8A2C',
        },
      },
    },
  },
  plugins: [],
}