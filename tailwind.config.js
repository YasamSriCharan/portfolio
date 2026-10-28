/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#2B2D42",
          muted: "#8D99AE",
          light: "#EDF2F4",
          accent: "#EF233C",
          hover: "#D90429",
        },
      },
    },
  },
  plugins: [],
}
