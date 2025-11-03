/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "times-new-roman": ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
