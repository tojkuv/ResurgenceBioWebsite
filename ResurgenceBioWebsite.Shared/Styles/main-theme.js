const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6e7eb",
          100: "#ceced6",
          200: "#9d9dae",
          300: "#2f375a", // used as button hover background and section divisor color
          400: "#202641", // used as button background
          500: "#090b34", // used as website background
          600: "#030530", // used as darker background
          700: "#05071f",
          800: "#040415",
          900: "#02020a",
        },
        secondary: {
          50: "#e9f5f5",
          100: "#d3eaeb",
          200: "#a6d6d6",
          300: "#3cf5f7", // used as button hover background
          400: "#4dadad",
          500: "#219899", // used as link underline hover color and svg content color
          600: "#167070", // used as button background
          700: "#020426",
          800: "#020322",
          900: "#071e1f",
        },
        warning: {
          DEFAULT: colors.yellow[500],
          50: colors.yellow[50],
          100: colors.yellow[100],
          200: colors.yellow[200],
          300: colors.yellow[300],
          400: colors.yellow[400],
          500: colors.yellow[500],
          600: colors.yellow[600],
          700: colors.yellow[700],
          800: colors.yellow[800],
          900: colors.yellow[900],
          950: colors.yellow[950],
        },
        danger: {
          DEFAULT: colors.rose[500],
          50: colors.rose[50],
          100: colors.rose[100],
          200: colors.rose[200],
          300: colors.rose[300],
          400: colors.rose[400],
          500: colors.rose[500],
          600: colors.rose[600],
          700: colors.rose[700],
          800: colors.rose[800],
          900: colors.rose[900],
          950: colors.rose[950],
        },
        success: {
          DEFAULT: colors.emerald[500],
          50: colors.emerald[50],
          100: colors.emerald[100],
          200: colors.emerald[200],
          300: colors.emerald[300],
          400: colors.emerald[400],
          500: colors.emerald[500],
          600: colors.emerald[600],
          700: colors.emerald[700],
          800: colors.emerald[800],
          900: colors.emerald[900],
          950: colors.emerald[950],
        },
        info: {
          DEFAULT: colors.sky[500],
          50: colors.sky[50],
          100: colors.sky[100],
          200: colors.sky[200],
          300: colors.sky[300],
          400: colors.sky[400],
          500: colors.sky[500],
          600: colors.sky[600],
          700: colors.sky[700],
          800: colors.sky[800],
          900: colors.sky[900],
          950: colors.sky[950],
        },
      },
    },
  },
  safelist: [],
};
