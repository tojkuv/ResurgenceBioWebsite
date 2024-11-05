/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  content: {
    relative: true,
    files: ["../../**/*.{razor,html}"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  presets: [require(`../../ResurgenceBioWebsite.Shared/Styles/main-theme.js`)],
};
