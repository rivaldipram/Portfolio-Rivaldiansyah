/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#8b5cf6",
        dark: "#050816",
        darkSecondary: "#0f172a",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
}