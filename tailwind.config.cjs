/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        rancho: ["Rancho", "cursive"],
        rye: ["Rye", "cursive"],
      },
    },
  },
  plugins: [],
}
