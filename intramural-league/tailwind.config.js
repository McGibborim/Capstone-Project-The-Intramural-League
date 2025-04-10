/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#5F0C1E',
        orange: '#CCBD8E',
        charcoal: '#1F1D2A',
      },
    },
  },
  plugins: [],
}
