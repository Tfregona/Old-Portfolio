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
      blue: colors.blue,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      'primary': '#223e5c',
      'second': '#F19820',
      'third': '#305781',
    },
    extend: {
      fontFamily: {
        title: ['"Secular One"']
      }
    },
  },
  plugins: [],
};
