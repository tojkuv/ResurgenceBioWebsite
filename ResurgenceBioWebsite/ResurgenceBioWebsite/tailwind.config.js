/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    relative: true,
    files: [
      '../../**/*.{razor,html}',
    ],
  },
  important: '#main-layout',
  plugins: [
      require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  presets: [
    require(`../../ResurgenceBioWebsite.Shared/Styles/main-theme.js`),
  ],
}