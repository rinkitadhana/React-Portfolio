/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "background-shine": "background-shine 3s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        "theme-blue": "#2978b5",
        "nav-dark": "#1A191B",
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
