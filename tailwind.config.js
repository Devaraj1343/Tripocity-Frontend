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
          light: " #1f2937",
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
      },
      screens: {
        min1000: "1000px", // ✅ custom breakpoint
      },
      boxShadow: {
        "bottom-only": "0 2px 4px rgba(0, 0, 0, 0.1)", // horizontal, vertical, blur, color
      },
    },
  },
  plugins: [],
};

