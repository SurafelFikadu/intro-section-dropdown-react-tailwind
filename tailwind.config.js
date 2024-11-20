/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almost_white: "hsl(0, 0%, 98%)",
        medium_gray: "hsl(0, 0%, 41%)",
        almost_black: "hsl(0, 0%, 8%)",
      },
      height: {
        "100vh": "100vh"
      },
      width: {
        "1440px": "1440px",
      },
      maxWidth: {
        "1440px": "1440px"
      },
      lefts: {
        "21px": "-20px",
        "41px": "-40px"
      },
      fontSize: {
        "50": "50px",
        "54": "54px",
        "58": "58px",
      }
    },
  },
  plugins: [],
}