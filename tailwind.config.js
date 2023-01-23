/** @type {import('tailwindcss').Config} */

module.exports ={
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "glass":"rgba(42, 46, 206, 0.22)",
        secondary:"#17C964"

      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

