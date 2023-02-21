/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueF: "#0D646B",
        blueD: "#16383A",
        blueG: "#404740",
        lBrown: "#B88F73",
        orangeP: "#FFD2B5",
        orangeL: "#ED8F49",
        orangeM: "#E79E22",
        brownM: "#5C2A09",
        brownD: "#2E1612",
        blackB: "#0F1217",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
