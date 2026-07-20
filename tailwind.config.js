/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood-brown': '#2A2118',
        'wood-blue': '#3B82F6',
        'turf-green': '#14532D',
        'turf-grass': '#22C55E',
        'turf-yellow': '#FACC15',
        'whatsapp': '#25D366',
      },
    },
  },
  plugins: [],
}
