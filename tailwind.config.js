/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contactImage:
          'url("https://tshirtstore.centracdn.net/client/dynamic/articles/newsletter_3_2289_7426.jpg")',
      },
      fontFamily: {
        lato: ["M PLUS Rounded 1c", "sans-serif"],
      },
    },
  },
  plugins: [],
};
