/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nova: ['Nova Square', 'sans-serif'],
        play: ['Playfair Display', 'serif'],
        kanit: ['Kanit', 'sans-serif'],
        revalia: ['Revalia', 'sans-serif'],
        albert: ['Albert Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

