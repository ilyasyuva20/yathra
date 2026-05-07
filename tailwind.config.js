/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: '#111111',
          charcoal: '#2c2c2c',
          pearl: '#FAFAFA',
          cream: '#F3F0EC',
          gold: '#B89B72',
          goldHover: '#9A805D'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
