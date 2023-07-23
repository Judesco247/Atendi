/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        color0: "#230871",
        color1: "#191D48",
        color2: "#83859C",
        color3: "#B2B1BB",
        color4: "#6F6B79",
        color5: "#E0E0E0",
        color6: "#32365C",
        color7: "#F6F6F6",
        color8: "#252851",
        color9: "#150545",
        color10: "#3D3D3D",
        color11: "#626262",
        color12: "#2308701A",
        background: "#EC661D",
        white: "#ffffff",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        kollektif:["Kollektif"],
        // poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};