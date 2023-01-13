module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#ADA2FF",
        "light-purple": "#d2ccff",
        "super-light-purple": "#e9e6ff",
        blue: "#C0DEFF",
        "linkedin-blue": "#0073b1",
        peach: "#FFE5F1",
        yellow: "#fff9e5",
        "light-yellow": "#FAF8F1",
        gray: "#606e80",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
