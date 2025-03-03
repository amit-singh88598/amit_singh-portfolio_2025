/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For App Router (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
        accent: "#F59E0B",
        background: "#F3F4F6",
        text: {
          light: "#9CA3AF",
          DEFAULT: "#374151",
          dark: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
