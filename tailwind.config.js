/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};
