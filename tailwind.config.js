/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    colors: {
      themecolor: "#61CD57",
      basecolor: "#4A4A4A",
      text666: "#666666",
      text999: "#999999",
      linecolor: "#F7F7F7", //
    },
    extend: {},
    screens: {
      ss: "100px",
      xsm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
