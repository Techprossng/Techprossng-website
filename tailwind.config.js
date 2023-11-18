/* eslint-disable no-undef */
const { fontFamily } = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Craftwork Grotesk', ...fontFamily.sans],
        secondary: ['Mona Sans', ...fontFamily.sans],
      },
      // backgroundImage: {
      //   "team-pattern": "url('./assets/bg_team.png')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
});
