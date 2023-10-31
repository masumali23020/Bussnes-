/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS
        primary: "#437EF7",
        midGreen: "#36B37E",
        textDarkGrey: "#272D37",
        textMidDarkGrey: "#2E343F",
        textLightGrey: "#5F6D7E",
        textLightGrey2: "#A5ACBA",
        textLightGrey3: "#797979",
        textLightBlue: "#B1CCFB",
        sectionLightBlue: "#F8F9FB",
        sectionLightBlue2: "#2B63D9",
        sectionLightBlue3: "#3971E7",
        sectionDarkBlue: "#3B6ED8",
        borderLightGrey: "#EAEBEC",
        borderGrey: "#EAEBF0",
        borderDark: "#2E3545",
        borderDarkThemeGrey: "#5B5B5B",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both 2",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
}