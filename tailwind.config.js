/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slateBg: "#eaefea",
        green: "#3cb36e",
      },
      fontFamily: {
        MonoSans: ["Roboto Mono", "monospace"]
      },
      boxShadow: {
        'top-only': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)', // Adjust values as needed
        'cont': '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
      },
    },
  },
  plugins: [],
}
