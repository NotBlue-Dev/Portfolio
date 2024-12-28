module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      drukWide: ["Druk Wide", "cursive"],
      mono: ["monospace"],
    },
    extend: {
      colors: {
        'background-dark': '#120114',
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "photo-spin": "photo-spin 2s 1 linear forwards",
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1.5s linear infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "photo-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        "3xl": "2000px",
        xs: "480px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
