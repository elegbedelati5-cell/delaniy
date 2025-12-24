/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        jumiaLightYellow: "#ffb900",
        jumiaDeepYellow: "#F68B1E",
      },
    },
  },
  plugins: [],
};
