module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    container: {
      maxWidth: "40rem",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
