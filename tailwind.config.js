/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "4px": "4px",
        "9px": "9px",
      },
      borderRadius: {
        "3px": "3px",
      },
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
        // bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Kanit", "serif"],
      },

      fontSize: {
        "section-heading": "clamp(1rem, calc(2vw + 1rem), 2rem)",
        "sub-heading": "clamp(1rem, calc(2vw + 1rem), 1.5rem)",
        "cart-title": "clamp(0.8rem, calc(1.5vw + 0.5rem), 0.9rem)",
      },

      padding: {
        "container-padding": "min(1em, 4%)",
      },

      colors: {
        bgColor: "#081621",
        primaryColor: "#ef4a23",
        primaryDark: "#D51E0B",
        secondaryColor: "#3749bb",
        grayColor: "#838383",
        lightColor: "#666666",
        blueColor: "#3749bb",
        borderColor: "#ECEDEF",
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
