/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },

      // fontFamily: {
      //   bodyFont: ["Work Sans", "serif"],
      //   titleFont: ["Lora", "serif"],
      // },

      colors: {
        bgColor: "#081621",
        primaryColor: "#ef4a23",
        primaryDark: "#D51E0B",
        secondaryColor: "#3749bb",
        grayColor: "#838383",
        // lightText: "#c4cfde",
        // boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
