/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#1C1C28',
        'initial': '#E6006E',
        'mid': '#ED5A4B',
        'final': '#F4B628',
        'cards': '#28293D',
        'descriptions': '#C7C9D9'
      },
      fontFamily: {
        sans: ['var(--font-sf-pro)']
      }
    },
  },
  plugins: [],
}