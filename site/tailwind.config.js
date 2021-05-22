const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        "gold-100": "#fbab83",
        "gold-500": "#FA884F",
        "gold-900": "#EC7C48",
      },
      fontFamily: {
        arvo: ["Arvo"],
        cabin: ["Cabin"],
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
