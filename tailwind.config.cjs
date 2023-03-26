/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Comfortaa", "cursive", "sans-serif"],
      },

      colors:{
        background: "#EBDBD3"
      }
    },
  },
  plugins: [],
};
