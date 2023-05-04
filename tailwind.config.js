/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "violet-back": "hsl(252, 100%, 67%)",
        "bleu-back": "hsl(241, 81%, 54%)",
        "violet-circle": "hsla(256, 72%, 46%, 1)",
        "bleu-circle": "hsla(241, 72%, 46%, 0)",
        "Light-red": "hsl(0, 100%, 67%)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
