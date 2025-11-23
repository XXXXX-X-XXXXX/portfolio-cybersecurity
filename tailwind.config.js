/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050608",
        card: "#111318",
        primary: "#00d1b2",
        "card-border": "#1a1d25",
        "text-main": "#f4f4f4",
        "text-muted": "#a0a0a0",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
