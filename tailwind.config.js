// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unica: ['"Unica One"', "sans-serif"],
        oxanium: ['"Oxanium"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
