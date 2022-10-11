/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero" : "url('../img/bg-pattern-3d.svg')"
      }
    },
  },
  plugins: [],
}
