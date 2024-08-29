/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#2978b5",
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
