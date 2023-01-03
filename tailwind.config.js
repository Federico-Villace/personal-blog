module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#ADA2FF",
        blue: "#C0DEFF",
        peach: "#FFE5F1",
        yellow: "#FFF8E1",
        "light-yellow": "#FAF8F1",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
