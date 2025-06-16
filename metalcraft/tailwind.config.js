/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#171717',
          800: '#1F1F1F',
          700: '#1B1B1B',
          600: '#808080'
        },
        accent: {
          900: '#FF622F'
        },
        light: {
          900: '#E6EBF1'
        }
      }
    }
  },
  plugins: []
}

