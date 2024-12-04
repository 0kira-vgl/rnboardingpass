/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "GRAY-300": "#D4D4D8",
        "GRAY-400": "#A1A1AA",
        "GRAY-800": "#27272A",
      },
    },
  },
  plugins: [],
};
