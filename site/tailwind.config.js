module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.js"],
    options: {
      whitelist: [""],
    },
  },
  theme: {
    extend: {
      colors: {
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
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
};
