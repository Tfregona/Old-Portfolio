const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      'myorange': '#F19820',
      'myblue': '#223e5c',
    },
    extend: {
      fontFamily: {
        title: ['"Secular One"']
      }
    },
  },
  plugins: [],
};
