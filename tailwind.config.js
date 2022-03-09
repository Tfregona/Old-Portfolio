const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      primary: "#161B22",
      second: "#2a3441",
      third: "#212934",
      flash: "#F19820",
    },
    extend: {
      fontFamily: {
        title: ['"Secular One"'],
      },
    },
  },
  plugins: [],
};
