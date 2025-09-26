/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2F6E6E',
        'primary-yellow': '#FFD633',
        'gray-dark': '#2B2B2B',
        'gray-light': '#F4F4F4',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

