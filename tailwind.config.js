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
          dark: "#0F172A",
          muted: "#64748B",
          light: "#EFF6FF",
          accent: "#0D9488",
          hover: "#14B8A6",
        },
      },
    },
  },
  plugins: [],
}
