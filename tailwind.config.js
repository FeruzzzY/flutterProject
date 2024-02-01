const { colors: defaultColors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "9rem",
      },
      center: true,
    },
    extend: {
      colors: {
        ...defaultColors,
        dark: "#23262F",
        gray: "#E8E9EB",
        dodgerBlue: "#2A85FF",
        grayDark: "#6E7179",
        redLight: "#F8ECEE",
        red: "#CE5A67",
        grayLight: "#fcfcfd",
      },

      boxShadow: {},
      zIndex: {
        9999: "9999",
        999: "999",
      },
      fontSize: {},
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
