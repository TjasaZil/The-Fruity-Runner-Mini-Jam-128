const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans], //imported a font family that we want to use
      },
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      width: {
        "mobile-container-width": "326px",
        "desktop-container-width": "350px",
        "mobile-profile-width": "100px",
      },
      height: {
        "mobile-container-height": "374px",

        "mobile-container-background-height": "140px",
        "mobile-profile-height": "100px",
      },
      backgroundImage: {
        "container-bg": "url('./assets/images/bg-pattern-card.svg')",
        "circle-up-bg": "url('./assets/images/bg-pattern-top.svg')",
        "circle-bottom-bg": "url('./assets/images/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
