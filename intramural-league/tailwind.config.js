/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        maroon:  "#5F0C1E",
        ivory:   "#f2ebd0",
        charcoal:"#1F1D2A",
        tan:     "#CCBD8E",
        text:    "#463700",
      },
    },
  },
  plugins: [],
}
