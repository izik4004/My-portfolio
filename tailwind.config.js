const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'cyan': colors.cyan,
        'emerald': colors.emerald,
        'teal': colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
