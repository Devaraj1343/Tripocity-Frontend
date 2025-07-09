/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        text: {
          dark: "#ffffff",
          light: "#1f2937",
        },
        bg: {
          dark: "#1f2937",
          light: "#ffffff",
        },
      },
      fontFamily: {
        rouge: ["Rouge Script", "sans-serif"],
        math: ["Libertinus Math", "serif"],
        roboto: ["Roboto", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      screens: {
        min1000: "1000px",
      },
      boxShadow: {
        "bottom-only": "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out forwards",
        slideIn: "slide-in 0.3s ease-out forwards",
        slideOut: "slide-out 0.3s ease-in forwards",
      },
      fontSize: {
        fluid: "clamp(14px, 1.2vw, 18px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
