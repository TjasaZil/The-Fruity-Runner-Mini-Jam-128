/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-red":"hsl(354, 100%, 66%);",
        "blue":"hsl(223, 87%, 63%)",
        "pale-blue":"hsl(223, 100%, 88%)",
        "gray":"hsl(0, 0%, 59%)",
        "very-dark-blue":"hsl(209, 33%, 12%)",
        "thin":"300",
        "medium":"600",
        "bold":"700",
      },
      height:{
        "56px":"56px",
      },
      width:{
        "421px": "431px",
        "200px": "200px",
        "637px":"637px",
        "640px":"640px",

      },
      
    },
  },
  plugins: [],
}
