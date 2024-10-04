/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'dance': ['Dancing Script', 'cursive',],
      'display': ['Oswald',],
      'fredoka': ["Fredoka", 'sans-serif'],
    },

    extend: {
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite"
      },
      keyframes: {
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}

        },

      },
    },
  },
  plugins: [],
}

