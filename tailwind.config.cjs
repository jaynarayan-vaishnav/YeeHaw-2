/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "linear-gradient(to bottom, rgba(77, 43, 53, 0.3), rgba(29, 27, 26, 0.3)), url('/bgimage.jpg')",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        rancho: ["Rancho", "cursive"],
        rye: ["Rye", "cursive"],
      },
    },
  },
  plugins: [],
}
