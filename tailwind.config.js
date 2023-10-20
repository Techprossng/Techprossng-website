/* eslint-disable no-undef */
const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Craftwork Grotesk', ...fontFamily.sans],
        secondary: ['Mona Sans', ...fontFamily.serif],
      },
      // backgroundImage: {
      //   "team-pattern": "url('./assets/bg_team.png')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
};
